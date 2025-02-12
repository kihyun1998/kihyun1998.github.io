"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[26203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=i,g=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:27},a="27. [Flutter] shared_preferences",l={unversionedId:"flutter/flutter27",id:"flutter/flutter27",title:"27. [Flutter] shared_preferences",description:"1. \ucf54\ub4dc",source:"@site/docs/flutter/flutter27.md",sourceDirName:"flutter",slug:"/flutter/flutter27",permalink:"/docs/flutter/flutter27",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"dartSidebar",previous:{title:"26. [Flutter] URL Launcher",permalink:"/docs/flutter/flutter26"},next:{title:"28. [flutter] riverpod\uc744 \uc704\ud55c \ud544\uc694\uc0ac\ud56d",permalink:"/docs/flutter/flutter28"}},s={},d=[{value:"\ucf54\ub4dc",id:"\ucf54\ub4dc",level:2},{value:"\uacf5\ubd80\ud55c \ub0b4\uc6a9",id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"27-flutter-shared_preferences"},"27. ","[Flutter]"," shared_preferences"),(0,i.kt)("admonition",{title:"\ubaa9\ucc28",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C"},"\ucf54\ub4dc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EB%B6%80%ED%95%9C-%EB%82%B4%EC%9A%A9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9")))),(0,i.kt)("h2",{id:"\ucf54\ub4dc"},"\ucf54\ub4dc"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title='shared_preferences'",title:"'shared_preferences'"},"\nclass _DetailScreenState extends State<DetailScreen> {\n  late Future<WebtoonDetailModel> webtoon;\n  late Future<List<WebtoonEpisodesModel>> episodes;\n  late SharedPreferences prefs;\n  bool isLiked = false;\n\n  Future initPrefs() async {\n    // \uc0ac\uc6a9\uc790 \uc800\uc7a5\uc18c\uc640 \ucee4\ub125\uc158\n    prefs = await SharedPreferences.getInstance();\n    final likedToons = prefs.getStringList('likedToons');\n    if (likedToons != null) {\n      // likedToons \uc548\uc5d0 \uc544\uc774\ub514\uac00 \uc788\ub294\uc9c0\n      if (likedToons.contains(widget.id) == true) {\n        // initState\uc5d0\uc11c \uac12\uc744 \ud638\ucd9c\ud588\ub354\ub77c\ub3c4 setState\ub85c refresh \ud574\uc918\uc57c\ud55c\ub2e4.\n        setState(() {\n          isLiked = true;\n        });\n      }\n    } else {\n      // stringList \uc5c6\ub2e4\uba74 \uc0dd\uc131\n      await prefs.setStringList('likedToons', []);\n    }\n  }\n\n  @override\n  void initState() {\n    super.initState();\n    webtoon = ApiService.getWebtoonById(widget.id);\n    episodes = ApiService.getEpisodesById(widget.id);\n    initPrefs();\n  }\n\n  toggleHeart() async {\n    final likedToons = prefs.getStringList('likedToons');\n\n    if (likedToons != null) {\n      // isLiked\uc600\ub2e4\uba74 \uc0ad\uc81c, isLiked \uc804\uc774\uba74 \ucd94\uac00\n      isLiked ? likedToons.remove(widget.id) : likedToons.add(widget.id);\n      // \ub2e4\uc2dc \ud578\ub4dc\ud3f0 \uc800\uc7a5\uc18c\uc5d0 \uc800\uc7a5\n      await prefs.setStringList('likedToons', likedToons);\n    }\n\n    // \ud1a0\uae00\uc774\ub2c8\uae4c \ubc18\ub300\uac12 \uc124\uc815\n    setState(() {\n      isLiked = !isLiked;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      backgroundColor: Colors.white,\n      appBar: AppBar(\n        elevation: 1,\n        backgroundColor: Colors.white,\n        foregroundColor: Colors.green,\n        actions: [\n          IconButton(\n            onPressed: toggleHeart,\n            icon: Icon(\n              isLiked\n                  ? Icons.favorite_outlined\n                  : Icons.favorite_outline_outlined,\n            ),\n          )\n        ],\n        title: Text(\n          widget.title,\n          style: const TextStyle(\n            fontSize: 25,\n            fontWeight: FontWeight.w400,\n          ),\n        ),\n      ),\n      body:...\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"\uacf5\ubd80\ud55c-\ub0b4\uc6a9"},"\uacf5\ubd80\ud55c \ub0b4\uc6a9"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ud578\ub4dc\ud3f0 \uc800\uc7a5\uc18c\uc640 \uc5f0\uacb0\ud558\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"shared_preferences"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."))}p.isMDXComponent=!0}}]);