[**@venuecms/sdk**](../Index.md)

***

# Function: getProfileEvents()

```ts
function getProfileEvents(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfileEventsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:164](https://github.com/venuecms/sdk/blob/dbe1bd3b5606b46905e3e9cba86e4c1f6af6def7/packages/sdk/src/main.ts#L164)

Get a listing of events for a profile

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> & `object` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProfileEventsResponse`](../type-aliases/GetProfileEventsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
