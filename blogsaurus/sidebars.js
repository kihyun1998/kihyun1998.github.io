/**
* Creating a sidebar enables you to:
    - create an ordered group of docs
    - render a sidebar for each doc of that group
    - provide next/previous navigation

    The sidebars can be generated from the filesystem, or explicitly defined here.

    Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
      'intro',
      {
          type: 'category',
          label: 'Tutorials',
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'tutorial-basics',
              },
              {
                  type: 'autogenerated',
                  dirName: 'tutorial-extras',
              },
          ],
      },
  ],

  testSidebar:[{
      type: 'category',
      label: 'Test',
      items:[
          {
              type: 'autogenerated',
              dirName: 'test-first',
          },
      ]
  },
  'test',
  ],
  reactSidebar:[
      'react-intro',
      {        
          type: 'category',
          label: 'React-Basic',
          items:[
              {
                  type: 'autogenerated',
                  dirName: 'react-basic'
              }
          ]
  }],
  blogSidebar:[
    'blog-intro',
    {
        type: 'category',
        label: 'Blog - Config',
        items:[
            {
                type: 'autogenerated',
                dirName: 'blog-configuration'
            }
        ]
    }
  ]

// By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
          'intro',
          'hello',
          {
              type: 'category',
              label: 'Tutorial',
              items: ['tutorial-basics/create-a-document'],
          },
  ],
  */
};

module.exports = sidebars;
