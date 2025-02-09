[**@venuecms/sdk**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

Defined in: [packages/sdk/src/client/types.gen.ts:73](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L73)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="artists"></a> `artists`? | `object`[] | [packages/sdk/src/client/types.gen.ts:118](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L118) |
| <a id="date"></a> `date`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:79](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L79) |
| <a id="featured"></a> `featured` | `boolean` | [packages/sdk/src/client/types.gen.ts:77](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L77) |
| <a id="featuredexpiration"></a> `featuredExpiration`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:78](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L78) |
| <a id="fullpath"></a> `fullPath`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:104](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L104) |
| <a id="id"></a> `id` | `string` | [packages/sdk/src/client/types.gen.ts:74](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L74) |
| <a id="image"></a> `image`? | [`MediaItem`](MediaItem.md) | [packages/sdk/src/client/types.gen.ts:82](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L82) |
| <a id="localizedcontent"></a> `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [packages/sdk/src/client/types.gen.ts:117](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L117) |
| <a id="order"></a> `order` | `number` | [packages/sdk/src/client/types.gen.ts:75](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L75) |
| <a id="parent"></a> `parent`? | `object` | [packages/sdk/src/client/types.gen.ts:83](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L83) |
| `parent.createdAt` | `string` | [packages/sdk/src/client/types.gen.ts:86](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L86) |
| `parent.date`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:99](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L99) |
| `parent.dirty` | `boolean` | [packages/sdk/src/client/types.gen.ts:93](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L93) |
| `parent.featured` | `boolean` | [packages/sdk/src/client/types.gen.ts:97](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L97) |
| `parent.featuredExpiration`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:98](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L98) |
| `parent.id` | `string` | [packages/sdk/src/client/types.gen.ts:84](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L84) |
| `parent.imageId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:100](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L100) |
| `parent.order` | `number` | [packages/sdk/src/client/types.gen.ts:94](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L94) |
| `parent.parentId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:102](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L102) |
| `parent.publishedId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:92](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L92) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [packages/sdk/src/client/types.gen.ts:90](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L90) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [packages/sdk/src/client/types.gen.ts:88](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L88) |
| `parent.revisionId`? | `number` \| `null` | [packages/sdk/src/client/types.gen.ts:89](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L89) |
| `parent.siteId` | `string` | [packages/sdk/src/client/types.gen.ts:85](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L85) |
| `parent.slug` | `string` | [packages/sdk/src/client/types.gen.ts:96](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L96) |
| `parent.source`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:91](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L91) |
| `parent.updatedAt` | `string` | [packages/sdk/src/client/types.gen.ts:87](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L87) |
| `parent.userId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:101](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L101) |
| `parent.visible` | `boolean` | [packages/sdk/src/client/types.gen.ts:95](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L95) |
| <a id="parentid"></a> `parentId`? | `string` \| `null` | [packages/sdk/src/client/types.gen.ts:80](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L80) |
| <a id="roles"></a> `roles` | `object`[] | [packages/sdk/src/client/types.gen.ts:105](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L105) |
| <a id="siteid"></a> `siteId` | `string` | [packages/sdk/src/client/types.gen.ts:81](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L81) |
| <a id="slug"></a> `slug` | `string` | [packages/sdk/src/client/types.gen.ts:76](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/src/client/types.gen.ts#L76) |
