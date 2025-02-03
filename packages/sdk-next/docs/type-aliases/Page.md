[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: Page

```ts
type Page = object;
```

Defined in: [sdk/dist/index.d.mts:67](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L67)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="artists"></a> `artists`? | `object`[] | [sdk/dist/index.d.mts:112](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L112) |
| <a id="date"></a> `date`? | `string` \| `null` | [sdk/dist/index.d.mts:73](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L73) |
| <a id="featured"></a> `featured` | `boolean` | [sdk/dist/index.d.mts:71](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L71) |
| <a id="featuredexpiration"></a> `featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:72](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L72) |
| <a id="fullpath"></a> `fullPath`? | `string` \| `null` | [sdk/dist/index.d.mts:98](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L98) |
| <a id="id"></a> `id` | `string` | [sdk/dist/index.d.mts:68](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L68) |
| <a id="image"></a> `image`? | [`MediaItem`](MediaItem.md) | [sdk/dist/index.d.mts:76](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L76) |
| <a id="localizedcontent"></a> `localizedContent` | [`LocalizedContent`](LocalizedContent.md)[] | [sdk/dist/index.d.mts:111](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L111) |
| <a id="order"></a> `order` | `number` | [sdk/dist/index.d.mts:69](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L69) |
| <a id="parent"></a> `parent`? | `object` | [sdk/dist/index.d.mts:77](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L77) |
| `parent.createdAt` | `string` | [sdk/dist/index.d.mts:80](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L80) |
| `parent.date`? | `string` \| `null` | [sdk/dist/index.d.mts:93](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L93) |
| `parent.dirty` | `boolean` | [sdk/dist/index.d.mts:87](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L87) |
| `parent.featured` | `boolean` | [sdk/dist/index.d.mts:91](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L91) |
| `parent.featuredExpiration`? | `string` \| `null` | [sdk/dist/index.d.mts:92](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L92) |
| `parent.id` | `string` | [sdk/dist/index.d.mts:78](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L78) |
| `parent.imageId`? | `string` \| `null` | [sdk/dist/index.d.mts:94](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L94) |
| `parent.order` | `number` | [sdk/dist/index.d.mts:88](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L88) |
| `parent.parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:96](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L96) |
| `parent.publishedId`? | `string` \| `null` | [sdk/dist/index.d.mts:86](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L86) |
| `parent.publishState` | `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"` | [sdk/dist/index.d.mts:84](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L84) |
| `parent.recordType` | `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"` | [sdk/dist/index.d.mts:82](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L82) |
| `parent.revisionId`? | `number` \| `null` | [sdk/dist/index.d.mts:83](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L83) |
| `parent.siteId` | `string` | [sdk/dist/index.d.mts:79](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L79) |
| `parent.slug` | `string` | [sdk/dist/index.d.mts:90](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L90) |
| `parent.source`? | `string` \| `null` | [sdk/dist/index.d.mts:85](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L85) |
| `parent.updatedAt` | `string` | [sdk/dist/index.d.mts:81](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L81) |
| `parent.userId`? | `string` \| `null` | [sdk/dist/index.d.mts:95](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L95) |
| `parent.visible` | `boolean` | [sdk/dist/index.d.mts:89](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L89) |
| <a id="parentid"></a> `parentId`? | `string` \| `null` | [sdk/dist/index.d.mts:74](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L74) |
| <a id="roles"></a> `roles` | `object`[] | [sdk/dist/index.d.mts:99](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L99) |
| <a id="site"></a> `site` | [`Site`](Site.md) | [sdk/dist/index.d.mts:75](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L75) |
| <a id="slug"></a> `slug` | `string` | [sdk/dist/index.d.mts:70](https://github.com/venuecms/sdk/blob/1c1bdce3c89568d47e3eb3ec42df293b4e3a3a09/packages/sdk/dist/index.d.mts#L70) |
