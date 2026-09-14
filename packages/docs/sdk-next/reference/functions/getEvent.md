[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvent()

```ts
function getEvent(params): Promise<{
  data: undefined | Event;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:58](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L58)

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
