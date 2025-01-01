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
optional image: object;
```

#### image.altText?

```ts
optional altText: string | null;
```

#### image.caption?

```ts
optional caption: string | null;
```

#### image.createdAt

```ts
createdAt: string;
```

#### image.credit?

```ts
optional credit: string | null;
```

#### image.id

```ts
id: string;
```

#### image.inline

```ts
inline: boolean;
```

#### image.metadata?

```ts
optional metadata: {} | null;
```

#### image.mimeType?

```ts
optional mimeType: string | null;
```

#### image.siteId

```ts
siteId: string;
```

#### image.size

```ts
size: number;
```

#### image.title?

```ts
optional title: string | null;
```

#### image.updatedAt

```ts
updatedAt: string;
```

#### image.uploaded

```ts
uploaded: boolean;
```

#### image.url?

```ts
optional url: string | null;
```

### name?

```ts
optional name: string | null;
```

### settings

```ts
settings: object;
```

#### settings.locale?

```ts
optional locale: object;
```

#### settings.locale.default

```ts
default: string;
```

#### settings.locale.supported

```ts
supported: string[];
```

### timeZone?

```ts
optional timeZone: string | null;
```

## Defined in

[src/client/types.gen.ts:116](https://github.com/venuecms/sdk/blob/2edfd13c06baf443bbea491be2ef200d66919dd4/src/client/types.gen.ts#L116)
