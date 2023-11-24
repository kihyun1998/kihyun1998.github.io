"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1148],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:25},i="[\ubc31\uc900] 11047 \ub3d9\uc804 0",l={unversionedId:"algorithm/al25",id:"algorithm/al25",title:"[\ubc31\uc900] 11047 \ub3d9\uc804 0",description:"\ubb38\uc81c",source:"@site/docs/algorithm/al25.md",sourceDirName:"algorithm",slug:"/algorithm/al25",permalink:"/docs/algorithm/al25",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"algorithmSidebar",previous:{title:"[\ubc31\uc900] 1260 DFS\uc640 BFS",permalink:"/docs/algorithm/al24"}},c={},p=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ubc31\uc900-11047-\ub3d9\uc804-0"},"[\ubc31\uc900]"," 11047 \ub3d9\uc804 0"),(0,o.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(3791).Z,width:"1176",height:"600"})),(0,o.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nfrom collections import deque\n\narr = deque([])\ncount=0\nn,k = map(int,sys.stdin.readline().rstrip().split())\n\nfor _ in range(n):\n    x = int(sys.stdin.readline().rstrip())\n    arr.appendleft(x)\n\nfor i in arr:\n    if k == 0:\n        break\n    if k >= i:\n        count += (k//i)\n        k %= i\n    else:\n        continue\n\nprint(count)\n")),(0,o.kt)("h2",{id:"\uc124\uba85"},"\uc124\uba85"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uc5b4\ub835\uc9c0 \uc54a\uc740 \ub3d9\uc804\ubb38\uc81c\ub2e4."),(0,o.kt)("p",null,"deque\ub97c \uc774\uc6a9\ud574\uc11c \uc785\ub825\ubc1b\uc544\uc11c \ud3b8\ud558\uac8c \ud588\ub2e4."),(0,o.kt)("p",null,"k\uac00 \ubaa9\ud45c \uae08\uc561\uc774\ub77c\uace0 \ud558\uace0"),(0,o.kt)("p",null,"k\uac00 0\uc774 \ub420 \ub54c\uae4c\uc9c0 \ubaa8\ub4e0 \ub3d9\uc804\ub4e4\uc744 \uc21c\ud68c\ud558\uba70 \ubaab\ub9cc\ud07c \uacc4\uc18d \ub354\ud574\uc8fc\uace0 \ub098\uba38\uc9c0 \uac12\uc744 \ub2e4\uc74c k\uac12\uc73c\ub85c \ubc14\uafd4\uc918\uc11c \ud480 \uc218 \uc788\uc5c8\ub2e4."))}f.isMDXComponent=!0},3791:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image25-c82552f1bbad82b5080b1f80dcf7c29a.png"}}]);