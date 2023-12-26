"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),g=l,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={slug:"Flutter",title:"Flutter TIL - 4",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","function"]},o="Flutter TIL - 4",i={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-21-til4/index.md",source:"@site/blog/2023-12-21-til4/index.md",title:"Flutter TIL - 4",description:"---",date:"2023-12-21T00:00:00.000Z",formattedDate:"December 21, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"dart",permalink:"/blog/tags/dart"},{label:"function",permalink:"/blog/tags/function"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 4",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","function"]},prevItem:{title:"Flutter TIL - 5",permalink:"/blog/Flutter"},nextItem:{title:"Flutter TIL - 3",permalink:"/blog/Flutter"}},u={authorsImageUrls:[void 0]},p=[{value:"\uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218",id:"\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218",level:2},{value:"svg icon\uc5d0 \ub300\ud574\uc11c",id:"svg-icon\uc5d0-\ub300\ud574\uc11c",level:2},{value:"NaviagtionRail",id:"naviagtionrail",level:2},{value:"body\uc5d0 border-radius",id:"body\uc5d0-border-radius",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218"},"\uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Color getColor(WidgetRef ref, bool isInactive, [Color? color]) {}\n")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ud568\uc218\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc790. ",(0,l.kt)("inlineCode",{parentName:"p"},"[Color? color]")," \uc774\ub807\uac8c \ub300\uad04\ud638\ub85c \ubc1b\ub294 \ub9e4\uac1c\ubcc0\uc218\ub294 \ub123\uc5b4\ub3c4 \ub418\uace0 \uc548 \ub123\uc5b4\ub3c4 \ub418\ub294 \uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\uc774\ub2e4."),(0,l.kt)("h2",{id:"svg-icon\uc5d0-\ub300\ud574\uc11c"},"svg icon\uc5d0 \ub300\ud574\uc11c"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc9c0\uae08 \uc800\ub294 IconButton\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 Custom\uc73c\ub85c Button\uc704\uc82f\uc744 \ub9cc\ub4e4\uc5b4\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ub54c \ubc84\ud2bc \ub4f1 \ub2e4\uc591\ud55c \uac12\ub4e4\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"GestureDetector"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"Row")," \uc704\uc82f\uc73c\ub85c \uac10\uc2f8\uc544\uc11c \ud588\ub294\ub370 width\uac00 \ub118\uc5b4\uac14\ub2e4\ub294\uace0 \ud558\ub124\uc694.. \uadf8\ub798\uc11c appbar\uac00 \uc880 \ubc00\ub824\ubcf4\uc600\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"svg\ud30c\uc77c\uc758 \ud06c\uae30\ub97c \uc904\uc5ec\uc57c \ud569\ub2c8\ub2e4. vs code\uc5d0\uc11c \uc704\uc82f\ud2b8\ub9ac \ub514\ubc84\uae45 \ud655\uc778\ud574\ubcf4\uba70 Row\uc5d0 \ud560\ub2f9\ub41c width\ub97c \ud655\uc778\ud558\uace0 \uadf8 \uc774\ud558\ub85c svg \ud30c\uc77c \ud06c\uae30\ub97c \uc904\uc774\uba74 \ud574\uacb0\ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"naviagtionrail"},"NaviagtionRail"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"navigationRail\uc744 \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc774\ub4dc \ub124\ube44\uac8c\uc774\uc158 \ubc14\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NavigationRail"),"\uc548\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"NavigationRailDestination"),"\uc73c\ub85c Navigator\ub97c \ud558\ub098\ud558\ub098 \uc815\uc758\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex"),"\uac00 \ud544\uc218\ub85c \ud544\uc694\ud558\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onDestinationSelected"),"\ub85c \uc5b4\ub5a4 \uac83\uc744 \uc120\ud0dd\ud588\ub294\uc9c0 \uc815\uc758\ud560 \uc218 \uc788\ub2e4. setState\ub85c\ub3c4 \ud560 \uc218 \uc788\ub294\ub370 provider\ub97c \uc0ac\uc6a9\ud574\uc11c watch\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex"),"\ub97c state\ub97c watch\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"onDestinationSelected"),"\uc5d0\ub294 \uac12\uc744 \ubc14\uafd4\uc8fc\ub294 \ud568\uc218\ub97c \uc815\uc758\ud574\uc11c read\ub85c \ud638\ucd9c\ud558\uba74 \ub420 \ub4ef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"selectedIconTheme"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"unselectedIconTheme"),"\uc744 \ud1b5\ud558\uc5ec \ud14c\ub9c8 \uc9c0\uc815 \uac00\ub2a5 \uc544\uc9c1\uc740 \ud070 \ud544\uc694\uc131 \ubaa8\ub974\uaca0\ub2e4."),(0,l.kt)("p",null,"trailing\uc744 \uc0ac\uc6a9\ud558\uba74 \ub9e8 \ubc11\uc5d0 \ubc84\ud2bc \uac19\uc740 \uac78 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uacfc\uc815\ub3c4 \ubcf5\uc7a1\ud588\ub294\ub370 Expanded\uc640 Align \uc744 \uc0ac\uc6a9\ud574\uc57c \ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 \ub610 \ucc3e\uc544\ubd10\uc57c\uaca0\ub124\uc694"),(0,l.kt)("h2",{id:"body\uc5d0-border-radius"},"body\uc5d0 border-radius"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc0ac\uc2e4 body\uc5d0 border-radius\uc918\ub3c4 \uc548\ubc14\ub010\ub2e4 \uc65c\ub0d0\ud558\uba74 \ubc30\uacbd\uc0c9\uacfc \uc0c9\uc774 \uac19\uc544\uc11c"),(0,l.kt)("p",null,"\uadf8\ub798\uc11c body\ub97c \uc774\ub8e8\uace0 \uc788\ub294 Row\uc704\uc82f\uc744 ColorBox\ub85c \uac10\uc309\ub2c8\ub2e4. \uadf8\ub807\uac8c \ubc30\uacbd\uc0c9\uc744 \uc8fc\uace0 \ubc11\uc5d0\uc11c Container\uc5d0 \ud574\ub2f9\ud588\ub358 \ubd80\ubd84(\uae30\uc874\uc5d0 border-radius\ub97c \uc92c\ub358 \ubd80\ubd84)\uc744 Expanded\ub85c \ud655\uc7a5\uc2dc\ud0b5\ub2c8\ub2e4 \uadf8\ub7fc \ub05d !"))}d.isMDXComponent=!0}}]);