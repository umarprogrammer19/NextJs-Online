import { type SchemaTypeDefinition } from 'sanity'
import ProductSchema from './ProductSchema'
import data from './data'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema, data],
}
