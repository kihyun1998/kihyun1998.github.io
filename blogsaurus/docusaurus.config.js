// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A Little \"Bit\"',
  tagline: '사소할지 몰라도 매일 매일🔥',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kihyun1998.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kihyun1998', // Usually your GitHub org/user name.
  projectName: 'kihyun1998.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // kihyun : yeah remove it !
          // editUrl:
          //   'https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'A Little \"Bit\"',
        logo: {
          alt: 'My Site Logo',
          src: 'img/android-icon-48x48.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'blogSidebar',
            position: 'left',
            label:'블로그 배포하기'
          },
          {
            type: 'docSidebar',
            sidebarId: 'designPatternSidebar',
            position: 'left',
            label: '디자인 패턴'
          },
          {
            type: 'docSidebar',
            sidebarId: 'jsSidebar',
            position: 'left',
            label: 'JavaScript'
          },
          {
            type: 'docSidebar',
            sidebarId: 'dartSidebar',
            position: 'left',
            label: 'Dart & Flutter'
          },
          {
            type: 'docSidebar',
            sidebarId: 'goSidebar',
            position: 'left',
            label: 'Go'
          },
          {
            type: 'docSidebar',
            sidebarId: 'backSidebar',
            position: 'left',
            label: 'BackEnd'
          },
          {
            type: 'docSidebar',
            sidebarId: 'algorithmSidebar',
            position: 'left',
            label: 'Algorithm'
          },
          {
            type: 'docSidebar',
            sidebarId: 'errorSidebar',
            position: 'left',
            label: 'Error'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages:['java','yaml','csharp','go','python','bash','powershell','dart','xml-doc','sql','protobuf','docker','cpp','swift','typescript'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
