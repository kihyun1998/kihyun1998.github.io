"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[4854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(o,".").concat(g)]||p[g]||y[g]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={slug:"strategy pattern",title:"Strategy pattern",authors:["kihyun"],tags:["design pattern","strategy pattern"]},i="\uc804\ub7b5 \ud328\ud134 - Strategy Pattern",s={permalink:"/blog/strategy pattern",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-29-stratgy/index.md",source:"@site/blog/2023-08-29-stratgy/index.md",title:"Strategy pattern",description:"---",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"design pattern",permalink:"/blog/tags/design-pattern"},{label:"strategy pattern",permalink:"/blog/tags/strategy-pattern"}],readingTime:1.47,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"strategy pattern",title:"Strategy pattern",authors:["kihyun"],tags:["design pattern","strategy pattern"]},prevItem:{title:"[SOLID] \uac1d\uccb4 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d(OOP) \uc6d0\uce59",permalink:"/blog/design pattern rule"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},o={authorsImageUrls:[void 0]},c=[{value:"\uc815\uc758",id:"\uc815\uc758",level:2},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc815\uc758"},"\uc815\uc758"),(0,a.kt)("p",null,"\uc54c\uace0\ub9ac\uc998\uad70\uc744 \uc815\uc758\ud558\uace0 \ucea1\uc290\ud654\ud574\uc11c \uac01\uac01\uc758 \uc54c\uace0\ub9ac\uc998\uad70\uc744 \uc218\uc815\ud574\uc11c \uc4f8 \uc218 \uc788\uac8c \ud574\uc900\ub2e4.\n\uc804\ub7b5 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 \uc54c\uace0\ub9ac\uc998\uc744 \ubd84\ub9ac\ud574\uc11c \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc911 \ubcc0\ud558\ub294 \ucf54\ub4dc\ub97c class\ub85c \uad6c\ud604\ud558\uc5ec \uc0c1\uc18d\ubc1b\ub294 \uac83\uc774 \uc544\ub2cc interface\ub85c \uad6c\ud604\ud558\uc5ec\uc11c Composition\ud558\ub294\uac8c \uc88b\ub2e4.")),(0,a.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/src/interfaces/FlyBehavior.java"',title:'"/src/interfaces/FlyBehavior.java"'},"public interface FlyBehavor {\n    public void fly();\n}\n")),(0,a.kt)("p",null,"\uc704 \ucc98\ub7fc \ub098\ub294 \ud589\ub3d9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uace0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/src/classes/Duck.java"',title:'"/src/classes/Duck.java"'},"public abstract class Duck {\n    FlyBehavor flyBehavor;\n\n    public void setFlyBehavor(FlyBehavor flyBehavor) {\n        this.flyBehavor = flyBehavor;\n    }\n}\n")),(0,a.kt)("p",null,"\ucd94\uc0c1 \ud074\ub798\uc2a4\uc5d0\uc120 interface \uc120\uc5b8 \ubc0f setter\ub97c \uad6c\ud604\ud558\uace0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/src/classes/FlyNoway ... FlyWithWings.java"',title:'"/src/classes/FlyNoway',"...":!0,'FlyWithWings.java"':!0},'public class FlyNoWay implements FlyBehavor {\n    @Override\n    public void fly() {\n        System.out.println("I can\'t fly ! TT");\n    }\n}\n\npublic class FlyRocketPowered implements FlyBehavor {\n    @Override\n    public void fly() {\n        System.out.println("ROCKET FLY!!");\n    }\n}\n\npublic class FlyWithWings implements FlyBehavor {\n    @Override\n    public void fly() {\n        System.out.println("I can fly!!");\n    }\n}\n')),(0,a.kt)("p",null,"\uc704 \ucf54\ub4dc\ub4e4\ucc98\ub7fc interface\ub97c \uad6c\ud604\ud558\uc5ec\uc11c \uc624\ubc84\ub77c\uc774\ub529\uc744 \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="/src/classes/MallardDuck.java"',title:'"/src/classes/MallardDuck.java"'},"public class MallardDuck extends Duck{\n    public MallardDuck(){\n        flyBehavor = new FlyWithWings();\n    }\n}\n")),(0,a.kt)("p",null,"\uc0dd\uc131\uc790\uc5d0\uc11c \uc0c8\ub85c \uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);