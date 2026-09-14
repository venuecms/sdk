[**@venuecms/sdk-next**](../Index.md)

***

# Variable: venueCacheTag

```ts
const venueCacheTag: object;
```

Defined in: [packages/sdk-next/src/lib/api/tags.ts:24](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/tags.ts#L24)

Cache tags attached by this package's cached reads. Pass these to
`revalidateTag` to purge on publish.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="collection"></a> `collection` | (`siteKey`, `collection`) => `string` | [packages/sdk-next/src/lib/api/tags.ts:27](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/tags.ts#L27) |
| <a id="record"></a> `record` | (`siteKey`, `collection`, `slug`) => `string` | [packages/sdk-next/src/lib/api/tags.ts:30](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/tags.ts#L30) |
| <a id="site"></a> `site` | (`siteKey`) => `string` | [packages/sdk-next/src/lib/api/tags.ts:25](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/tags.ts#L25) |

## Example

```ts
revalidateTag(venueCacheTag.record(siteKey, "news", slug));
revalidateTag(venueCacheTag.collection(siteKey, "news"));
```
