[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getEvent

# Function: getEvent()

> **getEvent**(`params`): `Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`Event`](../type-aliases/Event.md); `error`: `undefined`; \} & `object`\>

## Parameters

### params

`Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\>

## Returns

`Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`Event`](../type-aliases/Event.md); `error`: `undefined`; \} & `object`\>

## Example

Retrieving data for a single event using the slug
```typescript
import { getEvent } from "@venuecms/sdk";

const { data: event } = await getEvent({ slug });
const { localizedContent, location, artists } = event;
```

## Defined in

[src/createClient.ts:60](https://github.com/venuecms/sdk/blob/7823693df03580df710c62ba3b43e869f9979148/src/createClient.ts#L60)
