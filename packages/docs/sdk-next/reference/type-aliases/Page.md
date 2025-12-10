[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

Defined in: [sdk/dist/index.d.mts:209](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L209)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="artists"></a> `artists`? | `object`[] | [sdk/dist/index.d.mts:256](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L256) |
| <a id="custom"></a> `custom`? | [`CustomSchemaData`](CustomSchemaData.md)[] | [sdk/dist/index.d.mts:253](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L253) |
| <a id="date"></a> `date`? | `string` \| `null` | [sdk/dist/index.d.mts:215](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L215) |
| <a id="featured"></a> `featured` | `boolean` | [sdk/dist/index.d.mts:213](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L213) |
| <a id="featuredexpiration"></a> `featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:214](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L214) |
| <a id="fullpath"></a> `fullPath`? | `string` \| `null` | [sdk/dist/index.d.mts:240](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L240) |
| <a id="id"></a> `id` | `string` | [sdk/dist/index.d.mts:210](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L210) |
| <a id="image"></a> `image`? | [`MediaItem`](MediaItem.md) | [sdk/dist/index.d.mts:218](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L218) |
| <a id="localizedcontent"></a> `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [sdk/dist/index.d.mts:255](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L255) |
| <a id="order"></a> `order` | `number` | [sdk/dist/index.d.mts:211](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L211) |
| <a id="parent"></a> `parent`? | `object` | [sdk/dist/index.d.mts:219](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L219) |
| `parent.createdAt` | `string` | [sdk/dist/index.d.mts:222](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L222) |
| `parent.date`? | `string` \| `null` | [sdk/dist/index.d.mts:235](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L235) |
| `parent.dirty` | `boolean` | [sdk/dist/index.d.mts:229](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L229) |
| `parent.featured` | `boolean` | [sdk/dist/index.d.mts:233](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L233) |
| `parent.featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:234](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L234) |
| `parent.id` | `string` | [sdk/dist/index.d.mts:220](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L220) |
| `parent.imageId`? | `string` \| `null` | [sdk/dist/index.d.mts:236](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L236) |
| `parent.order` | `number` | [sdk/dist/index.d.mts:230](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L230) |
| `parent.parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:238](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L238) |
| `parent.publishedId`? | `string` \| `null` | [sdk/dist/index.d.mts:228](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L228) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [sdk/dist/index.d.mts:226](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L226) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [sdk/dist/index.d.mts:224](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L224) |
| `parent.revisionId`? | `number` \| `null` | [sdk/dist/index.d.mts:225](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L225) |
| `parent.siteId` | `string` | [sdk/dist/index.d.mts:221](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L221) |
| `parent.slug` | `string` | [sdk/dist/index.d.mts:232](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L232) |
| `parent.source`? | `string` \| `null` | [sdk/dist/index.d.mts:227](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L227) |
| `parent.updatedAt` | `string` | [sdk/dist/index.d.mts:223](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L223) |
| `parent.userId`? | `string` \| `null` | [sdk/dist/index.d.mts:237](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L237) |
| `parent.visible` | `boolean` | [sdk/dist/index.d.mts:231](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L231) |
| <a id="parentid"></a> `parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:216](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L216) |
| <a id="roles"></a> `roles` | `object`[] | [sdk/dist/index.d.mts:241](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L241) |
| <a id="siteid"></a> `siteId` | `string` | [sdk/dist/index.d.mts:217](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L217) |
| <a id="slug"></a> `slug` | `string` | [sdk/dist/index.d.mts:212](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L212) |
| <a id="tags"></a> `tags`? | [`Tag`](Tag.md)[] | [sdk/dist/index.d.mts:254](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/dist/index.d.mts#L254) |
