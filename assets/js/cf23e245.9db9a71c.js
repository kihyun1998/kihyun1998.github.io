"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[2802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:8},a="[Go] private repository module import",l={unversionedId:"go/go8",id:"go/go8",title:"[Go] private repository module import",description:"---",source:"@site/docs/go/go8.md",sourceDirName:"go",slug:"/go/go8",permalink:"/docs/go/go8",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"goSidebar",previous:{title:"[Go] \ubb38\uc790\uc5f4",permalink:"/docs/go/go7"}},p={},c=[{value:"GOPRIVATE \uc124\uc815",id:"goprivate-\uc124\uc815",level:2},{value:"\ud1a0\ud070 \ubc1c\uae09",id:"\ud1a0\ud070-\ubc1c\uae09",level:2},{value:"git config",id:"git-config",level:2},{value:"\uac00\uc838\uc624\uae30",id:"\uac00\uc838\uc624\uae30",level:2}],u={toc:c},s="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-private-repository-module-import"},"[Go]"," private repository module import"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uba87 \uac00\uc9c0 \uc124\uc815\uc744 \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"goprivate-\uc124\uc815"},"GOPRIVATE \uc124\uc815"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GOPRIVATE=[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]\n")),(0,o.kt)("p",null,"\ube44\uacf5\uac1c \uc800\uc7a5\uc18c \uacbd\ub85c\uc758 \uc608\uc2dc\ub294 "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"github.com/privateTeam")," \uc774\ub7f0 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ud1a0\ud070-\ubc1c\uae09"},"\ud1a0\ud070 \ubc1c\uae09"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Github")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Personal access tokens")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Tokens(classic)")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate new token(classic)")," "),(0,o.kt)("p",null,"\ud574\uc11c \uad8c\ud55c \uc801\uc808\ud788 \ud560\ub2f9\ud574\uc8fc\uace0 \ub098\uc628 \ud0a4\ub97c \ubcf5\uc0ac\ud574\uc11c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"git-config"},"git config"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global url."https://[\uae43 \uc720\uc800 \uc774\ub984]:[\ud1a0\ud070]@[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]".insteadOf "https://[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]"\n')),(0,o.kt)("p",null,"\uc774\ub807\uac8c git config\ub97c \ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uac00\uc838\uc624\uae30"},"\uac00\uc838\uc624\uae30"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init\ngo mod tidy\n")),(0,o.kt)("p",null,"\ub05d"))}g.isMDXComponent=!0}}]);