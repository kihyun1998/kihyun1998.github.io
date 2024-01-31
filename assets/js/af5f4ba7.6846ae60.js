"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),k=a,m=p["".concat(o,".").concat(k)]||p[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:27},i="27. [BackEnd] GitHub Action\uc73c\ub85c \ub3c4\ucee4 \uc774\ubbf8\uc9c0 AWS\uc5d0 \uc790\ub3d9 \ube4c\ub4dc",c={unversionedId:"backend-master/backend27",id:"backend-master/backend27",title:"27. [BackEnd] GitHub Action\uc73c\ub85c \ub3c4\ucee4 \uc774\ubbf8\uc9c0 AWS\uc5d0 \uc790\ub3d9 \ube4c\ub4dc",description:"Elastic Container Registry",source:"@site/docs/backend-master/backend27.md",sourceDirName:"backend-master",slug:"/backend-master/backend27",permalink:"/docs/backend-master/backend27",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"backSidebar",previous:{title:"26. [BackEnd] docker compose \uc0ac\uc6a9",permalink:"/docs/backend-master/backend26"},next:{title:"28. [BackEnd] AWS RDS",permalink:"/docs/backend-master/backend28"}},o={},s=[{value:"Elastic Container Registry",id:"elastic-container-registry",level:2},{value:"ci.yaml \ud30c\uc77c \ubcc0\uacbd",id:"ciyaml-\ud30c\uc77c-\ubcc0\uacbd",level:2},{value:"check out",id:"check-out",level:3},{value:"AWS credential \uc124\uc815",id:"aws-credential-\uc124\uc815",level:3},{value:"AWS Login \uc124\uc815",id:"aws-login-\uc124\uc815",level:3},{value:"Build \uc124\uc815",id:"build-\uc124\uc815",level:3},{value:"\ud655\uc778\ud558\uae30",id:"\ud655\uc778\ud558\uae30",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"27-backend-github-action\uc73c\ub85c-\ub3c4\ucee4-\uc774\ubbf8\uc9c0-aws\uc5d0-\uc790\ub3d9-\ube4c\ub4dc"},"27. ","[BackEnd]"," GitHub Action\uc73c\ub85c \ub3c4\ucee4 \uc774\ubbf8\uc9c0 AWS\uc5d0 \uc790\ub3d9 \ube4c\ub4dc"),(0,a.kt)("h2",{id:"elastic-container-registry"},"Elastic Container Registry"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \uc800\uc7a5\uc18c\ub97c \uc704\ud574 AWS\uc758 Elastic Container Registry\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc9c0\uc5ed\uc740 \uc11c\uc6b8\ub85c \ubcc0\uacbd\ud558\uad6c\uc694 "),(0,a.kt)("p",null,"aws\uc5d0 \ub4e4\uc5b4\uac00\uc11c Elastic Container Registry\ub97c \uac80\uc0c9\ud574\uc11c \ub4e4\uc5b4\uac04 \ub2e4\uc74c\uc5d0 \uc0c8 \uc800\uc7a5\uc18c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(3342).Z,width:"843",height:"637"})),(0,a.kt)("p",null,"\ud2b9\ubcc4\ud55c \uc124\uc815\uc744 \ud558\uc9c0 \uc54a\uace0 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"ciyaml-\ud30c\uc77c-\ubcc0\uacbd"},"ci.yaml \ud30c\uc77c \ubcc0\uacbd"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"aws-cli\ub97c \uc0ac\uc6a9\ud574\uc11c docker \uc774\ubbf8\uc9c0\ub97c push\ud558\ub294 \uba85\ub839\uc5b4\ub294 \uc788\uc9c0\ub9cc github actions\ub97c \uc0ac\uc6a9\ud574\uc11c \uc790\ub3d9 \ube4c\ub4dc\ud558\ub3c4\ub85d \ud558\uaca0\ub2e4\uace0 \ud558\ub124\uc694."),(0,a.kt)("p",null,"\uae30\uc874 ci.yaml\uc740 test.yaml\ub85c \ubc14\uafb8\uace0 deploy.yaml\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"check-out"},"check out"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: \u2705 Check out code\n        uses: actions/checkout@v3\n")),(0,a.kt)("h3",{id:"aws-credential-\uc124\uc815"},"AWS credential \uc124\uc815"),(0,a.kt)("p",null,"2\uac00\uc9c0 \ubc84\uc804\uc774 \uc788\ub294\ub370 \uba3c\uc800 \uc601\uc0c1\uc5d0\uc11c \uc18c\uac1c\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: Configure AWS credentials\n        uses: aws-actions/configure-aws-credentials@v1\n        with:\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-acess-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ap-northeast-2\n")),(0,a.kt)("p",null,"AWS\uc5d0 \uc62c\ub9ac\uae30 \uc704\ud574\uc11c \ub85c\uadf8\uc778\uc744 \ud574\uc57c\ud558\ub294\ub370 \ub85c\uadf8\uc778\uc744 \uc704\ud55c credentials \uc124\uc815\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc561\uc138\uc2a4 \ud0a4\uc640 \ube44\ubc00\ud0a4\ub97c \ubc1b\uae30 \uc704\ud55c \uc5ec\uc815\uc744 \ub5a0\ub098\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"AWS\uc5d0\uc11c \uac80\uc0c9 \ucc3d\uc5d0 IAM \uac80\uc0c9\ud574\uc11c \ub4e4\uc5b4\uac11\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(25892).Z,width:"2516",height:"1300"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"[\uc0ac\uc6a9\uc790 \uc0dd\uc131\ud558\uae30]"," \uc0ac\uc6a9\uc790 > \uc0ac\uc6a9\uc790 \uc0dd\uc131 > \uc0ac\uc6a9\uc790 \uc774\ub984 \uc791\uc131 > \ub2e4\uc74c > \uadf8\ub8f9 \uc0dd\uc131 > \uadf8\ub8f9 \uc774\ub984  > \uad8c\ud55c \uc815\ucc45 \uac80\uc0c9(amazonEC2ContainerRegistryFullAccess) > \uc124\uc815 \ud6c4 \uc0ac\uc6a9\uc790 \uadf8\ub8f9 \uc0dd\uc131 > \uad8c\ud55c \uc815\ucc45 > \uad8c\ud55c \uacbd\uacc4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucd5c\ub300 \uad8c\ud55c \uc81c\uc5b4 \ud65c\uc131\ud654 > \ub2e4\uc74c > \uc0ac\uc6a9\uc790 \uc0dd\uc131 > \uc561\uc138\uc2a4 \ud0a4 \ub9cc\ub4e4\uae30")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"[\ube44\ubc00\ud0a4 \uc0dd\uc131\ud558\uae30]"," \uc800\uc7a5\uc18c > \uc124\uc815 > Secret and variables > Actions"))),(0,a.kt)("p",null,"Environment secrets\uacfc Repository secrets\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Environment secrets"),"\uc740 \ud2b9\uc815 \ud658\uacbd\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud14c\uc2bd, \uc2a4\ud14c\uc774\uc9d5, \ud504\ub85c\ub355\uc158 \ub4f1 \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \ub2e4\ub978 \ube44\ubc00\ud0a4 \uac16\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Repository secrets"),"\ub294 \uc804\uccb4 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"[Repository secrets]"," New repository secrets\ub97c \ud074\ub9ad > \uc774\ub984 \uc791\uc131(AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY) > \uac12\uc5d0 AWS \uc561\uc138\uc2a4 \ud0a4 \ubcf5\ubd99")),(0,a.kt)("h3",{id:"aws-login-\uc124\uc815"},"AWS Login \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: Login to Amazon ECR\n        id: login-ecr\n        uses: aws-actions/amazon-ecr-login@v2\n")),(0,a.kt)("h3",{id:"build-\uc124\uc815"},"Build \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: Build, tag, and push docker image to Amazon ECR\n        env:\n          REGISTRY: ${{ steps.login-ecr.outputs.registry }}\n          REPOSITORY: simplebank\n          IMAGE_TAG: ${{ github.sha }}\n        run: |\n          docker build -t $REGISTRY/$REPOSITORY:$IMAGE_TAG .\n          docker push $REGISTRY/$REPOSITORY:$IMAGE_TAG\n")),(0,a.kt)("p",null,"env.REPOSITORY\ub294 ecr\uc5d0\uc11c \ub9cc\ub4e0 \uc800\uc7a5\uc18c \uc774\ub984\uc73c\ub85c \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud655\uc778\ud558\uae30"},"\ud655\uc778\ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"ECR\uc5d0\uc11c \ub9cc\ub4e0 \uc800\uc7a5\uc18c\uc5d0 \ub4e4\uc5b4\uac00\ubcf4\uba74 \uc774\ubbf8\uc9c0\uac00 \uc0dd\uae34 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},3342:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image1-64cda9184c8e640a96632bc8813cd087.png"},25892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image2-cd32f37c3631967d289baba5ef403113.png"}}]);