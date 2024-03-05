"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[8253],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),u=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(p.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,p=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),c=u(t),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return t?r.createElement(m,i(i({ref:e},s),{},{components:t})):r.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o[c]="string"==typeof n?n:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94291:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={slug:"Overloading and Overriding",title:"Overloading & Overriding",authors:["kihyun"],tags:["Overriding","Overloading","\uc624\ubc84\ub85c\ub529","\uc624\ubc84\ub77c\uc774\ub529"]},i="\uc624\ubc84\ub85c\ub529\uacfc \uc624\ubc84\ub77c\uc774\ub529",o={permalink:"/blog/Overloading and Overriding",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-16-over/index.md",source:"@site/blog/2023-09-16-over/index.md",title:"Overloading & Overriding",description:"\uc624\ubc84\ub85c\ub529\uacfc \uc624\ubc84\ub77c\uc774\ub529\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",date:"2023-09-16T00:00:00.000Z",formattedDate:"September 16, 2023",tags:[{label:"Overriding",permalink:"/blog/tags/overriding"},{label:"Overloading",permalink:"/blog/tags/overloading"},{label:"\uc624\ubc84\ub85c\ub529",permalink:"/blog/tags/\uc624\ubc84\ub85c\ub529"},{label:"\uc624\ubc84\ub77c\uc774\ub529",permalink:"/blog/tags/\uc624\ubc84\ub77c\uc774\ub529"}],readingTime:3.87,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Overloading and Overriding",title:"Overloading & Overriding",authors:["kihyun"],tags:["Overriding","Overloading","\uc624\ubc84\ub85c\ub529","\uc624\ubc84\ub77c\uc774\ub529"]},prevItem:{title:"PKI \uac1c\ub150",permalink:"/blog/PKI"}},p={authorsImageUrls:[void 0]},u=[{value:"\uc624\ubc84\ub85c\ub529 (Overloading)",id:"\uc624\ubc84\ub85c\ub529-overloading",level:2},{value:"\uc815\uc758",id:"\uc815\uc758",level:3},{value:"\uc624\ubc84\ub85c\ub529 \ud568\uc218 \ucf54\ub4dc",id:"\uc624\ubc84\ub85c\ub529-\ud568\uc218-\ucf54\ub4dc",level:3}],s={toc:u},c="wrapper";function d(n){let{components:e,...t}=n;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc624\ubc84\ub85c\ub529\uacfc \uc624\ubc84\ub77c\uc774\ub529\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc624\ubc84\ub85c\ub529-overloading"},"\uc624\ubc84\ub85c\ub529 (Overloading)"),(0,a.kt)("h3",{id:"\uc815\uc758"},"\uc815\uc758"),(0,a.kt)("p",null,"\ud55c \ud074\ub798\uc2a4 \ub0b4\uc5d0 \uc774\ubbf8 ",(0,a.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\ud558\ub824\ub294 \uc774\ub984"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"\uac19\uc740 \uc774\ub984"),"\uc744 \uac00\uc9c4 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\uba54\uc18c\ub4dc")),"\uac00 \uc788\uc5b4\ub3c4 \ub9e4\uac1c \ubcc0\uc218\uc758 \uac1c\uc218\uc640 \ud0c0\uc785\uc774 \ub2e4\ub974\uba74 \uac19\uc740 \uc774\ub984\uc744 \uc0ac\uc6a9\ud574\uc11c \uba54\uc18c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \ud575\uc2ec\uc740 2\uac00\uc9c0\ub85c \uc815\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uba54\uc18c\ub4dc\uc758 \uc774\ub984\uc774 \uac19\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ub9e4\uac1c\ubcc0\uc218\uc758 \uac1c\uc218\ub098 \ud0c0\uc785\uc774 \ub2ec\ub77c\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ub9ac\ud134\uac12\uacfc\ub294 \uc0c1\uad00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"\uc624\ubc84\ub85c\ub529-\ud568\uc218-\ucf54\ub4dc"},"\uc624\ubc84\ub85c\ub529 \ud568\uc218 \ucf54\ub4dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='\uc624\ubc84\ub85c\ub529 \ud568\uc218'",title:"'\uc624\ubc84\ub85c\ub529","\ud568\uc218'":!0},'public class OverringClass {\n    \n    // \uc624\ubc84\ub85c\ub529 1\ubc88 \ud568\uc218\n    public void OverloadMethod(){\n        System.out.println("============================");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \uc218 : 0\uac1c");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : void");\n        System.out.println("\uc624\ubc84\ub77c\uc774\ub529 1\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4.");\n        System.out.println("============================");\n    }\n\n    // \uc624\ubc84\ub85c\ub529 2\ubc88 \ud568\uc218\n    public int OverloadMethod(int a, int b){\n        System.out.println("============================");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \uc218 : 2\uac1c");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : int");\n        System.out.println("\uc624\ubc84\ub77c\uc774\ub529 2\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \ub367\uc148 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.");\n        System.out.println("============================");\n\n        return a+b;\n    }\n\n    // \uc624\ubc84\ub85c\ub529 3\ubc88 \ud568\uc218\n    public int OverloadMethod(int a, int b, int c){\n        System.out.println("============================");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \uc218 : 3\uac1c");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : int");\n        System.out.println("\uc624\ubc84\ub77c\uc774\ub529 3\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \uacf1\uc148\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.");\n        System.out.println("============================");\n\n        return a*b*c;\n    }\n\n\n    // \uc624\ubc84\ub85c\ub529 4\ubc88 \ud568\uc218\n    public boolean OverloadMethod(String str){\n        System.out.println("============================");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \uc218 : 1\uac1c");\n        System.out.println("\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : String");\n        System.out.println("\uc624\ubc84\ub77c\uc774\ub529 4\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \uc774\ub984\uc774 park\uc774\uba74 true\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.");\n        System.out.println("============================");\n\n        if(str.equals("park")){\n            return true;\n        }else{\n            return false;\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"\uc704 \ud568\uc218\ub4e4\uc744 \ubcf4\uc2dc\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"OverloadMethod"),"\ub85c \uc774\ub984\ub4e4\uc774 \uac19\uc9c0\ub9cc \ud0c0\uc785\uacfc \ub9e4\uac1c\ubcc0\uc218\uc758 \uc218\uac00 \ub2e4\ub978 \uac83\ub4e4\uc744 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218\ub4e4\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \ucf54\ub4dc\uc5d0 \uc791\uc131\ub3fc \uc788\uc73c\ub2c8 \ucc38\uace0\ud574\uc8fc\uc138\uc694~ \ud83d\ude0e"),(0,a.kt)("p",null,"\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ucf54\ub4dc\uc640 \uacb0\uacfc\ub97c \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='\uacb0\uacfc \ud655\uc778 \ucf54\ub4dc'",title:"'\uacb0\uacfc","\ud655\uc778":!0,"\ucf54\ub4dc'":!0},'public class Main {\n    public static void main(String[] args) {\n        OverringClass oc = new OverringClass();\n        \n        // \uc624\ubc84\ub85c\ub529 1\ubc88 \ud568\uc218\n        oc.OverloadMethod();\n\n        // \uc624\ubc84\ub85c\ub529 2\ubc88 \ud568\uc218\n        int a = oc.OverloadMethod(1,2);\n        System.out.println("\uc624\ubc84\ub85c\ub529 2\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : "+a);\n\n        // \uc624\ubc84\ub85c\ub529 3\ubc88 \ud568\uc218\n        int b = oc.OverloadMethod(4,5,6);\n        System.out.println("\uc624\ubc84\ub85c\ub529 3\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : "+b);\n\n        // \uc624\ubc84\ub85c\ub529 4\ubc88 \ud568\uc218\n        boolean c = oc.OverloadMethod("park");\n        System.out.println("\uc624\ubc84\ub85c\ub529 4\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : "+c);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title='\uacb0\uacfc'",title:"'\uacb0\uacfc'"},"============================\n\ub9e4\uac1c\ubcc0\uc218 \uc218 : 0\uac1c\n\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : void\n\uc624\ubc84\ub77c\uc774\ub529 1\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4.\n============================\n============================\n\ub9e4\uac1c\ubcc0\uc218 \uc218 : 2\uac1c\n\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : int\n\uc624\ubc84\ub77c\uc774\ub529 2\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \ub367\uc148 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n============================\n\uc624\ubc84\ub85c\ub529 2\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : 3\n============================\n\ub9e4\uac1c\ubcc0\uc218 \uc218 : 3\uac1c\n\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : int\n\uc624\ubc84\ub77c\uc774\ub529 3\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \uacf1\uc148\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n============================\n\uc624\ubc84\ub85c\ub529 3\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : 120\n============================\n\ub9e4\uac1c\ubcc0\uc218 \uc218 : 1\uac1c\n\ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785 : String\n\uc624\ubc84\ub77c\uc774\ub529 4\ubc88 \ud568\uc218 \uc785\ub2c8\ub2e4. \uc774\ub984\uc774 park\uc774\uba74 true\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n============================\n\uc624\ubc84\ub85c\ub529 4\ubc88 \ud568\uc218 \ubc18\ud658\uac12 : true\n")))}d.isMDXComponent=!0}}]);