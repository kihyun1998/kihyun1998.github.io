"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[2766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:l,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={sidebar_position:3},a="[NestJS] Controller API",p={unversionedId:"nestjs/nodejs3",id:"nestjs/nodejs3",title:"[NestJS] Controller API",description:"generator",source:"@site/docs/nestjs/nodejs3.md",sourceDirName:"nestjs",slug:"/nestjs/nodejs3",permalink:"/docs/nestjs/nodejs3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"backSidebar",previous:{title:"[NestJS] \uad6c\uc870",permalink:"/docs/nestjs/nodejs2"},next:{title:"[NestJS] Decorators",permalink:"/docs/nestjs/nodejs4"}},i={},s=[{value:"generator",id:"generator",level:2},{value:"Controller",id:"controller",level:2},{value:"\uac04\ub2e8\ud55c CRUD",id:"\uac04\ub2e8\ud55c-crud",level:2},{value:"Get",id:"get",level:3},{value:"Post",id:"post",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nestjs-controller-api"},"[NestJS]"," Controller API"),(0,l.kt)("h2",{id:"generator"},"generator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nest g co\n")),(0,l.kt)("p",null,"\uc704\ub97c \ud1b5\ud574\uc11c controller\ub97c generate \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"g\ub294 generate\uc758 \uc57d\uc790\uc774\uace0 co\ub294 controller\uc758 \uc57d\uc790\uc774\ub2e4."),(0,l.kt)("p",null,"generate\ub97c \uc0ac\uc6a9\ud558\uba74 AppModule\uc5d0 \uc790\ub3d9\uc73c\ub85c import \ud574\uc900\ub2e4."),(0,l.kt)("h2",{id:"controller"},"Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('movies')\nexport class MoviesController {\n    \n    @Get()\n    getAll(){\n        return \"All Movies\";\n    }\n}\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ub9cc\ub4e4\uc5b4\uc9c0\uace0 getAll\uc774\ub77c\ub294 api\ub97c \ub9cc\ub4e4\uc5c8\ub294\ub370 url\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"\ub85c \uc811\uc18d\ud574\uc57c \ud558\ub294\uac8c \uc544\ub2c8\ub77c ",(0,l.kt)("inlineCode",{parentName:"p"},"/moveis"),"\ub85c \uc811\uc18d\ud574\uc57c not found\uac00 \ub098\uc624\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("p",null,"Controller('movies')\uc774\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,l.kt)("h2",{id:"\uac04\ub2e8\ud55c-crud"},"\uac04\ub2e8\ud55c CRUD"),(0,l.kt)("h3",{id:"get"},"Get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    @Get('/:id')\n    getOne(){\n        return \"One\";\n    }\n")),(0,l.kt)("p",null,"\uc704\ucc98\ub7fc \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"/movies/{id}"),"\uc5d0 \ub300\ud55c api\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/:id')\n  getOne(@Param('id') id: string) {\n    return `Return One Movie id: ${id}`;\n  }\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uc791\uc131\ud558\uba74 id\ub77c\ub294 url \ud30c\ub77c\ubbf8\ud130\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/movies/1"),"  \uc774 \uc8fc\uc18c\ub85c \ubcf4\ub0b8\ub2e4\uba74 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Return One Movie id: 1\n")),(0,l.kt)("p",null,"\ub77c\ub294 \ub2f5\ubcc0\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4."),(0,l.kt)("h3",{id:"post"},"Post"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post()\n  create() {\n    return 'Create movie';\n  }\n")),(0,l.kt)("p",null,"post\ub294 \uc774\ub807\uac8c"),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Delete('/:id')\n  remove(@Param('id') id: string) {\n    return `Remove movie : ${id}`;\n  }\n")),(0,l.kt)("p",null,"delete\ub294 \uc774\ub7f0\uc2dd\uc73c\ub85c \uc27d\uac8c \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"update"},"Update"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Patch('/:id')\n  updateOne(@Param('id') id: string) {\n    return `Update one id : ${id}`;\n  }\n")),(0,l.kt)("p",null,"Patch\ub85c \ud558\ub098\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uac70\ub098"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Put()\n  updateAll() {\n    return 'All update';\n  }\n")),(0,l.kt)("p",null,"put\uc73c\ub85c \ubaa8\ub450 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub2e4."))}d.isMDXComponent=!0}}]);