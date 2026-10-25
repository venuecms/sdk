# The Official Venue Next.js SDK

This is a work in progress and is heavily in flux until we launch 1.0 in February.

### Installation
`npm install @venuecms/sdk-next`

### Requirements

Next 16 with cache components enabled. The reads are built on `"use cache"`,
which is a build error without the flag:

```js
// next.config.js
module.exports = { cacheComponents: true };
```

### Cache invalidation

Reads are cached per siteKey and tagged, so a publish hook can purge them:

```ts
import { venueCacheTag } from "@venuecms/sdk-next";
import { revalidateTag } from "next/cache";

revalidateTag(venueCacheTag.record(siteKey, "news", slug));
revalidateTag(venueCacheTag.collection(siteKey, "news"));
```

### SDK Documentation
See documentation at [https://docs.venuecms.com/developers](https://docs.venuecms.com/developers)
