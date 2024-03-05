"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[2802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:8},l="[Go] private repository module import",i={unversionedId:"go/go8",id:"go/go8",title:"[Go] private repository module import",description:"---",source:"@site/docs/go/go8.md",sourceDirName:"go",slug:"/go/go8",permalink:"/docs/go/go8",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"goSidebar",previous:{title:"[Go] \ubb38\uc790\uc5f4",permalink:"/docs/go/go7"},next:{title:"[Go] linux golang \uc124\uce58",permalink:"/docs/go/go9"}},p={},c=[{value:"GOPRIVATE \uc124\uc815",id:"goprivate-\uc124\uc815",level:2},{value:"\ud1a0\ud070 \ubc1c\uae09",id:"\ud1a0\ud070-\ubc1c\uae09",level:2},{value:"git config",id:"git-config",level:2},{value:"\uac00\uc838\uc624\uae30",id:"\uac00\uc838\uc624\uae30",level:2}],u={toc:c},s="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-private-repository-module-import"},"[Go]"," private repository module import"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uba87 \uac00\uc9c0 \uc124\uc815\uc744 \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"goprivate-\uc124\uc815"},"GOPRIVATE \uc124\uc815"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GOPRIVATE=[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]\n")),(0,o.kt)("p",null,"\ube44\uacf5\uac1c \uc800\uc7a5\uc18c \uacbd\ub85c\uc758 \uc608\uc2dc\ub294 "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"github.com/privateTeam")," \uc774\ub7f0 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uadf8\ub7fc \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GOPRIVATE=github.com/privateTeam\n")),(0,o.kt)("p",null,"\uc798 \uc124\uc815\ub410\ub294\uc9c0\ub294 env\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go env -json\n")),(0,o.kt)("h2",{id:"\ud1a0\ud070-\ubc1c\uae09"},"\ud1a0\ud070 \ubc1c\uae09"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Github")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Personal access tokens")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Tokens(classic)")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate new token(classic)")," "),(0,o.kt)("p",null,"\ud574\uc11c \uad8c\ud55c \uc801\uc808\ud788 \ud560\ub2f9\ud574\uc8fc\uace0 \ub098\uc628 \ud0a4\ub97c \ubcf5\uc0ac\ud574\uc11c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"git-config"},"git config"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global url."https://[\uae43 \uc720\uc800 \uc774\ub984]:[\ud1a0\ud070]@[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]".insteadOf "https://[\ube44\uacf5\uac1c \uc800\uc7a5\uc18c]"\n')),(0,o.kt)("p",null,"\uc774\ub807\uac8c git config\ub97c \ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uac00\uc838\uc624\uae30"},"\uac00\uc838\uc624\uae30"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init\ngo mod tidy\n")),(0,o.kt)("p",null,"\ub05d"))}g.isMDXComponent=!0}}]);