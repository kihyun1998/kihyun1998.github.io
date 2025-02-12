"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[16431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||i;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={sidebar_position:10},r="10. [BackEnd] transaction isolation level",o={unversionedId:"backend-master/backend10",id:"backend-master/backend10",title:"10. [BackEnd] transaction isolation level",description:"Read Phenomena",source:"@site/docs/backend-master/backend10.md",sourceDirName:"backend-master",slug:"/backend-master/backend10",permalink:"/docs/backend-master/backend10",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"backSidebar",previous:{title:"09. [BackEnd] avoid db deadlock",permalink:"/docs/backend-master/backend9"},next:{title:"11. [BackEnd] Github Action + Go + Postgres to unit test",permalink:"/docs/backend-master/backend11"}},d={},p=[{value:"Read Phenomena",id:"read-phenomena",level:2},{value:"Dirty Read",id:"dirty-read",level:3},{value:"Non-repeatable Reads",id:"non-repeatable-reads",level:3},{value:"Phantom Reads",id:"phantom-reads",level:3},{value:"Serialization Anomaly",id:"serialization-anomaly",level:3},{value:"Isolation level",id:"isolation-level",level:2},{value:"Read Uncommitted",id:"read-uncommitted",level:3},{value:"Read Committed",id:"read-committed",level:3},{value:"Repeatable Read",id:"repeatable-read",level:3},{value:"Serializable",id:"serializable",level:3},{value:"MySQL",id:"mysql",level:2},{value:"Isolation level \ud655\uc778",id:"isolation-level-\ud655\uc778",level:3},{value:"Isolation \ubcc0\uacbd",id:"isolation-\ubcc0\uacbd",level:3},{value:"read uncommitted",id:"read-uncommitted-1",level:3},{value:"read committed",id:"read-committed-1",level:3},{value:"repeatable read",id:"repeatable-read-1",level:3},{value:"Serializable",id:"serializable-1",level:3},{value:"Postgres",id:"postgres",level:2},{value:"isolation level \ud655\uc778",id:"isolation-level-\ud655\uc778-1",level:3},{value:"isolation level \uc124\uc815",id:"isolation-level-\uc124\uc815",level:3},{value:"read uncommitted",id:"read-uncommitted-2",level:3},{value:"read committed",id:"read-committed-2",level:3},{value:"repeatable read",id:"repeatable-read-2",level:3},{value:"Serializable",id:"serializable-2",level:3},{value:"\ub2e4\uc2dc MySQL",id:"\ub2e4\uc2dc-mysql",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"10-backend-transaction-isolation-level"},"10. ","[BackEnd]"," transaction isolation level"),(0,l.kt)("h2",{id:"read-phenomena"},"Read Phenomena"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc77d\uae30 \uc774\uc0c1 \ud604\uc0c1\uc774\ub780 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0ac\uc6a9\ud560 \ub54c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc774\uc0c1 \ud604\uc0c1\ub4e4"),(0,l.kt)("h3",{id:"dirty-read"},"Dirty Read"),(0,l.kt)("p",null,"\ub3d9\uc2dc\uc5d0 \uc9c4\ud589\ub418\uace0 \uc788\ub294 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158(\uc544\uc9c1 \ucee4\ubc0b\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc)\uc5d0\uc11c \ubcc0\uacbd\ud55c \ub370\uc774\ud130\ub97c \ud604\uc7ac \uc9c4\ud589 \uc911\uc778 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc77d\uc5b4 \ub4e4\uc774\ub294 \uac83"),(0,l.kt)("h3",{id:"non-repeatable-reads"},"Non-repeatable Reads"),(0,l.kt)("p",null,"\ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158 \uc911 \uc77d\uc5c8\ub358 \ud2b9\uc815 row\uc758 \uac12\uc744 \uac19\uc740 \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc5d0\uc11c \ub2e4\uc2dc \uc77d\uc5b4 \ub4e4\uc774\ub294\ub370 \uc911\uac04\uc5d0 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc0dd\uaca8 (\uc2e4\uc81c\ub85c COMMIT\uc774 \ub41c \ubcc0\uacbd\uc0ac\ud56d) \uacb0\uad0f\uac12\uc774 \ub2e4\ub974\uac8c \ub098\uc624\ub294 \ud604\uc0c1\uc744 \ub73b\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"phantom-reads"},"Phantom Reads"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791 \uc2dc\uc810 \ub370\uc774\ud130\ub97c \uc77d\uc5c8\uc744 \ub54c \uc874\uc7ac\ud558\uc9c0 \uc54a\uc558\ub358 \ub370\uc774\ud130\uac00 \ub2e4\uc2dc \uac19\uc740 \uc870\uac74\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc77d\uc5b4 \ub4e4\uc600\uc744 \ub54c \uc874\uc7ac\ud574 (\uc720\ub839\ucc98\ub7fc) INCONSISTENT \ud55c \uacb0\uad0f\uac12\uc744 \ubc18\ud658\ud558\ub294 \ud604\uc0c1\uc744 \ub73b\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"serialization-anomaly"},"Serialization Anomaly"),(0,l.kt)("p",null,"\ub3d9\uc2dc \ucee4\ubc0b\ub41c \ud2b8\ub79c\uc7ad\uc158 \uadf8\ub8f9\uc758 \uacb0\uacfc\ub294 \uacb9\uce58\uc9c0 \uc54a\uace0 \uc5b4\ub5a4 \uc21c\uc11c\ub85c\ub4e0 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub824\uace0 \ud558\uba74 \ub2ec\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"isolation-level"},"Isolation level"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"read-uncommitted"},"Read Uncommitted"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uaca9\ub9ac \ub418\uc9c0 \uc54a\uc740 Isolation level"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dirty read"),"\uac00 \uc77c\uc5b4\ub09c\ub2e4."),(0,l.kt)("h3",{id:"read-committed"},"Read Committed"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ub0b4 \ubaa8\ub4e0 \ucffc\ub9ac\ub294 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud1b5\ud574 \uc815\uc0c1\uc801\uc73c\ub85c commit\ub41c \ub370\uc774\ud130\ub9cc \ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dirty read")," \ud574\uacb0"),(0,l.kt)("h3",{id:"repeatable-read"},"Repeatable Read"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uc911 \ud2b9\uc815 row\ub97c \uc77d\uc5b4 \ub4e4\uc774\ub294 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud55c\ub2e4\uba74 \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \uc77d\uc5b4\ub4e4\uc778 row\uc758 \ub370\uc774\ud130\ub294 \ubcc0\ud558\uc9c0 \uc54a\uc74c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Non-repeatable Read"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Phantom Read")," \ud574\uacb0"),(0,l.kt)("h3",{id:"serializable"},"Serializable"),(0,l.kt)("p",null,"\uc81c\uc77c \uc5c4\uaca9\ud55c Isolation level\uc774\ub2e4. \ud2b8\ub79c\uc81d\uc158\uc774 \uc9c4\ud589\ub418\ub294 \ub3d9\uc548 \ud2b9\uc815 \ud14c\uc774\ube14\uc744 \uc77d\uc73c\uba74 \ub3d9\uc2dc\uc5d0 \uc9c4\ud589\ub418\ub294 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc740 \ud574\ub2f9 \ud14c\uc774\ube14\uc5d0 \ub370\uc774\ud130\ub97c \ucd94\uac00, \ubcc0\uacbd, \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc74c."),(0,l.kt)("p",null,"\ubaa8\ub4e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Phenomena")," \ud574\uacb0"),(0,l.kt)("h2",{id:"mysql"},"MySQL"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isolation-level-\ud655\uc778"},"Isolation level \ud655\uc778"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"select @@transaction_isolation;\n")),(0,l.kt)("p",null,"\uc704 \ucc98\ub7fc \ud558\uba74 isolation level\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"select @@global.transaction_isolation;\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc804\uc5ed \ub808\ubca8 \ud655\uc778 \uac00\ub2a5"),(0,l.kt)("h3",{id:"isolation-\ubcc0\uacbd"},"Isolation \ubcc0\uacbd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set session transaction isolation level <Isolation \ub808\ubca8>;\n")),(0,l.kt)("p",null,"\uc704\uac00 \uae30\ubcf8 \ud615\ud0dc\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"read-uncommitted-1"},"read uncommitted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set session transaction isolation level read uncommitted;\n")),(0,l.kt)("p",null,"\uc704\ucc98\ub7fc \uc791\uc131\ud558\uba74 read uncommitted\ub85c isolation level\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \ud604\uc7ac \uc138\uc158\uc758 transaction\ub9cc \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"read uncommitted"),"\uc5d0\uc11c\ub294 Commit\ud558\uc9c0 \uc54a\uc544\ub3c4 \ubcc0\uacbd\ub41c \uac12\uc774 \uc870\ud68c\ub418\ub294 \ud604\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirty read"),"\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"read-committed-1"},"read committed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set session transaction isolation level read committed;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"read committed")," \ub808\ubca8\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirty read"),"\uac00 \ubc29\uc9c0\ub41c\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"dirty read")," \ud655\uc778\ud558\ub294 \uc608\uc2dc\n\ub450 \uac1c\uc758 \uac19\uc740 isolation level\uc744 \uac00\uc9c4 \uc138\uc158\uc744 \uc5f4\uace0 \ub458 \ub2e4 ",(0,l.kt)("inlineCode",{parentName:"p"},"begin;"),"\uc73c\ub85c \uc2dc\uc791\ud55c\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\ud558\ub098\ub294 account balance \uc5c5\ub370\uc774\ud2b8\ub97c \ud558\uace0 \ub2e4\ub978 \ud558\ub098\uc5d0\uc11c \uadf8 account\ub97c \uc870\ud68c\ud560 \ub54c update\ub41c \uac12\uc778\uc9c0 \uc544\ub2cc\uc9c0 \ud655\uc778\ud558\uba74 \ub41c\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Non-repeatable Reads")," \ud655\uc778\ud558\ub294 \uc608\uc2dc\n\uc704 \uc0c1\ud669\uc5d0\uc11c 2\ubc88 \uc138\uc158\uc5d0\uc11c account1\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud558\uace0 1\ubc88 \uc138\uc158(account \ubcc0\uacbd\ud55c)\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"Commit;"),"\ud55c \ud6c4 \ub2e4\uc2dc 2\ubc88 \uc138\uc158\uc5d0\uc11c account1\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud558\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub410\uae30 \ub54c\ubb38\uc5d0 \uac12\uc774 \ub2ec\ub77c\uc838\uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\uac19\uc740 sql\uc774\ub354\ub77c\ub3c4 \ub2e4\ub978 \uacf3\uc5d0\uc11c \ucee4\ubc0b \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uacb0\uacfc\uac12\uc774 \ub098\uc624\ub294 \uc774 \ud604\uc0c1\uc744 Non-repeatable reads \ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Phantom Read")," \ud655\uc778\ud558\ub294 \uc608\uc2dc\n\uc704\uc758 \uc0c1\ud669\uacfc \uac19\uc2b5\ub2c8\ub2e4. \uc704\uc758 \uc0c1\ud669\uc5d0\uc11c \uc870\uac74\ubb38\uc744 \ud1b5\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," sql\uc744 \ub0a0\ub838\uc744 \ub54c \ub2e4\ub978 \uacf3\uc5d0\uc11c \ucee4\ubc0b\uc73c\ub85c \uc778\ud574 \uac12\uc774 \ubcc0\uacbd\ub418\uc5b4 \uc870\uac74\uc5d0 \ub9cc\uc871\ub418\uc9c0 \uc54a\ub294 \uc21c\uac04 2\ubc88 \uc138\uc158 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 \uac11\uc790\uae30 ",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\uacb0\uacfc\uac00 3\uac1c \ub098\uc624\ub358 \uac83\uc774 2\uac1c\ub9cc \ub098\uc624\ub294 \ud604\uc0c1\uc785\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"repeatable-read-1"},"repeatable read"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set session transaction isolation level repeatable read;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Non-repeatable Reads"),",",(0,l.kt)("inlineCode",{parentName:"p"},"Phantom Read")," \uac00 \ubc29\uc9c0\ub429\ub2c8\ub2e4. \uc138\uc158 1\uc5d0\uc11c \ucee4\ubc0b\uc744 \ud574\ub3c4 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Serialization Anomaly")," \ud655\uc778\ud558\ub294 \ubc95\n\uc704\uc758 \uc0c1\ud669\uc744 \ubaa8\ub450 \ub9c8\uce58\uace0 \uc138\uc1582\uc5d0\uc11c account1\uc758 \uac12\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\ud55c\ub2e4\uba74 \uc138\uc1581\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"commit"),"\ud55c \uac83\uc774 \uc801\uc6a9\ub418\uc5b4\uc11c \uc138\uc1582 \uc785\uc7a5\uc5d0\uc11c\ub294 \ub2e4\ub978 \uac12\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"Serialization Anomaly"),"\uc785\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"serializable-1"},"Serializable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set session transaction isolation level serializable;\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c\ud558\uba74 \uc138\uc1581\uc5d0\uc11c accounts \ud14c\uc774\ube14\uc744 \uc870\ud68c\ud558\uace0 \uc138\uc1582\uc5d0\uc11c accounts \ud14c\uc774\ube14\uc744 \uc870\ud68c\ud558\uace0 \uc138\uc1581\uc5d0\uc11c account\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \ucc28\ub2e8\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc138\uc1582\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \ucffc\ub9ac\uac00 \uc138\uc1581\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\ucffc\ub9ac\ub97c \ucc28\ub2e8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc720\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"isolation level"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"serializable"),"\uc77c \ub54c MySQL\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT FOR SHARE"),"\ub85c \ubcc0\ud658\ud55c\ub2e4\uace0 \ud569\ub2c8\ub2e4. \uc774\ub7ec\uba74 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc77d\uae30\ub9cc \uac00\ub2a5\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),"\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \uc138\uc1582\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\ud558\uace0 \uc138\uc1581\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\ub97c \uc2dc\ub3c4\ud55c \uc774\ud6c4 \uc138\uc1582\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"Commit"),"\uc774\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollback"),"\uc744 \ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc5d0\ub7ec\uac00 \ub098\uba74\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc57c \ud55c\ub2e4\uace0 \ud55c\ub2e4."),(0,l.kt)("p",null,"\uc774 \ub54c \ud2b8\ub79c\uc7ad\uc158 \uc7ac\uc2dc\ub3c4 \uc804\ub7b5\uc744 \uc798 \uc9dc\uc57c \ud55c\ub2e4\uace0 \ud558\ub124\uc694."),(0,l.kt)("p",null,"\uc65c\ub0d0\ud558\uba74 \uad50\ucc29\uc0c1\ud0dc\uc5d0 \ube60\uc9c8 \uc218\ub3c4 \uc788\uc5b4\uc11c( \uc11c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\ub824\ub294 \uacbd\uc6b0 ) "),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \ud55c \ucabd\uc5d0\uc11c update\ud55c\ub2e4\uba74 \ubc18\ub300\ud3b8\uc5d0\uc11c commit\uc774 \ub418\ub3c4\ub85d \uc9dc\uc57c\ud55c\ub2e4."),(0,l.kt)("h2",{id:"postgres"},"Postgres"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isolation-level-\ud655\uc778-1"},"isolation level \ud655\uc778"),(0,l.kt)("p",null,"db \ucf58\uc194\uc5d0\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"show transaction isolation level;\n")),(0,l.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c read committed \uc785\ub2c8\ub2e4. (MySQL\uc740 \uae30\ubcf8\uc774 repeatable read\uc784.)"),(0,l.kt)("h3",{id:"isolation-level-\uc124\uc815"},"isolation level \uc124\uc815"),(0,l.kt)("p",null,"postgres\ub294 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 isolation level\ub9cc \uc124\uc815\ud560 \uc218 \uc788\ub2e4. (global \uc124\uc815 \ubd88\uac00\ub2a5)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set transaction isolation level <isolation \uc218\uc900>;\n")),(0,l.kt)("h3",{id:"read-uncommitted-2"},"read uncommitted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set transaction isolation level read uncommitted;\n")),(0,l.kt)("p",null,"MySQL\uacfc \ub2e4\ub978\uc810\uc740 read uncommitted\uc5d0\uc11c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirty read"),"\uac00 \ubc29\uc9c0\ub41c\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c isolation level\uc774 3\uac1c\ub9cc \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\ub77c\uace0 \ud558\ub124\uc694. read uncommitted\ub294 \uc5c6\ub294 \uac81\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"read-committed-2"},"read committed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set transaction isolation level read committed;\n")),(0,l.kt)("p",null,"MySQL\uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"Phantom Reads"),"\ub294 \ubc29\uc5b4\ub418\uc9c0 \ubabb\ud568."),(0,l.kt)("h3",{id:"repeatable-read-2"},"repeatable read"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set transaction isolation level repeatable read;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Non-repeatable Reads"),",",(0,l.kt)("inlineCode",{parentName:"p"},"Phantom Reads")," \ubc29\uc5b4\ub41c\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 MySQL\uacfc \ucc28\uc774\uc810\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"Serialization Anomaly"),"\ub3c4 \ubc29\uc5b4\ub41c\ub2e4. \ucee4\ubc0b\ub41c \uac12\uc744 \ubcc0\uacbd\ud558\ub824\ud558\uba74 \ucc28\ub2e8\ub41c\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"Serialization Anomaly"),"\uac00 \ub098\ud0c0\ub09c\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Serialization Anomaly")," \ud655\uc778\ud558\ub294 \ubc29\ubc95\n\uc138\uc1581\uc5d0\uc11c \ubaa8\ub4e0 \uacc4\uc815\uc744 \uc870\ud68c\ud558\uace0 \ubaa8\ub4e0 \uac12\uc744 \ud569\ud55c \uacc4\uc815\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.\n\uc138\uc1582\uc5d0\uc11c\ub3c4 \uac19\uc740 \ud589\ub3d9\uc744 \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"li"}),"\ub458\ub2e4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Commit"),"\ud558\uba74 \ubaa8\ub4e0 \uac12\uc744 \ud569\ud55c \uacc4\uc815\uc774 2\uac1c \uc0dd\uae41\ub2c8\ub2e4. \uadfc\ub370 \ud558\ub098\ub294 100\uc774\ub77c\uba74 \ub2e4\ub978 \ud558\ub098\ub294 100\uc744 \ud3ec\ud568\ud55c \uac12\uc774 \uc0dd\uaca8\uc57c \ud558\ub294\ub370 \uadf8\ub807\uc9c0 \uc54a\uace0 \ub458 \ub2e4 100\uc73c\ub85c \uc0dd\uae41\ub2c8\ub2e4. \uc774\uac83\uc774 Serialization Anomaly\uc785\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"serializable-2"},"Serializable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"set transaction isolation level Serializable;\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc138\uc1582\uc5d0\uc11c \uacc4\uc815\uc744 \ucd94\uac00\ud55c \ud6c4 \uc138\uc1581 ",(0,l.kt)("inlineCode",{parentName:"p"},"Commit"),"\uae4c\uc9c0\ub294 \uc131\uacf5\uc801\uc73c\ub85c \uc624\uc9c0\ub9cc \uc138\uc1582\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"Commit"),"\ud558\ub824\uace0 \ud558\uba74 \uc77d\uae30/\uc4f0\uae30 \uc885\uc18d\uc131\uc73c\ub85c \uc778\ud55c \uc561\uc138\uc2a4\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc2dc \ud2b8\ub79c\uc7ad\uc158\uc744 \ud558\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc774\ub7ec\uba74 \uc911\ubcf5 \ub808\ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ub2e4\uc2dc-mysql"},"\ub2e4\uc2dc MySQL"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"MySQL\uc5d0\uc11c\ub294 \uc7a0\uae08 \uba54\ucee4\ub2c8\uc998\uc744 \ud1b5\ud574\uc11c \uc704\uc758 \uc0c1\ud669\uc744 \ud574\uacb0\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 1\uc774 \ub05d\ub0a0\ub54c\uae4c\uc9c0 \ub2e4\ub978 \uc138\uc158\uc758 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc7a0\uaca8\uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("p",null,"\ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \uc0dd\uc131\ud55c\ub2e4\uba74 \uad50\ucc29\uc0c1\ud0dc\ub97c \uc77c\uc73c\ud0b5\ub2c8\ub2e4. \uadfc\ub370 \uad50\ucc29\uc0c1\ud0dc\ub97c \uc77c\uc73c\ucf1c\uc11c \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\ud558\ub3c4\ub85d \uc9dc\uc5ec\uc838\uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:a(59463).Z,width:"2187",height:"1164"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:a(80080).Z,width:"2134",height:"1157"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," :\nLocking Mechanism \uc0ac\uc6a9\nRepeatable read\uac00 \uae30\ubcf8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Postgres")," :\nDependencies Detection \uc0ac\uc6a9\nRead Committed\uac00 \uae30\ubcf8"),(0,l.kt)("p",null,"\uc8fc\uc758\ud560 \uc810\uc740 "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"error, timeout, deadlock\uc73c\ub85c \uc778\ud55c \uc774\uc288\ub85c \uc7ac\uc2dc\ub3c4 \uba54\ucee4\ub2c8\uc998\uc744 \uc798 \uc9dc\uc57c\ud55c\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"db \uc5d4\uc9c4\ub9c8\ub2e4 isolation level \uad6c\ud604\uc774 \ub2ec\ub77c\uc11c \ubb38\uc11c\ub97c \uc798 \uc77d\uc5b4\ubd10\ub77c."))))}c.isMDXComponent=!0},59463:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-5dcbdfeca62988333452cbe0e87dde8f.png"},80080:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-da3004cdf90383e1bdb30ff8664dd8a5.png"}}]);