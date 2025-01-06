[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / Page

# Type Alias: Page

```ts
type Page = object;
```

## Type declaration

### date?

```ts
optional date: string | null;
```

### featured

```ts
featured: boolean;
```

### featuredExpiration?

```ts
optional featuredExpiration: string | null;
```

### fullPath?

```ts
optional fullPath: string | null;
```

### id

```ts
id: string;
```

### image?

```ts
optional image: MediaItem;
```

### localizedContent

```ts
localizedContent: LocalizedContent[];
```

### order

```ts
order: number;
```

### parent?

```ts
optional parent: object;
```

#### parent.createdAt

```ts
createdAt: string;
```

#### parent.date?

```ts
optional date: string | null;
```

#### parent.dirty

```ts
dirty: boolean;
```

#### parent.featured

```ts
featured: boolean;
```

#### parent.featuredExpiration?

```ts
optional featuredExpiration: string | null;
```

#### parent.id

```ts
id: string;
```

#### parent.imageId?

```ts
optional imageId: string | null;
```

#### parent.order

```ts
order: number;
```

#### parent.parentId?

```ts
optional parentId: string | null;
```

#### parent.publishedId?

```ts
optional publishedId: string | null;
```

#### parent.publishState

```ts
publishState: "DRAFT" | "REQUEST" | "PUBLISHED" | "CANCELLED";
```

#### parent.recordType

```ts
recordType: "SOURCE" | "PUBLISHED" | "REVISION";
```

#### parent.revisionId?

```ts
optional revisionId: number | null;
```

#### parent.siteId

```ts
siteId: string;
```

#### parent.slug

```ts
slug: string;
```

#### parent.source?

```ts
optional source: string | null;
```

#### parent.updatedAt

```ts
updatedAt: string;
```

#### parent.userId?

```ts
optional userId: string | null;
```

#### parent.visible

```ts
visible: boolean;
```

### parentId?

```ts
optional parentId: string | null;
```

### roles

```ts
roles: object[];
```

### site

```ts
site: Site;
```

### slug

```ts
slug: string;
```

## Defined in

[src/client/types.gen.ts:60](https://github.com/venuecms/sdk/blob/df9684e4c8d8b9ec64f5682904234454e23baf21/src/client/types.gen.ts#L60)
