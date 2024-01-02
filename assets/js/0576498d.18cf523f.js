"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),k=o,y=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},17711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:3},a="[Gitlab] CI/CD \uc2e4\uc2b5 2",s={unversionedId:"dev-ops/dev-ops3",id:"dev-ops/dev-ops3",title:"[Gitlab] CI/CD \uc2e4\uc2b5 2",description:"---",source:"@site/docs/dev-ops/dev-ops3.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops3",permalink:"/docs/dev-ops/dev-ops3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"backSidebar",previous:{title:"[Gitlab] CI/CD \uc2e4\uc2b5",permalink:"/docs/dev-ops/dev-ops2"},next:{title:"[Gitlab] Gitlab ce \uc124\uce58",permalink:"/docs/dev-ops/dev-ops4"}},i={},p=[{value:"Continuous Deploy",id:"continuous-deploy",level:2},{value:"ssh-key \uc124\uc815",id:"ssh-key-\uc124\uc815",level:3},{value:"docker \uc124\uce58",id:"docker-\uc124\uce58",level:3},{value:"\ubcc0\uc218 \ucd94\uac00",id:"\ubcc0\uc218-\ucd94\uac00",level:3},{value:"docker \uc811\uc18d \ubc0f \uc2e4\ud589",id:"docker-\uc811\uc18d-\ubc0f-\uc2e4\ud589",level:3},{value:"\ud30c\uc77c \uad8c\ud55c",id:"\ud30c\uc77c-\uad8c\ud55c",level:3},{value:"\uadfc\ub370 \uc548\ub41c\ub2e4.",id:"\uadfc\ub370-\uc548\ub41c\ub2e4",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitlab-cicd-\uc2e4\uc2b5-2"},"[Gitlab]"," CI/CD \uc2e4\uc2b5 2"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"continuous-deploy"},"Continuous Deploy"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ssh-key-\uc124\uc815"},"ssh-key \uc124\uc815"),(0,o.kt)("p",null,"ssh-keygen\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"-i \uc635\uc158\uc744 \uc8fc\uc5b4 \ud0a4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc708\ub3c4\uc6b0\uc5d0\uc11c\ub294"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i C:\\\\Users\\\\User\\\\.ssh\\\\custom_key user@<\uc544\uc774\ud53c>\n")),(0,o.kt)("p",null,"\ub9ac\ub205\uc2a4/MAC OS\uc5d0\uc11c\ub294"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i ~/.ssh/custom_key user@<\uc544\uc774\ud53c>\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \ub300\uc0c1 \uc6b0\ubd84\ud22c \uc11c\ubc84\uc5d0 ~/.ssh/authorized_keys\uc5d0 public key\ub97c \uc785\ub825\ud55c\ub2e4."),(0,o.kt)("h3",{id:"docker-\uc124\uce58"},"docker \uc124\uce58"),(0,o.kt)("p",null,"docker\ub97c \uc0ac\uc6a9\ud560 \uac83\uc774\uae30\uc5d0 \ub300\uc0c1 \uc11c\ubc84\uc5d0 docker\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install docker.io\n")),(0,o.kt)("h3",{id:"\ubcc0\uc218-\ucd94\uac00"},"\ubcc0\uc218 \ucd94\uac00"),(0,o.kt)("p",null,"gitlab ci/cd settings\uc5d0\uc11c SSH_KEY \ubcc0\uc218\ub97c file\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub54c \ubcc0\uc218 \uac12\uc740 private\ud0a4\ub97c \ub123\uc73c\uba74 \ub418\uace0 \uac12\uc5d0 \ub9c8\uc9c0\ub9c9\uc5d0 \uc5d4\ud130\ub97c \uccd0\uc11c \ub9c8\uc9c0\ub9c9 \ube48 \ud55c \uc904\uc744 \ub9cc\ub4e4\uc5b4\uc918\uc57c\ud55c\ub2e4\uace0 \ud558\ub124\uc694."),(0,o.kt)("h3",{id:"docker-\uc811\uc18d-\ubc0f-\uc2e4\ud589"},"docker \uc811\uc18d \ubc0f \uc2e4\ud589"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  ...\n  - deploy\n\ndeploy:\n  stage: deploy\n  script: ssh -o StrictHostKeyChecking=no -i $SSH_KEY root@192.168.135.85 "\n    docker login -u $LOGIN_USER -p $LOGIN_PASS &&\n    docker ps -aq | xargs docker stop | xargs docker rm &&\n    docker run -d -p 5000:5000 $IMAGE_NAME:$IMAGE_TAG\n  "\n')),(0,o.kt)("p",null,"deploy stage\ub97c \ub9cc\ub4e4\uace0 stage\ub97c deploy\ub85c \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"script\ub85c\ub294 \uba3c\uc800 SSH_KEY\ub97c \uc0ac\uc6a9\ud574\uc11c ssh\uc811\uc18d\uc744 \ud558\ub294\ub370 ",(0,o.kt)("inlineCode",{parentName:"p"},"-o StrictHostKeyChecking=no")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud574\uc11c \uc811\uc18d \uc2dc \uc218\ub3d9 \ud655\uc778\uc744 \uaebc\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 login\uc744 \uc9c4\ud589\ud558\uace0"),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \ud639\uc2dc \ubd88\ud544\uc694\ud55c docker container\uac00 \ucf1c\uc838\uc788\ub294\uc9c0 \ud655\uc778 \ud6c4 \uc885\ub8cc \uc791\uc5c5\uc744 \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \ubc30\ud3ec\ud560 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ud30c\uc77c-\uad8c\ud55c"},"\ud30c\uc77c \uad8c\ud55c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  before_script:\n    - chmod 400 $SSH_KEY\n")),(0,o.kt)("p",null,"\ud30c\uc77c \uad8c\ud55c\uc744 \uc704\ud574 SSH_KEY\uc758 \uad8c\ud55c\uc744 400\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uadfc\ub370-\uc548\ub41c\ub2e4"},"\uadfc\ub370 \uc548\ub41c\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ubc30\ud3ec\ud558\ub824\ub294 \uc11c\ubc84 IP\uac00 \ub85c\uceec\uc774\ub77c \uc548\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"self-hosted\ud574\uc57c\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);