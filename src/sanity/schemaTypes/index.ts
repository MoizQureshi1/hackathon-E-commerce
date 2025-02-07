import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import header from "./header";
import footer from "./footer";
import  checkForm from "./checkout"
import contectForm from "./contect-form";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema, header, footer, checkForm, contectForm],
};