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

Defined in: [packages/sdk/src/main.ts:213](https://github.com/venuecms/sdk/blob/64236d3fd2db2f6954151ffae2092310ae729518/packages/sdk/src/main.ts#L213)

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
