"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[66722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:5},o="6. [etc] firebase \ub85c\uadf8\uc778",l={unversionedId:"etc/etc6",id:"etc/etc6",title:"6. [etc] firebase \ub85c\uadf8\uc778",description:"---",source:"@site/docs/etc/etc6.md",sourceDirName:"etc",slug:"/etc/etc6",permalink:"/docs/etc/etc6",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"studySidebar",previous:{title:"5. [etc] windows\uc5d0\uc11c \uc790\uccb4 \uc11c\uba85 \uc778\uc99d\uc11c \ubc1c\uae09",permalink:"/docs/etc/etc5"},next:{title:"7. [etc] local postgresql \uc811\uc18d \ubc29\ubc95",permalink:"/docs/etc/etc7"}},c={},s=[{value:"1. \ud328\ud0a4\uc9c0 get",id:"1-\ud328\ud0a4\uc9c0-get",level:2},{value:"2. \ucf54\ub4dc",id:"2-\ucf54\ub4dc",level:2},{value:"3. firebase setting",id:"3-firebase-setting",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-etc-firebase-\ub85c\uadf8\uc778"},"6. ","[etc]"," firebase \ub85c\uadf8\uc778"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1-\ud328\ud0a4\uc9c0-get"},"1. \ud328\ud0a4\uc9c0 get"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add firebase_auth\n")),(0,a.kt)("h2",{id:"2-\ucf54\ub4dc"},"2. \ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"}," onPressed: () async {\n  await FirebaseAuth.instance.signInWithEmailAndPassword(\n    email: idController.text.trim(),\n    password: pwController.text.trim(),\n  );\n},\n")),(0,a.kt)("h2",{id:"3-firebase-setting"},"3. firebase setting"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:r(12331).Z,width:"1751",height:"1005"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"firebase")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Authentication")," \ub85c \uc774\ub3d9"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:r(76354).Z,width:"2631",height:"1156"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uc774\uba54\uc77c/\ube44\ubc00\ubc88\ud638")," \ud074\ub9ad"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:r(26499).Z,width:"2155",height:"1174"})),(0,a.kt)("p",null,"\ud65c\uc131\ud654\ud558\uace0 \uc800\uc7a5"))}d.isMDXComponent=!0},12331:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-4a9e50d4394d98010fb7aaf4fb3033d4.png"},76354:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image1-359bc817e41efdf61962f7e06bf269a4.png"},26499:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image2-90b8b5adaa680267e8a68f28b951e304.png"}}]);