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
        }
    ],
    blogSidebar:[
        'blog-intro',
        {
            type: 'category',
            label: '초기 환경 설정',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'blog-configuration'
                }
            ]
        },
        {
            type: 'category',
            label: '블로그 배포하기',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'blog-deploy'
                }
            ]
        },
    ],
    designPatternSidebar:[
        'design-pattern-intro',
        {
            type:'category',
            label:'생성 패턴',
            items:[
                {
                    type:'autogenerated',
                    dirName: 'creational-patterns'
                }
            ]
        },
        {
            type:'category',
            label:'구조 패턴',
            items:[
                {
                    type:'autogenerated',
                    dirName: 'structural-patterns'
                }
            ]
        },{
            type:'category',
            label:'행동 패턴',
            items:[
                {
                    type:'autogenerated',
                    dirName: 'behavioral-patterns'
                }
            ]
        },
    ]
};

module.exports = sidebars;
