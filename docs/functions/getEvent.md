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
 import { getEvent } from "@venuecms/sdk";

 const { data: event } = await getEvent({ slug });
 const { location, artists, localizedContent } = event;
 ```

## Defined in

[src/createClient.ts:59](https://github.com/venuecms/sdk/blob/a67bd36579ec58f05616b697172009f8707ee8a7/src/createClient.ts#L59)
