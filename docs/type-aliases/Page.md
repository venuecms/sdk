[**@venuecms/sdk**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `date`? | `string` \| `null` | [src/client/types.gen.ts:77](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L77) |
| `featured` | `boolean` | [src/client/types.gen.ts:75](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L75) |
| `featuredExpiration`? | `string` \| `null` | [src/client/types.gen.ts:76](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L76) |
| `fullPath`? | `string` \| `null` | [src/client/types.gen.ts:102](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L102) |
| `id` | `string` | [src/client/types.gen.ts:72](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L72) |
| `image`? | [`MediaItem`](MediaItem.md) | [src/client/types.gen.ts:80](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L80) |
| `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [src/client/types.gen.ts:115](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L115) |
| `order` | `number` | [src/client/types.gen.ts:73](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L73) |
| `parent`? | `object` | [src/client/types.gen.ts:81](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L81) |
| `parent.createdAt` | `string` | [src/client/types.gen.ts:84](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L84) |
| `parent.date`? | `string` \| `null` | [src/client/types.gen.ts:97](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L97) |
| `parent.dirty` | `boolean` | [src/client/types.gen.ts:91](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L91) |
| `parent.featured` | `boolean` | [src/client/types.gen.ts:95](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L95) |
| `parent.featuredExpiration`? | `string` \| `null` | [src/client/types.gen.ts:96](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L96) |
| `parent.id` | `string` | [src/client/types.gen.ts:82](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L82) |
| `parent.imageId`? | `string` \| `null` | [src/client/types.gen.ts:98](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L98) |
| `parent.order` | `number` | [src/client/types.gen.ts:92](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L92) |
| `parent.parentId`? | `string` \| `null` | [src/client/types.gen.ts:100](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L100) |
| `parent.publishedId`? | `string` \| `null` | [src/client/types.gen.ts:90](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L90) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [src/client/types.gen.ts:88](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L88) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [src/client/types.gen.ts:86](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L86) |
| `parent.revisionId`? | `number` \| `null` | [src/client/types.gen.ts:87](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L87) |
| `parent.siteId` | `string` | [src/client/types.gen.ts:83](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L83) |
| `parent.slug` | `string` | [src/client/types.gen.ts:94](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L94) |
| `parent.source`? | `string` \| `null` | [src/client/types.gen.ts:89](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L89) |
| `parent.updatedAt` | `string` | [src/client/types.gen.ts:85](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L85) |
| `parent.userId`? | `string` \| `null` | [src/client/types.gen.ts:99](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L99) |
| `parent.visible` | `boolean` | [src/client/types.gen.ts:93](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L93) |
| `parentId`? | `string` \| `null` | [src/client/types.gen.ts:78](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L78) |
| `roles` | `object`[] | [src/client/types.gen.ts:103](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L103) |
| `site` | [`Site`](Site.md) | [src/client/types.gen.ts:79](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L79) |
| `slug` | `string` | [src/client/types.gen.ts:74](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L74) |

## Defined in

[src/client/types.gen.ts:71](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/client/types.gen.ts#L71)
