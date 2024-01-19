"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[5522],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||l;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const l={slug:"flutter-til-17",title:"Flutter TIL - 17",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","FutureProvider","refresh","invalidate"]},i="Flutter TIL - 17",o={permalink:"/blog/flutter-til-17",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-16-til17/index.md",source:"@site/blog/2024-01-16-til17/index.md",title:"Flutter TIL - 17",description:"---",date:"2024-01-16T00:00:00.000Z",formattedDate:"January 16, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"FutureProvider",permalink:"/blog/tags/future-provider"},{label:"refresh",permalink:"/blog/tags/refresh"},{label:"invalidate",permalink:"/blog/tags/invalidate"}],readingTime:.725,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-17",title:"Flutter TIL - 17",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","FutureProvider","refresh","invalidate"]},prevItem:{title:"Flutter TIL - 18",permalink:"/blog/flutter-til-18"},nextItem:{title:"Flutter TIL - 16",permalink:"/blog/flutter-til-16"}},u={authorsImageUrls:[void 0]},s=[{value:"invalidate",id:"invalidate",level:2},{value:"refresh",id:"refresh",level:2}],p={toc:s},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"invalidate"},"invalidate"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"onPressed: () async {\n  ref.invalidate(userDetailProvider);\n},\n")),(0,a.kt)("p",null,"refresh\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"invalidate"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc704\ucc98\ub7fc onPressed \ud568\uc218\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 skipLoadingOnRefresh\ub3c4 \uc801\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"invalidate"),"\uc758 \uc778\uc790\uac12 \ud0c0\uc785\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"ProviderOrFamily"),"\uc774\ub2e4. \uadf8\ub798\uc11c Family\ub97c \uc8fc\uc9c0 \uc54a\uace0 \uc801\uc6a9\ud55c\ub2e4\uba74 \ubaa8\ub4e0 provider\uac00 auto dispose\ub41c\ub2e4."),(0,a.kt)("h2",{id:"refresh"},"refresh"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"onPressed: () async {\n  return ref.refresh(userDetailProvider(userId));\n},\n")),(0,a.kt)("p",null,"\ub610\ub294"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"onPressed: () {\n  return ref.refresh(userDetailProvider(userId).future);\n},\n")),(0,a.kt)("p",null,"refresh \uc778\uc790 \ud0c0\uc785\uc740 Family Provider\ub77c\uba74 family\uac12\uc744 \ub118\uaca8\uc8fc\uc5b4\uc57c \ud55c\ub2e4. \uadf8\ub9ac\uace0 return\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\uae30\uc5d0 return\uac12\uc774 \uc5c6\ub2e4\uba74 invalidate\ub97c \ucd94\ucc9c\ud55c\ub2e4."))}d.isMDXComponent=!0}}]);