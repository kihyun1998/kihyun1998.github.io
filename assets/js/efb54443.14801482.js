"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[38859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={sidebar_position:10},o="[Go] go-wails \uc0ac\uc6a9\ud558\uae30",i={unversionedId:"go/go10",id:"go/go10",title:"[Go] go-wails \uc0ac\uc6a9\ud558\uae30",description:"---",source:"@site/docs/go/go10.md",sourceDirName:"go",slug:"/go/go10",permalink:"/docs/go/go10",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"goSidebar",previous:{title:"[Go] linux golang \uc124\uce58",permalink:"/docs/go/go9"},next:{title:"[Go] go-fyne \uc0ac\uc6a9\ud558\uae30",permalink:"/docs/go/go11"}},p={},s=[{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",level:2},{value:"init",id:"init",level:3},{value:"\uc758\uc874\uc131 \uc124\uce58",id:"\uc758\uc874\uc131-\uc124\uce58",level:3},{value:"pnpm \uc0ac\uc6a9\ud558\uae30",id:"pnpm-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\uc2e4\ud589",id:"\uc2e4\ud589",level:3},{value:"\ube4c\ub4dc",id:"\ube4c\ub4dc",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-go-wails-\uc0ac\uc6a9\ud558\uae30"},"[Go]"," go-wails \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Golang\uc5d0\uc11c UI\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"wails"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub77c\uc774\uc120\uc2a4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"MIT")," \uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wails init -n project\uc774\ub984 -t react-ts\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react-ts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vanilla")," \ub4f1 \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub85c \ud504\ub860\ud2b8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc758\uc874\uc131-\uc124\uce58"},"\uc758\uc874\uc131 \uc124\uce58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod tidy\ncd frontend\nnpm install\n")),(0,a.kt)("p",null,"\uc774\uac78\ub85c \uc758\uc874\uc131 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"pnpm-\uc0ac\uc6a9\ud558\uae30"},"pnpm \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pnpm\n")),(0,a.kt)("p",null,"pnpm \uc124\uce58 \ud6c4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wails.json"),"\uc5d0\uc11c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "frontend:install": "pnpm install",\n  "frontend:build": "pnpm run build",\n  "frontend:dev:watcher": "pnpm run dev",\n')),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend\npnpm install\n")),(0,a.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub85c \uc124\uce58\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc2e4\ud589"},"\uc2e4\ud589"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wails dev\n")),(0,a.kt)("h3",{id:"\ube4c\ub4dc"},"\ube4c\ub4dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wails build\n")))}d.isMDXComponent=!0}}]);