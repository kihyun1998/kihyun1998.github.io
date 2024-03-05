"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134",c={unversionedId:"DP--creational-patterns/factory-method",id:"DP--creational-patterns/factory-method",title:"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134",description:"\uc815\uc758",source:"@site/docs/DP--creational-patterns/factory-method.md",sourceDirName:"DP--creational-patterns",slug:"/DP--creational-patterns/factory-method",permalink:"/docs/DP--creational-patterns/factory-method",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"studySidebar",previous:{title:"SOLID",permalink:"/docs/design-pattern-intro"},next:{title:"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134",permalink:"/docs/DP--structural-patterns/decorator"}},l={},p=[{value:"\uc815\uc758",id:"\uc815\uc758",level:2},{value:"\uc608\uc2dc \ucf54\ub4dc",id:"\uc608\uc2dc-\ucf54\ub4dc",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ud329\ud1a0\ub9ac-\uba54\uc18c\ub4dc-\ud328\ud134"},"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134"),(0,a.kt)("h2",{id:"\uc815\uc758"},"\uc815\uc758"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uc0c1\uc704 \ud074\ub798\uc2a4"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"\uac1d\uccb4"),"\ub97c \uc0dd\uc131\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758, ",(0,a.kt)("strong",{parentName:"p"},"\ud558\uc704 \ud074\ub798\uc2a4"),"\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc778\uc2a4\ud134\uc2a4"),"\ub97c \uc0dd\uc131, \uc989 \uac1d\uccb4 \uc0dd\uc131 \ucc98\ub9ac\ub97c \uc11c\ube0c\ud074\ub798\uc2a4\ub85c \ubd84\ub9ac\ud558\uc5ec\uc11c \uac1d\uccb4 \uc0dd\uc131\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uc0c1\uc704 \ud074\ub798\uc2a4"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc778\uc2a4\ud134\uc2a4"),"\uc5d0 \ub300\ud55c \ubc29\ubc95\ub9cc \uc815\uc758, ",(0,a.kt)("strong",{parentName:"p"},"\ud558\uc704 \ud074\ub798\uc2a4")," \ub370\uc774\ud130\uc758 \uc0dd\uc131\uc744 \ucc45\uc784\uc9c0\ub294 \ud568\uc218\ub4e4 \uc624\ubc84\ub85c\ub529\ud574\uc11c ",(0,a.kt)("em",{parentName:"p"},"\uc778\ud130\ud398\uc774\uc2a4"),"\uc640 ",(0,a.kt)("em",{parentName:"p"},"\uc2e4\uc81c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ud074\ub798\uc2a4"),"\ub97c \ubd84\ub9ac"))),(0,a.kt)("admonition",{title:"\uc694\uc57d",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\uac1d\uccb4 \uc0dd\uc131 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc815\uc758\ub3fc\uc788\uace0 \uc2e4\uc81c \uac1d\uccb4 \uc0dd\uc131\uc5d0 \ub300\ud55c \ub85c\uc9c1\uc740 \uc11c\ube0c \ud074\ub798\uc2a4\ub85c \ubd84\ub9ac"),(0,a.kt)("p",{parentName:"admonition"},"\uc7a5\uc810\uc740 \uc2dc\uc2a4\ud15c \uc720\uc5f0\uc131\uacfc \ud655\uc7a5\uc131\uc744 \ub192\uc77c \uc218 \uc788\ub2e4.")),(0,a.kt)("h2",{id:"\uc608\uc2dc-\ucf54\ub4dc"},"\uc608\uc2dc \ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Product \uc778\ud130\ud398\uc774\uc2a4\npublic interface Vehicle {\n    void design();\n}\n\n// Car \uc0dd\uc131 \ud074\ub798\uc2a4\nclass Car implements Vehicle {\n    @Override\n    public void design() {\n        System.out.println("A car is designed.");\n    }\n}\n\n// Bike \uc0dd\uc131 \ud074\ub798\uc2a4\nclass Bike implements Vehicle {\n    @Override\n    public void design() {\n        System.out.println("A bike is designed.");\n    }\n}\n\n// Creator \ud074\ub798\uc2a4\npublic abstract class VehicleFactory {\n    public abstract Vehicle createVehicle();\n    \n    public Vehicle orderVehicle() {\n        Vehicle vehicle = createVehicle();\n        vehicle.design();\n        return vehicle;\n    }\n}\n\n// ConcreteCreator \ud074\ub798\uc2a4\nclass CarFactory extends VehicleFactory {\n    @Override\n    public Vehicle createVehicle() {\n        return new Car();\n    }\n}\n\nclass BikeFactory extends VehicleFactory {\n    @Override\n    public Vehicle createVehicle() {\n        return new Bike();\n    }\n}\n\n// \uc0ac\uc6a9 \uc608\npublic class FactoryMethodDemo {\n    public static void main(String[] args) {\n        VehicleFactory carFactory = new CarFactory();\n        Vehicle car = carFactory.orderVehicle();\n        \n        VehicleFactory bikeFactory = new BikeFactory();\n        Vehicle bike = bikeFactory.orderVehicle();\n    }\n}\n')))}d.isMDXComponent=!0}}]);