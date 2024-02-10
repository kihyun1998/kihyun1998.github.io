"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},40583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={slug:"design pattern rule",title:"[SOLID] \uac1d\uccb4 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d(OOP) \uc6d0\uce59",authors:["kihyun"],tags:["design pattern","rule"]},a=void 0,p={permalink:"/blog/design pattern rule",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-29-rule/index.md",source:"@site/blog/2023-08-29-rule/index.md",title:"[SOLID] \uac1d\uccb4 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d(OOP) \uc6d0\uce59",description:"SRP ( \ub2e8\uc77c \ucc45\uc784\uc758 \uc6d0\uce59 : Single Responsibility Principle )",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"design pattern",permalink:"/blog/tags/design-pattern"},{label:"rule",permalink:"/blog/tags/rule"}],readingTime:1.925,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"design pattern rule",title:"[SOLID] \uac1d\uccb4 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d(OOP) \uc6d0\uce59",authors:["kihyun"],tags:["design pattern","rule"]},prevItem:{title:"\uc804\ub7b5 \ud328\ud134 - Strategy pattern",permalink:"/blog/strategy pattern"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},o={authorsImageUrls:[void 0]},s=[{value:"SRP ( \ub2e8\uc77c \ucc45\uc784\uc758 \uc6d0\uce59 : Single Responsibility Principle )",id:"srp--\ub2e8\uc77c-\ucc45\uc784\uc758-\uc6d0\uce59--single-responsibility-principle-",level:2},{value:"OCP ( \uacc4\ubc29-\ud3d0\uc1c4\uc758 \uc6d0\uce59 : Open Close Principle )",id:"ocp--\uacc4\ubc29-\ud3d0\uc1c4\uc758-\uc6d0\uce59--open-close-principle-",level:2},{value:"LSP ( \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658\uc758 \uc6d0\uce59 : The LisKov Substitution Principle )",id:"lsp--\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658\uc758-\uc6d0\uce59--the-liskov-substitution-principle-",level:2},{value:"ISP ( \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac\uc758 \uc6d0\uce59 : Interface Segregation Principle )",id:"isp--\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac\uc758-\uc6d0\uce59--interface-segregation-principle-",level:2},{value:"DIP ( \uc758\uc874\uc131 \uc5ed\uc804\uc758 \uc6d0\uce59 : Dependency Inversion Principle )",id:"dip--\uc758\uc874\uc131-\uc5ed\uc804\uc758-\uc6d0\uce59--dependency-inversion-principle-",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"srp--\ub2e8\uc77c-\ucc45\uc784\uc758-\uc6d0\uce59--single-responsibility-principle-"},"SRP ( \ub2e8\uc77c \ucc45\uc784\uc758 \uc6d0\uce59 : Single Responsibility Principle )"),(0,i.kt)("h2",{id:"ocp--\uacc4\ubc29-\ud3d0\uc1c4\uc758-\uc6d0\uce59--open-close-principle-"},"OCP ( \uacc4\ubc29-\ud3d0\uc1c4\uc758 \uc6d0\uce59 : Open Close Principle )"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubc14\ub00c\ub294 \ubd80\ubd84\uc744 \ucea1\uc290\ud654\ud55c\ub2e4."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ubcc0\ud558\ub294(\ud655\uc7a5\ub418\ub294) \uac83\uacfc \ubcc0\ud558\uc9c0 \uc54a\uc744 \uac83\uc744 \uad6c\ubd84"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uc0c1\uc18d\ubcf4\ub2e4\ub294 \uad6c\uc131\uc744 \ud65c\uc6a9\ud55c\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uad6c\ud604\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub9de\ucdb0\uc11c \ud504\ub85c\uadf8\ub798\ubc0d\ud55c\ub2e4."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc815\uc758\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc758\uc874"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uc0c1\ud638\uc791\uc6a9\ud558\ub294 \uac1d\uccb4 \uc0ac\uc774\uc5d0\uc11c\ub294 \uac00\ub2a5\ud558\uba74 \ub290\uc2a8\ud55c \uacb0\ud569\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ud074\ub798\uc2a4\ub294 \ud655\uc7a5\uc5d0\ub294 \uc5f4\ub824\uc788\uc5b4\uc57c \ud558\uace0 \ubcc0\uacbd\uc5d0\ub294 \ub2eb\ud600 \uc788\uc5b4\uc57c \ud55c\ub2e4."))),(0,i.kt)("h2",{id:"lsp--\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658\uc758-\uc6d0\uce59--the-liskov-substitution-principle-"},"LSP ( \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658\uc758 \uc6d0\uce59 : The LisKov Substitution Principle )"),(0,i.kt)("h2",{id:"isp--\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac\uc758-\uc6d0\uce59--interface-segregation-principle-"},"ISP ( \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac\uc758 \uc6d0\uce59 : Interface Segregation Principle )"),(0,i.kt)("h2",{id:"dip--\uc758\uc874\uc131-\uc5ed\uc804\uc758-\uc6d0\uce59--dependency-inversion-principle-"},"DIP ( \uc758\uc874\uc131 \uc5ed\uc804\uc758 \uc6d0\uce59 : Dependency Inversion Principle )"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ucd94\uc0c1\ud654\ub41c \uac83\uc5d0 \uc758\uc874\ud558\uac8c \ub9cc\ub4e4\uace0 \uad6c\uc0c1 \ud074\ub798\uc2a4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uac8c \ub9cc\ub4e0\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uace0\uc218\uc900 \uad6c\uc131 \uc694\uc18c\uac00 \uc800\uc218\uc900 \uad6c\uc131 \uc694\uc18c\uc5d0 \uc758\uc874\ud558\uba74 \uc548\ub418\uace0 \ud56d\uc0c1 \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4.\n",(0,i.kt)("inlineCode",{parentName:"p"},"\uace0\uc218\uc900 \uad6c\uc131 \uc694\uc18c")," : \ub2e4\ub978 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc800\uc218\uc900 \uad6c\uc131 \uc694\uc18c"),"\uc5d0 \uc758\ud574 \uc815\uc758\ub418\ub294 \ud589\ub3d9\uc774 \ub4e4\uc5b4\uc788\ub294 \uad6c\uc131 \uc694\uc18c")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubcc0\uc218\uc5d0 \uad6c\uc0c1 \ud074\ub798\uc2a4\uc758 \ub808\ud37c\ub7f0\uc2a4\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uad6c\uc0c1 \ud074\ub798\uc2a4\uc5d0\uc11c \uc720\ub3c4\ub41c \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc9c0 \uc54a\ub294\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubca0\uc774\uc2a4 \ud074\ub798\uc2a4\uc5d0 \uc774\ubbf8 \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uba54\uc18c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub4dc\ud558\uc9c0 \uc54a\ub294\ub2e4."))))}m.isMDXComponent=!0}}]);