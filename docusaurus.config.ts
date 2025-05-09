import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: 'EA Connect',
  tagline: 'Integreren kun je leren!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://niesink.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/redocu/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'niesink', // Usually your GitHub org/user name.
  projectName: 'redocu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/niesink/redocu/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/bpv/EKB/v1.0/EKB.yml',
            route: '/api/ekb',
          },
          {
            spec: 'openapi/catalogus/EKC/v1.0/EKC_v1.0.yml',
            route: '/api/ekoc',
          },
          {
            spec: 'openapi/notifications/EKN/v1.0/EKNotifications_v1.0.yml',
            route: '/api/ekn',
          },
          {
            spec: 'openapi/stamdata/EKS/v1.0/EKStamdata_v1.0.yml',
            route: '/api/eksd',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EA Connect',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ea.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Algemeen',
        },
        {
          label: 'API',
          position: 'left',
          items: [
            {
              label: 'EKB',
              to: '/api/ekb',
            },
            {
              label: 'EKOC',
              to: '/api/ekoc',
            },
            {
              label: 'EKN',
              to: '/api/ekn',
            },
            {
              label: 'EKSD',
              to: '/api/eksd',
            },
          ],
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'API',
    //           to: '/API',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} EA Connect`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
