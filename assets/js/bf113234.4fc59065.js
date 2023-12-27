"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:17},l="17. [Flutter] Timer",a={unversionedId:"flutter/flutter17",id:"flutter/flutter17",title:"17. [Flutter] Timer",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter17.md",sourceDirName:"flutter",slug:"/flutter/flutter17",permalink:"/docs/flutter/flutter17",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"dartSidebar",previous:{title:"16. [Flutter] UI \uad6c\uc131",permalink:"/docs/flutter/flutter16"},next:{title:"18. [Flutter] split & substring",permalink:"/docs/flutter/flutter18"}},c={},u=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"Timer",id:"timer",level:3},{value:"LateError (LateInitializationError: Field &#39;\ubcc0\uc218\uba85&#39; has not been initialized.)",id:"lateerror-lateinitializationerror-field-\ubcc0\uc218\uba85-has-not-been-initialized",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"17-flutter-timer"},"17. ","[Flutter]"," Timer"),(0,i.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,i.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:async';\n\nclass _HomeScreenState extends State<HomeScreen> {\n  int totalSeconds = 1500;\n  bool isRunning = false;\n  late Timer timer;\n\n  void onTick(Timer timer) {\n    setState(() {\n      totalSeconds -= 1;\n    });\n  }\n\n  void onClickedStart() {\n    setState(() {\n      isRunning = true;\n    });\n    timer = Timer.periodic(\n      const Duration(seconds: 1),\n      onTick,\n    );\n  }\n\n  void onClickedPause() {\n    setState(() {\n      isRunning = false;\n    });\n    timer.cancel();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      backgroundColor: Theme.of(context).colorScheme.background,\n      body: Column(\n        children: [\n          Flexible(\n            flex: 1,\n            child: Container(\n                alignment: Alignment.bottomCenter,\n                child: Text(\n                  '$totalSeconds',\n                  style: TextStyle(\n                    color: Theme.of(context).cardColor,\n                    fontSize: 100,\n                    fontWeight: FontWeight.w600,\n                  ),\n                )),\n          ),\n          Flexible(\n            flex: 3,\n            child: Center(\n              child: IconButton(\n                iconSize: 100,\n                color: Theme.of(context).cardColor,\n                onPressed: isRunning ? onClickedPause : onClickedStart,\n                icon: Icon(\n                  isRunning\n                      ? Icons.pause_circle_outline\n                      : Icons.play_circle_outline,\n                ),\n              ),\n            ),\n          ),\n          ...\n        ],\n      ),\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timer"},"Timer"),(0,i.kt)("p",null,"\uc2dc\uac04\uc5d0 \uad00\ud55c \ub3d9\uc791\uc744 \uc81c\uacf5\ud574\uc8fc\ub294 class"),(0,i.kt)("admonition",{title:"Timer.periodic",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Timer.periodic( \uc8fc\uae30, \uc2e4\ud589 \ud568\uc218) \ud615\uc2dd\uc774\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"\uc2e4\ud589 \ud568\uc218"),"\uc5d0\ub294 Timer class\uc758 \ubcc0\uc218\ub97c \uc778\uc790\ub85c \ub123\uc5b4\uc918\uc57c \ud55c\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},"\uc815\uc9c0 \ub3d9\uc791\uc744 \uc704\ud574\uc11c\ub294 timer.cancel()\uc744 \uc0ac\uc6a9\ud55c\ub2e4.")),(0,i.kt)("h3",{id:"lateerror-lateinitializationerror-field-\ubcc0\uc218\uba85-has-not-been-initialized"},"LateError (LateInitializationError: Field '\ubcc0\uc218\uba85' has not been initialized.)"),(0,i.kt)("p",null,"\ubcc0\uc218\ub97c late\ub85c \uc9c0\uc815\ud574\uc11c \ucd08\uae30\ud654\ub97c \uc2dc\ud0a4\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uba74 \ub098\uc624\ub294 \uc5d0\ub7ec\ub2e4."),(0,i.kt)("p",null,"\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uaf2d \ucd08\uae30\ud654 \uc2dc\ud0a4\uae30"))}p.isMDXComponent=!0}}]);