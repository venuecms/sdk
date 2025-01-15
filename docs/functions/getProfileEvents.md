[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getProfileEvents

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

## Defined in

[src/main.ts:162](https://github.com/venuecms/sdk/blob/535f6cc6bb8e343eb77f7a779e895c729df808ed/src/main.ts#L162)
