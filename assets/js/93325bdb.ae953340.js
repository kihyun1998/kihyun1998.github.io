"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[35211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||l;return r?n.createElement(d,u(u({ref:t},c),{},{components:r})):n.createElement(d,u({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={slug:"flutter-til-7",title:"Flutter TIL - 7",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","future_wait"]},u="Flutter TIL - 7",i={permalink:"/blog/flutter-til-7",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-28-til7/index.md",source:"@site/blog/2023-12-28-til7/index.md",title:"Flutter TIL - 7",description:"---",date:"2023-12-28T00:00:00.000Z",formattedDate:"December 28, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"dart",permalink:"/blog/tags/dart"},{label:"future_wait",permalink:"/blog/tags/future-wait"}],readingTime:.54,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-7",title:"Flutter TIL - 7",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","future_wait"]},prevItem:{title:"Git - LF will be replaced by CRLF the next time Git touches it",permalink:"/blog/git-error-1"},nextItem:{title:"Git - \ubcc0\uacbd\uc0ac\ud56d \ucde8\uc18c",permalink:"/blog/tip-git-1"}},o={authorsImageUrls:[void 0]},s=[{value:"Future.wait",id:"futurewait",level:2}],c={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"futurewait"},"Future.wait"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  Future<void> searchProductList() async {\n    isBusy = true;\n    final results = await Future.wait([\n      productRepository.searchProductList(keyword),\n      Future.delayed(const Duration(milliseconds: 555)),\n    ]);\n    productList = results[0];\n    isBusy = false;\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Future.wait"),"\uc774\ub77c\ub294\uac8c \uc788\ub294\ub370 \uc548\uc5d0 \uc788\ub294 Future wait\uc758 \ubc30\uc5f4 \uba85\ub839\uc5b4\ub4e4\uc774 \ubaa8\ub450 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bc"),(0,a.kt)("p",null,"\uc989 \uc704 \ucf54\ub4dc \uc0c1\uc73c\ub85c\ub294 search\ud558\ub294\uac70\uc640 delayed\ub97c \ub3d9\uc2dc\uc5d0 \ub3cc\ub9ac\ub294\ub370 555 millisecond\ub294 \ubb34\uc870\uac74 \ub3cc\uace0 \uadf8 \uc774\uc0c1\uc740 search\ub05d\ub0a0 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4\ub294 \ub73b"))}f.isMDXComponent=!0}}]);