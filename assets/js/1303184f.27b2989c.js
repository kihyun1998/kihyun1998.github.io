"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[29709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:7},l="[NestJS] \uc720\ud6a8\uc131 \uac80\uc0ac",i={unversionedId:"nestjs/nodejs7",id:"nestjs/nodejs7",title:"[NestJS] \uc720\ud6a8\uc131 \uac80\uc0ac",description:"DTO",source:"@site/docs/nestjs/nodejs7.md",sourceDirName:"nestjs",slug:"/nestjs/nodejs7",permalink:"/docs/nestjs/nodejs7",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"backSidebar",previous:{title:"[NestJS] Services2",permalink:"/docs/nestjs/nodejs6"},next:{title:"[NestJS] Code Formatting \uc124\uc815\ubc95",permalink:"/docs/nestjs/nodejs8"}},o={},p=[{value:"DTO",id:"dto",level:2},{value:"class-validator, class-transformer",id:"class-validator-class-transformer",level:2},{value:"\uc0ac\uc6a9",id:"\uc0ac\uc6a9",level:3},{value:"whitelist",id:"whitelist",level:3},{value:"forbidNonWhitelisted",id:"forbidnonwhitelisted",level:3},{value:"transform",id:"transform",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nestjs-\uc720\ud6a8\uc131-\uac80\uc0ac"},"[NestJS]"," \uc720\ud6a8\uc131 \uac80\uc0ac"),(0,a.kt)("h2",{id:"dto"},"DTO"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CreateMoiveDto {\n  readonly title: string;\n  readonly year: number;\n  readonly genres: string[];\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c dto\ub97c \uad6c\ud604\ud574\ub193\uace0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  create(data: CreateMoiveDto) {\n    this.movies.push({\n      id: this.movies.length + 1,\n      ...data,\n    });\n  }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post()\n  create(@Body() data: CreateMovieDto) {\n    return this.moviesService.create(data);\n  }\n")),(0,a.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"class-validator-class-transformer"},"class-validator, class-transformer"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i class-validator class-transformer\n")),(0,a.kt)("p",null,"npm \uc124\uce58\ub97c \ud558\uba74 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\uc0ac\uc6a9"},"\uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.useGlobalPipes(new ValidationPipe());\n  await app.listen(3000);\n}\n")),(0,a.kt)("p",null,"main.ts\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationPipe")," \uc0ac\uc6a9\uc744 \uc120\uc5b8\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CreateMoiveDto {\n\n  @IsString()\n  readonly title: string;\n\n  @IsNumber()\n  readonly year: number;\n  \n  @IsString({each: true})\n  readonly genres: string[];\n}\n\n")),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 dto\ub97c \uc774\ub807\uac8c \ubcc0\ud658\ud55c\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7fc API\uac00 Bad Request\ub77c\uba74 \uc790\ub3d9\uc73c\ub85c Bad Request \ub0a0\ub824\uc900\ub2e4."),(0,a.kt)("h3",{id:"whitelist"},"whitelist"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  app.useGlobalPipes(new ValidationPipe({\n    whitelist: true,\n  }));\n")),(0,a.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"whitelist"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"forbidNonWhitelisted"),"\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294\ub370 "),(0,a.kt)("p",null,"whitelist\ub9cc \uc788\uc73c\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hack":"hack"\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ubcf4\ub0b4\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": [\n        "title must be a string",\n        "year must be a number conforming to the specified constraints",\n        "each value in genres must be a string"\n    ],\n    "error": "Bad Request",\n    "statusCode": 400\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ubb34\uc2dc\ud558\uac8c \ub418\uace0"),(0,a.kt)("h3",{id:"forbidnonwhitelisted"},"forbidNonWhitelisted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  app.useGlobalPipes(new ValidationPipe({\n    ...\n    forbidNonWhitelisted: true\n  }));\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"forbidNonWhitelisted"),"\ub97c \uc0ac\uc6a9\ud574\uc8fc\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": [\n        "property hack should not exist",\n        "title must be a string",\n        "year must be a number conforming to the specified constraints",\n        "each value in genres must be a string"\n    ],\n    "error": "Bad Request",\n    "statusCode": 400\n}\n')),(0,a.kt)("h3",{id:"transform"},"transform"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  app.useGlobalPipes(new ValidationPipe({\n    ...\n    transform: true,\n  }));\n")),(0,a.kt)("p",null,"transform\uc744 \uc0ac\uc6a9\ud558\uba74 url Param\uc744 numer\ub85c \ubc1b\uc744 \uc218 \uc788\ub2e4. \uc548\uc4f0\uba74 string\uc73c\ub85c \ub0a0\ub77c\uc628\ub2e4."),(0,a.kt)("p",null,"\uc989 id\ub97c number\ub85c \ubc1b\uc744 \uc218 \uc788\uc5b4\uc11c \uc88b\ub2e4. (\ubcf4\uc548\ub3c4 \uc548\uc804\ud574\uc9d0)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/:id')\n  getOne(@Param('id') id: number): Movie {\n    return this.moviesService.getOne(id);\n  }\n")),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c\uc774\ub7f0\uc2dd\uc774\ub2e4."))}d.isMDXComponent=!0}}]);