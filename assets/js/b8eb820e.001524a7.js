"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:11},l="[Go] go-fyne \uc0ac\uc6a9\ud558\uae30",i={unversionedId:"go/go11",id:"go/go11",title:"[Go] go-fyne \uc0ac\uc6a9\ud558\uae30",description:"---",source:"@site/docs/go/go11.md",sourceDirName:"go",slug:"/go/go11",permalink:"/docs/go/go11",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"goSidebar",previous:{title:"[Go] go-wails \uc0ac\uc6a9\ud558\uae30",permalink:"/docs/go/go10"}},p={},c=[{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",level:2},{value:"install",id:"install",level:3},{value:"\ucf58\uc194 \uc548\ub098\uc624\uac8c \ud558\ub294 \ubc29\ubc95",id:"\ucf58\uc194-\uc548\ub098\uc624\uac8c-\ud558\ub294-\ubc29\ubc95",level:2},{value:"\uc544\uc774\ucf58 \uc801\uc6a9 \ube4c\ub4dc\ud558\ub294 \ubc29\ubc95",id:"\uc544\uc774\ucf58-\uc801\uc6a9-\ube4c\ub4dc\ud558\ub294-\ubc29\ubc95",level:2}],s={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-go-fyne-\uc0ac\uc6a9\ud558\uae30"},"[Go]"," go-fyne \uc0ac\uc6a9\ud558\uae30"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Golnag\uc5d0\uc11c UI\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"fyne"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"Windows\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"MinGW"),"\uc774 \ud544\uc694\ud558\uace0 MacOS\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode"),"\uac00 \ud544\uc694\ud558\uace0 Linux\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc"),"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,o.kt)("h3",{id:"install"},"install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install fyne.io/fyne/v2/cmd/fyne@latest\nfyne install\n")),(0,o.kt)("p",null,"\uc790\uc138\ud55c\uac74 \uc774 \uacf3 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fyne-io/fyne"},"\ub9c1\ud06c"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub098\uba38\uc9c0\ub294 \uadf8\ub0e5 Golang\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init\ngo mod tidy\ngo run .\ngo build\n")),(0,o.kt)("p",null,"\ub4f1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ucf58\uc194-\uc548\ub098\uc624\uac8c-\ud558\ub294-\ubc29\ubc95"},"\ucf58\uc194 \uc548\ub098\uc624\uac8c \ud558\ub294 \ubc29\ubc95"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build -ldflags -H=windowsgui\n")),(0,o.kt)("p",null,"\uc704\ucc98\ub7fc \ube4c\ub4dc\ud558\uba74 \ub41c\ub2e4. console app \uc73c\ub85c \ube4c\ub4dc\ud558\ub294\uac8c \ub514\ud3f4\ud2b8\uc5ec\uc11c \uadf8\ub807\ub2e4\uace0 \ud55c\ub2e4."),(0,o.kt)("h2",{id:"\uc544\uc774\ucf58-\uc801\uc6a9-\ube4c\ub4dc\ud558\ub294-\ubc29\ubc95"},"\uc544\uc774\ucf58 \uc801\uc6a9 \ube4c\ub4dc\ud558\ub294 \ubc29\ubc95"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fyne package -os windows -icon icon.png --name updater\n")))}g.isMDXComponent=!0}}]);