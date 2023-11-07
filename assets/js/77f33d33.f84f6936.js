"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:11},i="11. [BackEnd] Github Action + Go + Postgres to unit test",o={unversionedId:"backend-master/backend11",id:"backend-master/backend11",title:"11. [BackEnd] Github Action + Go + Postgres to unit test",description:"\ud559\uc2b5 \ubaa9\ud45c",source:"@site/docs/backend-master/backend11.md",sourceDirName:"backend-master",slug:"/backend-master/backend11",permalink:"/docs/backend-master/backend11",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"backSidebar",previous:{title:"10. [BackEnd] transaction isolation level",permalink:"/docs/backend-master/backend10"},next:{title:"12. [BackEnd] Implement RESTful HTTP API in Go use Gin",permalink:"/docs/backend-master/backend12"}},s={},u=[{value:"\ud559\uc2b5 \ubaa9\ud45c",id:"\ud559\uc2b5-\ubaa9\ud45c",level:2},{value:"Github Actions",id:"github-actions",level:2},{value:"3\uac00\uc9c0 Trigger",id:"3\uac00\uc9c0-trigger",level:3},{value:"\uc6cc\ud06c\ud50c\ub85c (workflow)",id:"\uc6cc\ud06c\ud50c\ub85c-workflow",level:3},{value:"\uc791\uc5c5 ( Job )",id:"\uc791\uc5c5--job-",level:3},{value:"\uc2e4\ud589\uc790 ( Runner )",id:"\uc2e4\ud589\uc790--runner-",level:3},{value:"\ub2e8\uacc4 ( Step )",id:"\ub2e8\uacc4--step-",level:3},{value:"\uc561\uc158 (Action)",id:"\uc561\uc158-action",level:3},{value:"Github Action \uc0ac\uc6a9",id:"github-action-\uc0ac\uc6a9",level:2},{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:3},{value:"\ucd5c\uc885",id:"\ucd5c\uc885",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...l}=e;return(0,r.kt)(c,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"11-backend-github-action--go--postgres-to-unit-test"},"11. ","[BackEnd]"," Github Action + Go + Postgres to unit test"),(0,r.kt)("h2",{id:"\ud559\uc2b5-\ubaa9\ud45c"},"\ud559\uc2b5 \ubaa9\ud45c"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"GitHub Action\uc744 \uc0ac\uc6a9\ud574\uc11c golang \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \ube4c\ub4dc\ud558\uace0 \uc2e4\ud589\ud558\ub294 \ud504\ub85c\uc138\uc2a4 \uc124\uc815\ud558\ub294 \ubc95"),(0,r.kt)("h2",{id:"github-actions"},"Github Actions"),(0,r.kt)("p",null,"Jenkins, Travis, Circle CI \uac19\uc774 CI \uae30\ub2a5\uc744 \uac16\ucd98 \uc11c\ube44\uc2a4"),(0,r.kt)("p",null,"Github Action\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc815\uc758\ud574\uc57c\ud568."),(0,r.kt)("h3",{id:"3\uac00\uc9c0-trigger"},"3\uac00\uc9c0 Trigger"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubca4\ud2b8")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubc18\ubcf5 \uc77c\uc815")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc218\ub3d9 \ud074\ub9ad"))),(0,r.kt)("p",null,"\uc6cc\ud06c \ud50c\ub85c\uc6b0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," \ud30c\uc77c\ub9cc \ucd94\uac00\ud558\uba74 \ub41c\ub2e4."),(0,r.kt)("p",null,"\uc791\uc5c5 \uc2e4\ud589\uc744 \uc704\ud574\uc11c \uc2e4\ud589\uc790\ub97c \uc9c0\uc815\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc6cc\ud06c\ud50c\ub85c-workflow"},"\uc6cc\ud06c\ud50c\ub85c (workflow)"),(0,r.kt)("p",null,"\uc6cc\ud06c\ud50c\ub85c\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc791\uc5c5\uc73c\ub85c \ub418\uc5b4\uc788\ub2e4."),(0,r.kt)("h3",{id:"\uc791\uc5c5--job-"},"\uc791\uc5c5 ( Job )"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc791\uc5c5\uc740 \ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\uc9c0\ub9cc \uc758\uc874\uc131 \uc788\ub294\uac70\ub294 \uc21c\ucc28\uc801\uc73c\ub85c"),(0,r.kt)("h3",{id:"\uc2e4\ud589\uc790--runner-"},"\uc2e4\ud589\uc790 ( Runner )"),(0,r.kt)("p",null,"\uc2e4\ud589\uc790\ub294 \uc791\uc5c5\uc744 \uc218\uc2e0\ud558\ub294 \ub2e8\uc21c\ud55c \uc11c\ubc84\ub2e4. \ud55c \ubc88\uc5d0 \ud558\ub098\uc758 \uc791\uc5c5\ub9cc \uc2e4\ud589\ud55c\ub2e4. \uc9c4\ud589\uc0c1\ud669, \ub85c\uadf8\ub97c GitHub\uc5d0 report \ud55c\ub2e4."),(0,r.kt)("h3",{id:"\ub2e8\uacc4--step-"},"\ub2e8\uacc4 ( Step )"),(0,r.kt)("p",null,"\uac1c\ubcc4\uc758 \uc791\uc5c5 \uc791\uc5c5 \uc548\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4."),(0,r.kt)("p",null,"step \uc548\uc5d0\ub294 \ud558\ub098 \uc774\uc0c1\uc758 action \ub4e4\uc5b4\uac04\ub2e4."),(0,r.kt)("h3",{id:"\uc561\uc158-action"},"\uc561\uc158 (Action)"),(0,r.kt)("p",null,"standalone \uba85\ub839\uc5b4\ub2e4. \uadf8\ub9ac\uace0 \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("admonition",{title:"\ud0a4\uc6cc\ub4dc",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": \uc6cc\ud06c\ud50c\ub85c \uc774\ub984",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"on"),": \ud2b8\ub9ac\uac70\ub418\ub294 \ubc29\ubc95 \uc815\uc758 ( \uc774\ubca4\ud2b8, \ubc18\ubcf5 \uc77c\uc815( schedule ) \ub4f1)\n",(0,r.kt)("inlineCode",{parentName:"p"},"jobs"),": \uc791\uc5c5\n",(0,r.kt)("inlineCode",{parentName:"p"},"runs-on"),": \uc2e4\ud589\uc790 \uc9c0\uc815\n",(0,r.kt)("inlineCode",{parentName:"p"},"needs"),": \uc758\uc874\uc131\n",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),": step\ub4e4 \ub098\uc5f4")),(0,r.kt)("h2",{id:"github-action-\uc0ac\uc6a9"},"Github Action \uc0ac\uc6a9"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc774\ub3d9 \ubc0f \ud074\ub9ad")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(5356).Z,width:"1297",height:"750"})),(0,r.kt)("p",null,"Repository\uc5d0\uc11c Actions \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0c1\ud669\uc5d0 \ub9de\ub294 yaml \ud30c\uc77c\uc744 \uc791\uc131\ud574\uc57c\ud558\ub294\ub370 \ud604\uc7ac \ud504\ub85c\uc81d\ud2b8\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Go"),"\uc5b8\uc5b4\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Go"),"\ub85c \ucd94\ucc9c\ud574\uc8fc\ub294 yaml \uc124\uc815."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\ud3b8\uc9d1\ud558\uae30")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(8295).Z,width:"1865",height:"839"})),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ub098\uc624\ub294\ub370 \ud3b8\uc9d1\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\ub2e4\ub978\ubc29\ubc95")),(0,r.kt)("p",null,"\ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c\ub294 \uadf8\ub0e5 \uc704 \uc774\ubbf8\uc9c0\uc5d0 \ub098\uc624\ub294 \uacbd\ub85c\ub97c \ub9cc\ub4e4\uc5b4\uc11c vs code\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\ub3c4 \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: CI-test\n\non:\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n\njobs:\n\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n\n    - name: Set up Go\n      uses: actions/setup-go@v4\n      with:\n        go-version: \'1.20\'\n\n    - name: Build\n      run: go build -v ./...\n\n    - name: Test\n      run: go test -v ./...\n')),(0,r.kt)("p",null,"\uc774\ub984\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"CI-test"),"\uc778 \uc791\uc5c5\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"main \ube0c\ub79c\uce58\uc5d0 push \ub418\uac70\ub098 pull request \ub41c\ub2e4\uba74 \uc774 \uc791\uc5c5\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"test\ub9cc \ubaa9\uc801\uc73c\ub85c \ud558\uae30\uc5d0 Build step\uc740 \uc9c0\uc6cc\ub3c4\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 test \ucf54\ub4dc\ub3c4 makefile\uc5d0 \uc815\uc758\ud574\ub1a8\uae30 \ub54c\ubb38\uc5d0 make test\ub85c \ubc14\uafd4\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: CI-test\n\non:\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n\njobs:\n\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n\n    - name: Set up Go\n      uses: actions/setup-go@v4\n      with:\n        go-version: \'\ub9de\ub294 go \ubc84\uc804\'\n\n    - name: Test\n      run: make test\n')),(0,r.kt)("p",null,"\ud574\ub2f9 \ud30c\uc77c\uc744 \ud478\uc26c\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc2e4\ud328\ud569\ub2c8\ub2e4. postgres \uc11c\ubc84\uac00 \uc5c6\uae30 \ub54c\ubb38\uc778\ub370\uc694"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    services:\n      postgres:\n        image: postgres:15-alpine\n        env:\n          POSTGRES_USER: root\n          POSTGRES_PASSWORD: secret\n          POSTGRES_DB: simple_bank\n        ports:\n          - 5432:5432\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n")),(0,r.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\uba3c\uc800 image\ub97c docker\uc5d0 \uc124\uce58\ud558\uba74 image\ub85c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\ub9ac\uac00 \uc124\uc815\ud55c POSTGRES_USER\uc640 DB\uae4c\uc9c0 \ucd94\uac00\ud558\uace0 PASSWORD\ub294 \uc124\uc815\ud55c \uac83\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ports"),"\ub97c \ud1b5\ud574\uc11c \ud3ec\ud2b8\ub97c \uc124\uc815\ud558\uace0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\ub4e4\uc744 \ud1b5\ud574\uc11c db\ub97c \uc798 \ub744\uc6b8 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 migration \ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8 \uc804\uc5d0 golang-migrate\ub97c \uc124\uce58\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba85\ub839\uc5b4\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang-migrate/migrate/tree/master/cmd/migrate"},"\uc5ec\uae30"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc54c\ub9de\uc740 \ub9b4\ub9ac\uc988\ub97c \ucc3e\uc544\uc11c \ub9c1\ud06c \ubcf5\uc0ac\ub97c \ud574\uc11c \ub9c1\ud06c\ub97c \ub300\uccb4\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: Install golang-migrate\n      run: |\n        curl -L https://github.com/golang-migrate/migrate/releases/download/v4.16.2/migrate.linux-amd64.tar.gz | tar xvz\n        sudo mv migrate /usr/bin\n        which migrate\n")),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc774 \uc555\ucd95 \ud574\uc81c\ud55c \ud30c\uc77c\uc744 /usr/bin\uc73c\ub85c \uc62e\uaca8\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 run \ub4a4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"\ub85c \uc2dc\uc791\ud574\uc11c \uba40\ud2f0\ub77c\uc778\uc774 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"/usr/bin\uc740 super user\uac00 \uc640\uc57c\ud558\uae30\uc5d0 sudo\ub85c \uc2e4\ud589\ud558\uace0 which migrate\ub294 \uc5b4\ub528\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uaf2d \uc555\ucd95\ud574\uc81c \ud574\ubcf4\uc138\uc694",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\ub294\ub2e4\ub294 \uac00\uc815\uc774 \ub4e4\uc5b4\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\ubcf4\uace0 \uc555\ucd95\ud574\uc81c \ud55c\ub2e4\uba74 \uc5b4\ub5a4 \uc774\ub984\uc73c\ub85c \ub0a8\ub294\uc9c0 \uc54c\uc544\ub193\uc744 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: run migrations\n      run: make migrateup\n")),(0,r.kt)("p",null,"\ub9c8\uc774\uadf8\ub808\uc774\ud2b8 up\ub3c4 \ud574\uc918\uc57c db \uc0dd\uae30\uace0 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub123\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ucd5c\uc885"},"\ucd5c\uc885"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# This workflow will build a golang project\n# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-go\n\nname: CI-test\n\non:\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n\njobs:\n\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:15-alpine\n        env:\n          POSTGRES_USER: root\n          POSTGRES_PASSWORD: secret\n          POSTGRES_DB: simple_bank\n        ports:\n          - 5432:5432\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n    steps:\n    - uses: actions/checkout@v3\n\n    - name: Set up Go\n      uses: actions/setup-go@v4\n      with:\n        go-version: \'1.21.3\'\n\n    - name: Install golang-migrate\n      run: |\n        curl -L https://github.com/golang-migrate/migrate/releases/download/v4.16.2/migrate.linux-amd64.tar.gz | tar xvz\n        sudo mv migrate /usr/bin\n        which migrate\n\n    - name: run migrations\n      run: make migrateup\n\n\n    - name: Test\n      run: make test\n')),(0,r.kt)("p",null,"\ud658\uacbd\ub9c8\ub2e4 \ub2e4\ub97c \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\uace0 \uc788\uc790."))}m.isMDXComponent=!0},5356:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image1-98523ccf5f1598e15afc2f1de029c40b.png"},8295:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image2-aae3309497121d7710a1ac7b099615d0.png"}}]);