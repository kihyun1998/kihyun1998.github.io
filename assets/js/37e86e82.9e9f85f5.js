"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[2842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),k=l,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||n;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},78391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(87462),l=(r(67294),r(3905));const n={slug:"Flutter",title:"Flutter TIL - 20",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","path_provider","AsyncValue"]},o="Flutter TIL - 20",i={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-19-til20/index.md",source:"@site/blog/2024-01-19-til20/index.md",title:"Flutter TIL - 20",description:"---",date:"2024-01-19T00:00:00.000Z",formattedDate:"January 19, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"path_provider",permalink:"/blog/tags/path-provider"},{label:"AsyncValue",permalink:"/blog/tags/async-value"}],readingTime:1.675,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 20",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","path_provider","AsyncValue"]},nextItem:{title:"Flutter TIL - 19",permalink:"/blog/Flutter"}},u={authorsImageUrls:[void 0]},p=[{value:"path_provider \uc885\ub958",id:"path_provider-\uc885\ub958",level:2},{value:"AsyncValeu - properties",id:"asyncvaleu---properties",level:2},{value:"value",id:"value",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"path_provider-\uc885\ub958"},"path_provider \uc885\ub958"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"gpt\uc758 \ub2f5\ubcc0\uc744 \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"getApplicationDocumentsDirectory()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Windows\uc5d0\uc11c \uc774 \ud568\uc218\ub294 \uc0ac\uc6a9\uc790\uc758 "Documents" \ud3f4\ub354\uc5d0 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub370\uc774\ud130 \ub514\ub809\ud1a0\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubcf4\ud1b5 ',(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<User Name>\\Documents")," \uacbd\ub85c\ub85c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"getApplicationSupportDirectory()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\User\\AppData\\Roaming\\[\ud328\ud0a4\uc9c0\uc774\ub984]\\[\ud504\ub85c\uc81d\ud2b8\uc774\ub984]"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"getDownloadsDirectory()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\uc0ac\uc6a9\uc790\uc758 "Downloads" \ud3f4\ub354\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4, \ubcf4\ud1b5 ',(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<User Name>\\Downloads"),"\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"getExternalCacheDirectories()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows\uc5d0\uc11c \uc678\ubd80 \uce90\uc2dc \ub514\ub809\ud1a0\ub9ac\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud574\ub2f9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 Windows\uc5d0\uc11c \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc744 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"getExternalStorageDirectories({StorageDirectory? type})  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows\uc5d0\uc11c \uc678\ubd80 \uc800\uc7a5\uc18c \ub514\ub809\ud1a0\ub9ac\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud574\ub2f9\ub418\uc9c0 \uc54a\uc73c\uba70, \uc774 \ud568\uc218\ub294 Android \ud50c\ub7ab\ud3fc\uc5d0 \ud2b9\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"getExternalStorageDirectory()")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \ud568\uc218\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c Windows\uc5d0\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Android\uc5d0\uc11c\ub294 \uc678\ubd80 \uc800\uc7a5\uc18c\uc758 \ub8e8\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"getLibraryDirectory()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub418\uba70, Windows\uc5d0\uc11c\ub294 \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"getTemporaryDirectory()  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \uc784\uc2dc \ud3f4\ub354\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. Windows\uc5d0\uc11c\ub294 \ubcf4\ud1b5 ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<User Name>\\AppData\\Local\\Temp"),"\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"asyncvaleu---properties"},"AsyncValeu - properties"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Async\uc885\ub958"),(0,l.kt)("th",{parentName:"tr",align:null},"previous value X"),(0,l.kt)("th",{parentName:"tr",align:null},"previous value O"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AsyncLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"previous value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AsyncData"),(0,l.kt)("td",{parentName:"tr",align:null},"current value"),(0,l.kt)("td",{parentName:"tr",align:null},"current value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AsyncError"),(0,l.kt)("td",{parentName:"tr",align:null},"rethrow error"),(0,l.kt)("td",{parentName:"tr",align:null},"previous value")))))}m.isMDXComponent=!0}}]);