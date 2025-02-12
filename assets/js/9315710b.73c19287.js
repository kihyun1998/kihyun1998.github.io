"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[19913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:19},o="19. [Flutter] HTTP Request & Response",i={unversionedId:"flutter/flutter19",id:"flutter/flutter19",title:"19. [Flutter] HTTP Request & Response",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter19.md",sourceDirName:"flutter",slug:"/flutter/flutter19",permalink:"/docs/flutter/flutter19",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"dartSidebar",previous:{title:"18. [Flutter] split & substring",permalink:"/docs/flutter/flutter18"},next:{title:"20. [Flutter] fetch",permalink:"/docs/flutter/flutter20"}},s={},p=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2},{value:"dart or Flutter \ud328\ud0a4\uc9c0 \ucc3e\ub294 \uc0ac\uc774\ud2b8",id:"dart-or-flutter-\ud328\ud0a4\uc9c0-\ucc3e\ub294-\uc0ac\uc774\ud2b8",level:3},{value:"HTTP \uc694\uccad \ubcf4\ub0b4\ub294 \ubc29\ubc95",id:"http-\uc694\uccad-\ubcf4\ub0b4\ub294-\ubc29\ubc95",level:3},{value:"namespace",id:"namespace",level:3},{value:"Future \ud0c0\uc785",id:"future-\ud0c0\uc785",level:3},{value:"async await",id:"async-await",level:3},{value:"jsonDecode",id:"jsondecode",level:3},{value:"HTTP class \uc0dd\uc131\uc790",id:"http-class-\uc0dd\uc131\uc790",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"19-flutter-http-request--response"},"19. ","[Flutter]"," HTTP Request & Response"),(0,a.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,a.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="service"',title:'"service"'},"import 'dart:convert';\n\nimport 'package:http/http.dart' as http;\nimport 'package:webtoon_app/models/webtoon.dart';\n\nclass ApiService {\n  final String baseURL = \"https://webtoon-crawler.nomadcoders.workers.dev\";\n  final String today = \"today\";\n\n  Future<List<WebtoonModel>> getToday() async {\n    List<WebtoonModel> webtoonInstances = [];\n    final url = Uri.parse('$baseURL/$today');\n    final response = await http.get(url);\n    if (response.statusCode == 200) {\n      final List<dynamic> webtoons = jsonDecode(response.body);\n      for (var webtoon in webtoons) {\n        webtoonInstances.add(WebtoonModel.fromJson(webtoon));\n      }\n\n      return webtoonInstances;\n    }\n    throw Error();\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="model"',title:'"model"'},"class WebtoonModel {\n  final String title, thumb, id;\n\n  WebtoonModel.fromJson(Map<String, dynamic> json)\n      : title = json['title'],\n        thumb = json['thumb'],\n        id = json['id'];\n}\n")),(0,a.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dart-or-flutter-\ud328\ud0a4\uc9c0-\ucc3e\ub294-\uc0ac\uc774\ud2b8"},"dart or Flutter \ud328\ud0a4\uc9c0 \ucc3e\ub294 \uc0ac\uc774\ud2b8"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/"},"dart or Flutter \ud328\ud0a4\uc9c0 \ucc3e\ub294 \uc0ac\uc774\ud2b8")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc801\uc6a9 \ubc29\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"terminal\uc5d0 \uba85\ub839\uc904\ub85c \uc124\uce58")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"pubspec.yaml\uc5d0 dependencies \ubc11\uc5d0 \ucd94\uac00\ud558\uc5ec \uc124\uce58\ud558\uae30"))),(0,a.kt)("h3",{id:"http-\uc694\uccad-\ubcf4\ub0b4\ub294-\ubc29\ubc95"},"HTTP \uc694\uccad \ubcf4\ub0b4\ub294 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:http/http.dart' as http;\n\nfinal String baseURL = \"https://webtoon-crawler.nomadcoders.workers.dev\";\nfinal String today = \"today\";\nfinal url = Uri.parse('$baseURL/$today');\n\nfinal response = await http.get(url);\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c url\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"Uri.parse"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uc0dd\uc131\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"http.get(url)"),"\uc744 \uc0ac\uc6a9\ud574\uc11c \uc694\uccad\ud558\uba74 \uc751\ub2f5\uac12\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"namespace"},"namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:http/http.dart' as http;\n\nhttp.get(url);\n")),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0 \uc774\ub984\uc744 \uc815\ud574\uc11c \uba54\uc18c\ub4dc \uc0ac\uc6a9\uc744 \ub354 \uba85\uc2dc\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"future-\ud0c0\uc785"},"Future \ud0c0\uc785"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(16604).Z,width:"1047",height:"191"})),(0,a.kt)("p",null,"http get \ud574\uc11c \uc751\ub2f5\ud55c \ub370\uc774\ud130\uc758 \ud0c0\uc785\uc740 Future\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2f9\uc7a5 \uc644\ub8cc\ud560 \uc218 \uc5c6\ub294 \uc791\uc5c5\uc744 Future \uc790\ub8cc\ud615\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \uc791\uc5c5\uc774 \ub05d\ub098\uae30 \uae4c\uc9c0 \uae30\ub2e4\ub9ac\ub824\uba74 \uc544\ub798\ub97c \ucc38\uace0\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"async-await"},"async await"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"await")," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \uba85\ub839\uc5b4\uc758 \ubc18\ud658\uc774 \ub05d\ub098\uc57c \ub2e4\uc74c \uc904\uc744 \uc77d\uac8c\ud558\ub294 \ube44\ub3d9\uc2dd \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"await")," \ud0a4\uc6cc\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"async"),"\ub85c \uc815\uc758\ub41c \ud568\uc218 \ub0b4\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac83\uc744 \ube44\ub3d9\uae30 \ud568\uc218\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"jsondecode"},"jsonDecode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final List<dynamic> webtoons = jsonDecode(response.body);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jsonDecode"),"\ub294 json \uc2a4\ud2b8\ub9c1\uc744 json\uc73c\ub85c \ubcc0\ud658\uc2dc\ucf1c\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"http-class-\uc0dd\uc131\uc790"},"HTTP class \uc0dd\uc131\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"WebtoonModel.fromJson(Map<String, dynamic> json)\n      : title = json['title'],\n        thumb = json['thumb'],\n        id = json['id'];\n")),(0,a.kt)("p",null,"HTTP \uc694\uccad\uc744 \ud558\uc5ec \ubc1b\uc740 \uc751\ub2f5 \uc815\ubcf4\ub4e4\uc744 class\uc5d0 \uc800\uc7a5\ud558\ub824\uba74 \uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub2c8 \uc78a\uc9c0 \ub9d0\uc544\uc57c \ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},16604:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image1-77fc8a5c3a37ece0566f80c255d55184.png"}}]);