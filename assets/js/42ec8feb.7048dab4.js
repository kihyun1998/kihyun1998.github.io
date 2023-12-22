"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,g=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={slug:"Flutter",title:"Flutter TIL - 4",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","function"]},o="Flutter TIL - 4",u={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-20-til4/index.md",source:"@site/blog/2023-12-20-til4/index.md",title:"Flutter TIL - 4",description:"---",date:"2023-12-20T00:00:00.000Z",formattedDate:"December 20, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"dart",permalink:"/blog/tags/dart"},{label:"function",permalink:"/blog/tags/function"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 4",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dart","function"]},prevItem:{title:"Flutter TIL - 3",permalink:"/blog/Flutter"},nextItem:{title:"Flutter TIL - 2",permalink:"/blog/Flutter"}},i={authorsImageUrls:[void 0]},c=[{value:"\uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218",id:"\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218",level:2}],p={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218"},"\uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Color getColor(WidgetRef ref, bool isInactive, [Color? color]) {}\n")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ud568\uc218\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc790. ",(0,l.kt)("inlineCode",{parentName:"p"},"[Color? color]")," \uc774\ub807\uac8c \ub300\uad04\ud638\ub85c \ubc1b\ub294 \ub9e4\uac1c\ubcc0\uc218\ub294 \ub123\uc5b4\ub3c4 \ub418\uace0 \uc548 \ub123\uc5b4\ub3c4 \ub418\ub294 \uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\uc774\ub2e4."))}f.isMDXComponent=!0}}]);