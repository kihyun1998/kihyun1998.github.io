"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:5},s="[NestJS] Services",a={unversionedId:"nestjs/nodejs5",id:"nestjs/nodejs5",title:"[NestJS] Services",description:"servie\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4",source:"@site/docs/nestjs/nodejs5.md",sourceDirName:"nestjs",slug:"/nestjs/nodejs5",permalink:"/docs/nestjs/nodejs5",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backSidebar",previous:{title:"[NestJS] Decorators",permalink:"/docs/nestjs/nodejs4"},next:{title:"[NestJS] Services2",permalink:"/docs/nestjs/nodejs6"}},l={},c=[{value:"\ub9cc\ub4dc\ub294 \ubc95",id:"\ub9cc\ub4dc\ub294-\ubc95",level:2},{value:"\uc11c\ube44\uc2a4",id:"\uc11c\ube44\uc2a4",level:2},{value:"\uc5d4\ud2f0\ud2f0",id:"\uc5d4\ud2f0\ud2f0",level:3},{value:"\uc11c\ube44\uc2a4",id:"\uc11c\ube44\uc2a4-1",level:3},{value:"controller",id:"controller",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nestjs-services"},"[NestJS]"," Services"),(0,i.kt)("p",null,"servie\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4"),(0,i.kt)("h2",{id:"\ub9cc\ub4dc\ub294-\ubc95"},"\ub9cc\ub4dc\ub294 \ubc95"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nest g s\n")),(0,i.kt)("p",null,"\uc57d\uc790\ub97c \ud1b5\ud574 \uac04\ub2e8\ud558\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class MoviesService {}\n")),(0,i.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4."),(0,i.kt)("h2",{id:"\uc11c\ube44\uc2a4"},"\uc11c\ube44\uc2a4"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\uc5d4\ud2f0\ud2f0"},"\uc5d4\ud2f0\ud2f0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Movie {\n  id: number;\n  title: string;\n  year: number;\n  genres: string[];\n}\n")),(0,i.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c \uc5d4\ud2f0\ud2f0\ub97c \uad6c\ud604\ud588\ub2e4."),(0,i.kt)("h3",{id:"\uc11c\ube44\uc2a4-1"},"\uc11c\ube44\uc2a4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@nestjs/common';\nimport { Movie } from './entities/movie.entity';\n\n@Injectable()\nexport class MoviesService {\n  private movies: Movie[] = [];\n\n  getAll(): Movie[] {\n    return this.movies;\n  }\n  getOne(id: string): Movie {\n    return this.movies.find((movie) => movie.id === +id);\n  }\n  deleteOne(id: string) {\n    this.getOne(id);\n    this.movies = this.movies.filter((movie) => movie.id !== +id);\n  }\n  create(data) {\n    this.movies.push({\n      id: this.movies.length + 1,\n      ...data,\n  });\n}\n")),(0,i.kt)("p",null,"get\uc5d0 \ub300\ud55c \uc11c\ube44\uc2a4\ub294 \uc774\ub807\uac8c \uac04\ub2e8\ud558\uac8c \uad6c\ud604\ub41c\ub2e4. \uc6d0\ub798\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac12\uc744 \uac00\uc838\uc624\ub294 \ub85c\uc9c1\uc774 \ub4e4\uc5b4\uac00\uc57c\ud55c\ub2e4."),(0,i.kt)("h3",{id:"controller"},"controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get()\n  getAll(): Movie[] {\n    return this.moviesService.getAll();\n  }\n\n  @Get('/:id')\n  getOne(@Param('id') id: string): Movie {\n    return this.moviesService.getOne(id);\n  }\n\n  @Post()\n  create(@Body() data) {\n    return this.moviesService.create(data);\n  }\n  \n  @Delete('/:id')\n  remove(@Param('id') id: string) {\n    return this.moviesService.deleteOne(id);\n  }\n")),(0,i.kt)("p",null,"controller\ub294 \uc774\ub807\uac8c \uc218\uc815\ud560 \uc218 \uc788\ub2e4."))}d.isMDXComponent=!0}}]);