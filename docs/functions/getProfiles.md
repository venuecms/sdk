[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getProfiles

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

## Defined in

[src/main.ts:135](https://github.com/venuecms/sdk/blob/535f6cc6bb8e343eb77f7a779e895c729df808ed/src/main.ts#L135)
