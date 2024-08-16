"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8243],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=l,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37e3:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),l=(t(67294),t(3905));const o={sidebar_position:1},a="[Spring-Cloud] MSA\ub780",i={unversionedId:"spring-cloud/spring_cloud1",id:"spring-cloud/spring_cloud1",title:"[Spring-Cloud] MSA\ub780",description:"---",source:"@site/docs/spring-cloud/spring_cloud1.md",sourceDirName:"spring-cloud",slug:"/spring-cloud/spring_cloud1",permalink:"/docs/spring-cloud/spring_cloud1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"backSidebar",previous:{title:"[Spring] JPA \ubc0f DB \uc124\uc815",permalink:"/docs/java-spring/spring4"},next:{title:"[Spring-Cloud] Spring Cloud MSA \uad6c\uc131",permalink:"/docs/spring-cloud/spring_cloud2"}},p={},u=[{value:"MSA\ub780",id:"msa\ub780",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud544\uc218 \uad6c\uc131\uc694\uc18c",id:"\ud544\uc218-\uad6c\uc131\uc694\uc18c",level:3}],c={toc:u},s="wrapper";function d(e){let{components:r,...t}=e;return(0,l.kt)(s,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spring-cloud-msa\ub780"},"[Spring-Cloud]"," MSA\ub780"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"msa\ub780"},"MSA\ub780"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"MSA\ub294 Micro Service Architecture \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc11c\ube44\uc2a4 \uad6c\ucd95 \ubc29\uc2dd \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc5ec\ub7ec \uc5b8\uc5b4, framework\ub85c \uad6c\ucd95\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc11c\ube44\uc2a4 \ubcc4\ub85c scale-up, scale-out \ud558\uae30\uac00 \uc27d\ub2e4. \uadf8\ub9ac\uace0 \uc11c\ube44\uc2a4 \ud558\ub098\uac00 \uc885\ub8cc\ub418\uc5b4\ub3c4 \ub2e4\ub978 \uc11c\ube44\uc2a4\ub4e4\uc740 \uc885\ub8cc\ub418\uc9c0 \uc54a\uc74c.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uadf8\ub798\uc11c \ubd80\ubd84\uc801 \uc5c5\ub370\uc774\ud2b8\ub97c \ube44\uad50\uc801 \uc27d\uac8c \ud560 \uc218 \uc788\ub2e4."))),(0,l.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ubcf5\uc7a1\ub3c4\uac00 \ub108\ubb34 \ud06c\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ucd08\uae30 \uad6c\uc131\uc774 \uc880 \uc5b4\ub835\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ud558\ub098\uc758 \uc11c\ube44\uc2a4 \uc758\uc874\uc131\uc774 \ud074 \uc218 \uc788\ub2e4."))),(0,l.kt)("h3",{id:"\ud544\uc218-\uad6c\uc131\uc694\uc18c"},"\ud544\uc218 \uad6c\uc131\uc694\uc18c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uc11c\ubc84"),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \uc11c\ubc84"),(0,l.kt)("li",{parentName:"ul"},"API Gateway"),(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \uad00\ub9ac \uc11c\ubc84 (Config Server)")))}d.isMDXComponent=!0}}]);