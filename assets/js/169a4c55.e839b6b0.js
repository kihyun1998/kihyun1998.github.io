"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[79502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},38822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:4},i="04. [BackEnd] DB Migration in golang",p={unversionedId:"backend-master/backend4",id:"backend-master/backend4",title:"04. [BackEnd] DB Migration in golang",description:"DB Migration\uc774\ub780",source:"@site/docs/backend-master/backend4.md",sourceDirName:"backend-master",slug:"/backend-master/backend4",permalink:"/docs/backend-master/backend4",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backSidebar",previous:{title:"03. [BackEnd] Docker + Postgres + TablePlus",permalink:"/docs/backend-master/backend3"},next:{title:"05. [BackEnd] Golang CRUD",permalink:"/docs/backend-master/backend5"}},o={},s=[{value:"DB Migration\uc774\ub780",id:"db-migration\uc774\ub780",level:2},{value:"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780?",id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780",level:3},{value:"DB \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780?",id:"db-\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780",level:3},{value:"\uc624\ub298 \ubc30\uc6b8 \ub0b4\uc6a9",id:"\uc624\ub298-\ubc30\uc6b8-\ub0b4\uc6a9",level:2},{value:"Golang migrate library",id:"golang-migrate-library",level:2},{value:"scoop \uc124\uce58",id:"scoop-\uc124\uce58",level:3},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:3},{value:"Migrate \uc0ac\uc6a9",id:"migrate-\uc0ac\uc6a9",level:2},{value:"\ub3c4\uc6c0\ub9d0",id:"\ub3c4\uc6c0\ub9d0",level:3},{value:"initialize schema",id:"initialize-schema",level:3},{value:"\uc5f0\uc2b5",id:"\uc5f0\uc2b5",level:3},{value:"\uadfc\ub370 \uc811\uc18d \uc548\ud558\uace0 \uac00\ub2a5",id:"\uadfc\ub370-\uc811\uc18d-\uc548\ud558\uace0-\uac00\ub2a5",level:3},{value:"Makefile \ub9cc\ub4e4\uae30",id:"makefile-\ub9cc\ub4e4\uae30",level:2},{value:".PHONY\ub780",id:"phony\ub780",level:3},{value:"\ud615\uc2dd",id:"\ud615\uc2dd",level:3},{value:"migration",id:"migration",level:2},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:3},{value:"Makefile\uc5d0 \uc800\uc7a5",id:"makefile\uc5d0-\uc800\uc7a5",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"04-backend-db-migration-in-golang"},"04. ","[BackEnd]"," DB Migration in golang"),(0,r.kt)("h2",{id:"db-migration\uc774\ub780"},"DB Migration\uc774\ub780"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780?"),(0,r.kt)("p",null,"\ud55c \uc6b4\uc601\ud658\uacbd\uc73c\ub85c\ubd80\ud130 \ub2e4\ub978 \uc6b4\uc601\ud658\uacbd\uc73c\ub85c \uc62e\uae30\ub294 \uc791\uc5c5\uc774\ub2e4. \ud558\ub4dc\uc6e8\uc5b4, \uc18c\ud504\ud2b8\uc6e8\uc5b4, \ub124\ud2b8\uc6cc\ud06c \ub4f1 \ub113\uc740 \ubc94\uc704\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac1c\ub150\uc774\ub2e4."),(0,r.kt)("h3",{id:"db-\ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780"},"DB \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774\ub780?"),(0,r.kt)("p",null,"\ucf54\ub4dc\ub97c \uc791\uc131\ud55c \ud074\ub798\uc2a4\ub97c \uc2e4\uc81c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ud14c\uc774\ube14\ub85c \uc62e\uae30\ub294 \uacfc\uc815"),(0,r.kt)("p",null,"Models > Migrations > Database"),(0,r.kt)("p",null,"2\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc0dd\uc131\ud55c \ubaa8\ub378 \ud074\ub798\uc2a4\ub97c \ubc14\ub85c db\uc5d0 \ubc18\uc601")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub370\uc774\ud130 \ubca0\uc774\uc2a4\ub85c \uc801\uc6a9\ub418\uae30 \uc804 create\ub9cc \uba3c\uc800 \ud574\ub450\ub294 \uac83 such as commit"))),(0,r.kt)("h2",{id:"\uc624\ub298-\ubc30\uc6b8-\ub0b4\uc6a9"},"\uc624\ub298 \ubc30\uc6b8 \ub0b4\uc6a9"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"golang\uc73c\ub85c DB \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ud558\uae30")),(0,r.kt)("h2",{id:"golang-migrate-library"},"Golang migrate library"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scoop-\uc124\uce58"},"scoop \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"irm get.scoop.sh -outfile 'install.ps1'\niex \"& {$(irm get.scoop.sh)} -RunAsAdmin\"\n")),(0,r.kt)("h3",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang-migrate/migrate"},"golang migrate"),"\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc124\uce58\ub97c \uc704\ud574 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang-migrate/migrate/tree/master/cmd/migrate"},"cli document"),"\ub85c \uc774\ub3d9\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc708\ub3c4\uc6b0\ub294 \uc544\ub798 \uba85\ub839\uc5b4 \uc124\uce58"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install migrate\n")),(0,r.kt)("p",null,"\ub9ac\ub205\uc2a4\ub294 \uc544\ub798 \uba85\ub839\uc5b4 \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -L https://packagecloud.io/golang-migrate/migrate/gpgkey | apt-key add -\n$ echo "deb https://packagecloud.io/golang-migrate/migrate/ubuntu/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/migrate.list\n$ apt-get update\n$ apt-get install -y migrate\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\ubc84\uc804 \ud655\uc778")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"migrate -version\n")),(0,r.kt)("h2",{id:"migrate-\uc0ac\uc6a9"},"Migrate \uc0ac\uc6a9"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ub3c4\uc6c0\ub9d0"},"\ub3c4\uc6c0\ub9d0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"migrate -help\n")),(0,r.kt)("h3",{id:"initialize-schema"},"initialize schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"migrate create -ext sql -dir db/migration -seq init_schema\n")),(0,r.kt)("p",null,"db/migration \ud3f4\ub354\ub97c \uc0dd\uc131\ud574\uc92c\uc5c8\ub2e4. \uadf8\ub798\uc11c \uc704\uce58\ud560 \ud3f4\ub354\ub97c db/migration\uc73c\ub85c \ud560 \uac83\uc774\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-ext"),"\ub294 \ud655\uc7a5\uc790\ub97c \uc815\ud558\ub294 \uc635\uc158\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"-dir"),"\uc740 \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774 \uc704\uce58\ud560 \ud3f4\ub354\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"-seq"),"\ub294 \ubc84\uc804\uc744 \uc2dc\ud000\uc2a4\ud558\uac8c \ud558\uae30 \uc704\ud55c \uc635\uc158\uc774\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"init_schema")," \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc774\ub984\uc774\ub2e4.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(75349).Z,width:"833",height:"106"})),(0,r.kt)("p",null,"\uc0ac\uc9c4\ucc98\ub7fc 2\uac1c\uc758 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4. up\ud30c\uc77c\uacfc down\ud30c\uc77c\uc774 \uc0dd\uc131\ub410\ub2e4."),(0,r.kt)("admonition",{title:"up & down",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"UP \ud30c\uc77c"),"\uc740 old DB\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ub0b4\uc6a9\uc744 New DB\uc5d0 \ubc18\uc601\ud55c \uac83\uc774\uace0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Down \ud30c\uc77c"),"\uc740 New DB\uc5d0\uc11c Up script\ub85c \ubc18\uc601\ud55c \uac83 \uc911 Old DB\ub85c revert\ud55c \uac83\uc774\ub2e4. "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"migrate up"),"\uc744 \ud558\uba74 up \ud30c\uc77c\ub4e4\uc774 prefix \ubc84\uc804\uc5d0 \ub530\ub77c \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4.  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"old db >> 1 > 2 > 3 >> new db\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"migrate down"),"\uc744 \ud558\uba74 down \ud30c\uc77c\ub4e4\uc774 prefix \ubc84\uc804\uc5d0 \ub530\ub77c \uc5ed\uc21c\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4. like 3 > 2 > 1  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"new db >> 3 > 2 > 1 >> old db\n"))),(0,r.kt)("h3",{id:"\uc5f0\uc2b5"},"\uc5f0\uc2b5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"simple bank sql\uc744 up \ud30c\uc77c\ub85c \uc62e\uae30\uae30")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uadf8\ub7fc up \ud30c\uc77c\uc5d4 3\uac1c\uc758 \ud14c\uc774\ube14\uc744 \ub9cc\ub4dc\ub294 sql\uc774 \ub4e4\uc5b4\uc788\ub2e4. (",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"entries"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transfers")," )")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"down \ud30c\uc77c\uc5d4 revert \ud558\ub294 \ud30c\uc77c\uc774\uae30 \ub54c\ubb38\uc5d0 \ub9cc\ub4e4\uc5b4\uc9c4 3\uac1c\uc758 \ud14c\uc774\ube14\uc744 drop\ud558\ub294 \ucf54\ub4dc\ub97c \ub123\ub294\ub2e4."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS entries;\nDROP TABLE IF EXISTS transfers;\nDROP TABLE IF EXISTS accounts;\n")),(0,r.kt)("admonition",{title:"DROP TABLE \uc2dc \uc8fc\uc758\ud560 \uc810",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"entries\uc640 transfers \ud14c\uc774\ube14\uc774 accounts\uc758 \ud0a4\ub97c \uc678\ub798\ud0a4\ub85c \uc4f0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 accounts \ud14c\uc774\ube14\ubcf4\ub2e4 \uba3c\uc800 DROP \ud574\uc918\uc57c\ud55c\ub2e4.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"postgres \ucf1c\uc838 \uc788\ub098 \ud655\uc778 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\uaebc\uc838\uc788\uc73c\uba74 \ud0a4\uace0 \ucf1c\uc838\uc788\uc73c\uba74 \ub4e4\uc5b4\uac00\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='\ub4e4\uc5b4\uac00\uae30'",title:"'\ub4e4\uc5b4\uac00\uae30'"},"docker exec -it postgres15 /bin/sh\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"db \uc0dd\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"createdb --username=root --owner=root <\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984>\n")),(0,r.kt)("admonition",{title:"\uc635\uc158 \uc124\uba85",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--username")," : \uc811\uc18d \uc720\uc800 \uc774\ub984",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"--owner")," : \uc18c\uc720\uc790 \uc774\ub984    ")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"db \uc811\uc18d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"psql <\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984>\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"db \uc0ad\uc81c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dropdb <\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984>\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"postgres shell\uc5d0\uc11c \ub098\uc624\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,r.kt)("h3",{id:"\uadfc\ub370-\uc811\uc18d-\uc548\ud558\uace0-\uac00\ub2a5"},"\uadfc\ub370 \uc811\uc18d \uc548\ud558\uace0 \uac00\ub2a5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"db \ub9cc\ub4e4\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it postgres15 createdb --username=<\uc720\uc800\uc774\ub984> --owner=<\uc18c\uc720\uc790\uc774\ub984> <\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\uc811\uc18d\ud558\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it postgres15 psql -U <\uc720\uc800\uc774\ub984>  <\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc774\ub984>\n")),(0,r.kt)("h2",{id:"makefile-\ub9cc\ub4e4\uae30"},"Makefile \ub9cc\ub4e4\uae30"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"phony\ub780"},".PHONY\ub780"),(0,r.kt)("p",null,".PHONY\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc2e4\uc81c \ud30c\uc77c\uc774\ub984\uacfc \ucda9\ub3cc\uc744 \ud574\uacb0\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(21235).Z,width:"314",height:"96"})),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc704\ucc98\ub7fc \uc124\uc815\ud55c\ub2e4\uba74 \uc11c\ube0c\ub8e8\ud2f4\ucc98\ub7fc \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud615\uc2dd"},"\ud615\uc2dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n    docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine\n\ncreatedb:\n    docker exec -it postgres15 createdb --username=root --owner=root simple_bank\n\ndropdb:\n    docker exec -it postgres15 dropdb simple_bank\n\n.PHONY: postgres createdb dropdb\n")),(0,r.kt)("p",null,"\uc704\ucc98\ub7fc \ud588\uc744 \ub54c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make postgres\n")),(0,r.kt)("p",null,"\ub97c \ud558\uba74 docker\uac00 \uc2e4\ud589\uc774 \ub418\uace0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make createdb\n")),(0,r.kt)("p",null,"\ub97c \ud558\uba74 db\uac00 \uc0dd\uc131\uc774 \ub418\uace0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make dropdb\n")),(0,r.kt)("p",null,"\ub97c \ud558\uba74 db\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"migration"},"migration"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'migrate -path <\uacbd\ub85c> -database "<drivers \uc774\ub984>://<\uc720\uc800\uc774\ub984>:<\uc720\uc800\ube44\ubc00\ubc88\ud638>@<\uc8fc\uc18c>:<\ud3ec\ud2b8>/<DB\uc774\ub984>?sslmode=disable" -verbose up\n')),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c drivers \uc774\ub984\uc740 MySQL, mongodb \uac19\uc740 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"migrate -help")," \ud558\uba74 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sslmode"),": disable\ud574\uc57c \uc5d0\ub7ec\uac00 \uc548\ub09c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-verbose"),": \ub85c\uadf8 \ubcf4\uae30 \uc635\uc158"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"up"),": up\ud55c\ub2e4\ub294 \ub73b"),(0,r.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774 \uc798 \uc2e4\ud589\ub41c\ub2e4."),(0,r.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\ub294 4\uac00\uc9c0 \ud14c\uc774\ube14\uc774 \uc0dd\uc131\ub41c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"entries"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transfers"),"\ub294 \ub0b4\uac00 \ucd94\uac00\ud55c \ud14c\uc774\ube14\uc774\uace0 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \ud14c\uc774\ube14\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_migrations"),"\uc774\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"schema_migrations"),"\uc5d0\ub294 migration \ubc84\uc804\uc774 \uc800\uc7a5\ub41c\ub2e4."),(0,r.kt)("h3",{id:"makefile\uc5d0-\uc800\uc7a5"},"Makefile\uc5d0 \uc800\uc7a5"),(0,r.kt)("p",null,"migrate up\ud558\ub294 \uac83\uacfc down\ud558\ub294 \uba85\ub839\uc5b4\ub97c Makefile\uc5d0 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'postgres:\n    docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine\n\ncreatedb:\n    docker exec -it postgres15 createdb --username=root --owner=root simple_bank\n\ndropdb:\n    docker exec -it postgres15 dropdb simple_bank\n\nmigrateup:\n    migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose up\n\nmigratedown:\n    migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose down\n\n.PHONY: postgres createdb dropdb migrateup migratedown\n')),(0,r.kt)("p",null,"\ud604\uc7ac Makefile\uc785\ub2c8\ub2e4."))}m.isMDXComponent=!0},75349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-de5f52c2900d7d52466b6399fd66393b.png"},21235:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);