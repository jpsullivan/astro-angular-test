import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
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
    angular(),
  ],
});
