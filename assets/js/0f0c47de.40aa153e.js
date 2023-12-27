"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:24},s="[\ubc31\uc900] 1260 DFS\uc640 BFS",o={unversionedId:"algorithm/al24",id:"algorithm/al24",title:"[\ubc31\uc900] 1260 DFS\uc640 BFS",description:"\ubb38\uc81c",source:"@site/docs/algorithm/al24.md",sourceDirName:"algorithm",slug:"/algorithm/al24",permalink:"/docs/algorithm/al24",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"algorithmSidebar",previous:{title:"[\ubc31\uc900] 11399 ATM",permalink:"/docs/algorithm/al23"},next:{title:"[\ubc31\uc900] 11047 \ub3d9\uc804 0",permalink:"/docs/algorithm/al25"}},l={},p=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ubc31\uc900-1260-dfs\uc640-bfs"},"[\ubc31\uc900]"," 1260 DFS\uc640 BFS"),(0,a.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(69100).Z,width:"1190",height:"579"})),(0,a.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\ndef dfs(start):\n    rst_dfs.append(start)\n    visited[start]=True\n\n    for num in arr[start]:\n        if not visited[num]:\n            dfs(num)\n\ndef bfs(start):\n    q=[]\n    q.append(start)\n    rst_bfs.append(start)\n    visited[start]=True\n\n    while q:\n        now = q.pop(0)\n        for next in arr[now]:\n            if not visited[next]:\n                q.append(next)\n                rst_bfs.append(next)\n                visited[next]=True\n\n\n\nn,m,v = map(int, sys.stdin.readline().rstrip().split())\n\narr = [ [] for _ in range(n+1)]\n\nfor _ in range(m):\n    start, end = map(int, sys.stdin.readline().rstrip().split())\n    # \uc591\ubc29\ud5a5\uc774\ub77c \ub450\ubc88 append\n    arr[start].append(end)\n    arr[end].append(start)\n\nfor i in range(1,n+1):\n    arr[i].sort()\n\n\nvisited = [False]*(n+1)\nrst_dfs=[]\ndfs(v)\n\nprint(*rst_dfs)\n\n\nvisited = [False]*(n+1)\nrst_bfs=[]\nbfs(v)\n\nprint(*rst_bfs)\n")),(0,a.kt)("h2",{id:"\uc124\uba85"},"\uc124\uba85"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ubb38\uc81c\ud478\ub294 \ubc29\ubc95\uc740 \uba3c\uc800 \uc190\uc73c\ub85c \ud574\ubcf4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ud544\uc694\ud55c \ubcc0\uc218\ub4e4, \uac12\ub4e4\uc744 \uc54c\uc544\ubcf4\uace0 \uc815\ub9ac\ud574\ub193\uace0 \uc2dc\uc791\ud558\uba74 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"dfs\ub294 \uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9\uc785\ub2c8\ub2e4. \ubcf4\ud1b5 \uc2a4\ud0dd\uc744 \uc0ac\uc6a9\ud574\uc11c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"visited\ub97c \uc0ac\uc6a9\ud574\uc11c \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \ub178\ub4dc\ub77c\uba74 \ub05d\uae4c\uc9c0 \uac00\ubd05\ub2c8\ub2e4."),(0,a.kt)("p",null,"bfs\ub294 \ub108\ube44\uc6b0\uc120 \ud0d0\uc0c9\uc785\ub2c8\ub2e4. \ud050\ub97c \uc774\uc6a9\ud574\uc11c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc778 \uba54\ucee4\ub2c8\uc998\uc740 \uba3c\uc800 start\uac00 \ub4e4\uc5b4\uc624\uace0 start\uc640 \uc5f0\uacb0\ub41c \uac04\uc120\ub4e4\uc744 q\uc5d0 \ub123\uace0 start \ube7c\uace0 \ub2e4\uc74c \uac12\uc744 \uac80\uc0ac\ud558\uba70 q\uc758 \uae38\uc774\uac00 0\uc774 \ub420\ub54c\uae4c\uc9c0 \ubc18\ubcf5\ud558\uba74 \ub429\ub2c8\ub2e4."))}c.isMDXComponent=!0},69100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image24-9f32475839fedb8adef9d7dae37b699a.png"}}]);