[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getLocalizedContent

# Function: getLocalizedContent()

```ts
function getLocalizedContent(localizedContent, locale): object
```

## Parameters

### localizedContent

`object`[]

### locale

`string`

## Returns

`object`

### content

```ts
content: object;
```

#### content.content?

```ts
optional content: string;
```

#### content.contentJSON

```ts
contentJSON: object;
```

##### Index Signature

 \[`key`: `string`\]: `unknown`

#### content.excerpt?

```ts
optional excerpt: string;
```

#### content.extraContent?

```ts
optional extraContent: string;
```

#### content.keywords?

```ts
optional keywords: string;
```

#### content.locale

```ts
locale: string;
```

#### content.metaDescription?

```ts
optional metaDescription: string;
```

#### content.metaTitle?

```ts
optional metaTitle: string;
```

#### content.shortContent?

```ts
optional shortContent: string;
```

#### content.siteId

```ts
siteId: string;
```

#### content.title?

```ts
optional title: string;
```

### currentLocale

```ts
currentLocale: string;
```

## Defined in

[src/utils/content.ts:6](https://github.com/venuecms/sdk/blob/823b04c9ee84b4d1baaafd2d6fb4c862f759e4e8/src/utils/content.ts#L6)
