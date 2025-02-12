"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[90613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:23},l="23. [Flutter] Route & Animation",o={unversionedId:"flutter/flutter23",id:"flutter/flutter23",title:"23. [Flutter] Route & Animation",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter23.md",sourceDirName:"flutter",slug:"/flutter/flutter23",permalink:"/docs/flutter/flutter23",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"dartSidebar",previous:{title:"22. [Flutter] Image network",permalink:"/docs/flutter/flutter22"},next:{title:"24. [Flutter] Hero",permalink:"/docs/flutter/flutter24"}},u={},p=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"GestureDetector",id:"gesturedetector",level:3},{value:"Navigator.push",id:"navigatorpush",level:3},{value:"MaterialPageRoute",id:"materialpageroute",level:3},{value:"PageRouteBuilder",id:"pageroutebuilder",level:3}],c={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"23-flutter-route--animation"},"23. ","[Flutter]"," Route & Animation"),(0,a.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,a.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='\ucd94\uac00\ud55c \ucf54\ub4dc'",title:"'\ucd94\uac00\ud55c","\ucf54\ub4dc'":!0},"return GestureDetector(\n  onTap: () {\n    // Navigator.push(\n    //   context,\n    //   MaterialPageRoute(\n    //     builder: (context) => DetailScreen(\n    //       title: title,\n    //       thumb: thumb,\n    //       id: id,\n    //     ),\n    //     fullscreenDialog: true,\n    //   ),\n    // );\n    Navigator.push(\n      context,\n      PageRouteBuilder(\n        pageBuilder: (context, animation, secondaryAnimation) =>\n            DetailScreen(id: id, title: title, thumb: thumb),\n        transitionsBuilder:\n            (context, animation, secondaryAnimation, child) {\n          var begin = const Offset(0, 1);\n          var end = Offset.zero;\n          var curve = Curves.ease;\n          var tween =\n              Tween(begin: begin, end: end).chain(CurveTween(curve: curve));\n          return SlideTransition(\n            position: animation.drive(tween),\n            child: child,\n          );\n        },\n      ),\n    );\n  },\n)\n")),(0,a.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gesturedetector"},"GestureDetector"),(0,a.kt)("p",null,"\ub3d9\uc791\uc744 \uac10\uc9c0\ud558\ub294 \uc704\uc82f\uc774\ub2e4."),(0,a.kt)("p",null,"\ub9ce\uc740 \ub3d9\uc791\ub4e4\uc744 \uac10\uc9c0\ud55c\ub2e4. onTapDown, onTapUp, onTap.. \ub4f1"),(0,a.kt)("h3",{id:"navigatorpush"},"Navigator.push"),(0,a.kt)("p",null,"Navigator.push\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),"\ub97c \uc815\uc758\ud574\uc918\uc57c\ud568."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"route"),"\ub294 2\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\ub2e4. \ud558\ub098\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"MaterialPageRoute"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uace0 \ub2e4\ub978 \ud558\ub098\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"PageRouteBuilder"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("h3",{id:"materialpageroute"},"MaterialPageRoute"),(0,a.kt)("p",null,"builder\ub9cc \uc815\uc758\ud574\uc8fc\uba74 \ub418\uc11c \uac04\ub2e8\ud558\ub2e4."),(0,a.kt)("p",null,"fullscreenDialog \uc18d\uc131\uc744 \ud1b5\ud574\uc11c \ubd88\ub7ec\uc624\ub294 \ubc29\uc2dd\uc744 \ub2e4\ub974\uac8c \ud560 \uc218 \uc788\ub294\ub370 \uc548\ub4dc\ub85c\uc774\ub4dc \ud658\uacbd\uc5d0\uc11c\ub294 \uc798 \uc548\ub41c\ub2e4."),(0,a.kt)("h3",{id:"pageroutebuilder"},"PageRouteBuilder"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pageBuilder"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"transitionBuilder")," 2\uac00\uc9c0 \ucf5c\ubc31 \ud568\uc218\uac00 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pageBuilder"),"\ub294 \ud398\uc774\uc9c0\ub97c \ube4c\ub4dc\ud558\ub294 \ubd80\ubd84\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transitionBuilder"),"\ub294 \uc804\ud658\ud558\ub294 \ubd80\ubd84\uc744 \ube4c\ub4dc\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transitionBuilder"),"\uc5d0\ub294 begin\uac12\uacfc end\uac12\uc774 \ud544\uc694\ud55c tween\uc744 \uc815\ud574\uc918\uc57c \ud558\uace0 \ucd94\uac00\uc801\uc73c\ub85c curve \uac12\uc744 chain\uc744 \ud1b5\ud574 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"curve\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/animation/Curves-class.html"},"\uc5ec\uae30"),"\uc5d0 \uc790\uc138\ud788 \ub098\uc640\uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pageBuilder"),"\ud55c \ud398\uc774\uc9c0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"transitionBuilder"),"\uc758 child\ub85c \ub4e4\uc5b4\uac04\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transitionBuilder"),"\uc758 return\uc740 AnimationWidget\uc744 \uc0c1\uc18d\ubc1b\uc740 \uac83 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574\uc8fc\uba74 \ub41c\ub2e4."))}s.isMDXComponent=!0}}]);