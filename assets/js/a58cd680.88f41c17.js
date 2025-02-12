"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[61599],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,i(i({ref:e},c),{},{components:r})):n.createElement(m,i({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[d]="string"==typeof t?t:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25166:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:7},i="07. [Flutter] \uc704\uc82f \uc7ac\uc0ac\uc6a9 \ub9cc\ub4e4\uae30",a={unversionedId:"flutter/flutter7",id:"flutter/flutter7",title:"07. [Flutter] \uc704\uc82f \uc7ac\uc0ac\uc6a9 \ub9cc\ub4e4\uae30",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter7.md",sourceDirName:"flutter",slug:"/flutter/flutter7",permalink:"/docs/flutter/flutter7",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"dartSidebar",previous:{title:"06. [Flutter] Flutter\ub97c \uc704\ud55c \ud3b8\ub9ac\ud55c VS Code \uc124\uc815",permalink:"/docs/flutter/flutter6"},next:{title:"08. [Flutter] \uce74\ub4dc \ub9cc\ub4e4\uae30",permalink:"/docs/flutter/flutter8"}},u={},s=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2}],c={toc:s},d="wrapper";function p(t){let{components:e,...r}=t;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"07-flutter-\uc704\uc82f-\uc7ac\uc0ac\uc6a9-\ub9cc\ub4e4\uae30"},"07. ","[Flutter]"," \uc704\uc82f \uc7ac\uc0ac\uc6a9 \ub9cc\ub4e4\uae30"),(0,o.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,o.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='RadiusButton'",title:"'RadiusButton'"},"class RadiusButton extends StatelessWidget {\n  final String text;\n  final Color bgColor;\n  final Color textColor;\n\n  const RadiusButton({\n    super.key,\n    required this.text,\n    required this.bgColor,\n    required this.textColor,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n        decoration: BoxDecoration(\n          color: bgColor,\n          borderRadius: BorderRadius.circular(35),\n        ),\n        child: Padding(\n          padding: const EdgeInsets.symmetric(\n            vertical: 20,\n            horizontal: 50,\n          ),\n          child: Text(\n            text,\n            style: TextStyle(\n              color: textColor,\n              fontSize: 18,\n            ),\n          ),\n        ));\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='RadiusButton \uc0ac\uc6a9 \uc608\uc2dc'",title:"'RadiusButton","\uc0ac\uc6a9":!0,"\uc608\uc2dc'":!0},'const Row(\n  mainAxisAlignment: MainAxisAlignment.spaceAround,\n  children: [\n    RadiusButton(\n      text: "Transfer",\n      bgColor: Color(0xFFF2B33A),\n      textColor: Colors.black,\n    ),\n    RadiusButton(\n      text: "Request",\n      bgColor: Color(0xFF1F2123),\n      textColor: Colors.white,\n    )\n  ],\n)\n')),(0,o.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uc561\uc158\uc73c\ub85c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uae34\ud55c\ub370 \uc9c1\uc811 \ucf54\ub4dc \ucd94\uac00 \ud588\ub2e4."),(0,o.kt)("p",null,"\uc561\uc158\uc73c\ub85c \ud558\ub824\uba74 extract widget \ud558\uba74 \ub41c\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub0e5 \uc704\uc82f\uc744 \ud074\ub798\uc2a4\ud654 \uc2dc\ud0a8\ub2e4\ub294 \ub290\ub08c\uc774\ub2e4."))}p.isMDXComponent=!0}}]);