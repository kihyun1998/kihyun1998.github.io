"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:22},l="22. [Flutter] Image network",i={unversionedId:"flutter/flutter22",id:"flutter/flutter22",title:"22. [Flutter] Image network",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter22.md",sourceDirName:"flutter",slug:"/flutter/flutter22",permalink:"/docs/flutter/flutter22",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"dartSidebar",previous:{title:"21. [Flutter] ListView",permalink:"/docs/flutter/flutter21"},next:{title:"22. [Flutter] Route & Animation",permalink:"/docs/flutter/flutter23"}},u={},c=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"Image.network",id:"imagenetwork",level:3}],p={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"22-flutter-image-network"},"22. ","[Flutter]"," Image network"),(0,o.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,o.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='\ucd94\uac00\ud55c \ucf54\ub4dc'",title:"'\ucd94\uac00\ud55c","\ucf54\ub4dc'":!0},'return Column(\n  children: [\n    Text(\n      webtoon.title,\n      style: const TextStyle(\n        fontSize: 20,\n      ),\n    ),\n    const SizedBox(\n      height: 20,\n    ),\n    Container(\n      clipBehavior: Clip.antiAlias,\n      decoration: BoxDecoration(\n          borderRadius: BorderRadius.circular(30),\n          boxShadow: [\n            BoxShadow(\n              blurRadius: 5,\n              offset: const Offset(5, 5),\n              color: Colors.black.withOpacity(0.5),\n            )\n          ]),\n      width: 300,\n      child: Image.network(\n        webtoon.thumb,\n        headers: const {\n          "User-Agent":\n              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",\n        },\n      ),\n    )\n  ],\n)\n')),(0,o.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"imagenetwork"},"Image.network"),(0,o.kt)("p",null,"URL\uc744 \uc0ac\uc6a9\ud574\uc11c \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc624\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"webtoon.thumb\uc5d0\ub294 \uc774\ubbf8\uc9c0 URL\uc774 \ub4e4\uc5b4\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," \uc18d\uc131\uc744 \ud1b5\ud574\uc11c ",(0,o.kt)("strong",{parentName:"p"},"\ud5e4\ub354 \uc815\ubcf4"),"\ub97c \ub123\uc5b4\uc918\uc57c \ud569\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);