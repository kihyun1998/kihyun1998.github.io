"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[9865],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),u=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(i.Provider,{value:e},n.children)},p="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||g[m]||a;return t?r.createElement(f,c(c({ref:e},s),{},{components:t})):r.createElement(f,c({ref:e},s))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l[p]="string"==typeof n?n:o,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5226:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:5},c="[Go] go routines\uc640 go channel",l={unversionedId:"go/go6",id:"go/go6",title:"[Go] go routines\uc640 go channel",description:"Go routines",source:"@site/docs/go/go6.md",sourceDirName:"go",slug:"/go/go6",permalink:"/docs/go/go6",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"goSidebar",previous:{title:"[Go] go test -v",permalink:"/docs/go/go5"}},i={},u=[{value:"Go routines",id:"go-routines",level:2},{value:"Go channel",id:"go-channel",level:2}],s={toc:u},p="wrapper";function g(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-go-routines\uc640-go-channel"},"[Go]"," go routines\uc640 go channel"),(0,o.kt)("h2",{id:"go-routines"},"Go routines"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"go routine\uc740 \ub3d9\uae30 \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \ud0a4\uc6cc\ub4dc\ub2e4."),(0,o.kt)("p",null,"\ud568\uc218 \uc55e\uc5d0 go\ub97c \ubd99\uc774\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e8\uc810\uc740 main\ud568\uc218\uac00 \ub3cc \ub54c\ub9cc \ub3cc\uae30 \ub54c\ubb38\uc5d0 \uc774\uc5d0 \ub300\ud55c \ucc98\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    go count("a")\n    go count("b")\n    time.Sleep(time.Second * 5)\n}\n\nfunc count(s string) {\n    for i := 0; i < 10; i++ {\n        fmt.Println(s, " count ", i)\n        time.Sleep(time.Second)\n    }\n}\n')),(0,o.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"b  count  0\na  count  0\na  count  1\nb  count  1\na  count  2\nb  count  2\nb  count  3\na  count  3\na  count  4\nb  count  4\n")),(0,o.kt)("p",null,"\uc704\ucc98\ub7fc \ucd9c\ub825\ub429\ub2c8\ub2e4. for\ubb38\uc740 10\uae4c\uc9c0 \ub3fc\uc788\uc9c0\ub9cc main \ud568\uc218\uac00 5\ucd08\ub9cc \ub3cc\uae30 \ub54c\ubb38\uc5d0 5\uac1c\ub9cc \ub098\uc624\ub294 \ubaa8\uc2b5\uc774\uace0 a\uc640 b\uc5d0 \uc815\ud574\uc9c4 \uc21c\uc11c \uc5c6\uc774 \ub3cc\uc544\uac00\ub294 \ubaa8\uc2b5\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"go-channel"},"Go channel"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ucc44\ub110\uc744 \ud1b5\ud574\uc11c \uac12\uc744 go routine\uc758 \uac12\uc744 \uc804\ub2ec\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    c := make(chan bool)\n    vars := [2]string{"a", "b"}\n\n    for _, v := range vars {\n        go count(v, c)\n    }\n    fmt.Println(<-c)\n    fmt.Println(<-c)\n}\n\nfunc count(s string, c chan bool) {\n    time.Sleep(time.Second * 1)\n    fmt.Println(s)\n    c <- true\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"a\ntrue\nb\ntrue\n")),(0,o.kt)("p",null,"\uc704\ucc98\ub7fc \uacb0\uacfc\uac00 \ub098\uc628\ub2e4. \ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt.Println(<-c)"),"\ub97c \ud55c\ubc88 \ub354 \ud574\uc8fc\uba74 \uad50\ucc29\uc0c1\ud0dc \uc5d0\ub7ec\uac00 \ub09c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"c := make(chan bool)")," \ucc44\ub110\uc740 \uc774\ub807\uac8c \uc120\uc5b8\ud560 \uc218 \uc788\ub294\ub370 bool\uc740 \uc804\ub2ec\ud558\ub294 \uac12\uc758 \ud0c0\uc785\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    c := make(chan string)\n    vars := [4]string{"a", "b", "c", "d"}\n\n    for _, v := range vars {\n        go count(v, c)\n    }\n    for i := 0; i < len(vars); i++ {\n        fmt.Println(<-c)\n    }\n}\n\nfunc count(s string, c chan string) {\n    time.Sleep(time.Second * 1)\n    c <- s + " here"\n}\n')),(0,o.kt)("p",null,"\ucc44\ub110 \uc5ec\ub7ec \uac1c\ub97c \ub2e4\ub8ec\ub2e4\uba74 \uc774\ub807\uac8c \ud558\uba74 \ub41c\ub2e4."))}g.isMDXComponent=!0}}]);