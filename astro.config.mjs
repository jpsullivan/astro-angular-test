import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import angular from '@analogjs/astro-angular';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Angular Components Docs',
      customCss: ['./src/styles/globals.css'],
      components: {
        Header: './src/components/overrides/Header.astro',
        Sidebar: './src/components/overrides/Sidebar.astro',
      },
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
          label: 'Start',
          items: [
            { label: 'Overview', link: '/start/overview/' },
            { label: 'Get Started Guide', link: '/start/get-started-guide/' },
            {
              label: 'Add New Project',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/start/add-new-project/' },
                { label: 'Deploy from a Template', link: '/start/add-new-project/deploy-from-template/' },
                { label: 'Deploy from Your Repository', link: '/start/add-new-project/deploy-from-repository/' },
                { label: 'Deploy from AI Code Generation Tool', link: '/start/add-new-project/deploy-from-ai-tool/' },
              ],
            },
            { label: 'Pro Tips After Your First Deploy', link: '/start/pro-tips/' },
            { label: 'Request Chain', link: '/start/request-chain/' },
            {
              label: 'Primitives',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/start/primitives/overview/' },
              ],
            },
          ],
        },
        {
          label: 'Deploy',
          items: [
            { label: 'Deploy Overview', link: '/deploy/deploy-overview/' },
            {
              label: 'Compare Preview Options',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/deploy/compare-preview-options/' },
                { label: 'Production Deploy', link: '/deploy/compare-preview-options/production-deploy/' },
                { label: 'Branch Deploys', link: '/deploy/compare-preview-options/branch-deploys/' },
              ],
            },
            { label: 'Deploy Previews', link: '/deploy/deploy-previews/' },
            { label: 'Create Deploys', link: '/deploy/create-deploys/' },
            { label: 'Manage Deploys', link: '/deploy/manage-deploys/' },
            { label: 'Protect Deploys', link: '/deploy/protect-deploys/' },
            { label: 'Deploy Notifications', link: '/deploy/deploy-notifications/' },
            { label: 'Review a Preview Server Instance', link: '/deploy/review-preview-server/' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Overview', link: '/components/' },
            { label: 'Badge', link: '/components/badge/' },
            { label: 'Input', link: '/components/input/' },
          ],
        },
        {
          label: 'Learn',
          autogenerate: { directory: 'learn' },
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
    plugins: [tailwindcss()],
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
