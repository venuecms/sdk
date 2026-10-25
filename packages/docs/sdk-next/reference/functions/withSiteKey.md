[**@venuecms/sdk-next**](../Index.md)

***

# Function: withSiteKey()

```ts
function withSiteKey<T>(key, fn): T
```

Defined in: [packages/sdk/dist/index.d.mts:4307](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk/dist/index.d.mts#L4307)

Runs `fn` against an explicit siteKey, restoring the configured one after.

[setConfig](setConfig.md) writes a module-level siteKey, so in a process serving more
than one site — one Next server behind several domains — the key a read uses
is whichever site configured itself most recently, not the one the request
belongs to. A caller that already knows which site it is reading for passes
it here instead of trusting that global.

Safe despite the shared variable because the swap spans no await: every read
below puts the siteKey into its request synchronously and `fn` returns the
pending promise, so nothing else can run between the assignment and the read.
That also means `fn` must not await before it calls a read — pass the read
itself, not an async wrapper around it.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `fn` | () => `T` |

## Returns

`T`

## Example

```typescript
const site = await withSiteKey("my-site", () => getSite());
```
