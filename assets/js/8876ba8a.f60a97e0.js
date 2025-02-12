"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[75082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,m=d["".concat(p,".").concat(s)]||d[s]||f[s]||a;return n?l.createElement(m,o(o({ref:t},c),{},{components:n})):l.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={slug:"flutter-til-22",title:"Flutter TIL - 22",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dll \uc0ac\uc6a9","typedef"]},o="Flutter TIL - 22",i={permalink:"/blog/flutter-til-22",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-23-til22/index.md",source:"@site/blog/2024-01-23-til22/index.md",title:"Flutter TIL - 22",description:"---",date:"2024-01-23T00:00:00.000Z",formattedDate:"January 23, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"dll \uc0ac\uc6a9",permalink:"/blog/tags/dll-\uc0ac\uc6a9"},{label:"typedef",permalink:"/blog/tags/typedef"}],readingTime:2.34,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-22",title:"Flutter TIL - 22",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","dll \uc0ac\uc6a9","typedef"]},prevItem:{title:"Flutter TIL - 23",permalink:"/blog/flutter-til-23"},nextItem:{title:"Flutter TIL - 21",permalink:"/blog/flutter-til-21"}},p={authorsImageUrls:[void 0]},u=[{value:"typedef",id:"typedef",level:2},{value:"dll \uc0ac\uc6a9\ud558\uae30",id:"dll-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ud568\uc218 \ubd88\ub7ec\uc624\uae30",id:"\ud568\uc218-\ubd88\ub7ec\uc624\uae30",level:3},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3}],c={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"typedef"},"typedef"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"typedef HelloThere = Pointer<Utf8> Function(Pointer<Utf8> str);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ud2b9\uc815 \ud0c0\uc785\uc744 \ucee4\uc2a4\ud141 \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\ub2e8 \ubb38\uc81c\uc810\uc774 \ud558\ub098 \uc788\ub2e4. \ud568\uc218 \uc548\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ubabb\ud55c\ub2e4. \ubb34\uc870\uac74 \ud568\uc218 \ubc16\uc5d0\uc11c \uc0ac\uc6a9.."),(0,r.kt)("h2",{id:"dll-\uc0ac\uc6a9\ud558\uae30"},"dll \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"dll \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/ffi"},"ffi"),"\ub77c\ub294 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud574\uc57c\ud55c\ub2e4.\n(dart:ffi\ub791\uc740 \ub2e4\ub978 \ud328\ud0a4\uc9c0\ub2e4. \uc774\uac8c \uc788\uc5b4\uc57c ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Utf8>"),"\uc0ac\uc6a9 \uac00\ub2a5)"),(0,r.kt)("h3",{id:"\ud568\uc218-\ubd88\ub7ec\uc624\uae30"},"\ud568\uc218 \ubd88\ub7ec\uc624\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final DynamicLibrary dylib = DynamicLibrary.open('hello.dll');\n")),(0,r.kt)("p",null,"\uc704\ucc98\ub7fc dll\ud30c\uc77c \uc77d\uc5b4\uc11c \uc77c\ub2e8 dll\ud30c\uc77c \uc790\uccb4\ub97c DynamicLibrary \ud0c0\uc785\uc758 \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud558\uace0\n(\uc774 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.dll"),"\ud30c\uc77c \uc704\uce58\ub294 root\ub2e4.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"typedef HelloThereFunc = Pointer<Utf8> Function(Pointer<Utf8> str);\ntypedef HelloThere = Pointer<Utf8> Function(Pointer<Utf8> str);\n")),(0,r.kt)("p",null,"\ud3b8\uc758\ub97c \uc704\ud574\uc11c 2\uac1c\uc758 \ud568\uc218\ud615\uc744 typedef\ub85c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HelloThereFunc"),"\ub294 C \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 native \ud568\uc218\uc774\uace0\n",(0,r.kt)("inlineCode",{parentName:"p"},"HelloThere"),"\ub294 Dart\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud0c0\uc785\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer<Utf8>"),"\uc778 \uc774\uc720\ub294 Dart\uc640 C\uc758 \ubb38\uc790\uc5f4 \ub098\ud0c0\ub0b4\ub294 \ubc29\ubc95\uc774 \ub2ec\ub77c\uc11c \uc5b4\uca54 \uc218 \uc5c6\ub2e4\uace0 \ud558\ub124\uc694"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final helloThere =\n        dylib.lookupFunction<HelloThereFunc, HelloThere>('HelloThere');\n")),(0,r.kt)("p",null,"\uc774\uc81c \uc2e4\uc9c8\uc801\uc73c\ub85c dll\uc5d0 \uc788\ub294 \ud568\uc218\ub97c import\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dll"),"\ud30c\uc77c\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicLibrary"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"lookupFunction<C_native_func, Dart_func>"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"('\ud568\uc218\uc774\ub984')"),"\uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucf54\ub4dc\ub85c \ubcf4\uc790\uba74"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final \ubcc0\uc218\uba85 = dll\uc774\ub984.lookupFunction<C_\ub124\uc774\ud2f0\ube0c\ud568\uc218_\uc2dc\uadf8\ub2c8\ucc98, Dart_\ud568\uc218_\uc2dc\uadf8\ub2c8\ucc98>(\ud638\ucd9c\ud560 \ud568\uc218\uc774\ub984);\n")),(0,r.kt)("p",null,"\ub77c\uace0 \uc815\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final Pointer<Utf8> nName = 'Park'.toNativeUtf8();\nfinal Pointer<Utf8> nRst = helloThere(nName);\ncalloc.free(nName);\n\nCenter(\n  child: Text(nRst.toDartString()),\n),\n")),(0,r.kt)("p",null,"\uac04\ub2e8\ud55c \uc0ac\uc6a9 \uc608\uc2dc \uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba3c\uc800 \uc778\uc790\uac12 \uc120\uc5b8\uc744 \ud569\ub2c8\ub2e4(nName). \uc2a4\ud2b8\ub9c1\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"toNativeUtf8()"),"\ub85c \ubcc0\ud658\ud574\uc8fc\uace0"),(0,r.kt)("p",null,"\ud568\uc218 \ud638\ucd9c\ud558\uace0"),(0,r.kt)("p",null,"\ub2e4 \uc4f4 \uac12\uc740 free \uc2dc\ucf1c\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"nRst\ub3c4 free\uc2dc\ucf1c\uc918\uc57c\ud558\ub294\ub370 \uc9c0\uae08 \uc2dc\ud0a4\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uaebc\uc9d1\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 \uc870\uae08 \ub354 \uacf5\ubd80\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);