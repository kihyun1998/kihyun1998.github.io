"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[4423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:11},l="11. [Flutter] \uce74\ub4dc \ud074\ub798\uc2a4 \uad6c\uc870 \ubcc0\uacbd",i={unversionedId:"flutter/flutter11",id:"flutter/flutter11",title:"11. [Flutter] \uce74\ub4dc \ud074\ub798\uc2a4 \uad6c\uc870 \ubcc0\uacbd",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter11.md",sourceDirName:"flutter",slug:"/flutter/flutter11",permalink:"/docs/flutter/flutter11",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"dartSidebar",previous:{title:"10. [Flutter] \uce74\ub4dc \uc7ac\uc0ac\uc6a9",permalink:"/docs/flutter/flutter10"},next:{title:"12. [Flutter] StatefulWidget",permalink:"/docs/flutter/flutter12"}},u={},s=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"11-flutter-\uce74\ub4dc-\ud074\ub798\uc2a4-\uad6c\uc870-\ubcc0\uacbd"},"11. ","[Flutter]"," \uce74\ub4dc \ud074\ub798\uc2a4 \uad6c\uc870 \ubcc0\uacbd"),(0,o.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,o.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='\uce74\ub4dc \ud074\ub798\uc2a4 \ubcc0\uacbd'",title:"'\uce74\ub4dc","\ud074\ub798\uc2a4":!0,"\ubcc0\uacbd'":!0},"class CustomCard extends StatelessWidget {\n  final String name, code, amount;\n  final IconData icon;\n  final bool isInverted;\n  final Color _blackColor = const Color(0xFF1F2123);\n  final Color _whiteColor = Colors.white;\n  \n  // \ucd94\uac00\ud55c \ubd80\ubd84\n  double dx;\n  double dy;\n\n  CustomCard({\n    super.key,\n    required this.name,\n    required this.code,\n    required this.amount,\n    required this.icon,\n    required this.isInverted,\n    \n    // \ucd94\uac00\ud55c \ubd80\ubd84\n    this.dx = 0,\n    this.dy = 0,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n\n    // Transform \uc704\uc82f\uc73c\ub85c \uac10\uc2f8\uc90c\n    return Transform.translate(\n      offset: Offset(dx, dy),\n      child: Container(\n        ...\n      )\n    );\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='CustomCard \uc801\uc6a9 \ubd80\ubd84'",title:"'CustomCard","\uc801\uc6a9":!0,"\ubd80\ubd84'":!0},'CustomCard(\n  name: "Euro",\n  code: "EUR",\n  amount: "6 428",\n  icon: Icons.euro_rounded,\n  isInverted: false,\n),\nCustomCard(\n  name: "Dollar",\n  code: "USD",\n  amount: "55 622",\n  icon: Icons.attach_money_outlined,\n  isInverted: true,\n  dx: 0,\n  dy: -20,\n),\nCustomCard(\n  name: "Rupee",\n  code: "INR",\n  amount: "28 981",\n  icon: Icons.currency_rupee_sharp,\n  isInverted: false,\n  dx: 0,\n  dy: -40,\n)\n')),(0,o.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ucee4\uc2a4\ud140\ud55c \uc704\uc82f\uc740 \ucd5c\ub300\ud55c \uacf5\ud1b5\ubd80\ubd84\uc774 \uc788\ub2e4\uba74 \uac19\uc774 \uac10\uc2f8\uc8fc\ub294\uac8c \uc88b\ub2e4."),(0,o.kt)("p",null,"\ud074\ub798\uc2a4 \uc0dd\uc131\uc790\uc5d0 \ub514\ud3f4\ud2b8 \uac12\uc744 \ub123\ub294 \uac83\uc740 \ucc98\uc74c\uc5d0 \uc5b4\ub824\uc6cc \ud588\ub294\ub370 \uc5b4\ub835\uc9c0 \uc54a\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub0e5 \uc0dd\uc131\uc790\uc5d0\uc11c required\ub97c \uc81c\uc678\ud558\uace0 \uac12\uc744 \uc9c0\uc815\ud574\uc8fc\uba74 \ub41c\ub2e4."),(0,o.kt)("p",null,"\uac12\uc774 \ub4e4\uc5b4\uc624\uba74 \uc790\ub3d9\uc73c\ub85c \ub4e4\uc5b4\uc628 \uac12\uc73c\ub85c \ub300\uccb4\ub41c\ub2e4."))}p.isMDXComponent=!0}}]);