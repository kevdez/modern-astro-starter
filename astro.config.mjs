// @ts-check
import 'dotenv/config';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';


import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  integrations: [
    sanity({
      projectId: "t6u9lw9u",
      dataset: "production",
      useCdn: false, // for static builds
      studioBasePath: '/admin',
    }),
    react(),
  ],

  server: {
    host: '0.0.0.0'
  },
});