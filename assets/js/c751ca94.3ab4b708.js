"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[46439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),b=o,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},84217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:8},a="[Docker] Github Action\uc744 \uc704\ud55c Dockerfile \uc791\uc131",i={unversionedId:"dev-ops/dev-ops8",id:"dev-ops/dev-ops8",title:"[Docker] Github Action\uc744 \uc704\ud55c Dockerfile \uc791\uc131",description:"---",source:"@site/docs/dev-ops/dev-ops8.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops8",permalink:"/docs/dev-ops/dev-ops8",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"backSidebar",previous:{title:"[Gitlab] push rules",permalink:"/docs/dev-ops/dev-ops7"},next:{title:"[Github Actions] Docker Container\ub97c \uc774\uc6a9\ud55c Gihub Actions CI",permalink:"/docs/dev-ops/dev-ops9"}},u={},c=[{value:"Dockerfile \uc791\uc131",id:"dockerfile-\uc791\uc131",level:2},{value:"build &amp; push",id:"build--push",level:2},{value:"build",id:"build",level:3},{value:"login",id:"login",level:3},{value:"push",id:"push",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-github-action\uc744-\uc704\ud55c-dockerfile-\uc791\uc131"},"[Docker]"," Github Action\uc744 \uc704\ud55c Dockerfile \uc791\uc131"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"dockerfile-\uc791\uc131"},"Dockerfile \uc791\uc131"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Github Action\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub3c4\ucee4\ub97c push\ud558\uae30 \uc704\ud55c docker \ud30c\uc77c\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# \uc774\ubbf8\uc9c0 \uc120\ud0dd\nFROM debian:buster-slim\n\n# \ud328\ud0a4\uc9c0 \uc124\uce58\nRUN apt-get update && \\\n    apt-get install -y --no-install-recommends ca-certificates curl netbase git make && \\\n    rm -rf /var/lib/apt/lists/*\n\n# Go \uc124\uce58\nENV GO_VERSION go1.21.6\nRUN curl -L https://golang.org/dl/${GO_VERSION}.linux-amd64.tar.gz | tar -C /usr/local -xz\n\n# \ud658\uacbd \ubcc0\uc218 \ucd94\uac00\nENV PATH="/usr/local/go/bin:${PATH}"\n\n# \uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac \uc815\uc758\nWORKDIR /app\n\n# \uae30\ubcf8 \uba85\ub839\uc5b4 \uc124\uc815\nCMD ["bash"]\n')),(0,o.kt)("p",null,"\ubcc4\uac70 \uc5c6\uace0 golang\uc774 \uc124\uce58\ub41c \ub9ac\ub205\uc2a4 \uc774\ubbf8\uc9c0 \uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"build--push"},"build & push"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ub3c4\ucee4 \ud30c\uc77c\uc744 \ube4c\ub4dc\ud558\uace0 \ud478\uc2dc\ud558\ub824\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc800\ub294 \uc708\ub3c4\uc6b0\uc5ec\uc11c wsl\uc744 \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"build"},"build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t [my-docker-hub-username]/[my-image]:[tag] .\n")),(0,o.kt)("h3",{id:"login"},"login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker login --username [my-docker-hub-username]\n")),(0,o.kt)("h3",{id:"push"},"push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push [my-docker-hub-username]/[my-image]:[tag]\n")),(0,o.kt)("p",null,"\uc774\ubbf8\uc9c0\ub97c private\uc73c\ub85c \ub9cc\ub4e4\uace0 \uc2f6\ub2e4\uba74 docker-hub \ud648\ud398\uc774\uc9c0\uc5d0\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);