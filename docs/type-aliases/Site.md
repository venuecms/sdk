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

[src/client/types.gen.ts:127](https://github.com/venuecms/sdk/blob/915971a29eb95acc8223db796957e1d217a65139/src/client/types.gen.ts#L127)
