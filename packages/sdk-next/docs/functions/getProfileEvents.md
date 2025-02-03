[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [sdk/dist/index.d.mts:504](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L504)

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
