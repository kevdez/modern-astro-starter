// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/structure'

export default defineConfig({
  name: 'yeol',
  title: 'Yeol',
  projectId: 't6u9lw9u',
  dataset: 'production',
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
})