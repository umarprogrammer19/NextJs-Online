import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './productSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
}
