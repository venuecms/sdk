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
  data: {
     count: number;
     records: Event[];
    };
  error: undefined;
} & object>
```

Defined in: packages/sdk-next/src/main.ts:165

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
  `data`: \{
     `count`: `number`;
     `records`: [`Event`](../type-aliases/Event.md)[];
    \};
  `error`: `undefined`;
 \} & `object`\>
