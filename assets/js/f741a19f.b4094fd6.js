"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1005],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),p=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,l(l({ref:e},c),{},{components:t})):r.createElement(m,l({ref:e},c))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[u]="string"==typeof n?n:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6094:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:22},l="[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",o={unversionedId:"algorithm/al22",id:"algorithm/al22",title:"[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",description:"\ubb38\uc81c",source:"@site/docs/algorithm/al22.md",sourceDirName:"algorithm",slug:"/algorithm/al22",permalink:"/docs/algorithm/al22",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"algorithmSidebar",previous:{title:"[\ubc31\uc900] 1966 \ud504\ub9b0\ud130 \ud050",permalink:"/docs/algorithm/al21"}},s={},p=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:2}],c={toc:p},u="wrapper";function d(n){let{components:e,...i}=n;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ubc31\uc900-1966-\ud504\ub9b0\ud130-\ud050"},"[\ubc31\uc900]"," 1966 \ud504\ub9b0\ud130 \ud050"),(0,a.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(5316).Z,width:"1203",height:"709"})),(0,a.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\ndef calc(start,end,lans,n):\n    if end-start <= 1:\n        return start\n    mid = (start + end) // 2\n    count = 0\n    for lan in lans:\n        count += (lan//mid)\n    if count < n:\n        return calc(start,mid,lans,n)\n    else:\n        return calc(mid,end,lans,n)\n\nlans = []\nbig=0\nk, n = map(int, sys.stdin.readline().rstrip().split())\n\nfor _ in range(k):\n    x = int(sys.stdin.readline().rstrip())\n    big = max(big,x)\n    lans.append(x)\n\nprint(calc(1,big+1,lans,n))\n")),(0,a.kt)("h2",{id:"\uc124\uba85"},"\uc124\uba85"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc774\ubd84\ud0d0\uc0c9\uc740 \ucc98\uc74c\uc774\ub77c \ucc98\uc74c\uc5d0 \ud63c\uc790\uc11c \uad6c\ud604\ud574\ubcf4\uace0 \uc720\ud29c\ubc84 \ubd84\uc758 \uac15\uc758\ub300\ub85c \ud588\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\nlans = []\nk, n = map(int, sys.stdin.readline().rstrip().split())\n\nfor _ in range(k):\n    lans.append(int(sys.stdin.readline().rstrip()))\n\npivot = sum(lans) // n\n\nwhile True:\n    count=0\n    # pivot\uc774 \ucd5c\uc18c\uac12\ubcf4\ub2e4 \uc791\uc744 \ub54c\n    if pivot < min(lans):\n        for lan in lans:\n            count += lan // pivot\n        if count == n:\n            print(pivot)\n            break\n        else:\n            pivot-=1\n    else:\n        for lan in lans:\n            count += lan // pivot\n        if count == n:\n            print(pivot)\n            break\n        else:\n            pivot+=1\n")),(0,a.kt)("p",null,"\ubb38\uc81c\uac00 \ub9ce\uc740 \ucf54\ub4dc\ub2e4. 1\uc529 \ud0d0\uc0c9\uc774\ub77c\ub2c8 \u314b\u314b \uc774\ub7ec\ub2c8 \uc2dc\uac04\ucd08\uacfc\uac00 \ub098\uc9c0 !!!!"))}d.isMDXComponent=!0},5316:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/image22-4cd5caa495f3d235bbd1936f8518bf21.png"}}]);