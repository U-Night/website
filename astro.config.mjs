// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://u-night.org",
  integrations: [react(), sitemap(), expressiveCode({
      themes: ['everforest-dark'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black'
        },
        uiFontFamily: 'var(--font-mono)',
        codeFontFamily: 'var(--font-mono)',
        borderColor: '#80808080'
      }
    }), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});