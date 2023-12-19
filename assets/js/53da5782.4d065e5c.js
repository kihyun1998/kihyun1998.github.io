"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={slug:"Bloc",title:"Flutter TIL - 2",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","const","provider","riverpod"]},o="Flutter TIL - 2",i={permalink:"/blog/Bloc",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-16-til4/index.md",source:"@site/blog/2023-12-16-til4/index.md",title:"Flutter TIL - 2",description:"---",date:"2023-12-16T00:00:00.000Z",formattedDate:"December 16, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"const",permalink:"/blog/tags/const"},{label:"provider",permalink:"/blog/tags/provider"},{label:"riverpod",permalink:"/blog/tags/riverpod"}],readingTime:4.275,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Bloc",title:"Flutter TIL - 2",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","const","provider","riverpod"]},prevItem:{title:"Flutter TIL - 1",permalink:"/blog/Bloc"},nextItem:{title:"MVVM \uc544\ud0a4\ud14d\ucc98",permalink:"/blog/mvvm"}},c={authorsImageUrls:[void 0]},p=[{value:"const\uc5d0 \ub300\ud574",id:"const\uc5d0-\ub300\ud574",level:2},{value:"context.read\uc5d0 \ub300\ud574",id:"contextread\uc5d0-\ub300\ud574",level:2},{value:"List\uc758 \uac12\uc5d0 const\uc5d0 \ub300\ud574",id:"list\uc758-\uac12\uc5d0-const\uc5d0-\ub300\ud574",level:2},{value:"dart \uc790\ub3d9 \ub9e4\uac1c\ubcc0\uc218..?",id:"dart-\uc790\ub3d9-\ub9e4\uac1c\ubcc0\uc218",level:2},{value:"context.read() 2",id:"contextread-2",level:2},{value:"context.select()",id:"contextselect",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"const\uc5d0-\ub300\ud574"},"const\uc5d0 \ub300\ud574"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"class\uc5d0\uc11c \uc0dd\uc131\uc790\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\ub85c \ub9cc\ub4e4\uc9c0 \uc54a\uc558\uc744 \ub54c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Product {\n  final int id;\n  final String name;\n  final String desc;\n  final String price;\n  final String imageUrl;\n\n  Product({\n    required this.id,\n    required this.name,\n    required this.desc,\n    required this.price,\n    required this.imageUrl,\n  });\n}\n")),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc \ub9cc\ub4e4\uba74 \uc544\ub798 \ucf54\ub4dc\ub294 \uc5d0\ub7ec\ub09c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"const List<Product> storeProductList = [];\n")),(0,a.kt)("p",null,"\uc0dd\uc131\uc790 Product\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"\ub97c \ubd99\uc5ec\uc8fc\uba74 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"contextread\uc5d0-\ub300\ud574"},"context.read\uc5d0 \ub300\ud574"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  runApp(\n    MultiProvider(\n      providers: [\n        ChangeNotifierProvider(\n          create: (context) => MyCart(),\n        ),\n        ChangeNotifierProvider(\n          create: (context) => MyBadge(myCart: context.read()),\n        ),\n      ],\n      child: MaterialApp(\n        home: MyApp(),\n      ),\n    ),\n  );\n}\n")),(0,a.kt)("p",null,"\ucf54\ub4dc \uc0c1\ud669\uc774 \uc704\uc640 \uac19\uc744 \ub54c \uc5b4\ub5bb\uac8c MyCart\uc758 \uc815\ubcf4\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"contex.read()"),"\ub85c \uac00\uc838\uc624\ub098 \uc758\ubb38\uc774 \uc788\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ubcf8\ub860\ubd80\ud130 \ub9d0\ud558\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"        ChangeNotifierProvider(\n          create: (context) => MyBadge(myCart: context.read<MyCart>()),\n        ),\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\uba74 \ud5f7\uac08\ub9b4 \uc77c\uc774 \uc5c6\uace0 \uac00\uc838\uc62c \uc218 \uc788\ub294 \uc774\uc720\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeNotifierProvider"),"\ub97c \ud1b5\ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCart"),"\ub97c \uc704\uc82f \ud2b8\ub9ac \uc0c1 \ub4f1\ub85d \ud588\uae30\uc5d0 \ubc14\ub85c \uac00\uc838\uc640\uc9c0\ub294 \uac83\uc774\ub2e4. \ub9cc\uc57d \uc911\uac04\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyStore")," \uac19\uc740 \ub2e4\ub978 \uc704\uc82f\uc774 \uc788\uc5c8\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCart"),"\ub294 \uc800\ub7f0\uc2dd\uc73c\ub85c \uac00\uc838\uc624\uc9c0 \ubabb\ud55c\ub2e4."),(0,a.kt)("h2",{id:"list\uc758-\uac12\uc5d0-const\uc5d0-\ub300\ud574"},"List\uc758 \uac12\uc5d0 const\uc5d0 \ub300\ud574"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"List<Product> cartProductList = const [];\n")),(0,a.kt)("p",null,"\ub9ac\uc2a4\ud2b8\uc758 \ubd88\ubcc0\uc744 \ubcf4\uc7a5\ud574\uc8fc\uae30 \uc704\ud574 []\uc55e\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \ud0a4\uc6cc\ub4dc\ub97c \ubd99\uc77c \uc218 \uc788\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Product>")," \uc55e\uc5d0 \ubd99\uc774\ub294 \uac83\uacfc\ub294 \ub2e4\ub974\ub2e4. \ub9ac\uc2a4\ud2b8\ub97c \ubc14\uafc0 \uc218 \uc788\uc9c0\ub9cc(\uc694\uc18c \ub9d0\uace0) \ub9ac\uc2a4\ud2b8\uc5d0  \uc9c1\uc811\uc801\uc778 \uac12\uc744\ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c \uc218\uc815\uc740 \ubabb\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc0ad\uc81c\ub97c \uc6d0\ud55c\ub2e4\uba74 where\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"list.where((p)=>p!= product).toList();\n")),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc \uc791\uc131\ud558\uba74 list\ub97c \ub3cc\uba74\uc11c \ub3cc\uace0 \uc788\ub294 \uac12\uc774 p\uc778\ub370 product\uc640 \ube44\uad50\ud558\uba74\uc11c product\ub294 \ube7c\uace0 \ub2e4\uc2dc \ub9ac\uc2a4\ud2b8\ub97c \ub9cc\ub4dc\ub294 \ucf54\ub4dc\uc774\ub2e4."),(0,a.kt)("p",null,"\ucd94\uac00\ub97c \uc6d0\ud55c\ub2e4\uba74 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"[...list,product]\n")),(0,a.kt)("p",null,"\uc544\ub798\ucc98\ub7fc \uac04\ub2e8\ud558\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"..."),"\uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"dart-\uc790\ub3d9-\ub9e4\uac1c\ubcc0\uc218"},"dart \uc790\ub3d9 \ub9e4\uac1c\ubcc0\uc218..?"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  void onProductPressed(Product product) {\n    if (cartProductList.contains(product)) {\n      cartProductList = cartProductList.where((p) => p != product).toList();\n    } else {\n      cartProductList = [...cartProductList, product];\n    }\n    notifyListeners();\n  }\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ub9e4\uac1c\ubcc0\uc218\uac00 \ud544\uc694\ud55c \ud568\uc218\ub85c \uad6c\ud604\ub3fc\uc788\ub294\ub370 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"      return ProductTile(\n        product: product,\n        isInCart: providerCart.cartProductList.contains(product),\n        onPressed: providerCart.onProductPressed,\n      );\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uc0ac\uc6a9\ud558\uae38\ub798 \uae5c\uc9dd \ub180\ub790\ub2e4. \ubb54\uac00 \uc2f6\uc5c8\ub294\ub370 ProductTile class\uc5d0 \ube44\ubc00\uc774 \uc788\uc5c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  final Product product;\n  final bool isInCart;\n  final void Function(Product product) onPressed;\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c onPressed\uac00 \uad6c\ud604\ub3fc\uc788\uc73c\uba74 product\ub97c \ub123\uc9c0 \uc54a\uc544\ub3c4 \uc54c\uc544\uc11c \ub123\uc5b4\uc900\ub2e4\uace0.."),(0,a.kt)("p",null,"product\ub97c \ub123\uc9c0 \uc54a\uc558\ub294\ub370 \uc5b4\ub5bb\uac8c \uc544\ub0d0\uad6c\uc694? ProductTile \uc704\uc82f\uc744 \ub9cc\ub4e4 \ub54c product\uac12\uc744 \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0 \uc778\uc9c0\ud560 \uc218 \uc788\ub2e4\uace0 \ud558\ub124\uc694 !"),(0,a.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74 \ud2b9\uc815 \uc704\uc82f\uc5d0 a\ub77c\ub294 \uac12\uc744 \ud1b5\ud574\uc11c \uad6c\ud604\ud558\uace0 \uadf8 a\ub77c\ub294 \uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\uac00 \uc788\uc744 \ub54c \ub2e4\ub978 \ud568\uc218\ub3c4 \uadf8 a\ub77c\ub294 \uac12\uc744 \ud544\uc694\ub85c \ud55c\ub2e4\uba74 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4.. \ub77c\ub294 \uac83\uc785\ub2c8\ub2e4. \uadfc\ub370 100% \uc774\ud574\ub97c \ubabb\ud588\ub2e4. \ub9c8\uc74c\uc5d0 \ub2f4\uc544\ub450\uc790."),(0,a.kt)("h2",{id:"contextread-2"},"context.read() 2"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud55c \uac00\uc9c0\ub97c \ub354 \uc774\ud574\ud574 \ubc84\ub838\ub2e4."),(0,a.kt)("p",null,"\uc704\uc82f \ud2b8\ub9ac \uc0c1\uc5d0 \ub4f1\ub85d\ud574\uc11c context\ub85c \uac00\uc838\uc62c \uc218 \uc788\ub2e4\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"context.read<ProviderCart>().onProductPressed\n")),(0,a.kt)("p",null,"\uc704 \ucc98\ub7fc ProviderCart\uc758 \ud568\uc218\ub97c \uac00\uc838\uc62c \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"contextselect"},"context.select()"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc774\uac70 \uc880 \uc774\uc0c1\ud558\uae34 \ud558\ub2e4. \uadf8\ub798\uc11c \uc774\uc81c \uc644\ubcbd\ud788 \uc774\ud574\ud588\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context.watch()")," : Provider\uc758 \ubaa8\ub4e0 \uc0c1\ud0dc\ub97c \uad6c\ub3c5\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context.select()"),": Provider\uc758 \ud2b9\uc815 \uc0c1\ud0dc\ub97c \uad6c\ub3c5\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final count = context.select<Counter,int>((counter) => counter.count);\n")),(0,a.kt)("p",null,"\uc704 \ucc98\ub7fc \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 select\ub294 \ud2b9\uc815 \uc0c1\ud0dc \uad6c\ub3c5 \uac00\ub2a5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context.read()"),": \uad6c\ub3c5\uc548\ud558\uace0 \ud604\uc7ac \uc0c1\ud0dc \uadf8\ub0e5 \uac00\uc838\uc624\uae30"),(0,a.kt)("p",null,"\ub4dc\ub514\uc5b4 context 3\ud615\uc81c\ub294 \uc774\ud574\ud55c\ub4ef"))}s.isMDXComponent=!0}}]);