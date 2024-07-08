"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:2},s="[NestJS] \uad6c\uc870",a={unversionedId:"nestjs/nodejs2",id:"nestjs/nodejs2",title:"[NestJS] \uad6c\uc870",description:"nestjs\ub294 main.ts\uc5d0\uc11c \uc2dc\uc791\ud55c\ub2e4. \uc5ec\uae30\uc5d0\uc11c appmodule\uc744 \uc2dc\uc791\ud55c\ub2e4.",source:"@site/docs/nestjs/nodejs2.md",sourceDirName:"nestjs",slug:"/nestjs/nodejs2",permalink:"/docs/nestjs/nodejs2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backSidebar",previous:{title:"[NestJS] \uc2dc\uc791 \uc804 \uc694\uad6c\uc0ac\ud56d",permalink:"/docs/nestjs/nodejs1"},next:{title:"[NestJS] Controller API",permalink:"/docs/nestjs/nodejs3"}},i={},c=[{value:"module",id:"module",level:2},{value:"controller",id:"controller",level:2},{value:"CLI\ub85c controller \ub9cc\ub4e4\uae30",id:"cli\ub85c-controller-\ub9cc\ub4e4\uae30",level:3},{value:"service",id:"service",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nestjs-\uad6c\uc870"},"[NestJS]"," \uad6c\uc870"),(0,o.kt)("p",null,"nestjs\ub294 main.ts\uc5d0\uc11c \uc2dc\uc791\ud55c\ub2e4. \uc5ec\uae30\uc5d0\uc11c appmodule\uc744 \uc2dc\uc791\ud55c\ub2e4."),(0,o.kt)("h2",{id:"module"},"module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [],\n  controllers: [AppController],\n  providers: [AppService],\n})\n")),(0,o.kt)("p",null,"\ubaa8\ub4c8\uc740 init\ud558\ub294 \ubd80\ubd84\uc778\uac00?"),(0,o.kt)("h2",{id:"controller"},"controller"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"controllers\ub294 nodejs\uc758 route \uadf8\ub9ac\uace0 sprnig boot\uc5d0\uc11c MVC \ud328\ud134\uc744 \uc4f8 \ub54c\uc758 controller\uc640 \uac19\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/hi')\n  sayHello(): string{\n    return this.appService.getHi();\n  }\n")),(0,o.kt)("h3",{id:"cli\ub85c-controller-\ub9cc\ub4e4\uae30"},"CLI\ub85c controller \ub9cc\ub4e4\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nest g co\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 controller \uc774\ub984 \ub9d0\ud558\ub77c\uace0 \ud558\uba74 \uc790\ub3d9\uc73c\ub85c app.module\uc5d0\ub3c4 \ucd94\uac00\ub418\uad6c \ucee8\ud2b8\ub864\ub7ec \ud3f4\ub354\ub3c4 \uc0dd\uae40"),(0,o.kt)("h2",{id:"service"},"service"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'  getHi():string{\n    return "Hi";\n  }\n')),(0,o.kt)("p",null,"\ud568\uc218\uc758 \ubaa8\uc74c\uc9d1\uac19\uc740 \ub290\ub08c"))}d.isMDXComponent=!0}}]);