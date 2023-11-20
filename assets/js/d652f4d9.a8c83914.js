"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||k[d]||l;return n?r.createElement(b,s(s({ref:t},i),{},{components:n})):r.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:31},s="31. [BackEnd] kubectl & k9s",u={unversionedId:"backend-master2/backend31",id:"backend-master2/backend31",title:"31. [BackEnd] kubectl & k9s",description:"\uc704 \ub450 \ub3c4\uad6c\ub4e4\uc740 kubernates \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc811\uc18d\ud558\ub294 2\uac1c cli \ud234\uc774\ub2e4.",source:"@site/docs/backend-master2/backend31.md",sourceDirName:"backend-master2",slug:"/backend-master2/backend31",permalink:"/docs/backend-master2/backend31",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"backSidebar",previous:{title:"30. [BackEnd] \ucfe0\ubc84\ub124\ud2f0\uc2a4 + EKS",permalink:"/docs/backend-master2/backend30"}},c={},o=[{value:"kubectl",id:"kubectl",level:2},{value:"AWS EKS\uc640 \uc5f0\uacb0 \ubc29\ubc95",id:"aws-eks\uc640-\uc5f0\uacb0-\ubc29\ubc95",level:3},{value:"\uad8c\ud55c \uc124\uc815 \ubc29\ubc95",id:"\uad8c\ud55c-\uc124\uc815-\ubc29\ubc95",level:3},{value:"\uc5d0\ub7ec \ud574\uacb0",id:"\uc5d0\ub7ec-\ud574\uacb0",level:2},{value:"GitHub CLI Credential \uc0ac\uc6a9 \ubc29\ubc95",id:"github-cli-credential-\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"Github user\uac00 cluster \uc0ac\uc6a9\uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815",id:"github-user\uac00-cluster-\uc0ac\uc6a9\uac00\ub2a5\ud558\ub3c4\ub85d-\uc124\uc815",level:2},{value:"k9s",id:"k9s",level:2}],i={toc:o},p="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31-backend-kubectl--k9s"},"31. ","[BackEnd]"," kubectl & k9s"),(0,a.kt)("p",null,"\uc704 \ub450 \ub3c4\uad6c\ub4e4\uc740 kubernates \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc811\uc18d\ud558\ub294 2\uac1c cli \ud234\uc774\ub2e4."),(0,a.kt)("h2",{id:"kubectl"},"kubectl"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/"},"\uc5ec\uae30")," \ubcf4\uad6c \uc124\uce58 \uac00\ub2a5"),(0,a.kt)("h3",{id:"aws-eks\uc640-\uc5f0\uacb0-\ubc29\ubc95"},"AWS EKS\uc640 \uc5f0\uacb0 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name <\ud074\ub7ec\uc2a4\ud130\uc774\ub984> --region <\uc9c0\uc5ed \ucf54\ub4dc>\n")),(0,a.kt)("p",null,"\uadfc\ub370 \uad8c\ud55c\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uc5d0\ub7ec\uac00 \ub098\uc62c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad8c\ud55c-\uc124\uc815-\ubc29\ubc95"},"\uad8c\ud55c \uc124\uc815 \ubc29\ubc95"),(0,a.kt)("p",null,"AWS IAM > \uc561\uc138\uc2a4 \uad00\ub9ac > \uc0ac\uc6a9\uc790 \uadf8\ub8f9 > \uad8c\ud55c > \uad8c\ud55c \ucd94\uac00 > \uc778\ub77c\uc778 \uc815\ucc45 \uc0dd\uc131 >"),(0,a.kt)("p",null,"\uc11c\ube44\uc2a4 : EKS, All \uccb4\ud06c, Resource: ALL > \uc815\ucc45\uc774\ub984 \uc124\uc815\ud558\uba74 \ub05d"),(0,a.kt)("p",null,"\uad8c\ud55c \uc124\uc815\ud558\uace0 \uc704 \uc5f0\uacb0 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uac8c \ub41c\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\uac00 \uc0dd\uae41\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ud30c\uc77c\uc744 \ubd24\uc744 \ub54c contexts.context.cluster\uac00 \uc774\ub984\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub97c \uc0ac\uc6a9\ud574\uc11c \uc5ec\ub7ec \ud074\ub7ec\uc2a4\ud130\uac00 \uc788\uc744 \ub54c \uc544\ub798 \uba85\ub839\uc5b4\ub85c \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config user-context <\uc774\ub984>\n")),(0,a.kt)("h2",{id:"\uc5d0\ub7ec-\ud574\uacb0"},"\uc5d0\ub7ec \ud574\uacb0"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"error: You must be logged in to the server (the server has asked for the client to provide credentials)\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc5d0\ub7ec\uac00 \ub0a9\ub2c8\ub2e4. \ud574\uacb0 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"IAM > \ub0b4 \ubcf4\uc548 \uc790\uaca9 \uc99d\uba85 > \uc561\uc138\uc2a4 \ud0a4 > \uc561\uc138\uc2a4 \ud0a4 \ub9cc\ub4e4\uae30 > \ub9cc\ub4e0\ud0a4\ub85c \uac12\ub123\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vi ~/.aws/credentials\n")),(0,a.kt)("p",null,"\uae30\uc874 ",(0,a.kt)("inlineCode",{parentName:"p"},"[default]"),"\ud0a4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"[github]"),"\ub85c \ubcc0\uacbd\ud558\uace0 \uc774 \uc561\uc138\uc2a4\ud0a4 \uac12\uc744 default\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),(0,a.kt)("p",null,"\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"github-cli-credential-\uc0ac\uc6a9-\ubc29\ubc95"},"GitHub CLI Credential \uc0ac\uc6a9 \ubc29\ubc95"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export AWS_PROFILE=github\n")),(0,a.kt)("h2",{id:"github-user\uac00-cluster-\uc0ac\uc6a9\uac00\ub2a5\ud558\ub3c4\ub85d-\uc124\uc815"},"Github user\uac00 cluster \uc0ac\uc6a9\uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: aws-auth\n  namespace: kube-system\ndata:\n  mapUsers: |\n    - groups:\n      - system:masters\n      userarn: <\uc720\uc800 arn>\n      username: <\uc720\uc800 \uc774\ub984>\n")),(0,a.kt)("p",null,"\uc601\uc0c1\uc774\ub791 format\uc774 \ubc14\ub00c\uc5b4\uc11c \uaf64\ub098 \uace0\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \ucc38\uc870\ud560 \uc218 \uc788\ub294 URL\uc744 \uc800\uc7a5\ud574\ub194\uc57c\uaca0\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/add-user-role.html"},"\uc5ec\uae30"),"\ub294 aws-auth.yaml\uc5d0 \ub300\ud55c \uc608\uc2dc\uac00 \ub2f4\uacbc\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://repost.aws/ko/knowledge-center/amazon-eks-cluster-access"},"\uc5ec\uae30"),"\ub294 \uc804\uccb4\uc801\uc778 \uacfc\uc815\uc774 \ub2f4\uacbc\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac8c Github \uc720\uc800\uc5d0\uac8c cluster \uc0ac\uc6a9 \uad8c\ud55c\uc744 \uc8fc\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"k9s"},"k9s"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"kubectl\ubcf4\ub2e4 \uc27d\uace0 \uc88b\uc740 \ud234\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://k9scli.io/"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadfc\ub370 \uc774\uac70 \uc798 \uc548\ub41c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jusths.tistory.com/267"},"\uc774 \ubd84"),"\uc774 \uc798 \uc815\ub9ac\ud574\ub193\uc73c\uc168\ub2e4."))}k.isMDXComponent=!0}}]);