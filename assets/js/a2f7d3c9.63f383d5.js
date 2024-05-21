"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[7365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,y=c["".concat(u,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:47},l="46. [flutter] \uc5d0\ub7ec -  FlutterError (Tried to modify a provider while the widget tree was building.)",a={unversionedId:"flutter/flutter47",id:"flutter/flutter47",title:"46. [flutter] \uc5d0\ub7ec -  FlutterError (Tried to modify a provider while the widget tree was building.)",description:"---",source:"@site/docs/flutter/flutter47.md",sourceDirName:"flutter",slug:"/flutter/flutter47",permalink:"/docs/flutter/flutter47",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"dartSidebar",previous:{title:"46. [flutter] riverpod - ProviderScope",permalink:"/docs/flutter/flutter46"},next:{title:"01. [KOSTA] \ud50c\ub7ec\ud130 \uad50\uc721 - 1\ud68c\ucc28",permalink:"/docs/flutter-kosta/kosta1"}},u={},d=[{value:"\uba54\uc2dc\uc9c0",id:"\uba54\uc2dc\uc9c0",level:2},{value:"\uc774\uc720",id:"\uc774\uc720",level:2},{value:"\ud574\uacb0\ubc95",id:"\ud574\uacb0\ubc95",level:2}],s={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"46-flutter-\uc5d0\ub7ec----fluttererror-tried-to-modify-a-provider-while-the-widget-tree-was-building"},"46. ","[flutter]"," \uc5d0\ub7ec -  FlutterError (Tried to modify a provider while the widget tree was building.)"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\uba54\uc2dc\uc9c0"},"\uba54\uc2dc\uc9c0"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FlutterError (Tried to modify a provider while the widget tree was building.\nIf you are encountering this error, chances are you tried to modify a provider\nin a widget life-cycle, such as but not limited to:\n- build\n- initState\n- dispose\n- didUpdateWidget\n- didChangeDependencies\n\nModifying a provider inside those life-cycles is not allowed, as it could\nlead to an inconsistent UI state. For example, two widgets could listen to the\nsame provider, but incorrectly receive different states.\n\n\nTo fix this problem, you have one of two solutions:\n- (preferred) Move the logic for modifying your provider outside of a widget\n  life-cycle. For example, maybe you could update your provider inside a button's\n  onPressed instead.\n\n- Delay your modification, such as by encapsulating the modification\n  in a `Future(() {...})`.\n  This will perform your update after the widget tree is done building.)\n")),(0,i.kt)("h2",{id:"\uc774\uc720"},"\uc774\uc720"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"flutter\uc5d0\uc11c riverpod\uc744 \uc0ac\uc6a9\ud560 \ub54c initState\ud568\uc218\uc5d0\uc11c ref.read\ub85c async\ud55c \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ub9cc\ub0a0 \uc218 \uc788\ub294 \uc5d0\ub7ec\ub2e4."),(0,i.kt)("p",null,"\uc989, state\ub97c \uc704\uc82f\uc774 \ub2e4 \uadf8\ub824\uc9c0\uae30 \uc804\uc5d0 statet\ub97c \uc218\uc815\ud558\ub824\uace0 \ud558\uba74 \ub098\ud0c0\ub098\ub294 \uc5d0\ub7ec\ub2e4."),(0,i.kt)("h2",{id:"\ud574\uacb0\ubc95"},"\ud574\uacb0\ubc95"),(0,i.kt)("hr",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ubc84\ud2bc\uc744 \ub9cc\ub4e4\uc5b4\uc11c \ucf5c\ubc31\uc744 \ud558\ub294 \ubc29\ubc95")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Future.delayed\ub85c \uac10\uc2f8\uae30"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'Future.delayed(\n      Duration.zero,\n      () {\n        ref.read(weatherProvider.notifier).fetchWeather("london");\n      },\n    );\n')),(0,i.kt)("p",null,"\uadf8\ub7fc \ud574\uacb0."))}p.isMDXComponent=!0}}]);