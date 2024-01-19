"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"flutter-til-14",title:"Flutter TIL - 14",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","stateprovider","remote api","FutureProvider"]},o="Flutter TIL - 14",i={permalink:"/blog/flutter-til-14",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-10-til14/index.md",source:"@site/blog/2024-01-10-til14/index.md",title:"Flutter TIL - 14",description:"---",date:"2024-01-10T00:00:00.000Z",formattedDate:"January 10, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"stateprovider",permalink:"/blog/tags/stateprovider"},{label:"remote api",permalink:"/blog/tags/remote-api"},{label:"FutureProvider",permalink:"/blog/tags/future-provider"}],readingTime:1.67,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-14",title:"Flutter TIL - 14",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","stateprovider","remote api","FutureProvider"]},prevItem:{title:"Flutter TIL - 15",permalink:"/blog/flutter-til-15"},nextItem:{title:"Flutter TIL - 12",permalink:"/blog/flutter-til-12"}},u={authorsImageUrls:[void 0]},p=[{value:"state provider",id:"state-provider",level:2},{value:"update",id:"update",level:2},{value:"Future Provider\uc758 \uc774\uc57c\uae30",id:"future-provider\uc758-\uc774\uc57c\uae30",level:2},{value:"\uc18c\uc18c\ud55c \ud301",id:"\uc18c\uc18c\ud55c-\ud301",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"state-provider"},"state provider"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud2b9\uc9d5\uc73c\ub85c\ub294 code generator\uac00 \uc548\ub418\uace0"),(0,a.kt)("p",null,"state\ub97c \uac16\uace0 \uc788\ub2e4\ub294 \uc810"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"floatingActionButton: FloatingActionButton(\n  onPressed: () {\n    ref.read(counterProvider.notifier).state++;\n  },\n  child: const Icon(Icons.add),\n),\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc774 read\ub97c \ud558\ub294\ub370 notifier\ub97c \uc0ac\uc6a9\ud574\uc11c state\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ucd94\uac00\ub85c UI\ub97c \uadf8\ub9ac\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future.delay")," \ub610\ub294 Listen\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","(\uadf8\ub0e5 \uadf8\ub9ac\ub824\uba74 \uc5d0\ub7ec\ub09c\ub2e4. \ucda9\ub3cc\ub098\uc11c)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"ref.listen<int>(counterProvider, (previous, next) {\n  if (next == 3) {\n    showDialog(\n      context: context,\n      builder: (context) {\n        return AlertDialog(\n          content: Text('counter : $next'),\n        );\n      },\n    );\n  }\n});\n")),(0,a.kt)("p",null,"\uc694\ub7f0\uc2dd\uc73c\ub85c listen\ud560 \uc218 \uc788\ub2e4. \uc774\uc804 \uac12 \ub2e4\uc74c \uac12\uc774 \uc788\ub2e4."),(0,a.kt)("h2",{id:"update"},"update"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"onPressed: () {\n  ref\n      .read(autoDisposecounterProvider.notifier)\n      .update((state) => state + 10);\n},\n")),(0,a.kt)("p",null,"\uc704 \ucf54\ub4dc\ub294"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"ref.read(autoDisposecounterProvider.notifier).state + \n  ref.read(autoDisposecounterProvider.notifier).state + 10\n")),(0,a.kt)("p",null,"\uacfc \uac19\uc740 \ucf54\ub4dc\uc774\ub2e4. \ub108\ubb34 \uae38\uae30 \ub54c\ubb38\uc5d0 \uadf8\ub0e5 update \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ud3b8\ub9ac\ud558\ub2e4."),(0,a.kt)("p",null,"state\ub97c \uc778\uc790\ub85c \uc0ac\uc6a9\ud560 \ub85c\uc9c1\uc774 \ud544\uc694\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("h2",{id:"future-provider\uc758-\uc774\uc57c\uae30"},"Future Provider\uc758 \uc774\uc57c\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"remote api\ub97c \ud638\ucd9c\ud558\uba74 3\uac00\uc9c0 \uc0c1\ud0dc \ucc98\ub9ac\uac00 \ud544\uc694\ud558\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"in progress"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\uc774\ub2e4."),(0,a.kt)("p",null,"3\uac00\uc9c0 \ubaa8\ub450 \ub3d9\uc2dc\uc5d0 2\uac00\uc9c0 \uc774\uc0c1 \uc0c1\ud0dc\uac00 \ub420 \uc218 \uc5c6\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FutureProvider"),"\ub294 \uc774 3\uac00\uc9c0 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uac12\uc744 \ucc98\ub9ac\ud574\uc900\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AsyncData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncError"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLoading"),"\uc774 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc0dd\uc131\uc790\ub3c4 3\uac00\uc9c0 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AsyncValue"),"\uac00 \uc911\uc694\ud558\ub2e4\ub294 \ub73b"),(0,a.kt)("h2",{id:"\uc18c\uc18c\ud55c-\ud301"},"\uc18c\uc18c\ud55c \ud301"),(0,a.kt)("hr",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"provider \uc548\uc5d0 ref.read()\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9d0 \uac83")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"StateProvider \ub300\uc2e0 NotifierProvider \uc0ac\uc6a9\ud560 \uac83"))))}c.isMDXComponent=!0}}]);