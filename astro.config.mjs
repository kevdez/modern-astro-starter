// @ts-check
import 'dotenv/config';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      useCdn: false, // for static builds
      studioBasePath: '/admin',
    }),
    react(),
  ],
});