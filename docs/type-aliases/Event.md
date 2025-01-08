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

[src/client/types.gen.ts:3](https://github.com/venuecms/sdk/blob/655afdbbb73b0333dc2f8ae63a5e6dccc97fd3b5/src/client/types.gen.ts#L3)
