[**@venuecms/sdk**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

Defined in: [packages/sdk/src/client/types.gen.ts:76](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L76)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="artists"></a> `artists`? | `object`[] | [packages/sdk/src/client/types.gen.ts:121](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L121) |
| <a id="date"></a> `date`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:82](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L82) |
| <a id="featured"></a> `featured` | `boolean` | [packages/sdk/src/client/types.gen.ts:80](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L80) |
| <a id="featuredexpiration"></a> `featuredExpiration`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:81](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L81) |
| <a id="fullpath"></a> `fullPath`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:107](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L107) |
| <a id="id"></a> `id` | `string` | [packages/sdk/src/client/types.gen.ts:77](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L77) |
| <a id="image"></a> `image`? | [`MediaItem`](MediaItem.md) | [packages/sdk/src/client/types.gen.ts:85](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L85) |
| <a id="localizedcontent"></a> `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [packages/sdk/src/client/types.gen.ts:120](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L120) |
| <a id="order"></a> `order` | `number` | [packages/sdk/src/client/types.gen.ts:78](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L78) |
| <a id="parent"></a> `parent`? | `object` | [packages/sdk/src/client/types.gen.ts:86](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L86) |
| `parent.createdAt` | `string` | [packages/sdk/src/client/types.gen.ts:89](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L89) |
| `parent.date`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:102](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L102) |
| `parent.dirty` | `boolean` | [packages/sdk/src/client/types.gen.ts:96](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L96) |
| `parent.featured` | `boolean` | [packages/sdk/src/client/types.gen.ts:100](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L100) |
| `parent.featuredExpiration`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:101](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L101) |
| `parent.id` | `string` | [packages/sdk/src/client/types.gen.ts:87](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L87) |
| `parent.imageId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:103](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L103) |
| `parent.order` | `number` | [packages/sdk/src/client/types.gen.ts:97](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L97) |
| `parent.parentId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:105](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L105) |
| `parent.publishedId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:95](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L95) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [packages/sdk/src/client/types.gen.ts:93](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L93) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [packages/sdk/src/client/types.gen.ts:91](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L91) |
| `parent.revisionId`? | `number` \| `null` | [packages/sdk/src/client/types.gen.ts:92](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L92) |
| `parent.siteId` | `string` | [packages/sdk/src/client/types.gen.ts:88](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L88) |
| `parent.slug` | `string` | [packages/sdk/src/client/types.gen.ts:99](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L99) |
| `parent.source`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:94](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L94) |
| `parent.updatedAt` | `string` | [packages/sdk/src/client/types.gen.ts:90](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L90) |
| `parent.userId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:104](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L104) |
| `parent.visible` | `boolean` | [packages/sdk/src/client/types.gen.ts:98](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L98) |
| <a id="parentid"></a> `parentId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:83](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L83) |
| <a id="roles"></a> `roles` | `object`[] | [packages/sdk/src/client/types.gen.ts:108](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L108) |
| <a id="siteid"></a> `siteId` | `string` | [packages/sdk/src/client/types.gen.ts:84](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L84) |
| <a id="slug"></a> `slug` | `string` | [packages/sdk/src/client/types.gen.ts:79](https://github.com/venuecms/sdk/blob/0048e875fedcd11f329f993e4088b84401af4036/packages/sdk/src/client/types.gen.ts#L79) |
