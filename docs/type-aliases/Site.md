[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / Site

# Type Alias: Site

```ts
type Site = object;
```

## Type declaration

### defaultLocale?

```ts
optional defaultLocale: string | null;
```

### description?

```ts
optional description: string | null;
```

### image?

```ts
optional image: 
  | {
  altText: string | null;
  caption: string | null;
  createdAt: string;
  credit: string | null;
  id: string;
  inline: boolean;
  metadata: {} | null;
  mimeType: string | null;
  siteId: string;
  size: number;
  title: string | null;
  updatedAt: string;
  uploaded: boolean;
  url: string | null;
 }
  | null;
```

### name?

```ts
optional name: string | null;
```

### timeZone?

```ts
optional timeZone: string | null;
```

## Defined in

[src/client/types.gen.ts:116](https://github.com/venuecms/sdk/blob/9ae98ad19cd49271fbec864143c1fdaa80d0b742/src/client/types.gen.ts#L116)
