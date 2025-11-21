import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Angular Components Docs',
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/guides/introduction/' },
            { label: 'Theming', link: '/guides/theming/' },
          ],
        },
        {
          label: 'Learn',
          autogenerate: { directory: 'learn' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
    }),
    angular({
      vite: {
        // Only transform Angular component files for better Starlight compatibility
        transformFilter: (_code, id) => {
          return id.includes('src/components') || id.includes('src\\components');
        },
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
