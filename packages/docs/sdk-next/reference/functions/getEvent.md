[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvent()

```ts
function getEvent(params): Promise<{
  data: undefined | Event;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:60](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L60)

Retrieve data for a single event (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`Event`](../type-aliases/Event.md);
  `error`: `unknown`;
 \}\>
