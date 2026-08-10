/**
 * Asserts the RSC directives landed on the right files, and only those.
 *
 * A "use client" or "use server" that escapes its own module is not a build
 * warning — it silently redefines what the whole barrel is. The bundler put
 * both on `dist/index.js` once, which declared every export of the package
 * a server action; nothing in the test suite could have seen it, because the
 * damage exists only in the emitted output. Hence a check on the output.
 *
 * "use server" is not on the allowed list at all: this package ships no server
 * actions, by decision. An action is a public HTTP endpoint whose arguments the
 * caller supplies, and one shipped from a published SDK is an endpoint every
 * consumer mounts without having written it. So the assertion here is not "the
 * actions are the expected ones" but "there are none", and a directive that
 * appears anywhere in the build — an entry, or a chunk esbuild's splitting
 * invented — fails it.
 *
 * The prologue scan covers the ESM build, since CJS cannot carry a directive
 * prologue: esbuild emits its own `"use strict";Object.defineProperty(...)`
 * first, after which a directive is just an expression statement. The whole-file
 * scan for "use server" covers both, because there the point is not whether the
 * directive is live in that format — it is that the source it came from should
 * not exist.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

/** Which modules are allowed to be client modules. */
const EXPECTED = {
  "use client": [
    "components/EmbedResize/index.mjs",
    "components/VenueProvider/index.mjs",
    "components/utils/ErrorBoundary/index.mjs",
  ],
  "use server": [],
};

const walk = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

/**
 * Every directive in a module's prologue, not just the first.
 *
 * The plugin genuinely emits more than one — a client module comes out
 * `"use client";\n\n"use client";import…`, the directive both hoisted and
 * preserved. Reading only the first is what would let the regression this file
 * exists to catch through: a chunk onto which esbuild hoisted `"use client"` and
 * `"use server"` together would be filed as client-only, and the module that
 * needed reporting would be the one skipped.
 */
const leading = (source) => {
  const directives = new Set();
  const prologue = /^\s*(["'])use (client|server)\1\s*;?/;

  let rest = source;
  let match = rest.match(prologue);

  while (match) {
    directives.add(`use ${match[2]}`);
    rest = rest.slice(match[0].length);
    match = rest.match(prologue);
  }

  return [...directives];
};

const found = { "use client": [], "use server": [] };
const problems = [];

for (const path of walk(DIST)) {
  const relative = path.slice(DIST.length);

  if (!path.endsWith(".mjs") && !path.endsWith(".js")) {
    continue;
  }

  const source = readFileSync(path, "utf8");

  // Anywhere in the file, not only the prologue. A "use server" that esbuild
  // moved off the top of a module is still a "use server" in the source it was
  // built from, and this package is meant to have none — so the string is the
  // thing being asserted absent, in whichever format it lands in. esbuild drops
  // ordinary comments, so a prose mention cannot trip this.
  if (/(["'])use server\1/.test(source)) {
    problems.push(`${relative} carries a "use server"`);
  }

  if (!path.endsWith(".mjs")) {
    continue;
  }

  // Chunks are named by content hash, so they are checked by what they hold
  // rather than listed by name. An entry with no directive whose chunk has one
  // is correct — that is what splitting is for.
  if (relative.startsWith("chunk-")) {
    continue;
  }

  for (const directive of leading(source)) {
    found[directive].push(relative);
  }
}

for (const [directive, expected] of Object.entries(EXPECTED)) {
  const actual = found[directive].sort();
  const missing = expected.filter((file) => !actual.includes(file));
  const unexpected = actual.filter((file) => !expected.includes(file));

  for (const file of missing) {
    problems.push(`${file} lost its "${directive}"`);
  }
  for (const file of unexpected) {
    problems.push(`${file} gained a "${directive}" it should not have`);
  }
}

if (problems.length) {
  console.error("Directive check failed:");
  problems.forEach((problem) => console.error(`  - ${problem}`));
  console.error(
    '\nThis package ships no server actions, and a barrel marked "use server" ' +
      "publishes every export as one.",
  );
  process.exit(1);
}

console.log(
  `Directives OK: ${EXPECTED["use client"].length} client modules, no server actions.`,
);
