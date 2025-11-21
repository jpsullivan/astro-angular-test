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
        // Only transform Angular component files, not Starlight files
        transformFilter: (_code, id) => {
          // Exclude node_modules and only include our component files
          if (id.includes('node_modules')) return false;
          if (id.includes('@astrojs/starlight')) return false;
          return id.includes('/src/components/') && id.endsWith('.component.ts');
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
