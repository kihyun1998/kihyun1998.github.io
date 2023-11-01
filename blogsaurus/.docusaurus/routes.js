import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '71d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'aa4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b04'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '58b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bbc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '96f'),
    exact: true
  },
  {
    path: '/blog/design pattern rule',
    component: ComponentCreator('/blog/design pattern rule', '3e2'),
    exact: true
  },
  {
    path: '/blog/Overloading and Overriding',
    component: ComponentCreator('/blog/Overloading and Overriding', 'f31'),
    exact: true
  },
  {
    path: '/blog/PKI',
    component: ComponentCreator('/blog/PKI', 'b25'),
    exact: true
  },
  {
    path: '/blog/strategy pattern',
    component: ComponentCreator('/blog/strategy pattern', '89d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5ac'),
    exact: true
  },
  {
    path: '/blog/tags/오버라이딩',
    component: ComponentCreator('/blog/tags/오버라이딩', '6a3'),
    exact: true
  },
  {
    path: '/blog/tags/오버로딩',
    component: ComponentCreator('/blog/tags/오버로딩', '6e1'),
    exact: true
  },
  {
    path: '/blog/tags/design-pattern',
    component: ComponentCreator('/blog/tags/design-pattern', '233'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '956'),
    exact: true
  },
  {
    path: '/blog/tags/first-post',
    component: ComponentCreator('/blog/tags/first-post', '160'),
    exact: true
  },
  {
    path: '/blog/tags/overloading',
    component: ComponentCreator('/blog/tags/overloading', 'f66'),
    exact: true
  },
  {
    path: '/blog/tags/overriding',
    component: ComponentCreator('/blog/tags/overriding', '092'),
    exact: true
  },
  {
    path: '/blog/tags/pki',
    component: ComponentCreator('/blog/tags/pki', '623'),
    exact: true
  },
  {
    path: '/blog/tags/rule',
    component: ComponentCreator('/blog/tags/rule', '430'),
    exact: true
  },
  {
    path: '/blog/tags/strategy-pattern',
    component: ComponentCreator('/blog/tags/strategy-pattern', '621'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '631'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'cf8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '33c'),
    routes: [
      {
        path: '/docs/backend-master/backend1',
        component: ComponentCreator('/docs/backend-master/backend1', '86f'),
        exact: true,
        sidebar: "backSidebar"
      },
      {
        path: '/docs/blog-configuration/install_node',
        component: ComponentCreator('/docs/blog-configuration/install_node', '58f'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-configuration/install_program',
        component: ComponentCreator('/docs/blog-configuration/install_program', 'c11'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-deploy/depoly_docu1',
        component: ComponentCreator('/docs/blog-deploy/depoly_docu1', '61f'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-deploy/depoly_docu2',
        component: ComponentCreator('/docs/blog-deploy/depoly_docu2', '607'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-deploy/depoly_docu3',
        component: ComponentCreator('/docs/blog-deploy/depoly_docu3', '21f'),
        exact: true,
        sidebar: "blogSidebar"
      },
      {
        path: '/docs/blog-deploy/install_docu',
        component: ComponentCreator('/docs/blog-deploy/install_docu', 'e1a'),
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
        path: '/docs/dart-intro',
        component: ComponentCreator('/docs/dart-intro', '19d'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/dart/dart1',
        component: ComponentCreator('/docs/dart/dart1', 'e04'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/dart/dart2',
        component: ComponentCreator('/docs/dart/dart2', '5f3'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/dart/dart3',
        component: ComponentCreator('/docs/dart/dart3', '3f8'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/dart/dart4',
        component: ComponentCreator('/docs/dart/dart4', 'fdd'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/design-pattern-intro',
        component: ComponentCreator('/docs/design-pattern-intro', '382'),
        exact: true,
        sidebar: "designPatternSidebar"
      },
      {
        path: '/docs/DP--behavioral-patterns/observer',
        component: ComponentCreator('/docs/DP--behavioral-patterns/observer', '366'),
        exact: true,
        sidebar: "designPatternSidebar"
      },
      {
        path: '/docs/DP--behavioral-patterns/strategy',
        component: ComponentCreator('/docs/DP--behavioral-patterns/strategy', 'c0a'),
        exact: true,
        sidebar: "designPatternSidebar"
      },
      {
        path: '/docs/DP--creational-patterns/factory-method',
        component: ComponentCreator('/docs/DP--creational-patterns/factory-method', 'c6b'),
        exact: true,
        sidebar: "designPatternSidebar"
      },
      {
        path: '/docs/DP--structural-patterns/decorator',
        component: ComponentCreator('/docs/DP--structural-patterns/decorator', '93d'),
        exact: true,
        sidebar: "designPatternSidebar"
      },
      {
        path: '/docs/flutter/flutter1',
        component: ComponentCreator('/docs/flutter/flutter1', '6ee'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter10',
        component: ComponentCreator('/docs/flutter/flutter10', 'a0e'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter11',
        component: ComponentCreator('/docs/flutter/flutter11', '315'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter12',
        component: ComponentCreator('/docs/flutter/flutter12', '09e'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter13',
        component: ComponentCreator('/docs/flutter/flutter13', '13f'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter14',
        component: ComponentCreator('/docs/flutter/flutter14', '2df'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter15',
        component: ComponentCreator('/docs/flutter/flutter15', 'c28'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter16',
        component: ComponentCreator('/docs/flutter/flutter16', '3b8'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter17',
        component: ComponentCreator('/docs/flutter/flutter17', '28f'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter18',
        component: ComponentCreator('/docs/flutter/flutter18', 'ab6'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter19',
        component: ComponentCreator('/docs/flutter/flutter19', '658'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter2',
        component: ComponentCreator('/docs/flutter/flutter2', 'c2d'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter20',
        component: ComponentCreator('/docs/flutter/flutter20', '9d2'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter21',
        component: ComponentCreator('/docs/flutter/flutter21', '2cd'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter22',
        component: ComponentCreator('/docs/flutter/flutter22', 'bf8'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter23',
        component: ComponentCreator('/docs/flutter/flutter23', 'cff'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter24',
        component: ComponentCreator('/docs/flutter/flutter24', '111'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter25',
        component: ComponentCreator('/docs/flutter/flutter25', '7bf'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter26',
        component: ComponentCreator('/docs/flutter/flutter26', '7eb'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter27',
        component: ComponentCreator('/docs/flutter/flutter27', '92f'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter3',
        component: ComponentCreator('/docs/flutter/flutter3', 'da6'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter4',
        component: ComponentCreator('/docs/flutter/flutter4', '1ba'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter5',
        component: ComponentCreator('/docs/flutter/flutter5', '20f'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter6',
        component: ComponentCreator('/docs/flutter/flutter6', '4e4'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter7',
        component: ComponentCreator('/docs/flutter/flutter7', '718'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter8',
        component: ComponentCreator('/docs/flutter/flutter8', 'd89'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/flutter/flutter9',
        component: ComponentCreator('/docs/flutter/flutter9', '95d'),
        exact: true,
        sidebar: "dartSidebar"
      },
      {
        path: '/docs/go/go1',
        component: ComponentCreator('/docs/go/go1', '075'),
        exact: true,
        sidebar: "goSidebar"
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
    component: ComponentCreator('/', 'b12'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
