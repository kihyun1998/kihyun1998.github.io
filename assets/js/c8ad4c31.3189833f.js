"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},40937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},s="[NestJS] Decorators",i={unversionedId:"nestjs/nodejs4",id:"nestjs/nodejs4",title:"[NestJS] Decorators",description:"\ub2e4\uc591\ud55c \ub370\ucf54\ub808\uc774\ud130\uc5d0 \ub300\ud574 \uc54c\uc544\ubcfc \uc608\uc815",source:"@site/docs/nestjs/nodejs4.md",sourceDirName:"nestjs",slug:"/nestjs/nodejs4",permalink:"/docs/nestjs/nodejs4",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backSidebar",previous:{title:"[NestJS] Controller API",permalink:"/docs/nestjs/nodejs3"},next:{title:"[Spring] \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",permalink:"/docs/java-spring/spring1"}},c={},l=[{value:"@Body",id:"body",level:2},{value:"@Query",id:"query",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nestjs-decorators"},"[NestJS]"," Decorators"),(0,a.kt)("p",null,"\ub2e4\uc591\ud55c \ub370\ucf54\ub808\uc774\ud130\uc5d0 \ub300\ud574 \uc54c\uc544\ubcfc \uc608\uc815"),(0,a.kt)("h2",{id:"body"},"@Body"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post()\n  create(@Body() data) {\n    return data;\n  }\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uc0ac\uc6a9\ud574\uc11c json\uc73c\ub85c\ub41c(\ub2e4\ub978 \uac83\uc77c \uc218\ub3c4 \uc788\uace0) data\ub97c return \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Patch('/:id')\n  updateOne(@Param('id') id: string, @Body() updateData) {\n    return {\n      id: id,\n      ...updateData,\n    };\n  }\n")),(0,a.kt)("h2",{id:"query"},"@Query"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/search')\n  search(@Query('year') year: string) {\n    return `search year is ${year}`;\n  }\n")),(0,a.kt)("p",null,"query\ub97c \uc0ac\uc6a9\ud574\uc11c parameter\ub97c \ubc1b\uc544\uc62c \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/movies/search?year=1998")," \uc774\ub807\uac8c \uc694\uccad\ud55c\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc5f0\ub3c4 \uc124\uc815\uc5d0 \ub530\ub77c \uc798 \ub098\uc624\uac8c \ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"search year is 1998\n")))}d.isMDXComponent=!0}}]);