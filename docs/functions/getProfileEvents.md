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

### params

`Omit`\<\{
  `siteKey`: `string`;
  `slug`: `string`;
 \}, `"siteKey"`\> & `object`

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

[src/main.ts:140](https://github.com/venuecms/sdk/blob/df9684e4c8d8b9ec64f5682904234454e23baf21/src/main.ts#L140)
