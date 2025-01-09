import { type SchemaTypeDefinition } from 'sanity'
import Product from './ApiProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
}