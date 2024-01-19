"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={slug:"flutter-til-3",title:"Flutter TIL - 3",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","riverpod","notifier","dart \uc0dd\uc131\uc790"]},l="Flutter TIL - 3",o={permalink:"/blog/flutter-til-3",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-20-til3/index.md",source:"@site/blog/2023-12-20-til3/index.md",title:"Flutter TIL - 3",description:"---",date:"2023-12-20T00:00:00.000Z",formattedDate:"December 20, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"riverpod",permalink:"/blog/tags/riverpod"},{label:"notifier",permalink:"/blog/tags/notifier"},{label:"dart \uc0dd\uc131\uc790",permalink:"/blog/tags/dart-\uc0dd\uc131\uc790"}],readingTime:1.245,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-3",title:"Flutter TIL - 3",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","riverpod","notifier","dart \uc0dd\uc131\uc790"]},prevItem:{title:"Flutter TIL - 4",permalink:"/blog/flutter-til-4"},nextItem:{title:"Flutter TIL - 2",permalink:"/blog/flutter-til-2"}},p={authorsImageUrls:[void 0]},u=[{value:"NotifierProvider\uc758 notifier \uba54\uc18c\ub4dc",id:"notifierprovider\uc758-notifier-\uba54\uc18c\ub4dc",level:2},{value:"dart \uc0dd\uc131\uc790",id:"dart-\uc0dd\uc131\uc790",level:2},{value:"named parameter",id:"named-parameter",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notifierprovider\uc758-notifier-\uba54\uc18c\ub4dc"},"NotifierProvider\uc758 notifier \uba54\uc18c\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final cartProvider = NotifierProvider<RiverpodCart, List<Product>>(() {\n  return RiverpodCart();\n});\n")),(0,a.kt)("p",null,"\ud50c\ub7ec\ud130\ub294 \uc704\ucc98\ub7fc provider\ub97c \uc704\uc82f\ud2b8\ub9ac\uc5d0 \ub530\ub85c \ub4f1\ub85d\ud558\uc9c0 \uc54a\uace0 \ubcc0\uc218\ub85c \uc120\uc5b8\ud574\uc11c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"return ProductTile(\n  product: product,\n  isInCart: ref.watch(cartProvider).contains(product),\n  onPressed: ref.read(cartProvider.notifier).onProductPressed,\n);\n")),(0,a.kt)("p",null,"\uc2e0\uae30\ud55c \uac83\uc774 \uc788\uc5c8\ub2e4. \uc774\ub807\uac8c \uc804\uc5ed\ubcc0\uc218\ub85c \uc120\uc5b8\ud55c \uac83\uc744 watch\ud558\uace0 read\ud558\ub294 \uac83\uc740 \uc774\ud574\ub97c \ud588\ub294\ub370 \uac11\uc790\uae30 ",(0,a.kt)("inlineCode",{parentName:"p"},".notifier"),".. \uc774\uac74 \ubb50\uc9c0"),(0,a.kt)("p",null,"\uc2e4\ud5d8\ud574\ubcf4\uace0 \ucc3e\uc544\ubcf4\ub2c8 ",(0,a.kt)("inlineCode",{parentName:"p"},".notifier"),"\ub97c \ubd99\uc774\uba74 \ud574\ub2f9 provider\uc758 class\ub85c \uc811\uadfc\ud574\uc11c \uadf8 class\uc758 \uba54\uc18c\ub4dc \ub4f1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uac83."),(0,a.kt)("p",null,"\uc989 \uc704\uc5d0\uc11c cartProvider\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"NotifierProvider<RiverpodCart, List<Product>>")," \uc911 \uc55e \ubd80\ubd84\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"RiverpodCart"),"\uc5d0 \uc811\uadfc\ud558\ub294 \ub290\ub08c\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".notifier"),"\ub97c \ubd99\uc774\uc9c0 \uc54a\uc73c\uba74 \uc774 provider\uc758 \uc0c1\ud0dc\ub85c \uc811\uadfc\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\uc989 ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Product>"),"\uc5d0 \uc811\uadfc\ud55c\ub2e4. \uadf8\ub798\uc11c contians \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,a.kt)("h2",{id:"dart-\uc0dd\uc131\uc790"},"dart \uc0dd\uc131\uc790"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"named-parameter"},"named parameter"),(0,a.kt)("p",null,"\uc0dd\uc131\uc790 \uc548\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," \uc911\uad04\ud638\ub85c \ud30c\ub77c\ubbf8\ud130\ub97c \ubb36\uc73c\uba74 named parameter \uac00\ub2a5"),(0,a.kt)("p",null,"named parameter\ud558\uba74 required \ud560 \uc218\ub3c4 \uc788\ub2e4."))}s.isMDXComponent=!0}}]);