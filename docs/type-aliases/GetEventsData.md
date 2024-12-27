[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / GetEventsData

# Type Alias: GetEventsData

```ts
type GetEventsData = object;
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

[src/client/types.gen.ts:160](https://github.com/venuecms/sdk/blob/9ae98ad19cd49271fbec864143c1fdaa80d0b742/src/client/types.gen.ts#L160)
