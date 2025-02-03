import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import header from "./header";
import footer from "./footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema, header, footer],
};