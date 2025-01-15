[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / GetPagesData

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

[src/client/types.gen.ts:197](https://github.com/venuecms/sdk/blob/b5a1c75896c488e0559678cc7e28425c90f79b9e/src/client/types.gen.ts#L197)
