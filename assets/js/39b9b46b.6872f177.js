"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:21},i="[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",l={unversionedId:"algorithm/al21",id:"algorithm/al21",title:"[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",description:"\ubb38\uc81c",source:"@site/docs/algorithm/al21.md",sourceDirName:"algorithm",slug:"/algorithm/al21",permalink:"/docs/algorithm/al21",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"algorithmSidebar",previous:{title:"[\ubc31\uc900] 4949 \uade0\ud604\uc7a1\ud78c \uc138\uc0c1",permalink:"/docs/algorithm/al20"},next:{title:"[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",permalink:"/docs/algorithm/al22"}},u={},c=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ubc31\uc900-1966-\ud504\ub9b0\ud130-\ud050"},"[\ubc31\uc900]"," 1966 \ud504\ub9b0\ud130 \ud050"),(0,a.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(8145).Z,width:"1186",height:"852"})),(0,a.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\nrst=[]\ntest_case = int(input())\n\nfor i in range(test_case):\n    cnt=0\n\n    n,m = map(int,input().split())\n    queue = deque()\n\n    arr = map(int, input().split())\n    arr_r = list(arr).copy()\n\n    for i in range(n):\n        queue.append((i,arr_r[i]))\n\n    while queue:\n        maxVal = max(queue, key=lambda q:q[1] )\n        # \ucd5c\ub300\uac12\uacfc \ub370\ud06c \ub9e8\uc55e \uac12\uc774 \uac19\uc740 \uacbd\uc6b0\n        if maxVal[1] == queue[0][1]:\n            cnt+=1\n            # \uc774 \uac12\uc774 \ucc3e\uace0 \uc788\ub294 \uc21c\uc11c\uc758 \ubb38\uc11c\uc778 \uacbd\uc6b0\n            if m == queue[0][0]:\n\n                rst.append(cnt)\n                break\n            else:\n                queue.popleft()\n        # \ucd5c\ub300\uac12\uc774 \uc544\ub2c8\uba74 \ud68c\uc804\n        else:\n            queue.rotate(-1)\n\nfor i in rst:\n    print(i)\n")),(0,a.kt)("h2",{id:"\uc124\uba85"},"\uc124\uba85"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc0dd\uac01\ubcf4\ub2e4 \ud798\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucc98\uc74c\ud55c \uad6c\uc0c1\uc740 \ub370\ud06c\uc5d0 \uac12\ub4e4\uc744 \ub123\uace0 \ucd5c\ub300\uac12\uc778\uc9c0 \ube44\uad50\ud574\uc11c \ucd5c\ub300\uac12\uc774 \uc544\ub2c8\uba74 rotate\ud574\ubc84\ub9ac\uace0 \ucd9c\ub825\ud560 \ub54c\ub9c8\ub2e4 \uac12\uc744 count\ud574\uc11c \uc6d0\ud558\ub294 \uac12\uc774 \uba87 \ubc88\uc9f8\ub85c \ub098\uac14\ub294\uc9c0 \uccb4\ud06c\ud574\uc57c\uc9c0! \ud558\uace0 \ud480\uc5c8\ub294\ub370"),(0,a.kt)("p",null,"\uccab \ubc88\uc9f8 \ub09c\uad00\uc740 rotate\ud558\uba74 \uc21c\uc11c\uac00 \ubc14\ub00c\uae30 \ub54c\ubb38\uc5d0 \ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \ud29c\ud50c\ub85c \uac12\uc744 \ubc14\uafd4\uc918\uc11c \ub370\ud06c\uc5d0 \ub123\uc5b4\uc92c\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub450 \ubc88\uc9f8 \ub09c\uad00\uc740 \ucd5c\ub300\uac12\uc744 \ucc3e\ub294 \uac83\uc778\ub370 \uc774\uac8c \ud29c\ud50c\ub85c \uac12\uc744 \ubc14\uafd4\uc11c \ub123\uc5b4\uc11c \ucd5c\ub300\uac12 \ucc3e\ub294 \ubc29\ubc95\uc5d0 \uc560\ub97c \uba39\uc5c8\ub294\ub370 \ub78c\ub2e4\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub2c8 \ub108\ubb34\ub098\ub3c4 \uc27d\uac8c \ud574\uacb0\uc774 \ub410\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0},8145:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image21-dafe9f4d944c1cf4b8797649f448f0e9.png"}}]);