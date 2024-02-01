"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:9},i="[Github Actions] Docker Container\ub97c \uc774\uc6a9\ud55c Gihub Actions CI",l={unversionedId:"dev-ops/dev-ops9",id:"dev-ops/dev-ops9",title:"[Github Actions] Docker Container\ub97c \uc774\uc6a9\ud55c Gihub Actions CI",description:"---",source:"@site/docs/dev-ops/dev-ops9.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops9",permalink:"/docs/dev-ops/dev-ops9",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"backSidebar",previous:{title:"[Docker] Github Action\uc744 \uc704\ud55c Dockerfile \uc791\uc131",permalink:"/docs/dev-ops/dev-ops8"}},s={},c=[{value:"\ucee8\ud14c\uc774\ub108 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95",id:"\ucee8\ud14c\uc774\ub108-\uc774\uc6a9\ud558\ub294-\ubc29\ubc95",level:2},{value:"CI \uacfc\uc815",id:"ci-\uacfc\uc815",level:2},{value:"fatal: detected dubious ownership in repository at ... \uc774\uc720",id:"fatal-detected-dubious-ownership-in-repository-at--\uc774\uc720",level:3},{value:"\ud658\uacbd\ubcc0\uc218 \uc124\uc815 \uad00\ub828\ud574\uc11c",id:"\ud658\uacbd\ubcc0\uc218-\uc124\uc815-\uad00\ub828\ud574\uc11c",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-actions-docker-container\ub97c-\uc774\uc6a9\ud55c-gihub-actions-ci"},"[Github Actions]"," Docker Container\ub97c \uc774\uc6a9\ud55c Gihub Actions CI"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108-\uc774\uc6a9\ud558\ub294-\ubc29\ubc95"},"\ucee8\ud14c\uc774\ub108 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    \n    container:\n      image: [my-docker-hub-username]/[my-image]:[tag]\n      credentials:\n        username: ${{ secrets.DOCKERHUB_USERNAME }}\n        password: ${{ secrets.DOCKERHUB_PASSWORD }}\n")),(0,o.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c \uc791\uc131\ud558\uba74 \ub41c\ub2e4."),(0,o.kt)("p",null,"Docker Hub\uc5d0 \ub300\ud55c IP/PW\ub294 \ubbf8\ub9ac Github secret\uc5d0 \uc815\uc758\ud558\uba74 \ub41c\ub2e4."),(0,o.kt)("p",null,"\uc790\uc138\ud55c \uacbd\ub85c\ub294 \ud574\ub2f9 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc800\uc7a5\uc18c")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Secrets and variables")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"New repository secret"),"\uc73c\ub85c \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h2",{id:"ci-\uacfc\uc815"},"CI \uacfc\uc815"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    steps:\n      - name: \u2705 Checkout code\n        uses: actions/checkout@v3\n      \n      - name: \ud83d\udcbe Register Tag name in env\n        run:  echo \"TAG_NAME=$(echo ${{ github.ref }} | sed 's|refs/tags/||')\" >> $GITHUB_ENV\n\n      - name: \ud83e\uddd9 Config Safe Git Directory\n        run: git config --global --add safe.directory $GITHUB_WORKSPACE\n\n      - name: \u2705 git check\n        run: git status\n\n      - name: \ud83d\udd25 Get dependencies\n        run: go mod download\n\n      - name: \ud83d\udcbd Test\n        run: make test\n        \n      - name: \ud83d\udee0\ufe0f Build\n        run: make build\n")),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c \uc911\uc694\ud55c \ubd80\ubd84\uc740 \ubc14\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"Config Safe Git Directory"),"\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub0e5 \uc800\uac70 \uc5c6\uc774 \ubb34\ub300\ud3ec\ub85c \ud574\ubc84\ub9ac\uba74 build\uac00 \uc548\ub41c\ub2e4. \uc2e0\uae30\ud558\ub2e4. safe directroy \uc9c0\uc815\uc744 \uc548\ud574\uc8fc\uba74 git check \ubd80\ubd84\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc740 \uacbd\uace0\ub97c \ubc1c\uacac\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fatal: detected dubious ownership in repository at '[\uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac]'\nTo add an exception for this directory, call:\n\n    git config --global --add safe.directory [\uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac]\nError: Process completed with exit code 128.\n")),(0,o.kt)("p",null,"\uc704 \uacbd\uace0\ubb38\uc5d0\uc11c \ud574\uacb0\ubc29\uc548\ub3c4 \uc81c\uc2dc\ud574\uc92c\ub2e4 \uc800 \uba85\ub839\uc5b4\ub97c \ucd94\uac00\ud558\uba74 \ud574\uacb0\ub41c\ub2e4."),(0,o.kt)("p",null,"\uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac\ub97c \ud558\ub4dc\ucf54\ub529\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc9c0\ub9cc \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc744 \uc704\ud574\uc11c \uc81c\uacf5\ud558\ub294 \ud658\uacbd\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$GITHUB_WORKSPACE"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4. \uc790\uc8fc \uc0ac\uc6a9\ud560 \ub4ef"),(0,o.kt)("h3",{id:"fatal-detected-dubious-ownership-in-repository-at--\uc774\uc720"},"fatal: detected dubious ownership in repository at ... \uc774\uc720"),(0,o.kt)("p",null,"Github\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"CVE-2022-24765")," \ubcf4\uc548 \uc774\uc288\ub97c \ud574\uacb0\ud558\uba74\uc11c \uc5c5\ub370\uc774\ud2b8\ub97c \ud588\ub294\ub370 \uc774 \ub54c\ubb38\uc5d0 \uc774 \uc124\uc815\uc774 \ud544\uc694\ud574\uc84c\ub2e4."),(0,o.kt)("h2",{id:"\ud658\uacbd\ubcc0\uc218-\uc124\uc815-\uad00\ub828\ud574\uc11c"},"\ud658\uacbd\ubcc0\uc218 \uc124\uc815 \uad00\ub828\ud574\uc11c"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: \ud83d\udcbe Register File name in env\n        run:  echo \"FILE_NAME=$(echo ${{ github.ref }} | sed 's|refs/tags/||')_wsub\" >> $GITHUB_ENV\n")),(0,o.kt)("p",null,"\uc544\uc5d0 \uc774\ub7f0\uc2dd\uc73c\ub85c \ud30c\uc77c\uc774\ub984\uc744 \ub9cc\ub4e4\uc5b4\ubc84\ub9ac\uace0 \ubc11\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud558\uae38 \uc6d0\ud588\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub7fc Makefile\uc5d0\uc11c\ub294 \uc544\ub798\ucc98\ub7fc \ubc14\uafd4\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"build:\n    go build -o $(FILE_NAME) .\n")),(0,o.kt)("p",null,"\uc544\ub2c8\uba74 \uc5ec\ub7ec \ube4c\ub4dc\ud30c\uc77c\uc744 \ubb36\uc744 tar\uc758 \uc774\ub984\uc73c\ub85c \uc0ac\uc6a9\ud560\uc218\ub3c4 \uc788\uaca0\ub2e4. (\uc544\ub2c8\uba74 \ud0dc\uadf8\ub9cc \ub530\ub85c \ubc1b\uace0 \ub610 \ub2e4\ub978 \ubcc0\uc218\ub97c \ub9cc\ub4dc\ub294 \uac83\ub3c4 \ubc29\ubc95 \uc77c\ub4ef)"))}d.isMDXComponent=!0}}]);