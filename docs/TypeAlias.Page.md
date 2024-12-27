[@venuecms/sdk](../wiki/Home) / Page

# Type Alias: Page

> **Page**: `object`

## Type declaration

### date?

> `optional` **date**: `string` \| `null`

### featured

> **featured**: `boolean`

### featuredExpiration?

> `optional` **featuredExpiration**: `string` \| `null`

### fullPath?

> `optional` **fullPath**: `string` \| `null`

### id

> **id**: `string`

### image?

> `optional` **image**: [`MediaItem`](../wiki/TypeAlias.MediaItem)

### localizedContent

> **localizedContent**: [`LocalizedContent`](../wiki/TypeAlias.LocalizedContent)[]

### order

> **order**: `number`

### parent?

> `optional` **parent**: `object`

#### parent.createdAt

> **createdAt**: `string`

#### parent.date?

> `optional` **date**: `string` \| `null`

#### parent.dirty

> **dirty**: `boolean`

#### parent.featured

> **featured**: `boolean`

#### parent.featuredExpiration?

> `optional` **featuredExpiration**: `string` \| `null`

#### parent.id

> **id**: `string`

#### parent.imageId?

> `optional` **imageId**: `string` \| `null`

#### parent.order

> **order**: `number`

#### parent.parentId?

> `optional` **parentId**: `string` \| `null`

#### parent.publishedId?

> `optional` **publishedId**: `string` \| `null`

#### parent.publishState

> **publishState**: `"DRAFT"` \| `"REQUEST"` \| `"PUBLISHED"` \| `"CANCELLED"`

#### parent.recordType

> **recordType**: `"SOURCE"` \| `"PUBLISHED"` \| `"REVISION"`

#### parent.revisionId?

> `optional` **revisionId**: `number` \| `null`

#### parent.siteId

> **siteId**: `string`

#### parent.slug

> **slug**: `string`

#### parent.source?

> `optional` **source**: `string` \| `null`

#### parent.updatedAt

> **updatedAt**: `string`

#### parent.userId?

> `optional` **userId**: `string` \| `null`

#### parent.visible

> **visible**: `boolean`

### parentId?

> `optional` **parentId**: `string` \| `null`

### roles

> **roles**: `object`[]

### site

> **site**: [`Site`](../wiki/TypeAlias.Site)

### slug

> **slug**: `string`

## Defined in

[src/client/types.gen.ts:60](https://github.com/venuecms/sdk/blob/237fa033828e8f78d40380a5c39f6cf5abc00484/src/client/types.gen.ts#L60)
