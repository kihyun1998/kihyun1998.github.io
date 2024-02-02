"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||k[u]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:3},o="03. [BackEnd] Docker + Postgres + TablePlus",s={unversionedId:"backend-master/backend3",id:"backend-master/backend3",title:"03. [BackEnd] Docker + Postgres + TablePlus",description:"Docker \uc124\uce58",source:"@site/docs/backend-master/backend3.md",sourceDirName:"backend-master",slug:"/backend-master/backend3",permalink:"/docs/backend-master/backend3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"backSidebar",previous:{title:"02. [BackEnd] WSL2 + Go + VSCode + Docker + Make + Sqlc",permalink:"/docs/backend-master/backend2"},next:{title:"04. [BackEnd] DB Migration in golang",permalink:"/docs/backend-master/backend4"}},i={},p=[{value:"Docker \uc124\uce58",id:"docker-\uc124\uce58",level:2},{value:"Postgres: Docker \uc774\ubbf8\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc",id:"postgres-docker-\uc774\ubbf8\uc9c0-\ub2e4\uc6b4\ub85c\ub4dc",level:2},{value:"Postgres: Start a Container",id:"postgres-start-a-container",level:2},{value:"\uc2e4\ud589 \uba85\ub839\uc5b4 \uad6c\uc870",id:"\uc2e4\ud589-\uba85\ub839\uc5b4-\uad6c\uc870",level:3},{value:"\uc608\uc2dc \uc2e4\ud589 \uba85\ub839\uc5b4",id:"\uc608\uc2dc-\uc2e4\ud589-\uba85\ub839\uc5b4",level:3},{value:"Container Customize",id:"container-customize",level:2},{value:"\ud658\uacbd\ubcc0\uc218\uc5d0 \ub300\ud574\uc11c",id:"\ud658\uacbd\ubcc0\uc218\uc5d0-\ub300\ud574\uc11c",level:3},{value:"\uc2e4\uc81c \uc2e4\ud589 \uba85\ub839\uc5b4",id:"\uc2e4\uc81c-\uc2e4\ud589-\uba85\ub839\uc5b4",level:3},{value:"\uc2e4\ud589\ud55c \uac83 \ud655\uc778",id:"\uc2e4\ud589\ud55c-\uac83-\ud655\uc778",level:3},{value:"Access to Postgres console",id:"access-to-postgres-console",level:2},{value:"Run command in container",id:"run-command-in-container",level:3},{value:"\uc2e4\uc81c \ucf54\ub4dc",id:"\uc2e4\uc81c-\ucf54\ub4dc",level:3},{value:"shell\uc744 \uc0ac\uc6a9\ud574\uc11c \uc9c4\uc785",id:"shell\uc744-\uc0ac\uc6a9\ud574\uc11c-\uc9c4\uc785",level:3},{value:"\uc9c4\uc785 \uc2dc \ube44\ubc00\ubc88\ud638\ub97c \ubb3c\uc5b4\ubcf4\uc9c0 \uc54a\ub294 \uc774\uc720",id:"\uc9c4\uc785-\uc2dc-\ube44\ubc00\ubc88\ud638\ub97c-\ubb3c\uc5b4\ubcf4\uc9c0-\uc54a\ub294-\uc774\uc720",level:3},{value:"\ub098\uac08\ub54c\ub294",id:"\ub098\uac08\ub54c\ub294",level:3},{value:"\ub85c\uadf8 \ubcf4\uae30",id:"\ub85c\uadf8-\ubcf4\uae30",level:2},{value:"\ub85c\uadf8 \ubcf4\ub294 \uba85\ub839\uc5b4",id:"\ub85c\uadf8-\ubcf4\ub294-\uba85\ub839\uc5b4",level:3},{value:"\ucee8\ud14c\uc774\ub108\ub97c \uba48\ucd94\ub824\uba74",id:"\ucee8\ud14c\uc774\ub108\ub97c-\uba48\ucd94\ub824\uba74",level:2},{value:"\uba48\ucd94\ub294 \uba85\ub839\uc5b4",id:"\uba48\ucd94\ub294-\uba85\ub839\uc5b4",level:3},{value:"\uba48\ucd98\uac70 \ud655\uc778",id:"\uba48\ucd98\uac70-\ud655\uc778",level:3},{value:"\ucee8\ud14c\uc774\ub108 \uc0ad\uc81c",id:"\ucee8\ud14c\uc774\ub108-\uc0ad\uc81c",level:2},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:3},{value:"TablePlus",id:"tableplus",level:2},{value:"\ub2e4\uc6b4\ub85c\ub4dc",id:"\ub2e4\uc6b4\ub85c\ub4dc",level:3},{value:"PostgreSQL\ub85c \uc124\uc815",id:"postgresql\ub85c-\uc124\uc815",level:3},{value:"SQL \uc2e4\ud589",id:"sql-\uc2e4\ud589",level:3}],c={toc:p},d="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"03-backend-docker--postgres--tableplus"},"03. ","[BackEnd]"," Docker + Postgres + TablePlus"),(0,r.kt)("h2",{id:"docker-\uc124\uce58"},"Docker \uc124\uce58"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\uc774\uc804 \uac8c\uc2dc\ubb3c\uc5d0\uc11c \ud568"),(0,r.kt)("h2",{id:"postgres-docker-\uc774\ubbf8\uc9c0-\ub2e4\uc6b4\ub85c\ub4dc"},"Postgres: Docker \uc774\ubbf8\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"\uc5ec\uae30"),"\uc5d0\uc11c \uac80\uc0c9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"docker official images\ub97c \ub2e4\uc6b4\ub85c\ub4dc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull postgres:15-alpine\n")),(0,r.kt)("p",null,"\uc601\uc0c1\uc5d0\uc120 ",(0,r.kt)("inlineCode",{parentName:"p"},"12-alpine"),"\uc744 \ub2e4\uc6b4\ubc1b\uc558\uc9c0\ub9cc \uc77c\ub2e8 15\ub85c \ub2e4\uc6b4\ud574\ubcf4\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker pull Image \ud558\ub294 \ubc95")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull <\uc774\ubbf8\uc9c0>:<\ud0dc\uadf8>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\ud655\uc778\ud558\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,r.kt)("h2",{id:"postgres-start-a-container"},"Postgres: Start a Container"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uc2e4\ud589-\uba85\ub839\uc5b4-\uad6c\uc870"},"\uc2e4\ud589 \uba85\ub839\uc5b4 \uad6c\uc870"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name <\ucee8\ud14c\uc774\ub108\uc774\ub984> -e <\ud658\uacbd \ubcc0\uc218 \uac12> -p <\ud638\uc2a4\ud2b8\ud3ec\ud2b8:\ucee8\ud14c\uc774\ub108\ud3ec\ud2b8> -d <\uc774\ubbf8\uc9c0>:<\ud0dc\uadf8>\n")),(0,r.kt)("p",null,"\uc704\uc758 \ubc95\uce59\uc744 \ub530\ub77c\uc57c\ud568"),(0,r.kt)("h3",{id:"\uc608\uc2dc-\uc2e4\ud589-\uba85\ub839\uc5b4"},"\uc608\uc2dc \uc2e4\ud589 \uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres\n")),(0,r.kt)("p",null,"\ud55c \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc5ec\ub7ec \uc774\ubbf8\uc9c0\ub97c run \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("h2",{id:"container-customize"},"Container Customize"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ud658\uacbd\ubcc0\uc218\uc5d0-\ub300\ud574\uc11c"},"\ud658\uacbd\ubcc0\uc218\uc5d0 \ub300\ud574\uc11c"),(0,r.kt)("p",null,"\ubb38\uc11c\uc5d0 \ub098\uc640\uc788\ub294 Environment Variables\ub97c \ud1b5\ud574\uc11c \ucee8\ud14c\uc774\ub108\ub97c Customizing \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POSTGRES_USER"),": \uc811\uc18d \uc544\uc774\ub514 \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POSTGRES_DB"),": db \uc774\ub984 \uc124\uc815 / \ub514\ud3f4\ud2b8 db \uc774\ub984\uc740 username\uacfc \ub3d9\uc77c\ud558\ub2e4."),(0,r.kt)("h3",{id:"\uc2e4\uc81c-\uc2e4\ud589-\uba85\ub839\uc5b4"},"\uc2e4\uc81c \uc2e4\ud589 \uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine\n")),(0,r.kt)("h3",{id:"\uc2e4\ud589\ud55c-\uac83-\ud655\uc778"},"\uc2e4\ud589\ud55c \uac83 \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"\uc5ec\uae30\uae4c\uc9c0\ud558\uba74 Postgres \uc11c\ubc84\ub294 \uc900\ube44\uac00 \ub410\ub2e4."),(0,r.kt)("h2",{id:"access-to-postgres-console"},"Access to Postgres console"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"run-command-in-container"},"Run command in container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it <\ucee8\ud14c\uc774\ub108\uc774\ub984 or \ucee8\ud14c\uc774\ub108\uc544\uc774\ub514> <\uba85\ub839\uc5b4> [args]\n")),(0,r.kt)("h3",{id:"\uc2e4\uc81c-\ucf54\ub4dc"},"\uc2e4\uc81c \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it postgres15 psql -U root\n")),(0,r.kt)("admonition",{title:"\uc635\uc158 \uc124\uba85",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"psql"),": postgres \ub4e4\uc5b4\uac00\ub294 \uba85\ub839\uc5b4"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"-U"),": \ub85c\uadf8\uc778 \uc544\uc774\ub514 \uc635\uc158"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"root"),": root\ub85c \ub85c\uadf8\uc778")),(0,r.kt)("h3",{id:"shell\uc744-\uc0ac\uc6a9\ud574\uc11c-\uc9c4\uc785"},"shell\uc744 \uc0ac\uc6a9\ud574\uc11c \uc9c4\uc785"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it postgres15 /bin/sh\n")),(0,r.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub85c \uc9c4\uc785\ud558\uba74 /bin/sh\uc744 \uc0ac\uc6a9\ud574\uc11c postgres \uc11c\ubc84\uc5d0 \uc9c1\uc811\uc801\uc73c\ub85c \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc9c4\uc785-\uc2dc-\ube44\ubc00\ubc88\ud638\ub97c-\ubb3c\uc5b4\ubcf4\uc9c0-\uc54a\ub294-\uc774\uc720"},"\uc9c4\uc785 \uc2dc \ube44\ubc00\ubc88\ud638\ub97c \ubb3c\uc5b4\ubcf4\uc9c0 \uc54a\ub294 \uc774\uc720"),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c postgres \ucee8\ud14c\uc774\ub108\ub294 trust authentication locally\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c localhost\uc5d0\uc11c \uc5f0\uacb0\ud560 \ub54c\ub294 \ube44\ubc00\ubc88\ud638 \uc785\ub825\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4\uace0 \ud558\ub124\uc694."),(0,r.kt)("h3",{id:"\ub098\uac08\ub54c\ub294"},"\ub098\uac08\ub54c\ub294"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\\q\n")),(0,r.kt)("h2",{id:"\ub85c\uadf8-\ubcf4\uae30"},"\ub85c\uadf8 \ubcf4\uae30"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ub85c\uadf8-\ubcf4\ub294-\uba85\ub839\uc5b4"},"\ub85c\uadf8 \ubcf4\ub294 \uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <\ucee8\ud14c\uc774\ub108\uc774\ub984 \ub610\ub294 \ucee8\ud14c\uc774\ub108\uc544\uc774\ub514>\n")),(0,r.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108\ub97c-\uba48\ucd94\ub824\uba74"},"\ucee8\ud14c\uc774\ub108\ub97c \uba48\ucd94\ub824\uba74"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uba48\ucd94\ub294-\uba85\ub839\uc5b4"},"\uba48\ucd94\ub294 \uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <\ucee8\ud14c\uc774\ub108\uc544\uc774\ub514 \ub610\ub294 \uc774\ub984>\n")),(0,r.kt)("h3",{id:"\uba48\ucd98\uac70-\ud655\uc778"},"\uba48\ucd98\uac70 \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \ub294 \uc2e4\ud589\uc911\uc774\ub4e0 \uaebc\uc838\uc788\ub4e0 \ubaa8\ub4e0 \ucee8\ud14c\uc774\ub108 \ubcf4\uc5ec\uc90c"),(0,r.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108-\uc0ad\uc81c"},"\ucee8\ud14c\uc774\ub108 \uc0ad\uc81c"),(0,r.kt)("h3",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm <\ucee8\ud14c\uc774\ub108\uc544\uc774\ub514 \ub610\ub294 \uc774\ub984>\n")),(0,r.kt)("h2",{id:"tableplus"},"TablePlus"),(0,r.kt)("p",null,"\uc704\ub294 \uc5b4\ub824\uc6b4 \ubc29\ubc95\uc774\uc600\ub2e4\uace0 \ud55c\ub2e4. TablePlus\ub97c \uc0ac\uc6a9\ud558\uba74 \uc26c\uc6b4 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("h3",{id:"\ub2e4\uc6b4\ub85c\ub4dc"},"\ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tableplus.com/download"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc124\uce58\ud558\uae30"),(0,r.kt)("h3",{id:"postgresql\ub85c-\uc124\uc815"},"PostgreSQL\ub85c \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(85914).Z,width:"516",height:"547"})),(0,r.kt)("p",null,"\uc704\ucc98\ub7fc \uc124\uc815\ud55c\ub2e4. test \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc5f0\uacb0 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud55c\ub2e4."),(0,r.kt)("h3",{id:"sql-\uc2e4\ud589"},"SQL \uc2e4\ud589"),(0,r.kt)("p",null,"SQL\uc744 \uc2e4\ud589\ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+a"),"\ub97c \ub204\ub974\uace0 \ud574\uc57c\ud55c\ub2e4. \ud55c \ube14\ub7ed\uc529 \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc774\ub2e4."))}k.isMDXComponent=!0},85914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-ac53160c5f65f7df1a7de9f02b8bb6b9.png"}}]);