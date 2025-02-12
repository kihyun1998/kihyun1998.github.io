"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[69284],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=d(t),w=o,m=s["".concat(u,".").concat(w)]||s[w]||c[w]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=w;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},94810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const l={slug:"flutter-til-21",title:"Flutter TIL - 21",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","window manger","bitsdojo_window"]},i="Flutter TIL - 21",a={permalink:"/blog/flutter-til-21",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-22-til21/index.md",source:"@site/blog/2024-01-22-til21/index.md",title:"Flutter TIL - 21",description:"---",date:"2024-01-22T00:00:00.000Z",formattedDate:"January 22, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"window manger",permalink:"/blog/tags/window-manger"},{label:"bitsdojo_window",permalink:"/blog/tags/bitsdojo-window"}],readingTime:2.3,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"flutter-til-21",title:"Flutter TIL - 21",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","window manger","bitsdojo_window"]},prevItem:{title:"Flutter TIL - 22",permalink:"/blog/flutter-til-22"},nextItem:{title:"Flutter TIL - 20",permalink:"/blog/flutter-til-20"}},u={authorsImageUrls:[void 0]},d=[{value:"Window app\uc5d0\uc11c \uc0c1\ub2e8\ubc14 \ucee4\uc2a4\ud140",id:"window-app\uc5d0\uc11c-\uc0c1\ub2e8\ubc14-\ucee4\uc2a4\ud140",level:2},{value:"\ucd08\uae30\uac12 \uc124\uc815",id:"\ucd08\uae30\uac12-\uc124\uc815",level:3},{value:"\ud14c\ub450\ub9ac \uc124\uc815",id:"\ud14c\ub450\ub9ac-\uc124\uc815",level:3},{value:"\uc774\ub3d9 \uc124\uc815",id:"\uc774\ub3d9-\uc124\uc815",level:3},{value:"\uc774\ubca4\ud2b8 \ubc84\ud2bc \uc124\uc815",id:"\uc774\ubca4\ud2b8-\ubc84\ud2bc-\uc124\uc815",level:3},{value:"\ud50c\ub7ab\ud3fc \ubcc4 \uc124\uc815",id:"\ud50c\ub7ab\ud3fc-\ubcc4-\uc124\uc815",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For Mac",id:"for-mac",level:3}],p={toc:d},s="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"window-app\uc5d0\uc11c-\uc0c1\ub2e8\ubc14-\ucee4\uc2a4\ud140"},"Window app\uc5d0\uc11c \uc0c1\ub2e8\ubc14 \ucee4\uc2a4\ud140"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/bitsdojo_window"},"bitdoho_window"),"\ub77c\ub294 \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud55c\ub2e4."),(0,o.kt)("h3",{id:"\ucd08\uae30\uac12-\uc124\uc815"},"\ucd08\uae30\uac12 \uc124\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'void main() {\n  runApp(const MyApp());\n  doWhenWindowReady(() {\n    final win = appWindow; // \uc815\uc758\n    const initialSize = Size(600, 450); // \uc0ac\uc774\uc988 \uc815\uc758\n    win.minSize = initialSize; // \ucd5c\uc18c \uc0ac\uc774\uc988 \ud560\ub2f9\n    win.size = initialSize; // \ucd08\uae30 \uc0ac\uc774\uc988 \ud560\ub2f9\n    win.alignment = Alignment.center; // \uc2e4\ud589\uc2dc \ud654\uba74 \uc704\uce58\n    win.title = "Custom Window app"; // \ucc3d \uc774\ub984\n    win.show(); // \uc774\uac70 \uc788\uc5b4\uc57c \ubcf4\uc5ec\uc900\ub2e4.\n  });\n}\n')),(0,o.kt)("h3",{id:"\ud14c\ub450\ub9ac-\uc124\uc815"},"\ud14c\ub450\ub9ac \uc124\uc815"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"Scaffold(\n  // \ud14c\ub450\ub9ac\n  body: WindowBorder(\n    color: const Color(0xFF0B4279),\n    width: 1,\n    child: const Row(\n      children: [\n        LeftSide(),\n        RightSide(),\n      ],\n    ),\n  ),\n),\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WindowBorder"),"\ub77c\ub294 \uc704\uc82f\uc744 \uc0ac\uc6a9\ud574\uc11c \ud14c\ub450\ub9ac\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4. \ud14c\ub450\ub9ac\uc758 \ub450\uaed8, \uc0c9\uc0c1\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"\uc774\ub3d9-\uc124\uc815"},"\uc774\ub3d9 \uc124\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"child: Column(\n  children: [\n    WindowTitleBarBox(\n      child: Row(\n        children: [\n          Expanded(\n            child: MoveWindow(),\n          ),\n          const WindowButtons(),\n        ],\n      ),\n    ),\n  ],\n),\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WindowTitleBarBox"),"\ub97c \uc815\uc758\ud558\uace0 \uc548\uc5d0\uc11c MoveWindow\ub97c \uc815\uc758\ud558\uba74 \ud574\ub2f9 \uce78\uc744 \uc7a1\uace0 \ub4dc\ub798\uadf8\ud558\uba74 \ucc3d\ub3c4 \ub4dc\ub798\uadf8\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"\uc774\ubca4\ud2b8-\ubc84\ud2bc-\uc124\uc815"},"\uc774\ubca4\ud2b8 \ubc84\ud2bc \uc124\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"WindowButtonColors buttonColors = WindowButtonColors(\n  iconNormal: const Color(0xFF0B4279),\n  mouseOver: const Color(0xFF2A78C6),\n  mouseDown: const Color(0xFF0B4279),\n  iconMouseOver: const Color(0xFF0B4279),\n  iconMouseDown: const Color(0xFFCEE1FF),\n);\n\nRow(\n  children: [\n    MinimizeWindowButton(\n      colors: buttonColors,\n    ),\n    MaximizeWindowButton(\n      colors: buttonColors,\n    ),\n    CloseWindowButton(),\n  ],\n);\n")),(0,o.kt)("p",null,"\uc774\ubbf8 \uc815\uc758 \ub3fc\uc788\ub294 \uc774\ubca4\ud2b8 \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uac00\uc9c0 \uc0c9\uc0c1 \uc18d\uc131\uc744 \uc815\uc758\ud558\uc5ec \ucee4\uc2a4\ud140\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ud50c\ub7ab\ud3fc-\ubcc4-\uc124\uc815"},"\ud50c\ub7ab\ud3fc \ubcc4 \uc124\uc815"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"for-windows"},"For Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <bitsdojo_window_windows/bitsdojo_window_plugin.h>\nauto bdw = bitsdojo_window_configure(BDW_CUSTOM_FRAME | BDW_HIDE_ON_STARTUP);\n")),(0,o.kt)("p",null,"\uc704 \ub0b4\uc6a9\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"windows\\runner\\main.cpp"),"\uc758 \ucd5c\uc0c1\ub2e8\uc5d0 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"for-mac"},"For Mac"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"macos\\runner\\MainFlutterWindow.swift"),"\uc5d0\uc11c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"import bitsdojo_window_macos // FlutterMacOS \ubc11\uc5d0 \ucd94\uac00\n")),(0,o.kt)("p",null,"\uc774 \ucf54\ub4dc\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"import FlutterMacOs"),"\ubc11\uc5d0 \ucd94\uac00\ud558\uace0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"class MainFlutterWindow: NSWindow {\n\n// \ub97c \uc544\ub798 \ucf54\ub4dc\ub85c \ubcc0\uacbd\n\nclass MainFlutterWindow: BitsdojoWindow {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"override func bitsdojo_window_configure() -> UInt {\n    return BDW_CUSTOM_FRAME | BDW_HIDE_ON_STARTUP\n  }\n")),(0,o.kt)("p",null,"\uc774 \ucf54\ub4dc\ub97c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"override func awakeFromNib() {\n")),(0,o.kt)("p",null,"\uc774 \ucf54\ub4dc \uc704\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9ac\ub205\uc2a4\ub97c \uc704\ud55c \ubc29\ubc95\ub3c4 \uc788\ub294\ub370 \ub530\ub85c \uc815\ub9ac\ud558\uc9c4 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);