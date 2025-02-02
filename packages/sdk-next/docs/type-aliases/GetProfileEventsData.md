[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: GetProfileEventsData

```ts
type GetProfileEventsData = object;
```

Defined in: packages/sdk-next/src/client/types.gen.ts:397

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="body"></a> `body`? | `never` | packages/sdk-next/src/client/types.gen.ts:398 |
| <a id="path"></a> `path` | `object` | packages/sdk-next/src/client/types.gen.ts:399 |
| `path.siteKey` | `string` | packages/sdk-next/src/client/types.gen.ts:400 |
| `path.slug` | `string` | packages/sdk-next/src/client/types.gen.ts:401 |
| <a id="query"></a> `query`? | `object` | packages/sdk-next/src/client/types.gen.ts:403 |
| `query.dir`? | `"asc"` \| `"desc"` | packages/sdk-next/src/client/types.gen.ts:407 |
| `query.featured`? | `boolean` \| `null` | packages/sdk-next/src/client/types.gen.ts:408 |
| `query.gt`? | `number` \| `null` | packages/sdk-next/src/client/types.gen.ts:411 |
| `query.legacyId`? | `string` | packages/sdk-next/src/client/types.gen.ts:412 |
| `query.limit`? | `number` \| `null` | packages/sdk-next/src/client/types.gen.ts:404 |
| `query.lt`? | `number` \| `null` | packages/sdk-next/src/client/types.gen.ts:410 |
| `query.orderBy`? | `string` | packages/sdk-next/src/client/types.gen.ts:406 |
| `query.page`? | `number` \| `null` | packages/sdk-next/src/client/types.gen.ts:405 |
| `query.upcoming`? | `boolean` \| `null` | packages/sdk-next/src/client/types.gen.ts:409 |
| <a id="url"></a> `url` | `"/api/v2/{siteKey}/public/profiles/{slug}/events"` | packages/sdk-next/src/client/types.gen.ts:414 |
