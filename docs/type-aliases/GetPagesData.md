[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / GetPagesData

# Type Alias: GetPagesData

```ts
type GetPagesData = object;
```

## Type declaration

### path

```ts
path: object;
```

#### path.siteKey

```ts
siteKey: string;
```

### query?

```ts
optional query: object;
```

#### query.dir?

```ts
optional dir: "asc" | "desc";
```

#### query.featured?

```ts
optional featured: boolean | null;
```

#### query.limit?

```ts
optional limit: number | null;
```

#### query.orderBy?

```ts
optional orderBy: string;
```

#### query.page?

```ts
optional page: number | null;
```

## Defined in

[src/client/types.gen.ts:194](https://github.com/venuecms/sdk/blob/823b04c9ee84b4d1baaafd2d6fb4c862f759e4e8/src/client/types.gen.ts#L194)
