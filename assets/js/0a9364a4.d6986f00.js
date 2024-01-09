"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[5756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={slug:"Flutter",title:"Flutter TIL - 12",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","provider"]},a="Flutter TIL - 12",i={permalink:"/blog/Flutter",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-09-til12/index.md",source:"@site/blog/2024-01-09-til12/index.md",title:"Flutter TIL - 12",description:"---",date:"2024-01-09T00:00:00.000Z",formattedDate:"January 9, 2024",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"revierpod",permalink:"/blog/tags/revierpod"},{label:"provider",permalink:"/blog/tags/provider"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Flutter",title:"Flutter TIL - 12",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","revierpod","provider"]},nextItem:{title:"Flutter TIL - 10",permalink:"/blog/Flutter"}},p={authorsImageUrls:[void 0]},u=[{value:"onDispose",id:"ondispose",level:3},{value:"\ub300\ud45c\uc801 3\uac00\uc9c0",id:"\ub300\ud45c\uc801-3\uac00\uc9c0",level:3},{value:"auto dispose",id:"auto-dispose",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'final helloProvider = Provider<String>((ref) {\n  ref.onDispose(() {\n    print("[helloProvider] : disposed");\n  });\n  return "Hello";\n});\n')),(0,o.kt)("p",null,"riverpod\uc758 \uae30\ubcf8 \ubaa8\uc2b5\uc774 \uc774\ub807\ub2e4."),(0,o.kt)("p",null,"\ubcc0\uc218\uc5d0 \ud560\ub2f9\ud558\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," \ubd80\ubd84\uc740 \uc0ac\uc6a9\ud560 Provider \uc885\ub958,"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<String>"),"\uc5d0\ub294 return\uac12 \ud0c0\uc785\uc744 \uc815\uc758\ud55c\ub2e4."),(0,o.kt)("p",null,"ref\ub97c \ud1b5\ud574\uc11c \uc5ec\ub7ec \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370 ref.onDispose\ud574\uc8fc\uba74 dispose\ub41c\ub2e4."),(0,o.kt)("h3",{id:"ondispose"},"onDispose"),(0,o.kt)("p",null,"\ud574\ub2f9 provider\uac00 dispose\ub418\uba74 \uc2e4\ud589\ub418\ub294 \ud568\uc218"),(0,o.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub294 \uc790\ub3d9\uc73c\ub85c dispose \ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,o.kt)("h3",{id:"\ub300\ud45c\uc801-3\uac00\uc9c0"},"\ub300\ud45c\uc801 3\uac00\uc9c0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"watch")," : \uac12 \ubcc0\ud558\ub294\uc9c0 \uacc4\uc18d \ud655\uc778\ud558\uace0 \ubcc0\ud558\uba74 \ub9ac\ube4c\ub4dc (async\ud558\uba74\uc548\ub41c\ub2e4.)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"listen")," : \uac12 \ubcc0\uacbd\ub418\uba74 \ub9ac\ube4c\ub529 \ub418\ub294 \uac83\uc774 \uc544\ub2cc \uc561\uc158\uc744 \uc218\ud589(navigate\uac19\uc740) (async\ud558\uba74 \uc548\ub41c\ub2e4.)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"read")," : \uac12\uc744 \ud655\uc778\ud558\uc9c0\ub9cc \ubcc0\uacbd\uc744 watch\ud558\uc9c0 \uc54a\uc74c(build\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0\ub9c8\ub77c)"),(0,o.kt)("h2",{id:"auto-dispose"},"auto dispose"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final autoDisposeHelloProvider = Provider.autoDispose<String>((ref) {\n  print('[autoDisposeHelloProvder]: created');\n  ref.onDispose(() {\n    print('[autoDisposeHelloProvder]: disposed');\n  });\n  return 'Hello';\n});\n")),(0,o.kt)("p",null,"\ud398\uc774\uc9c0 \ub098\uc624\uba74 autodispose\ud574\uc900\ub2e4."))}d.isMDXComponent=!0}}]);