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

*  ```
 *  import { getEvent } from "@venuecms/sdk";
 *
 * const { data: event } = await getEvent({ slug });
 * const { location, artists, localizedContent } = event;
 * ```

## Defined in

[src/createClient.ts:59](https://github.com/venuecms/sdk/blob/250a68fd5effa2aabc6cc0b2d7bf38c50df6024f/src/createClient.ts#L59)
