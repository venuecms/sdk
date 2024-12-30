[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / GetProfilesData

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

[src/client/types.gen.ts:238](https://github.com/venuecms/sdk/blob/3c845491d484a7b7f31c76433be6bced0b04671f/src/client/types.gen.ts#L238)
