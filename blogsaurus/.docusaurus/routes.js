import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '74f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '905'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ad9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '473'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ece'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'cd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '013'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c0a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a38'),
    exact: true
  },
  {
    path: '/blog/design pattern rule',
    component: ComponentCreator('/blog/design pattern rule', '948'),
    exact: true
  },
  {
    path: '/blog/strategy pattern',
    component: ComponentCreator('/blog/strategy pattern', 'b5c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e29'),
    exact: true
  },
  {
    path: '/blog/tags/design-pattern',
    component: ComponentCreator('/blog/tags/design-pattern', '58d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'd69'),
    exact: true
  },
  {
    path: '/blog/tags/first-post',
    component: ComponentCreator('/blog/tags/first-post', '31f'),
    exact: true
  },
  {
    path: '/blog/tags/rule',
    component: ComponentCreator('/blog/tags/rule', '27f'),
    exact: true
  },
  {
    path: '/blog/tags/strategy-pattern',
    component: ComponentCreator('/blog/tags/strategy-pattern', 'ab8'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '7d8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '76d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '992'),
    routes: [
      {
        path: '/docs/blog-configuration/react1',
        component: ComponentCreator('/docs/blog-configuration/react1', '5a7'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-intro',
        component: ComponentCreator('/docs/blog-intro', 'c9d'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react-basic/react1',
        component: ComponentCreator('/docs/react-basic/react1', 'fac'),
        exact: true,
        sidebar: "reactSidebar"
      },
      {
        path: '/docs/react-intro',
        component: ComponentCreator('/docs/react-intro', '839'),
        exact: true,
        sidebar: "reactSidebar"
      },
      {
        path: '/docs/test',
        component: ComponentCreator('/docs/test', '616'),
        exact: true,
        sidebar: "testSidebar"
      },
      {
        path: '/docs/test-first/test1',
        component: ComponentCreator('/docs/test-first/test1', '826'),
        exact: true,
        sidebar: "testSidebar"
      },
      {
        path: '/docs/test-first/test2',
        component: ComponentCreator('/docs/test-first/test2', 'c28'),
        exact: true,
        sidebar: "testSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '4c5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
