// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lemurian Adventure Guild',
  tagline: 'West Marches-style D&D Group operating out of Echo Church Sunnyvale.',
  url: 'https://LemurianAdventureGuild.github.io',
  baseUrl: '/wiki/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LemurianAdventureGuild', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Lemurian Adventure Guild Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'player_characters',
            position: 'left',
            label: 'Player Characters',
            activeBaseRegex: `/player_characters/`,
          },
          {
            to: 'npcs',
            position: 'left',
            label: 'Important NPCs',
            activeBaseRegex: `/npcs/`,
          },
          {
            to: 'archives/guild',
            position: 'left',
            label: 'Archives',
            activeBaseRegex: `/archives/`,
          },
          {
            to: 'memorial',
            label: 'Memorial',
            position: 'right',
            activeBaseRegex: `/house_rules/`,
          },
          {
            to: 'house_rules/basics',
            label: 'House Rules',
            position: 'right',
            activeBaseRegex: `/house_rules/`,
          },
          {
            href: 'https://www.echo.church/sunnyvale/',
            label: 'Echo',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Bcpoole/Lemurian_Adventure_Guild',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lemurian Adventure Guild, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'house_rules',
          path: 'house_rules',
          routeBasePath: 'house_rules',
          sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'archives',
          path: 'archives',
          routeBasePath: 'archives',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'player_characters',
          path: 'player_characters',
          routeBasePath: 'player_characters',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'memorial',
          path: 'memorial',
          routeBasePath: 'memorial',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'npcs',
          path: 'npcs',
          routeBasePath: 'npcs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 100,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
};

module.exports = config;
