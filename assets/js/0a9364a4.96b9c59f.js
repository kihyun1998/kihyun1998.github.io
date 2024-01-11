"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[5756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const o={slug:"Flutter",title:"Flutter TIL - 12",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","provider"]},a="Flutter TIL - 12",i={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-09-til12/index.md",source:"@site/blog/2024-01-09-til12/index.md",title:"Flutter TIL - 12",description:"---",date:"2024-01-09T00:00:00.000Z",formattedDate:"January 9, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"provider",permalink:"/blog/tags/provider"}],readingTime:2.485,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 12",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","provider"]},prevItem:{title:"Flutter TIL - 14",permalink:"/blog/Flutter"},nextItem:{title:"Flutter TIL - 13",permalink:"/blog/Flutter"}},u={authorsImageUrls:[void 0]},p=[{value:"onDispose",id:"ondispose",level:3},{value:"\ub300\ud45c\uc801 3\uac00\uc9c0",id:"\ub300\ud45c\uc801-3\uac00\uc9c0",level:3},{value:"auto dispose",id:"auto-dispose",level:2},{value:"family",id:"family",level:2},{value:"autoDisposeFamily",id:"autodisposefamily",level:2},{value:"\uac1d\uccb4 \ub118\uae30\uae30",id:"\uac1d\uccb4-\ub118\uae30\uae30",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},'final helloProvider = Provider<String>((ref) {\n  ref.onDispose(() {\n    print("[helloProvider] : disposed");\n  });\n  return "Hello";\n});\n')),(0,l.kt)("p",null,"riverpod\uc758 \uae30\ubcf8 \ubaa8\uc2b5\uc774 \uc774\ub807\ub2e4."),(0,l.kt)("p",null,"\ubcc0\uc218\uc5d0 \ud560\ub2f9\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Provider")," \ubd80\ubd84\uc740 \uc0ac\uc6a9\ud560 Provider \uc885\ub958,"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<String>"),"\uc5d0\ub294 return\uac12 \ud0c0\uc785\uc744 \uc815\uc758\ud55c\ub2e4."),(0,l.kt)("p",null,"ref\ub97c \ud1b5\ud574\uc11c \uc5ec\ub7ec \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370 ref.onDispose\ud574\uc8fc\uba74 dispose\ub41c\ub2e4."),(0,l.kt)("h3",{id:"ondispose"},"onDispose"),(0,l.kt)("p",null,"\ud574\ub2f9 provider\uac00 dispose\ub418\uba74 \uc2e4\ud589\ub418\ub294 \ud568\uc218"),(0,l.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c dispose \ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("h3",{id:"\ub300\ud45c\uc801-3\uac00\uc9c0"},"\ub300\ud45c\uc801 3\uac00\uc9c0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"watch")," : \uac12 \ubcc0\ud558\ub294\uc9c0 \uacc4\uc18d \ud655\uc778\ud558\uace0 \ubcc0\ud558\uba74 \ub9ac\ube4c\ub4dc (async\ud558\uba74\uc548\ub41c\ub2e4.)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"listen")," : \uac12 \ubcc0\uacbd\ub418\uba74 \ub9ac\ube4c\ub529 \ub418\ub294 \uac83\uc774 \uc544\ub2cc \uc561\uc158\uc744 \uc218\ud589(navigate\uac19\uc740) (async\ud558\uba74 \uc548\ub41c\ub2e4.)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"read")," : \uac12\uc744 \ud655\uc778\ud558\uc9c0\ub9cc \ubcc0\uacbd\uc744 watch\ud558\uc9c0 \uc54a\uc74c(build\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0\ub9c8\ub77c)"),(0,l.kt)("h2",{id:"auto-dispose"},"auto dispose"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final autoDisposeHelloProvider = Provider.autoDispose<String>((ref) {\n  print('[autoDisposeHelloProvder]: created');\n  ref.onDispose(() {\n    print('[autoDisposeHelloProvder]: disposed');\n  });\n  return 'Hello';\n});\n")),(0,l.kt)("p",null,"\ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uc624\uba74 autodispose\ud574\uc900\ub2e4."),(0,l.kt)("h2",{id:"family"},"family"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final familyHelloProvider = Provider.family<String, String>((ref, name) {\n  ref.onDispose(() {\n    print('[familyHelloProvider] disposed');\n  });\n  return 'Hello $name';\n});\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c provider \uc815\uc758\ud558\uba74 argument \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"    final helloA = ref.watch(familyHelloProvider('A'));\n    final helloB = ref.watch(familyHelloProvider('B'));\n")),(0,l.kt)("p",null,"watch\ud560 \ub54c\ub3c4 \uc774\ub7f0\uc2dd\uc73c\ub85c \ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("h2",{id:"autodisposefamily"},"autoDisposeFamily"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final autoDisposeFamilyHelloProvider =\n    Provider.autoDispose.family<String, String>((ref, name) {\n  ref.onDispose(() {\n    print('[autoDisposeFamilyHelloProvider] disposed');\n  });\n  return 'Hello $name';\n});\n")),(0,l.kt)("p",null,"autoDispose\uc640 family\ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \ub458\uc758 \uc778\uc790\uac12\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\ub77c\uba74 dispose\ub294 \ud55c\ubc88\ub9cc \uc77c\uc5b4\ub0a9\ub2c8\ub2e4. (\uadf8\ub0e5 autoDispose\ub3c4 \ud55c\ubc88\ub9cc \uc77c\uc5b4\ub0a8)"),(0,l.kt)("h2",{id:"\uac1d\uccb4-\ub118\uae30\uae30"},"\uac1d\uccb4 \ub118\uae30\uae30"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class Counter {\n  final int count;\n  Counter({\n    required this.count,\n  });\n\n  @override\n  String toString() => 'Counter()(count: $count)';\n}\n\nfinal counterProvider = Provider.autoDispose.family<int, Counter>((ref, c) {\n  ref.onDispose(() {\n    print('[countProvider($c)] disposed');\n  });\n  return c.count;\n});\n")),(0,l.kt)("p",null,"\ub9cc\uc57d \uc704\ucc98\ub7fc \uac1d\uccb4\ub97c \ub118\uaca8\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"    ref.watch(counterProvider(Counter(count: 0)));\n    ref.watch(counterProvider(Counter(count: 0)));\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c watch\ub97c \uc870\uc9c0\uba74 dispose\uac00 \ub450\ubc88 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4. \ub458 \ub2e4 \ub2e4\ub978 \uac1d\uccb4\ub85c \ud310\ub2e8\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class Counter extends Equatable {\n  final int count;\n  const Counter({\n    required this.count,\n  });\n\n  @override\n  String toString() => 'Counter()(count: $count)';\n\n  @override\n  List<Object> get props => [count];\n}\n")),(0,l.kt)("p",null,"Counter \uac1d\uccb4\ub97c Equatable\ud574\uc57c dispose \ud55c\ubc88\ub9cc \uc77c\uc5b4\ub09c\ub2e4."),(0,l.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"autoDispose \uc870\uc2ec\ud788 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. \uacc4\uc18d dispose \ud558\uae30 \ub54c\ubb38\uc5d0"))}c.isMDXComponent=!0}}]);