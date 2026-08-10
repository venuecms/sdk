/**
 * Asserts the published tarball carries no test material.
 *
 * Two separate things could put it there, and neither shows up in a passing
 * test run. A test file could be *shipped* — `files` widens, or a helper lands
 * somewhere `.npmignore` does not cover — and a test file could be *bundled*,
 * inlined into a chunk because something in `src` imported it and tsup's entry
 * exclusions only keep tests from being entry points, not from being pulled in
 * as dependencies of one. The first is checked against what npm would actually
 * pack, the second against the source maps, which name every module that went
 * into a chunk whatever its own filename was.
 *
 * Asked of `npm pack` rather than of `dist/` so the answer accounts for `files`
 * and `.npmignore` together, the same way the registry will.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;
const DIST = join(ROOT, "dist");

/**
 * What a test file looks like, by path.
 *
 * Deliberately wider than the conventions this package currently uses: the
 * point of the check is the file nobody thought about, and `.spec.` or a
 * `__tests__/` directory arriving with a new contributor is exactly that.
 */
const TEST_PATH =
  /(^|\/)(__tests__|__mocks__|tests?|mocks|fixtures)\/|\.(test|spec)\.[cm]?[jt]sx?$|(^|\/)(vitest|jest)\.config\./i;

const problems = [];

const packed = JSON.parse(
  execFileSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }),
);

const shipped = packed[0].files.map((file) => file.path);

for (const path of shipped.filter((path) => TEST_PATH.test(path))) {
  problems.push(`${path} would be published`);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

let scanned = 0;

/**
 * How many maps actually name an original source.
 *
 * Not every map does: a re-export shim's map lists only the emitted file, and
 * an entry that is all re-exports carries no `sources` at all. Those are
 * counted as scanned but they rule nothing out, so counting only them would
 * report coverage this check does not have.
 */
let traced = 0;

for (const path of walk(DIST)) {
  if (!path.endsWith(".map")) {
    continue;
  }

  scanned++;

  const { sources } = JSON.parse(readFileSync(path, "utf8"));

  if ((sources ?? []).some((source) => /(^|\/)src\//.test(source))) {
    traced++;
  }

  const tests = (sources ?? []).filter((source) => TEST_PATH.test(source));

  if (tests.length) {
    problems.push(
      `${path.slice(DIST.length + 1)} was built from ${tests.join(", ")}`,
    );
  }
}

// The source maps are the only record of what went *into* a chunk, so without
// them the half of this check that catches a bundled test is not passing — it is
// not running. Turning `sourcemap` off in tsup.config.ts is all it would take,
// and the check would go on printing OK.
if (scanned === 0) {
  problems.push(
    "no source maps were found in dist/, so nothing checked what the chunks " +
      "were built from",
  );
} else if (traced === 0) {
  problems.push(
    "no source map named a file under src/, so the maps are present but " +
      "name nothing this could have caught a test in",
  );
}

if (problems.length) {
  console.error("Package check failed:");
  problems.forEach((problem) => console.error(`  - ${problem}`));
  console.error(
    "\nTests belong to the repository, not to what consumers install.",
  );
  process.exit(1);
}

console.log(
  `Package OK: ${shipped.length} files, none of them tests; ` +
    `${traced} of ${scanned} source maps trace back to src/, and none of ` +
    `them names a test.`,
);
