"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=i,m=d["".concat(u,".").concat(c)]||d[c]||f[c]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},84391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={slug:"Flutter",title:"Flutter TIL - 18",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","notifierProvider"]},l="Flutter TIL - 18",o={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-17-til18/index.md",source:"@site/blog/2024-01-17-til18/index.md",title:"Flutter TIL - 18",description:"---",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"notifierProvider",permalink:"/blog/tags/notifier-provider"}],readingTime:1.645,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 18",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","notifierProvider"]},nextItem:{title:"Flutter TIL - 17",permalink:"/blog/Flutter"}},u={authorsImageUrls:[void 0]},p=[{value:"ListView",id:"listview",level:2},{value:"Notifier Provider",id:"notifier-provider",level:2},{value:"\uc0dd\uc131",id:"\uc0dd\uc131",level:3},{value:"tear-offs \uc9c0\uc6d0",id:"tear-offs-\uc9c0\uc6d0",level:3},{value:"\uc811\uadfc",id:"\uc811\uadfc",level:3}],s={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"listview"},"ListView"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ListView")," \uc704\uc82f\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"Column/Row"),"\uc704\uc82f \uc544\ub798\uc5d0 \ub454\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"ListView"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"Column/Row"),"\uc758 \uc0ac\uc774\uc988\ub4e4\uc774 unbounded height\uac00 \uc77c\uc5b4\ub098\uc11c render overflow\uac00 \ub0a9\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Column/Row")," \uc544\ub798\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ListView"),"\ub97c \ub450\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"Expanded")," \uc704\uc82f\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"ListView"),"\ub97c \uac10\uc2f8\uc57c \ud568."),(0,i.kt)("h2",{id:"notifier-provider"},"Notifier Provider"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\uc0dd\uc131"},"\uc0dd\uc131"),(0,i.kt)("p",null,"notifier\ub97c \uc785\ub825\ud574\uc11c \uba3c\uc800 notifier\ub97c \uc815\uc758\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class CounterNotifier extends Notifier<int> {\n  @override\n  int build() {\n    return 0;\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CounterNotifier"),"\ub294 Notifier\uc758 \uc774\ub984\uc774\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifier<int>"),"\ub85c \ub3fc\uc788\ub294\ub370 int\ub294 \ubc18\ud658 \ud0c0\uc785\uc774\ub2e4. build\ud568\uc218 \uc55e\uc5d0\ub294 \ubc18\ud658 \ud0c0\uc785\uc744 \ubd99\uc5ec\uc918\uc57c \ud55c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StateNotifier"),"\ub098 ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeNotifier"),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc9c0\ub9cc(\uc0ac\uc6a9\ud558\ub824\uba74 \uc0dd\uc131\uc790\uc5d0\uc11c \uc815\uc758\ud574\uc918\uc57c \ud55c\ub2e4.) ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifier"),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),"\ub97c \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("h3",{id:"tear-offs-\uc9c0\uc6d0"},"tear-offs \uc9c0\uc6d0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"onPressed:(){\n  func();\n}\n\n# \uc704\uc640 \uc544\ub798\ub294 \uac19\ub2e4.\n\nonPressed: func,\n")),(0,i.kt)("p",null,"\uc704 \ucf54\ub4dc\uc640 \uac19\uc740 \ub3d9\uc791\uc744 \ud558\ub294 \uac83\uc774 tear-offs\ub2e4."),(0,i.kt)("p",null,"\uac70\ucd94\uc7a5\uc2a4\ub7ec\uc6b4 \ubd80\ubd84\uc774 \uc81c\uac70\uac00 \ub41c\ub2e4. \ud568\uc218\uc640 \uc0dd\uc131\uc790\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub798\uc11c \uc544\ub798\uc640 \uac19\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"notifierProvider"),"\ub97c \uc120\uc5b8\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final counterProvider = NotifierProvider<Counter, int>(() {\n  return Counter();\n});\n\n#\uc704\ub97c \uc544\ub798\ucc98\ub7fc\n\nfinal counterProvider = NotifierProvider<Counter, int>(Counter.new);\n")),(0,i.kt)("p",null,"\ubaa8\ub974\uba74 \uc77c\ub2e8 \uc678\uc6b0\uc790 tear-offs"),(0,i.kt)("h3",{id:"\uc811\uadfc"},"\uc811\uadfc"),(0,i.kt)("p",null,"watch\ud558\uba74 state\uac12\uc744 \uac00\uc838\uc62c \uc218 \uc788\uace0 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uadfc\ud558\ub824\uba74"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"ref.raed(counterProvider.notifier).increment();\n")),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ud560 \uc218 \uc788\ub2e4."))}f.isMDXComponent=!0}}]);