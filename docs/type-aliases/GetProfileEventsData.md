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

[src/client/types.gen.ts:269](https://github.com/venuecms/sdk/blob/df9684e4c8d8b9ec64f5682904234454e23baf21/src/client/types.gen.ts#L269)
