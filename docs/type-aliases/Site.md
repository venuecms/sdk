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
optional image: MediaItem;
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

#### settings.publicSite?

```ts
optional publicSite: object;
```

#### settings.publicSite.baseUrl?

```ts
optional baseUrl: string;
```

### timeZone?

```ts
optional timeZone: string | null;
```

## Defined in

[src/client/types.gen.ts:127](https://github.com/venuecms/sdk/blob/d518c8aac3a863994a7c808a9c7d9d339366ea38/src/client/types.gen.ts#L127)
