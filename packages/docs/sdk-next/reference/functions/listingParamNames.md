[**@venuecms/sdk-next**](../Index.md)

***

# Function: listingParamNames()

```ts
function listingParamNames(nodes): Map<RenderNode, string>
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/identity.ts:89](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/identity.ts#L89)

Every paginated block in a document, mapped to the param it owns.

Built by walking the content once up front rather than counted as the tree
renders: React may render a subtree more than once, and a counter that
advanced per render would hand the same block a different param each time.
Keyed on the node object, which is stable for the render that produced it.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | readonly [`RenderNode`](../interfaces/RenderNode.md)[] |

## Returns

`Map`\<[`RenderNode`](../interfaces/RenderNode.md), `string`\>
