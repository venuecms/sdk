[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / GetProfileEventsData

# Type Alias: GetProfileEventsData

```ts
type GetProfileEventsData = object;
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

#### path.slug

```ts
slug: string;
```

### query?

```ts
optional query: object;
```

#### query.dir?

```ts
optional dir: "asc" | "desc";
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

[src/client/types.gen.ts:269](https://github.com/venuecms/sdk/blob/2ca50bf1921627009457658807ac341d342a13a9/src/client/types.gen.ts#L269)
