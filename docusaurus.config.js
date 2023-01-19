// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lemurian Adventure Guild',
  tagline: 'West Marches-style D&D Group operating out of Echo Church Sunnyvale.',
  url: 'https://LemurianAventureGuild.github.io',
  baseUrl: '/wiki/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LemurianAventureGuild', // Usually your GitHub org/user name.
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LemurianAventureGuild/wiki/tree/main/'
        },
        blog: {
          showReadingTime: true,
        },
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
            type: 'doc',
            docId: 'player_characters/about',
            position: 'left',
            label: 'Player Characters',
          },
          {
            type: 'doc',
            docId: 'npcs/about',
            position: 'left',
            label: 'Important NPCs',
          },
          {
            type: 'doc',
            docId: 'archives/guild',
            position: 'left',
            label: 'Archives',
          },
          {
            type: 'doc',
            docId: 'house_rules/basics',
            label: 'House Rules',
            position: 'right',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
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
            title: 'Docs',
            items: [
              {
                label: 'Archives',
                to: '/docs/archives/guild',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
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
