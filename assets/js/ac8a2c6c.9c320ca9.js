"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:13},o="13. [Flutter] Build context & another",i={unversionedId:"flutter/flutter13",id:"flutter/flutter13",title:"13. [Flutter] Build context & another",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter13.md",sourceDirName:"flutter",slug:"/flutter/flutter13",permalink:"/docs/flutter/flutter13",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"dartSidebar",previous:{title:"12. [Flutter] StatefulWidget",permalink:"/docs/flutter/flutter12"},next:{title:"14. [Flutter] ERROR: Target of URI doesn't exist 'package:flutter...'",permalink:"/docs/flutter/flutter14"}},u={},c=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"Build context",id:"build-context",level:3},{value:"ThemeData",id:"themedata",level:3},{value:"\ub290\ub08c\ud45c \uc5f0\uc0b0\uc790",id:"\ub290\ub08c\ud45c-\uc5f0\uc0b0\uc790",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"13-flutter-build-context--another"},"13. ","[Flutter]"," Build context & another"),(0,l.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,l.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='ThemeData \uc0ac\uc6a9'",title:"'ThemeData","\uc0ac\uc6a9'":!0},"class _MyAppState extends State<MyApp> {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      // css \uac19\uc740 \ub290\ub08c?\n      theme: ThemeData(\n        textTheme: const TextTheme(\n          titleLarge: TextStyle(\n            color: Colors.red,\n          ),\n        ),\n      ),\n      home: const Scaffold(\n        backgroundColor: Colors.white,\n        body: Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              MyTitle(),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='MyTitle \uc704\uc82f'",title:"'MyTitle","\uc704\uc82f'":!0},'class MyTitle extends StatelessWidget {\n  const MyTitle({\n    super.key,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Text(\n      "My Title",\n      style: TextStyle(\n        fontSize: 30,\n        color: Theme.of(context).textTheme.titleLarge!.color,\n      ),\n    );\n  }\n}\n')),(0,l.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"build-context"},"Build context"),(0,l.kt)("p",null,"context\ub97c \ud1b5\ud574\uc11c \ubd80\ubaa8\uc758 \uc704\uc82f \uc694\uc18c\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='example use context'",title:"'example",use:!0,"context'":!0},"Theme.of(context).textTheme.titleLarge!.color\n")),(0,l.kt)("h3",{id:"themedata"},"ThemeData"),(0,l.kt)("p",null,"\ud14c\ub9c8\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc74c"),(0,l.kt)("p",null,"\ud14c\ub9c8 Enum \ubc84\uc804\uc73c\ub85c \uc0dd\uac01\ud574\uc57c\ud558\ub098? \ubcc0\uc218 \uc9c0\uc815? \uc554\ud2bc \uadf8\ub7f0 \ub290\ub08c"),(0,l.kt)("h3",{id:"\ub290\ub08c\ud45c-\uc5f0\uc0b0\uc790"},"\ub290\ub08c\ud45c \uc5f0\uc0b0\uc790"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='\ub290\ub08c\ud45c'",title:"'\ub290\ub08c\ud45c'"},"Theme.of(context).textTheme.titleLarge!.color\n")),(0,l.kt)("p",null,"\ub2e4\uc2dc \uc704 \ucf54\ub4dc\ub97c \ubcf4\uba74 titleLarge \uc606\uc5d0 \ub290\ub08c\ud45c\uac00 \uc788\ub294\ub370 \uc774\ub294 null\uc774 \uc544\ub2d8\uc744 \ud655\uc2e0\ud55c\ub2e4\ub294 \uc5f0\uc0b0\uc790\uc774\ub2e4. \uc790\ub9e4\ud488\uc73c\ub85c \ubb3c\uc74c\ud45c\uac00 \uc788\ub294\ub370 \uc774\uac74 null\uc77c \uc218\ub3c4 \uc788\uace0 \uc544\ub2d0 \uc218\ub3c4 \uc788\ub2e4\uc774\ub2e4."),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ub290\ub08c\ud45c \ud574\uc92c\ub294\ub370 null \ub4e4\uc5b4\uc624\uba74 exception \uc774\ub7ec\ub09c\ub2e4."))}d.isMDXComponent=!0}}]);