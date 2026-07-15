[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvent()

```ts
function getEvent(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: Event;
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:51](https://github.com/venuecms/sdk/blob/6af46ae3b5b61e0d4cb381a0141c00dccc61886c/packages/sdk-next/src/lib/api/index.ts#L51)

Retrieve data for a single event (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`Event`](../type-aliases/Event.md);
  `error`: `undefined`;
 \} & `object`\>
