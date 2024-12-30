[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / Event

# Type Alias: Event

```ts
type Event = object;
```

## Type declaration

### artists

```ts
artists: object[];
```

### description?

```ts
optional description: string | null;
```

### endDate

```ts
endDate: string;
```

### id

```ts
id: string;
```

### image?

```ts
optional image: MediaItem;
```

### localizedContent

```ts
localizedContent: LocalizedContent[];
```

### location?

```ts
optional location: Location;
```

### publishState

```ts
publishState: "DRAFT" | "REQUEST" | "PUBLISHED" | "CANCELLED";
```

### site

```ts
site: Site;
```

### slug

```ts
slug: string;
```

### startDate

```ts
startDate: string;
```

### tickets?

```ts
optional tickets: TicketOnEvent[];
```

## Defined in

[src/client/types.gen.ts:3](https://github.com/venuecms/sdk/blob/3c845491d484a7b7f31c76433be6bced0b04671f/src/client/types.gen.ts#L3)
