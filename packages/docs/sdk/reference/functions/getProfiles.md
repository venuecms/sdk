[**@venuecms/sdk**](../Index.md)

***

# Function: getProfiles()

```ts
function getProfiles(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfilesResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:161](https://github.com/venuecms/sdk/blob/fbf02bcc9fd4a34da75d81536c54bdc995edf6c4/packages/sdk/src/main.ts#L161)

Get a list of profiles

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; `type`: `"member"`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.type`? | `"member"` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProfilesResponse`](../type-aliases/GetProfilesResponse.md);
  `error`: `undefined`;
 \} & `object`\>
