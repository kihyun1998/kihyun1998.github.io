"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:28},c="28. [BackEnd] AWS RDS",i={unversionedId:"backend-master/backend28",id:"backend-master/backend28",title:"28. [BackEnd] AWS RDS",description:"RDS \uc0ac\uc6a9\ud558\uae30",source:"@site/docs/backend-master/backend28.md",sourceDirName:"backend-master",slug:"/backend-master/backend28",permalink:"/docs/backend-master/backend28",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"backSidebar",previous:{title:"27. [BackEnd] GitHub Action\uc73c\ub85c \ub3c4\ucee4 \uc774\ubbf8\uc9c0 AWS\uc5d0 \uc790\ub3d9 \ube4c\ub4dc",permalink:"/docs/backend-master/backend27"},next:{title:"29. [BackEnd] AWS Secret Manager",permalink:"/docs/backend-master/backend29"}},s={},l=[{value:"RDS \uc0ac\uc6a9\ud558\uae30",id:"rds-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ub9cc\ub4e4\uae30",id:"\ub9cc\ub4e4\uae30",level:3},{value:"migrate \ud558\uae30",id:"migrate-\ud558\uae30",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"28-backend-aws-rds"},"28. ","[BackEnd]"," AWS RDS"),(0,a.kt)("h2",{id:"rds-\uc0ac\uc6a9\ud558\uae30"},"RDS \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\ub9cc\ub4e4\uae30"},"\ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,"RDS > Databases > Create database > Standard create > DB \uc5d4\uc9c4 \uc120\ud0dd \ubc0f \ubc84\uc804 \uc120\ud0dd > \ud15c\ud50c\ub9bf(\ud504\ub9ac \ud2f0\uc5b4) > DB \uc778\uc2a4\ud134\uc2a4 \uc774\ub984, \ub9c8\uc2a4\ud130 \uc774\ub984 \uc124\uc815 > \uc554\ud638 \uc790\ub3d9 \uc0dd\uc131 \uccb4\ud06c > \uc2a4\ud1a0\ub9ac\uc9c0 \uc790\ub3d9 \uc870\uc815 \ube44\ud65c\uc131\ud654 > \ud37c\ube14\ub9ad \uc561\uc138\uc2a4 yes > VPC \ubcf4\uc548 \uadf8\ub8f9 \uc0c8\ub85c \uc0dd\uc131  > \ucd94\uac00\uad6c\uc131(\ucd08\uae30 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984 \uc791\uc131) > \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0dd\uc131"),(0,a.kt)("p",null,"\ubcf4\uc548 \uadf8\ub8f9\uc5d0\uc11c \ud5c8\uc6a9 \uc544\uc774\ud53c\ub97c anywhere\ub85c \ud55c\ub2e4."),(0,a.kt)("h3",{id:"migrate-\ud558\uae30"},"migrate \ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'migrateup:\n    migrate -path db/migration/ -database "postgresql://root:Password@URL:5432/simple_bank" -verbose up\n')),(0,a.kt)("p",null,"make\ud30c\uc77c\uc744 \uc704\ucc98\ub7fc \uc124\uc815\ud588\ub2e4."),(0,a.kt)("p",null,"\ucc98\uc74c\uc5d0 \uc548\ub410\ub294\ub370 \uadf8 \uc774\uc720\ub294 sslmode=disabled\uc5ec\uc11c \uc548\ub410\uc5c8\ub2e4."))}u.isMDXComponent=!0}}]);