"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[4292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),f=l,b=c["".concat(i,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:l,a[1]=u;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const o={sidebar_position:19},a="19. [Flutter] fetch",u={unversionedId:"flutter/flutter20",id:"flutter/flutter20",title:"19. [Flutter] fetch",description:"1. \uace0\uc804\uc801\uc778 fetch",source:"@site/docs/flutter/flutter20.md",sourceDirName:"flutter",slug:"/flutter/flutter20",permalink:"/docs/flutter/flutter20",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"dartSidebar",previous:{title:"19. [Flutter] HTTP Request & Response",permalink:"/docs/flutter/flutter19"},next:{title:"21. [Flutter] ListView",permalink:"/docs/flutter/flutter21"}},i={},p=[{value:"\uace0\uc804\uc801\uc778 fetch",id:"\uace0\uc804\uc801\uc778-fetch",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:3},{value:"\uc124\uba85",id:"\uc124\uba85",level:3},{value:"FutureBuilder",id:"futurebuilder",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc-1",level:3},{value:"\uc124\uba85",id:"\uc124\uba85-1",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"19-flutter-fetch"},"19. ","[Flutter]"," fetch"),(0,l.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%EA%B3%A0%EC%A0%84%EC%A0%81%EC%9D%B8-fetch"},"\uace0\uc804\uc801\uc778 fetch")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#FutureBuilder"},"FutureBuilder")))),(0,l.kt)("h2",{id:"\uace0\uc804\uc801\uc778-fetch"},"\uace0\uc804\uc801\uc778 fetch"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"List<WebtoonModel> webtoons = [];\nbool isLoading = true;\n\nvoid waitForWebToons() async {\n  webtoons = await ApiService.getToday();\n  setState(() {\n    isLoading = false;\n  });\n}\n\n@override\nvoid initState() {\n  super.initState();\n  waitForWebToons();\n}\n")),(0,l.kt)("h3",{id:"\uc124\uba85"},"\uc124\uba85"),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c StatefulWidget\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\uace0 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc62c \ubcc0\uc218\uc640 \ub85c\ub529 \uc911\uc784\uc744 \ud45c\uc2dc\ud558\ub294 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uace0"),(0,l.kt)("p",null,"initState\uc5d0 \ub370\uc774\ud130 \ubd88\ub7ec\uc624\ub294 \ud568\uc218\ub97c \ub123\uace0"),(0,l.kt)("p",null,"\ub370\uc774\ud130 \ubd88\ub7ec\uc624\ub294 \ud568\uc218(",(0,l.kt)("strong",{parentName:"p"},"waitForWebToons"),")\uc5d0\uc11c\ub294 \ube44\ub3d9\uae30\ucc98\ub9ac\ub97c \ud558\uace0"),(0,l.kt)("p",null,"\ube44\ub3d9\uae30 \ucc98\ub9ac \ud6c4 \ub370\uc774\ud130\ub97c \ub2e4 \ubd88\ub7ec\uc654\ub2e4\uba74 \ub85c\ub529\uc911\uc778 bool \ubcc0\uc218\ub97c \ubcc0\uacbd\ud574\uc8fc\uace0 ..."),(0,l.kt)("p",null,"\uace0\uc804\uc801\uc778 \ubc29\ubc95\uc740 \ubcf5\uc7a1\ud558\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc704 \ubc29\ubc95\uc740 \ub370\uc774\ud130\ub97c \ud328\uce58\ud574\uc11c state\uc5d0 \ub123\ub294 \ubc29\ubc95\uc774\ub77c\uace0 \ud55c\ub2e4."),(0,l.kt)("h2",{id:"futurebuilder"},"FutureBuilder"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\ucf54\ub4dc-1"},"\ucf54\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},'Future<List<WebtoonModel>> webtoons = ApiService.getToday();\n\nbody: FutureBuilder(\n  builder: (context, snapshot) {\n    if (snapshot.hasData) {\n      return const Text("yes data");\n    } else {\n      return const Text("Loading ...");\n    }\n  },\n  future: webtoons,\n),\n')),(0,l.kt)("h3",{id:"\uc124\uba85-1"},"\uc124\uba85"),(0,l.kt)("p",null,"statelessWidget\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c \uc5b4\ub5a4 \ubcc0\uc218\ub098 setState\uc5c6\uc774 fetch\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FutureBuilder"),"\uc704\uc82f\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uba3c\uc800 Future \ubcc0\uc218\ub97c \uc120\uc5b8\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 FutureBuilder\ub97c \uc0ac\uc6a9\ud560 \ud150\ub370 \ub123\uc5b4\uc918\uc57c\ud560 \uac12\uc774 future\uc640 builder\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"future\uc5d0\ub294 future \uc790\ub8cc\ud615 \uc989 \uae30\ub2e4\ub824\uc57c \uc5bb\uc744 \uc218 \uc788\ub294 \ub370\uc774\ud130(API \uc694\uccad\ud55c \uc751\ub2f5 \ub370\uc774\ud130 \ub4f1)\uac00 \ub4e4\uc5b4\uac00\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"builder \ubd80\ubd84\uc5d0\ub294 context\uc640 snapshot\uc744 \uc8fc\ub294\ub370 context\ub294 buildContext\uc774\uace0 snapshot\uc744 \ud1b5\ud574\uc11c\ub294 \ub2e4\uc591\ud55c \uac12\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"snapshot",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"connectionState : \uc5f0\uacb0 \uc0c1\ud0dc\ndata : \ub370\uc774\ud130\nerror : \uc5d0\ub7ec\uac00 \ub0ac\ub294\uc9c0\nhasData : \uac12\uc744 \uac16\uace0 \uc788\ub294\uc9c0")),(0,l.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74 FutureBuilder \uc704\uc82f\uc774 \uc54c\uc544\uc11c Future\uac12\uc744 \uae30\ub2e4\ub824\uc90d\ub2c8\ub2e4. await\ub97c \ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4 !"))}d.isMDXComponent=!0}}]);