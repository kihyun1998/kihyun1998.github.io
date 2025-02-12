"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[66419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=l,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const i={slug:"flutter-til-15",title:"Flutter TIL - 15",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","FutureProvider"]},a="Flutter TIL - 15",o={permalink:"/blog/flutter-til-15",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-11-til15/index.md",source:"@site/blog/2024-01-11-til15/index.md",title:"Flutter TIL - 15",description:"---",date:"2024-01-11T00:00:00.000Z",formattedDate:"January 11, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"FutureProvider",permalink:"/blog/tags/future-provider"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-15",title:"Flutter TIL - 15",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","FutureProvider"]},prevItem:{title:"Flutter TIL - 16",permalink:"/blog/flutter-til-16"},nextItem:{title:"Flutter TIL - 14",permalink:"/blog/flutter-til-14"}},u={authorsImageUrls:[void 0]},s=[{value:"\uac00\uc0c1 API",id:"\uac00\uc0c1-api",level:2},{value:"autoDispose \uc0ac\uc6a9 \uc5ec\ubd80",id:"autodispose-\uc0ac\uc6a9-\uc5ec\ubd80",level:2},{value:"future provider body",id:"future-provider-body",level:2},{value:"when",id:"when",level:3},{value:"switch expression",id:"switch-expression",level:3},{value:"keepalive",id:"keepalive",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uac00\uc0c1-api"},"\uac00\uc0c1 API"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com"},"\uc5ec\uae30")," \uc5d0\uc11c \ub2e4\uc591\ud55c API\ub97c \uc81c\uacf5\ud574\uc900\ub2e4."),(0,l.kt)("p",null,"users API\ub85c FutureProvider \uc2e4\uc2b5\uc744 \ud55c\ub2e4."),(0,l.kt)("h2",{id:"autodispose-\uc0ac\uc6a9-\uc5ec\ubd80"},"autoDispose \uc0ac\uc6a9 \uc5ec\ubd80"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ub9cc\uc57d \ud2b9\uc815 \ud398\uc774\uc9c0 \uc9c4\uc785 \uc2dc API\ub97c \ud1b5\ud574\uc11c \uac12\uc744 \uac00\uc838\uc654\uc744 \ub54c \uc774 \uac12\uc744 \uce90\uc2f1 \ud560 \uac83\uc774\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"autoDispose")," \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\uace0 \ub2e4\uc2dc \uc548 \uac00\uc838\uc62c \uac83\uc774\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"autoDispose")," \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,l.kt)("p",null,"\uc124\uc815\uac12 \uac19\uc740 \uacbd\uc6b0\ub294 API\ub97c \uc3f4\uc11c \ubcc0\uacbd\ud558\ub294 \uacbd\uc6b0\uac00 \uac70\uc758 \uc5c6\uc73c\ubbc0\ub85c \uce90\uc2f1 \ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,l.kt)("h2",{id:"future-provider-body"},"future provider body"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"when"},"when"),(0,l.kt)("p",null,"\uac12\uc744 \ubd88\ub7ec\uc62c \ub54c when\uc744 \uc0ac\uc6a9\ud55c \ubaa8\uc2b5\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"body: userList.when(\n  data: (users) {\n    return ListView.separated(\n      itemCount: users.length,\n      separatorBuilder: (context, index) {\n        return const Divider();\n      },\n      itemBuilder: (context, index) {\n        final user = users[index];\n        return ListTile(\n          leading: CircleAvatar(\n            child: Text(user.id.toString()),\n          ),\n          title: Text(user.name),\n        );\n      },\n    );\n  },\n  error: (e, st) {\n    return Text(\n      e.toString(),\n      style: const TextStyle(fontSize: 20, color: Colors.red),\n    );\n  },\n  loading: () => const Center(\n    child: CircularProgressIndicator(),\n  ),\n),\n")),(0,l.kt)("h3",{id:"switch-expression"},"switch expression"),(0,l.kt)("p",null,"\uac12\uc744 \ubd88\ub7ec\uc62c \ub54c switch\ub97c \uc0ac\uc6a9\ud55c \ubaa8\uc2b5\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"body: switch (userList) {\n  AsyncData(value: final users) => ListView.separated(\n      itemCount: users.length,\n      separatorBuilder: (context, index) {\n        return const Divider();\n      },\n      itemBuilder: (context, index) {\n        final user = users[index];\n        return ListTile(\n          leading: CircleAvatar(\n            child: Text(user.id.toString()),\n          ),\n          title: Text(user.name),\n        );\n      },\n    ),\n  AsyncError(error: final e) => Text(\n      e.toString(),\n      style: const TextStyle(fontSize: 20, color: Colors.red),\n    ),\n  _ => const Center(\n      child: CircularProgressIndicator(),\n    ),\n},\n")),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc5d0 \uc6d0\ub798 ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," \ub300\uc2e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"AsyncLoading"),"\uc774 \ub4e4\uc5b4\uac00\uc57c \ud558\uc9c0\ub9cc \ubb34\uc2a8 \uc5d0\ub7ec\uac00 \ub09c\ub2e4."),(0,l.kt)("p",null,"userListProvider\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Sealed"),"\ub85c \ub9cc\ub4e4\uc5c8\uc5b4\uc57c \ud55c\ub2e4\uace0 \ud55c\ub2e4."),(0,l.kt)("h2",{id:"keepalive"},"keepalive"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ud558\uba74\uc11c \uad81\uae08\uc99d\uc774 \uc0dd\uacbc\uc5c8\ub294\ub370 \uac12\uc744 \uac00\uc838\uc654\uc73c\uba74 \ub2e4\uc2dc \ub098\uac14\ub2e4 \uc654\uc744 \ub54c loading \uc548 \ubcf4\uace0 \uc2f6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\uba74 autoDispose\uc77c \ub54c ref.keepAlive()\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc8fc\uc758\ud560 \uc810\uc740 http \ud638\ucd9c\uc774 \ub05d\ub098\uace0 \uc801\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac12\uc744 \uac00\uc838\uc628 \uac83\uc744 \uc131\uacf5\ud55c \ud398\uc774\uc9c0\ub294 \uac12\uc774 \uc720\uc9c0\uac00 \ub418\uace0(dispose\uc548\ud568)\nerror\uac00 \ub098\uba74 dispose \ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);