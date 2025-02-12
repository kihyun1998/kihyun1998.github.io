"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[99048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),N=l,s=k["".concat(p,".").concat(N)]||k[N]||d[N]||r;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},59332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:2},i="[LLM] 2. Transformer \uc544\ud0a4\ud14d\ucc98 \ubc0f \uae30\ubcf8 \uac1c\ub150",o={unversionedId:"llm/llm2",id:"llm/llm2",title:"[LLM] 2. Transformer \uc544\ud0a4\ud14d\ucc98 \ubc0f \uae30\ubcf8 \uac1c\ub150",description:"---",source:"@site/docs/llm/llm2.md",sourceDirName:"llm",slug:"/llm/llm2",permalink:"/docs/llm/llm2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"aiSidebar",previous:{title:"[LLM] 1. LLM \uac1c\uc694 \ubc0f \uae30\ubcf8 \uac1c\ub150",permalink:"/docs/llm/llm1"},next:{title:"[LLM] 3. GPT \ubaa8\ub378 \uac1c\uc694 \ubc0f \uc2e4\uc2b5",permalink:"/docs/llm/llm3"}},p={},m=[{value:"Transformer \uc544\ud0a4\ud14d\ucc98",id:"transformer-\uc544\ud0a4\ud14d\ucc98",level:2},{value:"Transformer\uc758 \uc8fc\uc694 \uac1c\ub150",id:"transformer\uc758-\uc8fc\uc694-\uac1c\ub150",level:3},{value:"Self Attention",id:"self-attention",level:3},{value:"Multi-Head Attention",id:"multi-head-attention",level:3},{value:"Feed Forward Network (FFN)",id:"feed-forward-network-ffn",level:3},{value:"Layer Normalization &amp; Residual Connection",id:"layer-normalization--residual-connection",level:3},{value:"Encoder &amp; Decoder",id:"encoder--decoder",level:3},{value:"BERT vs GPT",id:"bert-vs-gpt",level:2},{value:"BERT",id:"bert",level:3},{value:"GTP",id:"gtp",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2}],u={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"llm-2-transformer-\uc544\ud0a4\ud14d\ucc98-\ubc0f-\uae30\ubcf8-\uac1c\ub150"},"[LLM]"," 2. Transformer \uc544\ud0a4\ud14d\ucc98 \ubc0f \uae30\ubcf8 \uac1c\ub150"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"transformer-\uc544\ud0a4\ud14d\ucc98"},"Transformer \uc544\ud0a4\ud14d\ucc98"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"LLM\uc740 Transformer\ub77c\ub294 \uc2e0\uacbd\ub9dd \uad6c\uc870\ub97c \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"transformer\uc758-\uc8fc\uc694-\uac1c\ub150"},"Transformer\uc758 \uc8fc\uc694 \uac1c\ub150"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 Self-Attention: \ubb38\uc7a5\uc5d0\uc11c \uc911\uc694\ud55c \ub2e8\uc5b4\ub97c \ucc3e\uc544 \uac00\uc911\uce58\ub97c \ubd80\uc5ec"),(0,l.kt)("li",{parentName:"ul"},"\u2705 Multi-Head Attention: \uc5ec\ub7ec \uc2dc\uac01\uc73c\ub85c \ubb38\ub9e5\uc744 \ubd84\uc11d"),(0,l.kt)("li",{parentName:"ul"},"\u2705 Feed Forward Network: \uac01 \ud1a0\ud070\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\ud658"),(0,l.kt)("li",{parentName:"ul"},"\u2705 Layer Normalization & Residual Connection: \ud559\uc2b5 \uc548\uc804\ud654")),(0,l.kt)("h3",{id:"self-attention"},"Self Attention"),(0,l.kt)("p",null,"Transfromer\uc758 \ud575\uc2ec \uba54\ucee4\ub2c8\uc998\uc73c\ub85c \uc785\ub825 \ubb38\uc7a5\uc5d0\uc11c \uc911\uc694\ud55c \ub2e8\uc5b4\ub97c \ucc3e\uc544\uc11c \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc7a5 \ub0b4\uc5d0\uc11c \uac01 \ub2e8\uc5b4\uac00 \ub2e4\ub978 \ub2e8\uc5b4\uc640 \uc5bc\ub9c8\ub098 \uad00\ub828\uc774 \uc788\ub294\uc9c0\ub97c \uacc4\uc0b0\ud558\uc5ec \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud569\ub2c8\ub2e4.")),(0,l.kt)("admonition",{title:"\uacc4\uc0b0 \ubc29\uc2dd",type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\uac01 \ub2e8\uc5b4\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"Query(Q)"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Key(K)"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Value(V)")," \ubca1\ud130\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},"Query\uc640 Key \uac04\uc758 ",(0,l.kt)("strong",{parentName:"li"},"dot product"),"\ub97c \uacc4\uc0b0\ud558\uc5ec \uc720\uc0ac\ub3c4\ub97c \uce21\uc815\ud569\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"softmax")," \ud568\uc218\ub97c \uc801\uc6a9\ud558\uc5ec \uc5b4\ud150\uc158 \uac00\uc911\uce58\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},"\uc774 \uac00\uc911\uce58\ub97c Value \ubc31\ud130\uc5d0 \uc801\uc6a9\ud558\uc5ec \ucd5c\uc885 ",(0,l.kt)("strong",{parentName:"li"},"Context Vector"),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."))),(0,l.kt)("admonition",{title:"\uc608\uc2dc",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ubb38\uc7a5 ",(0,l.kt)("inlineCode",{parentName:"p"},'"I love deep learning."'),"\uc774 \uc788\ub2e4\uace0 \ud558\uc790.  "),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},'"deep" \ub2e8\uc5b4\ub294 "learning"\uacfc \uac15\ud55c \uc5f0\uad00\uc131\uc774 \uc788\ub2e4. \uadf8\ub798\uc11c \ub192\uc740 \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud55c\ub2e4.  '),(0,l.kt)("li",{parentName:"ul"},'"I" \ub2e8\uc5b4\ub294 "learning"\uacfc \ub35c \uc5f0\uad00\ub3fc\uc788\ub2e4. \uadf8\ub798\uc11c \ub0ae\uc740 \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud55c\ub2e4.'))),(0,l.kt)("h3",{id:"multi-head-attention"},"Multi-Head Attention"),(0,l.kt)("p",null,"Self-Attention\uc744 \uc5ec\ub7ec \uac1c \uc2e4\ud589\ud558\uc5ec \ubb38\uc7a5\uc744 \ub2e4\uc591\ud55c \uad00\uc810\uc5d0\uc11c \ubd84\uc11d\ud558\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 \ud544\uc694\ud55c \uc774\uc720"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Self-Attention \ub9cc\uc73c\ub85c\ub294 \ud558\ub098\uc758 \ubb38\ub9e5 \ud328\ud134\ub9cc \ud559\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Multi-Head Attention\uc744 \uc0ac\uc6a9\ud558\uba74 \ubb38\uc7a5\uc5d0\uc11c \ub2e4\uc591\ud55c \uc758\ubbf8\uc640 \uad6c\uc870 \uad00\uacc4\ub97c \ud3ec\ucc29\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 \uad6c\ud604 \ubc29\uc2dd"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \uac1c\uc758 Self-Attention \ubaa8\ub4c8\uc744 \ubcd1\ub82c \uc2e4\ud589\ud569\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},"\uac01\uac01\uc758 \uacb0\uacfc\ub97c \uc5f0\uacb0\ud55c \ud6c4 \ub2e4\uc2dc \uac00\uc911\uce58\ub97c \uc801\uc6a9\ud558\uc5ec \ucd5c\uc885 \uacb0\uacfc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ud55c \uac00\uc9c0 \uc2dc\uac01(Self-Attention)\uc73c\ub85c \ubcf8\ub2e4\uba74 \uc81c\ud55c\uc801\uc778 \uc815\ubcf4\ub97c \uc5bb\uc9c0\ub9cc \uc5ec\ub7ec \uc2dc\uac01(Multi-Head Attention)\uc73c\ub85c \ubcf8\ub2e4\uba74 \ub354 \ud48d\ubd80\ud55c \uc815\ubcf4\ub97c \uc5bb\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"feed-forward-network-ffn"},"Feed Forward Network (FFN)"),(0,l.kt)("p",null,"\uac01 \ud1a0\ud070\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 \uad6c\uc870"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\uc785\ub825 \ubc31\ud130 -> \uc120\ud615 \ubcc0\ud658 (W1)  "),(0,l.kt)("li",{parentName:"ol"},"\ube44\uc120\ud615 \ud65c\uc131\ud654 \ud568\uc218 (GELU or ReLU)  "),(0,l.kt)("li",{parentName:"ol"},"\ucd9c\ub825 \ubc31\ud130 -> \ub610 \ub2e4\ub978 \uc120\ud615 \ubcc0\ud658 (W2)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 \uc911\uc694\ud55c \uc774\uc720"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Attention \uacfc\uc815\uc5d0\uc11c \ud559\uc2b5\ud55c \uc815\ubcf4\ub97c \ubcc0\ud615\ud558\uc5ec \ub354\uc6b1 \ud48d\ubd80\ud55c \ud45c\ud604\uc73c\ub85c \ub9cc\ub4e4\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"layer-normalization--residual-connection"},"Layer Normalization & Residual Connection"),(0,l.kt)("p",null,"\ubaa8\ub378 \ud559\uc2b5 \uc548\uc815\uc131\uc744 \ub192\uc774\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 Layer Normalization(\ub808\uc774\uc5b4 \uc815\uaddc\ud654)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac01 \ub808\uc774\uc5b4\uc758 \ucd9c\ub825\uac12\uc744 \uc815\uaddc\ud654\ud558\uc5ec \ud559\uc2b5 \uc548\uc815\uc131\uc744 \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcc0\ud658\ub41c \ubca1\ud130\uc758 \ud3c9\uade0\uc744 0, \ubd84\uc0b0\uc744 1\ub85c \ub9de\ucd94\uc5b4 \uc218\ub834 \uc18d\ub3c4\ub97c \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 Residual Connection (\uc794\ucc28 \uc5f0\uacb0)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc785\ub825\uac12\uc744 \ubcc0\ud615 \uc5c6\uc774 \uadf8\ub300\ub85c \ub2e4\uc74c \ub808\uc774\uc5b4\ub85c \uc804\ub2ec\ud558\ub294 \uad6c\uc870\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\uc6b8\uae30 \uc18c\uc2e4 \ubb38\uc81c\ub97c \uc644\ud654\ud558\uc5ec \uae4a\uc740 \uc2e0\uacbd\ub9dd\uc5d0\uc11c\ub3c4 \ud6a8\uacfc\uc801\uc778 \ud559\uc2b5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"Residual Connection\uc740 \ud559\uc2b5 \uacfc\uc815\uc5d0\uc11c \uc911\uc694\ud55c \uc815\ubcf4\uac00 \uc190\uc2e4\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc6d0\ubcf8 \ub370\uc774\ud130\ub97c \ubcf4\uc874\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"encoder--decoder"},"Encoder & Decoder"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 Encoder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Encoder\ub294 \uc785\ub825 \ubb38\uc7a5\uc744 \ubc1b\uc544\uc11c \uadf8 \ubb38\uc7a5\uc758 \uc758\ubbf8\ub97c \uc555\ucd95\ud558\uc5ec \ubca1\ud130 \ud45c\ud604\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uac1c\uc758 Self-Attention \ub808\uc774\uc5b4\ub97c \uac70\uce58\uba74\uc11c \ubb38\uc7a5 \ub0b4 \uac01 \ub2e8\uc5b4\uc758 \uc758\ubbf8\ub97c \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcf4\ud1b5 \ubb38\uc7a5 \ubd84\uc11d, \uac10\uc131, \ubb38\uc11c \ubd84\ub958 \ub4f1 \ubb38\uc7a5\uc758 \uc758\ubbf8\ub97c \uc774\ud574\ud558\ub294 \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 Decoder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc785\ub825 \ubb38\uc7a5\uacfc Encoder\uac00 \ub9cc\ub4e0 \ubca1\ud130 \ud45c\ud604\uc744 \uc774\uc6a9\ud574\uc11c \uc0c8\ub85c\uc6b4 \ubb38\uc7a5\uc744 \uc0dd\uc131\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \uc774\uc804 \ub2e8\uc5b4\ub4e4\uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c \ub2e8\uc5b4\ub4e4\uc744 \uc608\uce21\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\uacc4 \ubc88\uc5ed, \ud14d\uc2a4\ud2b8 \uc0dd\uc131, \ucc57\ubd07 \ub4f1 \uc0c8\ub85c\uc6b4 \ubb38\uc7a5\uc744 \ub9cc\ub4e4\uc5b4\uc57c\ud558\ub294 \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Encoder"),'\ub294 \uc0ac\ub78c\uc758 \ub1cc\uc5d0\uc11c \uc785\ub825 \ubb38\uc7a5\uc744 \ubd84\uc11d\ud558\ub294 \uacfc\uc815. like "\uc774 \ubb38\uc7a5\uc740 \uae0d\uc801\uc801\uc774\ub124?"',(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Decoder"),'\ub294 \ubd84\uc11d\ud55c \ub0b4\uc6a9\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ubb38\uc7a5\uc744 \uc0dd\uc131\ud558\ub294 \uacfc\uc815. like "\uadf8\ub7fc \uae0d\uc815\uc801\uc778 \ub2f5\ubcc0\uc744 \ub9cc\ub4e4\uc5b4\uc57c\uc9c0."'),(0,l.kt)("h2",{id:"bert-vs-gpt"},"BERT vs GPT"),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"BERT")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"GPT")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\uc0ac\uc6a9\ud558\ub294 Transformer \ubd80\ubd84")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Encoder")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Decoder"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ud6c8\ub828 \ubc29\uc2dd")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc591\ubc29\ud5a5(Bidirectional)"),(0,l.kt)("td",{parentName:"tr",align:null},"\ub2e8\ubc29\ud5a5(Autoregressive)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\uc785\ub825 \ub370\uc774\ud130 \ucc98\ub9ac \ubc29\uc2dd")),(0,l.kt)("td",{parentName:"tr",align:null},"\ubb38\uc7a5 \uc804\uccb4\ub97c \ub3d9\uc2dc\uc5d0 \uace0\ub824"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc55e\uc758 \ub2e8\uc5b4\ub4e4\ub9cc \ubcf4\uace0 \ub2e4\uc74c \ub2e8\uc5b4\ub97c \uc608\uce21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\uc8fc\uc694 \ud65c\uc6a9 \ubd84\uc57c")),(0,l.kt)("td",{parentName:"tr",align:null},"\uac10\uc131 \ubd84\uc11d, \ubb38\uc11c \ubd84\ub958, \uc9c8\ubb38 \uc751\ub2f5"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud14d\uc2a4\ud2b8 \uc0dd\uc131, \ub300\ud654 \ubaa8\ub378, \ubb38\uc7a5 \uc790\ub3d9 \uc644\uc131")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ud6c8\ub828 \ubaa9\ud45c")),(0,l.kt)("td",{parentName:"tr",align:null},"Masked Language Modeling (MLM)"),(0,l.kt)("td",{parentName:"tr",align:null},"Causal Language Modeling (CLM)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\ub300\ud45c\uc801\uc778 \uc751\uc6a9 \ubaa8\ub378")),(0,l.kt)("td",{parentName:"tr",align:null},"Google Search, BERT \uae30\ubc18 QA \uc2dc\uc2a4\ud15c"),(0,l.kt)("td",{parentName:"tr",align:null},"ChatGPT, GPT-4")))),(0,l.kt)("h3",{id:"bert"},"BERT"),(0,l.kt)("p",null,"BERT\ub294 \ubb38\uc7a5\uc758 \uc591\ubc29\ud5a5(Bidirectional)\uc73c\ub85c \ud559\uc2b5\ud558\ub294 Transformer Encoder \ubaa8\ub378 \uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \ud6c8\ub828\ubc29\uc2dd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Masked Language Modeling \uc989 MLM \ubc29\uc2dd\uc73c\ub85c \ud6c8\ub828\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc7a5\uc5d0\uc11c \uc77c\ubd80 \ub2e8\uc5b4\ub97c \uac00\ub9ac\uace0 \uadf8 \ub2e8\uc5b4\ub97c \ub9de\ud788\ub3c4\ub85d \ud6c8\ub828\ud569\ub2c8\ub2e4.")))),(0,l.kt)("admonition",{title:"\uc608\uc2dc",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},'\uc785\ub825: "\ub098\ub294 ',(0,l.kt)("inlineCode",{parentName:"li"},"[MASK]"),'\ub97c \uc88b\uc544\ud574"  '),(0,l.kt)("li",{parentName:"ul"},'\ucd9c\ub825: "\ub098\ub294 \ub525\ub7ec\ub2dd\uc744 \uc88b\uc544\ud574"'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 \ud2b9\uc9d5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc7a5\uc758 \uc88c\uc6b0 \ubb38\ub9e5\uc744 \ubaa8\ub450 \uace0\ub824\ud558\uc5ec \uc758\ubbf8\ub97c \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc11c \ubd84\ub958, \uac10\uc131 \ubd84\uc11d, \uc9c8\uc758\uc751\ub2f5 \uac19\uc740 \ubb38\uc7a5 \ubd84\uc11d\uc5d0 \uac15\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ud2b8 \uc0dd\uc131\uc5d0 \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\ude80 \uacb0\ub860"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BERT\ub294 \ubb38\uc7a5 \uc804\uccb4\ub97c \uace0\ub824\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubb38\ub9e5\uc744 \uc774\ud574\ud558\ub294\ub370 \uac15\uc810\uc740 \uc788\uc9c0\ub9cc \ud14d\uc2a4\ud2b8 \uc0dd\uc131\uc5d0 \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ubd80\uc871\ud569\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"gtp"},"GTP"),(0,l.kt)("p",null,"GPT\ub294 Transformer Decoder\ub9cc\uc744 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub378(Autoregressive)\ub85c \ub2e8\ubc29\ud5a5\uc73c\ub85c \ud559\uc2b5\ub429\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \ud6c8\ub828 \ubc29\uc2dd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Casual Language Modeling \uc989 CLM \ubc29\uc2dd\uc73c\ub85c \ud6c8\ub828\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\uc804 \ub2e8\uc5b4\ub4e4\ub9cc \ubcf4\uace0 \ub2e4\uc74c \ub2e8\uc5b4\ub97c \uc608\uce21\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud559\uc2b5\ub429\ub2c8\ub2e4.")))),(0,l.kt)("admonition",{title:"\uc608\uc2dc",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},'\uc785\ub825: "\ub098\ub294 \ub525\ub7ec\ub2dd\uc744"'),(0,l.kt)("li",{parentName:"ul"},'\ucd9c\ub825: "\uc88b\uc544\ud574"'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2705 GPT\uc758 \ud2b9\uc9d5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc7a5\uc758 \uc55e\ubd80\ubd84\ub9cc\uc744 \ucc38\uace0\ud558\uc5ec \uc790\uc5f0\uc2a4\ub7fd\uac8c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucc57\ubd07, \uc2a4\ud1a0\ub9ac \uc0dd\uc131, \ubb38\uc7a5 \uc790\ub3d9\uc644\uc131 \uac19\uc740 \ud14d\uc2a4\ud2b8 \uc0dd\uc131\uc5d0 \uac15\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810\uc73c\ub85c\ub294 BERT\ucc98\ub7fc \ubb38\uc7a5 \uc804\uccb4\uc758 \uc591\ubc29\ud5a5 \ubb38\ub9e5\uc744 \uace0\ub824\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\ude80 \uacb0\ub860"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPT\ub294 \ubbf8\ub798 \ub2e8\uc5b4\ub97c \ubcfc \uc218 \uc5c6\ub3c4\ub85d Casual Masking\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud6c8\ub828\ud569\ub2c8\ub2e4. \uc0dd\uc131\uc5d0 \uac15\ud558\uc9c0\ub9cc \ubb38\ub9e5 \uace0\ub824\uac00 \uc544\uc27d\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Encoder\ub294 \ubb38\uc7a5\uc744 \ubca1\ud130\ub85c \ubcc0\ud658, Decoder\ub294 \ubca1\ud130\ub97c \ub2e4\uc2dc \ubb38\uc7a5\uc73c\ub85c \ubcc0\ud658"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BERT"),"\ub294 Encoder \uae30\ubc18\uc73c\ub85c \ubb38\uc7a5 \uc804\uccb4\ub97c \ubd84\uc11d -> \uac10\uc131, \ubd84\uc11d, \ubb38\uc11c \ubd84\ub958\uc5d0 \uac15\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GPT"),"\ub294 Decoder \uae30\ubc18\uc73c\ub85c \uc790\uc5f0\uc2a4\ub7fd\uac8c \ud14d\uc2a4\ud2b8 \uc0dd\uc131 -> \ucc57\ubd07, \ud14d\uc2a4\ud2b8 \uc0dd\uc131\uc5d0 \uac15\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BERT"),"\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\uc591\ubc29\ud5a5 \ud559\uc2b5"),", GTP\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\ub2e8\ubc29\ud5a5 \ud559\uc2b5"),"(\uc55e \ub2e8\uc5b4\ub9cc \ucc38\uace0)")))}d.isMDXComponent=!0}}]);