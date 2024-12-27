[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / GetProfilesData

# Type Alias: GetProfilesData

```ts
type GetProfilesData = object;
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

#### query.type?

```ts
optional type: "member";
```

## Defined in

[src/client/types.gen.ts:232](https://github.com/venuecms/sdk/blob/f129a52a8dada040e7d47cae058990c6423a868d/src/client/types.gen.ts#L232)
