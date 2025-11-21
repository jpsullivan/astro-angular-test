import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Angular Components Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/guides/introduction/' },
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
    }),
    angular({
      vite: {
        // Completely disable transformation - use client-only rendering
        transformFilter: () => false,
        advanced: {
          tsconfig: './tsconfig.app.json',
        },
      },
    }),
  ],
  vite: {
    build: {
      target: 'es2022',
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2022',
        supported: {
          'top-level-await': true,
        },
      },
      exclude: ['@astrojs/starlight'],
    },
    ssr: {
      // Transform Angular packages during SSR
      noExternal: ['@angular/**', '@analogjs/**'],
      target: 'node',
    },
    esbuild: {
      target: 'es2022',
      supported: {
        'top-level-await': true,
      },
    },
  },
});
