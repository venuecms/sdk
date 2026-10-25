/**
 * The node and handler types the content renderer dispatches on.
 *
 * These live apart from the renderer so the listing layer can use them without
 * importing the renderer that imports it back. They are re-exported from
 * ./index, which is where callers have always got them from.
 */
import type { JSX, ReactNode } from "react";

interface Attrs {
  readonly [attr: string]: unknown;
}

export interface RenderNode {
  type: string;
  attrs?: Attrs;
  marks?: Attrs[];
  content?: RenderNode[];
  readonly [attr: string]: unknown;
}

export interface NodeProps {
  children?: ReactNode;
  node: RenderNode;
}

export type NodeHandler = (props: NodeProps) => JSX.Element;

export interface NodeHandlers {
  readonly [attr: string]: NodeHandler;
}
