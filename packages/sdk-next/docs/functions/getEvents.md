[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvents()

```ts
function getEvents(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: {
     records: Event[];
    };
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/main.ts:58](https://github.com/venuecms/sdk/blob/93f6bf3ae5c71ab7e4dd72baca4ddff927ddbc9f/packages/sdk-next/src/main.ts#L58)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `number`; `legacyId`: `string`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `upcoming`: `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.gt`? | `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.upcoming`? | `boolean` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: \{
     `records`: [`Event`](../type-aliases/Event.md)[];
    \};
  `error`: `undefined`;
 \} & `object`\>
