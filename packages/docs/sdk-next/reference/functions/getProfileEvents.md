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

Defined in: [packages/sdk-next/src/lib/api/index.ts:111](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L111)

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
