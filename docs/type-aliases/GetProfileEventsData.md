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

#### query.featured?

```ts
optional featured: boolean | null;
```

#### query.gt?

```ts
optional gt: number | null;
```

#### query.legacyId?

```ts
optional legacyId: string;
```

#### query.limit?

```ts
optional limit: number | null;
```

#### query.lt?

```ts
optional lt: number | null;
```

#### query.orderBy?

```ts
optional orderBy: string;
```

#### query.page?

```ts
optional page: number | null;
```

#### query.upcoming?

```ts
optional upcoming: boolean | null;
```

## Defined in

[src/client/types.gen.ts:263](https://github.com/venuecms/sdk/blob/32df3b17009bdabf1585f0511b8fa69e1587fc03/src/client/types.gen.ts#L263)
