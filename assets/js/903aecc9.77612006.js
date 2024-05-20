"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1301],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),k=o,b=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return t?n.createElement(b,c(c({ref:r},s),{},{components:t})):n.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},88068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:2},c="[Docker & Kubernetes] KOSTA 2",l={unversionedId:"docker-kube/docker-kube2",id:"docker-kube/docker-kube2",title:"[Docker & Kubernetes] KOSTA 2",description:"---",source:"@site/docs/docker-kube/docker-kube2.md",sourceDirName:"docker-kube",slug:"/docker-kube/docker-kube2",permalink:"/docs/docker-kube/docker-kube2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"studySidebar",previous:{title:"[Docker & Kubernetes] KOSTA 1",permalink:"/docs/docker-kube/docker-kube1"},next:{title:"[Docker & Kubernetes] KOSTA 3",permalink:"/docs/docker-kube/docker-kube3"}},u={},i=[{value:"\ub0b4\ubcf4\ub0b4\uae30 \uac00\uc838\uc624\uae30",id:"\ub0b4\ubcf4\ub0b4\uae30-\uac00\uc838\uc624\uae30",level:2},{value:"\ub3c4\ucee4 \uad00\ub9ac",id:"\ub3c4\ucee4-\uad00\ub9ac",level:2},{value:"\uc548\uc4f0\ub294\uac70 \uc9c0\uc6b0\uae30",id:"\uc548\uc4f0\ub294\uac70-\uc9c0\uc6b0\uae30",level:3},{value:"\uc774\ubbf8\uc9c0 \uc9c0\uc6b0\uae30",id:"\uc774\ubbf8\uc9c0-\uc9c0\uc6b0\uae30",level:3},{value:"volume \uc9c0\uc6b0\uae30",id:"volume-\uc9c0\uc6b0\uae30",level:3},{value:"\ub3c4\ucee4 container",id:"\ub3c4\ucee4-container",level:2}],s={toc:i},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker--kubernetes-kosta-2"},"[Docker & Kubernetes]"," KOSTA 2"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ub3c4\ucee4\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac00\uc0c1\ud654\ud558\ub294 \uac83\uc778\ub370, \ucee8\ud14c\uc774\ub108\ub77c\ub294 \uac83\uc73c\ub85c \uac00\uc0c1\ud654\ud55c\ub2e4."),(0,o.kt)("h2",{id:"\ub0b4\ubcf4\ub0b4\uae30-\uac00\uc838\uc624\uae30"},"\ub0b4\ubcf4\ub0b4\uae30 \uac00\uc838\uc624\uae30"),(0,o.kt)("p",null,"export, import\nsave, laod"),(0,o.kt)("h2",{id:"\ub3c4\ucee4-\uad00\ub9ac"},"\ub3c4\ucee4 \uad00\ub9ac"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\uc548\uc4f0\ub294\uac70-\uc9c0\uc6b0\uae30"},"\uc548\uc4f0\ub294\uac70 \uc9c0\uc6b0\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune\n")),(0,o.kt)("h3",{id:"\uc774\ubbf8\uc9c0-\uc9c0\uc6b0\uae30"},"\uc774\ubbf8\uc9c0 \uc9c0\uc6b0\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker image rm -f $(docker image ls -aq)\n")),(0,o.kt)("h3",{id:"volume-\uc9c0\uc6b0\uae30"},"volume \uc9c0\uc6b0\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume rm $(docker volume ls -q)\n")),(0,o.kt)("h2",{id:"\ub3c4\ucee4-container"},"\ub3c4\ucee4 container"),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);