"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[28237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const l={slug:"flutter-til-6",title:"Flutter TIL - 6",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","listview","clipping","GestureDetector","divider"]},a="Flutter TIL - 6",o={permalink:"/blog/flutter-til-6",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-27-til6/index.md",source:"@site/blog/2023-12-27-til6/index.md",title:"Flutter TIL - 6",description:"---",date:"2023-12-27T00:00:00.000Z",formattedDate:"December 27, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"dart",permalink:"/blog/tags/dart"},{label:"listview",permalink:"/blog/tags/listview"},{label:"clipping",permalink:"/blog/tags/clipping"},{label:"GestureDetector",permalink:"/blog/tags/gesture-detector"},{label:"divider",permalink:"/blog/tags/divider"}],readingTime:2.52,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-6",title:"Flutter TIL - 6",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","listview","clipping","GestureDetector","divider"]},prevItem:{title:"Git - \ubcc0\uacbd\uc0ac\ud56d \ucde8\uc18c",permalink:"/blog/tip-git-1"},nextItem:{title:"Flutter TIL - 5",permalink:"/blog/flutter-til-5"}},p={authorsImageUrls:[void 0]},u=[{value:"ClipRRect",id:"cliprrect",level:2},{value:"listView",id:"listview",level:2},{value:"GestureDetector\uc758 behavior",id:"gesturedetector\uc758-behavior",level:2},{value:"Divider",id:"divider",level:2},{value:"\ub9ac\ub79c\ub354\ub9c1",id:"\ub9ac\ub79c\ub354\ub9c1",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"cliprrect"},"ClipRRect"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"container\ub97c border radius\ud558\uac8c \ub514\uc790\uc778 \ud588\ub294\ub370 \uc2a4\ud06c\ub864 \ubc14\uac00 \uc624\ubc84\ud50c\ub85c\uc6b0 \ub418\ub294 \ud604\uc0c1\uc774 \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,"ClipRRect\ub85c \uc2a4\ud06c\ub864\ubc14\ub97c \ub9cc\ub4dc\ub294 listview \uc704\uc82f\uc744 \uac10\uc2f8\ub2c8 \uc624\ubc84\ud50c\ub85c\uc6b0 \ub418\ub294 \ubd80\ubd84\uc740 \uc548\ubcf4\uc774\uac8c \ub410\ub2e4."),(0,i.kt)("p",null,"ClipRRect\uc704\uc82f\uc740 \ud074\ub9ac\ud551\ud558\ub294 \uc704\uc82f\uc778\ub370 \ud074\ub9ac\ud551\uc774\ub780 \uc8fc\uc5b4\uc9c4 \uacbd\uacc4 \ub0b4\uc5d0\uc11c\ub9cc \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uacbd\uacc4 \ub118\uc5b4\uc11c\ub294 \uc798\ub77c\ub0b4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4\uace0 \ud55c\ub2e4."),(0,i.kt)("p",null,"\uc8fc\ub85c \uc774\ubbf8\uc9c0\ub97c \ub465\uadfc \uc561\uc790\uc5d0 \ub123\uace0 \uc2f6\uc744 \ub54c\ub3c4 \uc0ac\uc6a9\ud55c\ub2e4\uace0 \ud55c\ub2e4.."),(0,i.kt)("h2",{id:"listview"},"listView"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc0ac\uc2e4 \ubc14\ubcf4\uac19\uc740 \uc9d3\uc744 \ud588\ub2e4 listView \uc548\uc5d0 expanded\ub97c \ub123\uc73c\ub824\uace0 \ud588\ub2e4. \uc65c\ub0d0\ud558\uba74 width\ub97c double.infinity\ud558\uac8c \ud558\uace0\uc2f6\uc5c8\uc5c8\ub2e4. \uadf8\ub7ec\ub098 listView\ub97c \uc798 \ubab0\ub790\uc5c8\ub2e4."),(0,i.kt)("p",null,"listView\uc758 \uc790\uc2dd\ub4e4\uc740 listView\uc758 \ud06c\uae30\ub97c \ub530\ub77c\uac04\ub2e4. \uadf8\ub798\uc11c listView\ub97c Expanded\uc548\uc5d0 infinity\ub85c \ub450\uba74 \uadf8 \uc548\uc5d0\ub3c4 infinity\ub2e4. \uadf8\ub807\uac8c \ud574\uacb0\ud588\ub2e4."),(0,i.kt)("h2",{id:"gesturedetector\uc758-behavior"},"GestureDetector\uc758 behavior"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"deferToChild"),": \uc790\uc2dd \uc911 \ud558\ub098\uac00 \uc801\uc911 \uc2dc \uc774\ubca4\ud2b8 \uc218\uc2e0(\ud22c\uba85\ud55c \ub300\uc0c1 \uc774\ubca4\ud2b8 \uc218\uc2e0 x)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"translucent")," : \ubc18\ud22c\uba85\ud55c \ub300\uc0c1 & \uc2dc\uac01\uc801\uc73c\ub85c \ub4a4\uc5d0 \uc788\ub294 \ub300\uc0c1\ub3c4 \uc774\ubca4\ud2b8 \uc218\uc2e0",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"opaque")," : \uc2dc\uac01\uc801\uc73c\ub85c \ub4a4\uc5d0 \uc788\ub294 \ub300\uc0c1\uc740 \uc774\ubca4\ud2b8 \uc218\uc2e0 \ubd88\uac00\ub2a5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"behavior: HitTestBehavior.translucent,\n")),(0,i.kt)("p",null,"\uc774\uc640 \uac19\uc774 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ud328\ub529\ubd80\ubd84\ub3c4 \ud074\ub9ad\ud55c\ub2e4\uba74 \uc774\ubca4\ud2b8 \uc218\uc2e0\ub420 \uc218 \uc788\ub2e4."),(0,i.kt)("h2",{id:"divider"},"Divider"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ListView.separated"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,i.kt)("inlineCode",{parentName:"p"},"separatorBuilder"),"\ub97c \ud1b5\ud574 \uad6c\ubd84\uc790\ub97c \ub123\uc744 \uc218 \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,"\uc904\uc744 \uae0b\uace0 \uc2f6\uc5c8\ub294\ub370 ",(0,i.kt)("inlineCode",{parentName:"p"},"Divider"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"height"),"\ub85c \uc0c1\ud558 \uc5ec\ubc31\uc744 \uc815\ud560 \uc218 \uc788\uc5c8\uace0",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"thickness"),"\ub85c \uc904\uc758 \uad75\uae30\ub97c",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"indent"),",",(0,i.kt)("inlineCode",{parentName:"p"},"endIndent"),"\ub85c \uc88c\uc6b0 \uc5ec\ubc31\uc744",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"color"),"\ub85c \uc0c9\uc0c1\uc744 \uc815\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,i.kt)("h2",{id:"\ub9ac\ub79c\ub354\ub9c1"},"\ub9ac\ub79c\ub354\ub9c1"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0 \uc124\uc815\uc744 \ud588\ub294\ub370 \uac12\uc740 \ubcc0\uacbd \ub410\ub294\ub370 \ud654\uba74 \ub9ac\ub79c\ub354\ub9c1\uc744 \ubabb\ud574\uc11c \uacc4\uc18d \uc560\uba39\uc5c8\uc5c8\ub2e4. \uacb0\uad6d\uc5d0\ub294 riverpod provider\ub97c \uc218\uc815\ud558\uc5ec \ub2e4\uad6d\uc5b4\ub3c4 watch\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ubcc0\uacbd\ud588\ub294\ub370 \ud604\uc5c5\uc5d0\uc11c \uc774\ub807\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0\ub294 \uc544\uc9c1 \ubaa8\ub974\uaca0\ub2e4.."))}d.isMDXComponent=!0}}]);