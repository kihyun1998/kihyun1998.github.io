"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3607],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(n),p=o,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||s;return n?r.createElement(d,a(a({ref:e},u),{},{components:n})):r.createElement(d,a({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22158:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:39},a="39. [flutter] toJson, fromJson",i={unversionedId:"flutter/flutter39",id:"flutter/flutter39",title:"39. [flutter] toJson, fromJson",description:"---",source:"@site/docs/flutter/flutter39.md",sourceDirName:"flutter",slug:"/flutter/flutter39",permalink:"/docs/flutter/flutter39",draft:!1,tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"dartSidebar",previous:{title:"38. [flutter] MVVM",permalink:"/docs/flutter/flutter38"},next:{title:"01. [KOSTA] \ud50c\ub7ec\ud130 \uad50\uc721 - 1\ud68c\ucc28",permalink:"/docs/flutter-kosta/kosta1"}},l={},c=[{value:"Json \uc608\uc81c",id:"json-\uc608\uc81c",level:2},{value:"dart class",id:"dart-class",level:2},{value:"fromJson \uc0ac\uc6a9\uc608\uc81c",id:"fromjson-\uc0ac\uc6a9\uc608\uc81c",level:2},{value:"toJson \uc0ac\uc6a9 \uc608\uc81c",id:"tojson-\uc0ac\uc6a9-\uc608\uc81c",level:2}],u={toc:c},m="wrapper";function f(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"39-flutter-tojson-fromjson"},"39. ","[flutter]"," toJson, fromJson"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"json-\uc608\uc81c"},"Json \uc608\uc81c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "test":[{\n        "id":"1",\n        "name":"one"\n    },{\n        "id":"2",\n        "name":"two"\n    }]\n}\n')),(0,o.kt)("h2",{id:"dart-class"},"dart class"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class TestItem {\n  final String id;\n  final String name;\n\n  TestItem({required this.id, required this.name});\n\n  // JSON\uc5d0\uc11c \uac1d\uccb4\ub85c \ubcc0\ud658\ud558\ub294 factory \uc0dd\uc131\uc790\n  factory TestItem.fromJson(Map<String, dynamic> json) {\n    return TestItem(\n      id: json['id'] as String,\n      name: json['name'] as String,\n    );\n  }\n\n  // \uac1d\uccb4\uc5d0\uc11c JSON\uc73c\ub85c \ubcc0\ud658\n  Map<String, dynamic> toJson() {\n    return {\n      'id': id,\n      'name': name,\n    };\n  }\n}\n\nclass TestList {\n  final List<TestItem> test;\n\n  TestList({required this.test});\n\n  // JSON\uc5d0\uc11c \uac1d\uccb4\ub85c \ubcc0\ud658\ud558\ub294 factory \uc0dd\uc131\uc790\n  factory TestList.fromJson(Map<String, dynamic> json) {\n    var list = json['test'] as List;\n    List<TestItem> testList = list.map((i) => TestItem.fromJson(i)).toList();\n    return TestList(test: testList);\n  }\n\n  // \uac1d\uccb4\uc5d0\uc11c JSON\uc73c\ub85c \ubcc0\ud658\n  Map<String, dynamic> toJson() {\n    return {\n      'test': test.map((i) => i.toJson()).toList(),\n    };\n  }\n}\n")),(0,o.kt)("h2",{id:"fromjson-\uc0ac\uc6a9\uc608\uc81c"},"fromJson \uc0ac\uc6a9\uc608\uc81c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'void fromJsonExample() {\n  String jsonString = \'\'\'\n    {\n      "test":[{\n          "id":"1",\n          "name":"one"\n      },{\n          "id":"2",\n          "name":"two"\n      }]\n    }\n  \'\'\';\n\n  final jsonData = jsonDecode(jsonString);\n  TestList testList = TestList.fromJson(jsonData);\n\n  print(testList.test[0].name); // \ucd9c\ub825: one\n  print(testList.test[1].name); // \ucd9c\ub825: two\n}\n')),(0,o.kt)("h2",{id:"tojson-\uc0ac\uc6a9-\uc608\uc81c"},"toJson \uc0ac\uc6a9 \uc608\uc81c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'void toJsonExample() {\n  TestList testList = TestList(test: [\n    TestItem(id: "1", name: "one"),\n    TestItem(id: "2", name: "two"),\n  ]);\n\n  Map<String, dynamic> jsonData = testList.toJson();\n  String jsonString = jsonEncode(jsonData);\n\n  print(jsonString);\n  // \ucd9c\ub825: {"test":[{"id":"1","name":"one"},{"id":"2","name":"two"}]}\n}\n')))}f.isMDXComponent=!0}}]);