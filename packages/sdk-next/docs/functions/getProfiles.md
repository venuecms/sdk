[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfiles()

```ts
function getProfiles(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: {
     count: number;
     records: Profile[];
    };
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/main.ts:139](https://github.com/venuecms/sdk/blob/827e1eaa472dae7093291e9dcf3855760c75d0d4/packages/sdk-next/src/main.ts#L139)

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
  `data`: \{
     `count`: `number`;
     `records`: [`Profile`](../type-aliases/Profile.md)[];
    \};
  `error`: `undefined`;
 \} & `object`\>
