"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},l="04. [Flutter] \uc704\uc82f",a={unversionedId:"flutter/flutter4",id:"flutter/flutter4",title:"04. [Flutter] \uc704\uc82f",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter4.md",sourceDirName:"flutter",slug:"/flutter/flutter4",permalink:"/docs/flutter/flutter4",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"dartSidebar",previous:{title:"03. [Flutter] Hello World",permalink:"/docs/flutter/flutter3"},next:{title:"05. [Flutter] Container",permalink:"/docs/flutter/flutter5"}},d={},p=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"Widget Column",id:"widget-column",level:3},{value:"Widget Row",id:"widget-row",level:3},{value:"Widget TextStyle",id:"widget-textstyle",level:3},{value:"Widget Padding",id:"widget-padding",level:3},{value:"Widget SizeBox",id:"widget-sizebox",level:3}],u={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"04-flutter-\uc704\uc82f"},"04. ","[Flutter]"," \uc704\uc82f"),(0,i.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,i.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'void main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n          backgroundColor: Color(0xFF181818),\n          body: Padding(\n            padding: EdgeInsets.symmetric(horizontal: 20),\n            child: Column(\n              children: [\n                SizedBox(\n                  height: 50,\n                ),\n                Row(\n                  mainAxisAlignment: MainAxisAlignment.end,\n                  children: [\n                    Column(\n                      crossAxisAlignment: CrossAxisAlignment.end,\n                      children: [\n                        Text(\n                          "Hey, Park",\n                          style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 30,\n                              fontWeight: FontWeight.bold),\n                        ),\n                        Text(\n                          "Welcome back",\n                          style: TextStyle(\n                            color: Colors.white.withOpacity(0.6),\n                            fontSize: 15,\n                          ),\n                        ),\n                      ],\n                    )\n                  ],\n                )\n              ],\n            ),\n          )),\n    );\n  }\n}\n')),(0,i.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"widget-column"},"[Widget]"," Column"),(0,i.kt)("p",null,"children\uc774\ub77c\ub294 \uc778\uc790\ub97c \ud1b5\ud574\uc11c \ub4e4\uc5b4\uc628 \uc704\uc82f\ub4e4\uc744 \uc138\ub85c\ub85c \uc313\uc74c"),(0,i.kt)("h3",{id:"widget-row"},"[Widget]"," Row"),(0,i.kt)("p",null,"children\uc774\ub77c\ub294 \uc778\uc790\ub97c \ud1b5\ud574\uc11c \ub4e4\uc5b4\uc628 \uc704\uc82f\ub4e4\uc744 \uac00\ub85c\ub85c \uc313\uc74c"),(0,i.kt)("admonition",{title:"Column\uacfc Row\uc758 \uc635\uc158",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"MainAxisAlignment - \ud574\ub2f9 Column \ub610\ub294 Row\uc5d0\uc11c \uba54\uc778 \ucd95(\uc218\uc9c1, \uc218\ud3c9)\uc5d0\uc11c\uc758 \uc704\uce58 \uc870\uc808\ud560 \uc218 \uc788\ub2e4.\ncrossAxisAlignment - \ud574\ub2f9 Column \ub610\ub294 Row\uc5d0\uc11c \ubc18\ub300 \ucd95(\uc218\uc9c1, \uc218\ud3c9)\uc5d0\uc11c\uc758 \uc704\uce58 \uc870\uc808\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("h3",{id:"widget-textstyle"},"[Widget]"," TextStyle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Text")," \uc704\uc82f \uc18d\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," \uc635\uc158 \uac12\uc73c\ub85c \ub4e4\uc5b4\uac00\uc5ec \ubb38\uc790\uc5f4 \uc2a4\ud0c0\uc77c \uc9c0\uc815"),(0,i.kt)("admonition",{title:"TextStyle \uc635\uc158",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"color - \ud3f0\ud2b8 \uc0c9\uc744 \ubcc0\uacbd\ud55c\ub2e4.\nfontSize - \ud3f0\ud2b8 \ud06c\uae30\ub97c \ubcc0\uacbd\ud55c\ub2e4.\nfontWeight - \ud3f0\ud2b8 \uad75\uae30\ub97c \ubcc0\uacbd\ud55c\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},"\uc0c9 \uc124\uc815 \ubc29\ubc95 : ",(0,i.kt)("inlineCode",{parentName:"p"},"Colors.")," \ud558\uba74 \uc54c \uc218 \uc788\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\uc744 \ud55c\ubc88 \ub354 \ud558\uba74 \ucc44\ub3c4 \ub4f1\uc744 \uc815\ud560 \uc218 \uc788\uc74c."),(0,i.kt)("p",{parentName:"admonition"},"\uc544\ub2c8\uba74 Color(0xFF","[R: 16\uc9c4\uc218 G: 16\uc9c4\uc218 B: 16\uc9c4\uc218]",")\ub85c \uc124\uc815\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("h3",{id:"widget-padding"},"[Widget]"," Padding"),(0,i.kt)("p",null,"\uc774 \uc704\uc82f\uc73c\ub85c \uac10\uc2f8\uc9c4 \uc704\uc82f\uc740 \ud328\ub529\uc774 \uac78\ub9bc"),(0,i.kt)("admonition",{title:"Padding \uc635\uc158",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"padding: \uaf2d \ub123\uc5b4\uc918\uc57c \ud558\ub294\ub370 ",(0,i.kt)("inlineCode",{parentName:"p"},"EdgeInsets.")," \ud558\uba74 \ud328\ub529 \uc704\uce58, \uac12\uc744 \ub123\ub294 \uc635\uc158\ub4e4\uc774 \ub098\uc628\ub2e4.\nchild: \ud328\ub529\uc774 \uc801\uc6a9\ub418\ub294 \ub300\uc0c1")),(0,i.kt)("h3",{id:"widget-sizebox"},"[Widget]"," SizeBox"),(0,i.kt)("p",null,"\uadf8\ub0e5 \uc0ac\uc774\uc988\ub97c \ucc28\uc9c0\ud574\uc8fc\ub294 \ubc15\uc2a4\ub2e4. \uc880\ub354 \uc815\uad50\ud55c \ud328\ub529 \ub290\ub08c"),(0,i.kt)("admonition",{title:"SizeBox \uc635\uc158",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"height: \ub192\uc774 \uc870\uc808\nwidth: \ud3ed \uc870\uc808")))}s.isMDXComponent=!0}}]);