"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(c,i(i({ref:t},d),{},{components:a})):r.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},99664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={slug:"Flutter",title:"Flutter TIL - 19",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","notifierProvider","asyncNotifierProvider","tear-offs","enum based class","sealed based class"]},i="Flutter TIL - 19",o={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-18-til19/index.md",source:"@site/blog/2024-01-18-til19/index.md",title:"Flutter TIL - 19",description:"---",date:"2024-01-18T00:00:00.000Z",formattedDate:"January 18, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"notifierProvider",permalink:"/blog/tags/notifier-provider"},{label:"asyncNotifierProvider",permalink:"/blog/tags/async-notifier-provider"},{label:"tear-offs",permalink:"/blog/tags/tear-offs"},{label:"enum based class",permalink:"/blog/tags/enum-based-class"},{label:"sealed based class",permalink:"/blog/tags/sealed-based-class"}],readingTime:5.005,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 19",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","notifierProvider","asyncNotifierProvider","tear-offs","enum based class","sealed based class"]},nextItem:{title:"Flutter TIL - 18",permalink:"/blog/Flutter"}},p={authorsImageUrls:[void 0]},s=[{value:"AutoDispose",id:"autodispose",level:2},{value:"Family",id:"family",level:2},{value:"AutoDispose Family",id:"autodispose-family",level:2},{value:"riverpod generator \uc774\uc6a9",id:"riverpod-generator-\uc774\uc6a9",level:2},{value:"state shape",id:"state-shape",level:2},{value:"data model\uc744 freezed\ub85c \ub9cc\ub4dc\ub294 \uc808\ucc28",id:"data-model\uc744-freezed\ub85c-\ub9cc\ub4dc\ub294-\uc808\ucc28",level:2},{value:"stat\ub97c freezed\ub85c \ub9cc\ub4dc\ub294 \uc808\ucc28",id:"stat\ub97c-freezed\ub85c-\ub9cc\ub4dc\ub294-\uc808\ucc28",level:2},{value:"dio provier \ub9cc\ub4e4\uae30 \uc808\ucc28",id:"dio-provier-\ub9cc\ub4e4\uae30-\uc808\ucc28",level:2},{value:"Enum based\uc5d0\uc11c \uac12 \uc694\uccad provider \ub9cc\ub4dc\ub294 \uc808\ucc28",id:"enum-based\uc5d0\uc11c-\uac12-\uc694\uccad-provider-\ub9cc\ub4dc\ub294-\uc808\ucc28",level:2},{value:"\ud2b9\uc774\uc810 \uc815\ub9ac",id:"\ud2b9\uc774\uc810-\uc815\ub9ac",level:3},{value:"inistate modifier \uc8fc\uc758\ud560 \uc810",id:"inistate-modifier-\uc8fc\uc758\ud560-\uc810",level:2},{value:"Sealed class based",id:"sealed-class-based",level:2},{value:"\uc808\ucc28",id:"\uc808\ucc28",level:2},{value:"async\ucc98\ub7fc \ubcf4\uc774\uac8c\ud558\ub294 notifier",id:"async\ucc98\ub7fc-\ubcf4\uc774\uac8c\ud558\ub294-notifier",level:2},{value:"enum",id:"enum",level:3},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:3},{value:"AsyncNotifier",id:"asyncnotifier",level:2},{value:"guard",id:"guard",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"autodispose"},"AutoDispose"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"autodispose\ub97c \uc0ac\uc6a9\ud558\ub824\uba74"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final counterProvider = NotifierProvider.autoDispose<Counter, int>(Counter.new);\n")),(0,n.kt)("p",null,"\ub85c \uc120\uc5b8\ud574\uc57c \ud558\uace0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"class Counter extends AutoDisposeNotifier<int>{}\n")),(0,n.kt)("p",null,"\uc704\ucc98\ub7fc Notifier\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,n.kt)("h2",{id:"family"},"Family"),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final counterProvider = NotifierProvider.family<Counter, int, int>(Counter.new);\n")),(0,n.kt)("p",null,"family\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 family\uc640 \ub118\uaca8\uc904 \uc778\uc790\uac12\uc744 \ucd94\uac00\ud574\uc57c\ud558\uace0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"class Counter extends FamilyNotifier<int, int> {\n  @override\n  int build(int arg) {return arg;}\n}\n")),(0,n.kt)("p",null,"Notifier\ub3c4 FamilyNotifier\uc640 \uc778\uc790 \ucd94\uac00\uc640 build\ud568\uc218\uc5d0 \uc778\uc790\ub97c \ucd94\uac00\ud574\uc57c \ud55c\ub2e4."),(0,n.kt)("h2",{id:"autodispose-family"},"AutoDispose Family"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\uc704\uc758 \ub458\uc744 \ud569\uce58\uba74 \ub41c\ub2e4."),(0,n.kt)("h2",{id:"riverpod-generator-\uc774\uc6a9"},"riverpod generator \uc774\uc6a9"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"generator\ub97c \uc774\uc6a9\ud574\uc11c notifier\ub97c \ub9cc\ub4e4\uba74 \ub354 \uc27d\ub2e4."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"riverpodpart \ub9cc\ub4e4\uae30")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"riverpodclass\ub85c \ub9cc\ub4e4\uae30 (riverpodclass\uac00 notifier\ub2e4.)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc774\ub984 \ub123\uace0 build \ud568\uc218 \ud0c0\uc785 \uc9c0\uc815\ud558\uae30")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub098\uba38\uc9c0 \uad6c\ud604"))),(0,n.kt)("p",null,"AutoDispose\ub294 \uc5b4\ub178\ud14c\uc774\uc158\uc5d0 \ub530\ub77c \uacb0\uc815\ub418\uace0 family \uc5ec\ubd80\ub294 build\ud568\uc218 \uc778\uc790\uac12 \uc874\uc7ac \uc720\ubb34\ub85c \uacb0\uc815\ub41c\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ucd94\uac00 \ud2b9\uc774\uc0ac\ud56d\uc774 \uc788\uc73c\uba74 \uadf8 \ub54c \uc815\ub9ac\ud574\uc57c\uc9c0."),(0,n.kt)("h2",{id:"state-shape"},"state shape"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"2\uac00\uc9c0 \uc788\ub2e4\uace0 \ud55c\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"enum"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"sealed")," .. \uadf8\ub807\ub2e4"),(0,n.kt)("p",null,"\ucd94\uac00\ub85c ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncValue"),"\ub3c4 \uc788\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.boredapi.com/"},"\uc774\uacf3\uc758 API"),"\ub97c \ud65c\uc6a9\ud55c\ub2e4."),(0,n.kt)("h2",{id:"data-model\uc744-freezed\ub85c-\ub9cc\ub4dc\ub294-\uc808\ucc28"},"data model\uc744 freezed\ub85c \ub9cc\ub4dc\ub294 \uc808\ucc28"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ptf"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"pts"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"fdataclass"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"factory \uc0dd\uc131\uc790\uc5d0 \uc778\uc790\uac12 \ub123\uae30 required\ub85c \uc544\ub2c8\uc5ec\ub3c4\ub418\uad6c")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"fromJson"),"\ud0a4\uc6cc\ub4dc\ub85c fromJson \ub9cc\ub4e4\uae30 (\uc774\ub984\uc740 class\uc774\ub984\ubd99\uc774\uace0)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uba54\uc11c\ub4dc\ub4e4 \ub9cc\ub4e4\uae30(empty,add,remove \ub4f1)"))),(0,n.kt)("h2",{id:"stat\ub97c-freezed\ub85c-\ub9cc\ub4dc\ub294-\uc808\ucc28"},"stat\ub97c freezed\ub85c \ub9cc\ub4dc\ub294 \uc808\ucc28"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ptf"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"fdataclass"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud544\uc694\ud55c factory \uba54\uc11c\ub4dc \ub9cc\ub4e4\uae30"))),(0,n.kt)("h2",{id:"dio-provier-\ub9cc\ub4e4\uae30-\uc808\ucc28"},"dio provier \ub9cc\ub4e4\uae30 \uc808\ucc28"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"riverpodpart"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"riverpod"),"\uc73c\ub85c provider\ub9cc\ub4e4\uae30")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc544\ub798 \ubb38\ubc95 \ucc98\ub7fc"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"@riverpod\nDio dio(DioRef ref) {\n  return Dio(BaseOptions(baseUrl: '[Target URL]'));\n}\n")),(0,n.kt)("h2",{id:"enum-based\uc5d0\uc11c-\uac12-\uc694\uccad-provider-\ub9cc\ub4dc\ub294-\uc808\ucc28"},"Enum based\uc5d0\uc11c \uac12 \uc694\uccad provider \ub9cc\ub4dc\ub294 \uc808\ucc28"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"riverpodpart"),"\uc640  ",(0,n.kt)("inlineCode",{parentName:"p"},"riverpodclass"),"\ub85c \ucd08\uae30 \uc124\uc815 \ud6c4 \uc774\ub984 \uc124\uc815")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"build \ud568\uc218 \ud0c0\uc785 \uc815\ud574\uc8fc\uace0 return \uac12 \uc815\ud574\uc8fc\uae30")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc5ec\ub7ec \uc0c1\ud0dc \ucee8\ud2b8\ub864\ud558\ub294 \ud568\uc218 \ub9cc\ub4e4\uae30(loading, error, success \ub4f1\ub4f1)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud750\ub984\uc744 \uc801\uc790\uba74 \uba3c\uc800 state\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"status\ub97c loading"),"\uc73c\ub85c \ubc14\uafd4\uc8fc\uace0 ",(0,n.kt)("inlineCode",{parentName:"p"},"Get\uc694\uccad"),"\uc744 \ub0a0\ub9b0\ub2e4\uc74c\uc5d0 \uc131\uacf5\uc801\uc73c\ub85c \uac12\uc744 \uac00\uc838\uc624\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},"fromJson"),"\ud574\uac00\uc9c0\uad6c ",(0,n.kt)("inlineCode",{parentName:"p"},"copyWith"),"\ud574\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"status success\uc640 \uac12\uc744 \uac00\uc838\uc628 \uac12\uc73c\ub85c \ubcc0\uacbd"),"\uc744 \ud55c\ub2e4. \uc5d0\ub7ec\uac00 \ub09c\ub2e4\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},"copyWith\ud574\uc11c status failure\uc640 error\uc5d0 e.toString")," \ub123\uc5b4\uc90c"))),(0,n.kt)("h3",{id:"\ud2b9\uc774\uc810-\uc815\ub9ac"},"\ud2b9\uc774\uc810 \uc815\ub9ac"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"copyWith\ub85c \uac12 \ubcc0\uacbd  "),(0,n.kt)("li",{parentName:"ul"},"single state class\uc784")),(0,n.kt)("h2",{id:"inistate-modifier-\uc8fc\uc758\ud560-\uc810"},"inistate modifier \uc8fc\uc758\ud560 \uc810"),(0,n.kt)("p",null,"\ud398\uc774\uc9c0\uc5d0 \uc9c4\uc785\ud588\uc744 \ub54c \ubc14\ub85c api\ub97c \uc3d8\ub294 \ub3d9\uc791\uc744 \ud558\uace0 \uc2f6\uc5b4\uc11c initState\uc5d0 api \ud1b5\uc2e0\ud558\ub294 \ucf54\ub4dc\ub97c \ub123\uc5c8\ub2e4. \uc774 \ub54c UI\ub97c \uc218\uc815\ud558\ub294 \ub3d9\uc791\ub3c4 \ud3ec\ud568\ub3fc\uc788\uc5b4\uc11c"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"FlutterError (Tried to modify a provider while the widget tree was building....")," \uc5d0\ub7ec\uac00 \ub0ac\ub2e4. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  @override\n  void initState() {\n    super.initState();\n    ref.read(enumActivityProvider.notifier).fetchActivity(activityTypes[0]);\n  }\n\n// \uc774\uac70\ub97c \uc544\ub798\ub85c \uc218\uc815\n\n  @override\n  void initState() {\n    super.initState();\n    Future.delayed(Duration.zero, () {\n      ref.read(enumActivityProvider.notifier).fetchActivity(activityTypes[0]);\n    });\n  }\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Future.delayed"),"\ub85c \uac10\uc2f8\uba74 \uc5d0\ub7ec\uac00 \ud574\uacb0\ub41c\ub2e4. \uc774\uac78 \uc0ac\uc6a9\ud558\uba74 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub294\ub4ef \uadf8\ub798\uc11c UI \uadf8\ub824\uc9c0\uae30 \uae4c\uc9c0 \uae30\ub2e4\ub824\uc8fc\ub294 \uac83 \uac19\uc74c."),(0,n.kt)("h2",{id:"sealed-class-based"},"Sealed class based"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\ud2b9\uc9d5\uc740 multi class \uc774\ub2e4."),(0,n.kt)("h2",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"sealed class\ub97c \ub9cc\ub4e0\ub2e4.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"sealed class StateClass {\n  const StateClass();\n}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"StateClass\ub97c extend\ud558\uc5ec init, loading, success, fail\uc744 \uad6c\ud604\ud55c\ub2e4.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"final class StateClassInit extends StateClass {\n  const StateClassInit();\n\n  @override\n  String toString() => 'StateClass()';\n}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"provider\uc5d0\uc11c state \ud560\ub2f9\ud560 \ub54c copyWith\uc744 \uc0ac\uc6a9\ud558\ub294\uac8c \uc544\ub2c8\ub77c \uad6c\ud604\ud55c class\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \ub098\uba38\uc9c0\ub294 \ube44\uc2b7")),(0,n.kt)("h2",{id:"async\ucc98\ub7fc-\ubcf4\uc774\uac8c\ud558\ub294-notifier"},"async\ucc98\ub7fc \ubcf4\uc774\uac8c\ud558\ub294 notifier"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"enum"},"enum"),(0,n.kt)("p",null,"setInit \ub300\uc2e0\uc5d0 provider\uc5d0\uc11c build\ud568\uc218 \uc548\uc5d0 fetch\ud574\uc8fc\uba74 \ub41c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  @override\n  StateClass build() {\n    fetchActivity(types[0]);\n    return StateClass.init();\n  }\n\n")),(0,n.kt)("h3",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),(0,n.kt)("p",null,"\uc774 \ub54c\ub3c4 \uc704\ucc98\ub7fc\ub9cc \ud574\ubc84\ub9ac\uba74 \uc5d0\ub7ec\uac00\ub09c\ub2e4."),(0,n.kt)("p",null,"future.delayed\ub85c \uac10\uc2f8\ub294 \uac83\uc774 \uc544\ub2cc state\uc5d0 init()\uc744 \uba3c\uc800 \ud560\ub2f9\ud574\uc900\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  @override\n  StateClass build() {\n    state = StateClass.init();\n    fetchActivity(types[0]);\n    return StateClass.init();\n  }\n")),(0,n.kt)("h2",{id:"asyncnotifier"},"AsyncNotifier"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\ubc29\uc2dd\uc740 Notifier\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \uc548\uc5d0 \uc0dd\uc131\ud558\ub294 \uba54\uc11c\ub4dc\ub4e4\uc740  \ubaa8\ub450 ",(0,n.kt)("inlineCode",{parentName:"p"},"Future<void>"),"\ud0c0\uc785\uc774\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncValue"),"\uac00 \uc88b\uc740\uac8c ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncLoading"),"\uc5d0\uc11c \uc774\uc804\uac12\uc744 \uac00\uc9c0\uace0 \uc788\uace0 ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncData"),"\uc5d0\uc11c \ubc14\ub010 next\uac12\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncError"),"\uc5d0\uc11c\ub3c4 value\uc5d0\ub294 \uc774\uc804\uac12 \ubcf4\uc720\ud55c\ub2e4."),(0,n.kt)("h2",{id:"guard"},"guard"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Async\ud560 \ub54c try catch\ubb38\uc5d0\uc11c \ubcf4\ud1b5 try\uc5d0 AsyncData, catch\uc5d0\uc120 AsyncError\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uc774\ub97c \uac04\uc18c\ud654\uc2dc\ucf1c\uc8fc\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);