"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1569],{3905:(n,e,s)=>{s.d(e,{Zo:()=>m,kt:()=>u});var t=s(7294);function i(n,e,s){return e in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function r(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,t)}return s}function a(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){i(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}function o(n,e){if(null==n)return{};var s,t,i=function(n,e){if(null==n)return{};var s,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)s=r[t],e.indexOf(s)>=0||(i[s]=n[s]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)s=r[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(i[s]=n[s])}return i}var l=t.createContext({}),p=function(n){var e=t.useContext(l),s=e;return n&&(s="function"==typeof n?n(e):a(a({},e),n)),s},m=function(n){var e=p(n.components);return t.createElement(l.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},j=t.forwardRef((function(n,e){var s=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),c=p(s),j=i,u=c["".concat(l,".").concat(j)]||c[j]||d[j]||r;return s?t.createElement(u,a(a({ref:e},m),{},{components:s})):t.createElement(u,a({ref:e},m))}));function u(n,e){var s=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=s.length,a=new Array(r);a[0]=j;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[c]="string"==typeof n?n:i,a[1]=o;for(var p=2;p<r;p++)a[p]=s[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}j.displayName="MDXCreateElement"},8405:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=s(7462),i=(s(7294),s(3905));const r={sidebar_position:26},a="[\ubc31\uc900] 2178 \ubbf8\ub85c \ud0d0\uc0c9",o={unversionedId:"algorithm/al26",id:"algorithm/al26",title:"[\ubc31\uc900] 2178 \ubbf8\ub85c \ud0d0\uc0c9",description:"\ubb38\uc81c",source:"@site/docs/algorithm/al26.md",sourceDirName:"algorithm",slug:"/algorithm/al26",permalink:"/docs/algorithm/al26",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"algorithmSidebar",previous:{title:"[\ubc31\uc900] 11047 \ub3d9\uc804 0",permalink:"/docs/algorithm/al25"},next:{title:"[\ubc31\uc900] 2606 \ubc14\uc774\ub7ec\uc2a4",permalink:"/docs/algorithm/al27"}},l={},p=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\ub514\ubc84\uae45\uc6a9 \ucf54\ub4dc",id:"\ub514\ubc84\uae45\uc6a9-\ucf54\ub4dc",level:3},{value:"\uc81c\ucd9c \ucf54\ub4dc",id:"\uc81c\ucd9c-\ucf54\ub4dc",level:3},{value:"\uc124\uba85",id:"\uc124\uba85",level:2}],m={toc:p},c="wrapper";function d(n){let{components:e,...r}=n;return(0,i.kt)(c,(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ubc31\uc900-2178-\ubbf8\ub85c-\ud0d0\uc0c9"},"[\ubc31\uc900]"," 2178 \ubbf8\ub85c \ud0d0\uc0c9"),(0,i.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:s(7397).Z,width:"2341",height:"1585"})),(0,i.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\ub514\ubc84\uae45\uc6a9-\ucf54\ub4dc"},"\ub514\ubc84\uae45\uc6a9 \ucf54\ub4dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\n\ndef bfs(si,sj,ei,ej):\n    q=[]\n    q.append([si,sj])\n    ans[si][sj]=1\n    # maze[start_i][start_j]=0\n\n    while q:\n        now = q.pop(0)\n        si,sj = now\n        if si==ei and sj==ej:\n            break\n        # \uc6b0\n        if si+1 < n and maze[si+1][sj] == 1:\n            q.append([si+1,sj])\n            maze[si+1][sj]=2\n            ans[si+1][sj]= ans[si][sj] + 1\n        # \uc88c\n        if si-1 >= 0 and maze[si-1][sj] == 1:\n            q.append([si-1,sj])\n            maze[si-1][sj]=2\n            ans[si-1][sj]= ans[si][sj]+1\n        # \ud558\n        if sj+1 < m and maze[si][sj+1] == 1:\n            q.append([si,sj+1])\n            maze[si][sj+1]=2\n            ans[si][sj+1]=ans[si][sj]+1\n        # \uc0c1\n        if sj-1 >= 0 and maze[si][sj-1] == 1:\n            q.append([si,sj-1])\n            maze[si][sj-1]=2\n            ans[si][sj-1]=ans[si][sj]+1\n        print("now is",now)\n        print("q is ",q)\n        print("\\n====answer is====")\n        for i in ans:\n            print(i)\n        print("===============")\n        print("\\n")\n\n\n\nn,m = map(int, sys.stdin.readline().rstrip().split())\n\nmaze = [[] for _ in range(n)]\nans = [[0 for _ in range(m)] for _ in range(n)]\n\nfor i in range(n):\n    x = list(map(int, list(sys.stdin.readline().rstrip())))\n    maze[i] = x\n\ncnt = bfs(0,0,n,m)\n\nprint(ans[n-1][m-1])\n')),(0,i.kt)("h3",{id:"\uc81c\ucd9c-\ucf54\ub4dc"},"\uc81c\ucd9c \ucf54\ub4dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\n\ndef bfs(si,sj,ei,ej):\n    q=[]\n    q.append([si,sj])\n    ans[si][sj]=1\n    maze[si][sj]=0\n\n    while q:\n        now = q.pop(0)\n        si,sj = now\n        if si==ei and sj==ej:\n            break\n        # \uc6b0\n        if si+1 < n and maze[si+1][sj] == 1:\n            q.append([si+1,sj])\n            maze[si+1][sj]=2\n            ans[si+1][sj]= ans[si][sj] + 1\n        # \uc88c\n        if si-1 >= 0 and maze[si-1][sj] == 1:\n            q.append([si-1,sj])\n            maze[si-1][sj]=2\n            ans[si-1][sj]= ans[si][sj]+1\n        # \ud558\n        if sj+1 < m and maze[si][sj+1] == 1:\n            q.append([si,sj+1])\n            maze[si][sj+1]=2\n            ans[si][sj+1]=ans[si][sj]+1\n        # \uc0c1\n        if sj-1 >= 0 and maze[si][sj-1] == 1:\n            q.append([si,sj-1])\n            maze[si][sj-1]=2\n            ans[si][sj-1]=ans[si][sj]+1\n\nn,m = map(int, sys.stdin.readline().rstrip().split())\n\nmaze = [[] for _ in range(n)]\nans = [[0 for _ in range(m)] for _ in range(n)]\n\nfor i in range(n):\n    x = list(map(int, list(sys.stdin.readline().rstrip())))\n    maze[i] = x\n\ncnt = bfs(0,0,n,m)\n\nprint(ans[n-1][m-1])\n")),(0,i.kt)("h2",{id:"\uc124\uba85"},"\uc124\uba85"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ubbf8\ub85c\ub97c \uc785\ub825 \ubc1b\uc558\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \uac19\uc740 \ud06c\uae30\uc758 ans \ubc30\uc5f4\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc81c\uac00 \uc0ac\uc6a9\ud55c \ubc29\uc2dd\uc740 q\uc5d0 \uc88c\ud45c\ub97c \ub123\uc744 \ub54c \uc88c\ud45c\ub97c \ub123\ub294 \uae30\uc900\uc73c\ub85c \ub123\ub294 \uc88c\ud45c\uc5d0 ans \ubc30\uc5f4\uc5d0\uc11c +1\uc744 \ud558\uc5ec \uc27d\uac8c \uad6c\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},7397:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/image26-4c7ee341b5675c2ef881d64e8c37a802.png"}}]);