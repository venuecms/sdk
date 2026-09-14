[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfileEvents()

```ts
function getProfileEvents(params): Promise<{
  data:   | undefined
     | GetProfileEventsResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:110](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L110)

Get a listing of events for a profile (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> & `object` |

## Returns

`Promise`\<\{
  `data`:   \| `undefined`
     \| [`GetProfileEventsResponse`](../type-aliases/GetProfileEventsResponse.md);
  `error`: `unknown`;
 \}\>
