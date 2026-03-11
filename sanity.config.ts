// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/structure'

export default defineConfig({
  name: 'yeol',
  title: 'Yeol',
  projectId: import.meta.env.SANITY_PROJECT_ID  ?? 't6u9lw9u',
  dataset: import.meta.env.SANITY_DATASET ?? 'production',
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
})