[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

Defined in: [sdk/dist/index.d.mts:76](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L76)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="artists"></a> `artists`? | `object`[] | [sdk/dist/index.d.mts:121](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L121) |
| <a id="date"></a> `date`? | `string` \| `null` | [sdk/dist/index.d.mts:82](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L82) |
| <a id="featured"></a> `featured` | `boolean` | [sdk/dist/index.d.mts:80](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L80) |
| <a id="featuredexpiration"></a> `featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:81](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L81) |
| <a id="fullpath"></a> `fullPath`? | `string` \| `null` | [sdk/dist/index.d.mts:107](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L107) |
| <a id="id"></a> `id` | `string` | [sdk/dist/index.d.mts:77](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L77) |
| <a id="image"></a> `image`? | [`MediaItem`](MediaItem.md) | [sdk/dist/index.d.mts:85](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L85) |
| <a id="localizedcontent"></a> `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [sdk/dist/index.d.mts:120](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L120) |
| <a id="order"></a> `order` | `number` | [sdk/dist/index.d.mts:78](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L78) |
| <a id="parent"></a> `parent`? | `object` | [sdk/dist/index.d.mts:86](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L86) |
| `parent.createdAt` | `string` | [sdk/dist/index.d.mts:89](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L89) |
| `parent.date`? | `string` \| `null` | [sdk/dist/index.d.mts:102](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L102) |
| `parent.dirty` | `boolean` | [sdk/dist/index.d.mts:96](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L96) |
| `parent.featured` | `boolean` | [sdk/dist/index.d.mts:100](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L100) |
| `parent.featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:101](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L101) |
| `parent.id` | `string` | [sdk/dist/index.d.mts:87](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L87) |
| `parent.imageId`? | `string` \| `null` | [sdk/dist/index.d.mts:103](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L103) |
| `parent.order` | `number` | [sdk/dist/index.d.mts:97](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L97) |
| `parent.parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:105](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L105) |
| `parent.publishedId`? | `string` \| `null` | [sdk/dist/index.d.mts:95](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L95) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [sdk/dist/index.d.mts:93](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L93) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [sdk/dist/index.d.mts:91](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L91) |
| `parent.revisionId`? | `number` \| `null` | [sdk/dist/index.d.mts:92](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L92) |
| `parent.siteId` | `string` | [sdk/dist/index.d.mts:88](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L88) |
| `parent.slug` | `string` | [sdk/dist/index.d.mts:99](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L99) |
| `parent.source`? | `string` \| `null` | [sdk/dist/index.d.mts:94](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L94) |
| `parent.updatedAt` | `string` | [sdk/dist/index.d.mts:90](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L90) |
| `parent.userId`? | `string` \| `null` | [sdk/dist/index.d.mts:104](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L104) |
| `parent.visible` | `boolean` | [sdk/dist/index.d.mts:98](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L98) |
| <a id="parentid"></a> `parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:83](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L83) |
| <a id="roles"></a> `roles` | `object`[] | [sdk/dist/index.d.mts:108](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L108) |
| <a id="siteid"></a> `siteId` | `string` | [sdk/dist/index.d.mts:84](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L84) |
| <a id="slug"></a> `slug` | `string` | [sdk/dist/index.d.mts:79](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L79) |
