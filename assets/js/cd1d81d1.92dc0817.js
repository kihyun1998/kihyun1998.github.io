"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[9941],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||l;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72169:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const l={sidebar_position:3},o="Oracle Cloud RAM \uc6a9\ub7c9 \ub298\ub9ac\uae30",p={unversionedId:"infra/infra3",id:"infra/infra3",title:"Oracle Cloud RAM \uc6a9\ub7c9 \ub298\ub9ac\uae30",description:"---",source:"@site/docs/infra/infra3.md",sourceDirName:"infra",slug:"/infra/infra3",permalink:"/docs/infra/infra3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"infraSidebar",previous:{title:"Oracle Cloud \ud3ec\ud2b8\ud3ec\uc6cc\ub529",permalink:"/docs/infra/infra2"}},s={},i=[{value:"Swapfile \ub9cc\ub4e4\uae30",id:"swapfile-\ub9cc\ub4e4\uae30",level:2},{value:"\uc7ac\uc2dc\uc791\uc2dc swapon \ub418\ub3c4\ub85d \uc124\uc815",id:"\uc7ac\uc2dc\uc791\uc2dc-swapon-\ub418\ub3c4\ub85d-\uc124\uc815",level:2}],u={toc:i},c="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oracle-cloud-ram-\uc6a9\ub7c9-\ub298\ub9ac\uae30"},"Oracle Cloud RAM \uc6a9\ub7c9 \ub298\ub9ac\uae30"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@my-public-server:~$ free\n               total        used        free      shared  buff/cache   available\nMem:          981796      296824      103940        1132      581032      522272\nSwap:              0           0           0\n")),(0,a.kt)("p",null,"free\ub97c \uc0ac\uc6a9\ud574\uc11c \uba54\ubaa8\ub9ac\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","Swap\uc744 \uc774\uc6a9\ud574\uc11c \uba54\ubaa8\ub9ac\ub97c \ub298\ub9ac\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,a.kt)("h2",{id:"swapfile-\ub9cc\ub4e4\uae30"},"Swapfile \ub9cc\ub4e4\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=/dev/zero of=/swapfile bs=128MB count=32\n")),(0,a.kt)("p",null,"\uc774 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574\uc11c swapfile\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"swapfile\uc744 \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \uad8c\ud55c \uc124\uc815\uc744 \ud558\uace0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod 600 /swapfile\n")),(0,a.kt)("p",null,"swapfile\uc744 \ucd08\uae30\ud654\ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkswap /swapfile\n")),(0,a.kt)("p",null,"swap on\uc744 \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo swapon /swapfile\n")),(0,a.kt)("p",null,"swap\uc774 \uc801\uc6a9\ub41c \uac83\uc744 \ud655\uc778\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@my-public-server:~$ free -m\n               total        used        free      shared  buff/cache   available\nMem:             958         288         194           1         475         512\nSwap:           3906           0        3906\n\n")),(0,a.kt)("h2",{id:"\uc7ac\uc2dc\uc791\uc2dc-swapon-\ub418\ub3c4\ub85d-\uc124\uc815"},"\uc7ac\uc2dc\uc791\uc2dc swapon \ub418\ub3c4\ub85d \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/fstab\n")),(0,a.kt)("p",null,"\uc704\ub85c \ub4e4\uc5b4\uac00\uc918\uc11c \ub9c8\uc9c0\ub9c9 \uc904\uc5d0 \uc544\ub798\uc640\uac19\uc774 \uc791\uc131\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},".\n.\n/swapfile swap swap defaults 0 0\n")),(0,a.kt)("p",null,"\uc800\uc7a5\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"esc"),"\ub97c \ub204\ub978 \ud6c4 ",(0,a.kt)("inlineCode",{parentName:"p"},":wq")," \ud6c4 \uc5d4\ud130\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4."))}f.isMDXComponent=!0}}]);