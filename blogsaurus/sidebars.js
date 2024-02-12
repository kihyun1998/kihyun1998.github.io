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
    jsSidebar:[
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
                    dirName: 'DP--creational-patterns'
                }
            ]
        },
        {
            type:'category',
            label:'구조 패턴',
            items:[
                {
                    type:'autogenerated',
                    dirName: 'DP--structural-patterns'
                }
            ]
        },{
            type:'category',
            label:'행동 패턴',
            items:[
                {
                    type:'autogenerated',
                    dirName: 'DP--behavioral-patterns'
                }
            ]
        },
    ],
    dartSidebar:[
        'dart-intro',
        {
            type: 'category',
            label: 'Dart',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'dart'
                }
            ]
        },
        {
            type: 'category',
            label: 'Flutter',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'flutter'
                }
            ]
        },
        {
            type: 'category',
            label: 'Flutter-KOSTA',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'flutter-kosta'
                }
            ]
        },
    ],
    goSidebar:[
        {
            type: 'category',
            label: 'Go',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'go'
                }
            ]
        },
    ],
    backSidebar:[
        {
            type: 'category',
            label: 'BackEnd Basic',
            items:[
                {
                    type:'autogenerated',
                    dirName:'backend-basic'
                },
            ]
        },
        {
            type: 'category',
            label: 'BackEnd Master',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'backend-master'
                },
                {
                    type: 'autogenerated',
                    dirName: 'backend-master2'
                }
            ]
        },
        {
            type:'category',
            label:'gRPC',
            items:[
                {
                    type:'autogenerated',
                    dirName:'gRPC'
                }
            ]
        },
        {
            type: 'category',
            label: 'Dev-Ops',
            items:[
                {
                    type:'autogenerated',
                    dirName:'dev-ops'
                },
            ]
        },
        {
            type: 'category',
            label: 'NestJS',
            items:[
                {
                    type:'autogenerated',
                    dirName:'nestjs'
                },
            ]
        },
    ],
    algorithmSidebar:[
        {
            type: 'category',
            label: 'Algorithm',
            items:[
                {
                    type: 'autogenerated',
                    dirName: 'algorithm'
                }
            ]
        },
    ],
};

module.exports = sidebars;
