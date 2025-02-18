"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[98981],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>s});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(l),N=a,s=k["".concat(u,".").concat(N)]||k[N]||c[N]||r;return l?n.createElement(s,i(i({ref:t},m),{},{components:l})):n.createElement(s,i({ref:t},m))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=N;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}N.displayName="MDXCreateElement"},76822:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const r={sidebar_position:12},i="[LLM] 12. Transformer Block \uc774\ud574\ud558\uae30",o={unversionedId:"llm/llm12",id:"llm/llm12",title:"[LLM] 12. Transformer Block \uc774\ud574\ud558\uae30",description:"---",source:"@site/docs/llm/llm12.md",sourceDirName:"llm",slug:"/llm/llm12",permalink:"/docs/llm/llm12",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"aiSidebar",previous:{title:"[LLM] 11. Multi-Head Attention",permalink:"/docs/llm/llm11"}},u={},p=[{value:"Transfromer Block",id:"transfromer-block",level:2},{value:"\uc2e4\ud589 \ud750\ub984",id:"\uc2e4\ud589-\ud750\ub984",level:3},{value:"LayerNorm",id:"layernorm",level:2},{value:"\ud544\uc694\ud55c \uc774\uc720",id:"\ud544\uc694\ud55c-\uc774\uc720",level:3},{value:"\ub3d9\uc791\uc6d0\ub9ac",id:"\ub3d9\uc791\uc6d0\ub9ac",level:3},{value:"$hat{x} = \frac{x - mu}{sigma + epsilon} * gamma + \beta$",id:"hatx--fracx---musigma--epsilon--gamma--beta",level:3},{value:"\ubc29\uc2dd",id:"\ubc29\uc2dd",level:3},{value:"FFN\uc774\ub780",id:"ffn\uc774\ub780",level:2},{value:"FFN \ub3d9\uc791 \ubc29\uc2dd",id:"ffn-\ub3d9\uc791-\ubc29\uc2dd",level:3},{value:"ReLU vs GELU",id:"relu-vs-gelu",level:3},{value:"\ube44\uc120\ud615 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uc774\uc720",id:"\ube44\uc120\ud615-\ud568\uc218\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud558\ub294-\uc774\uc720",level:3},{value:"Residual Connection \uc774\ub780? ( Shortcut Connection )",id:"residual-connection-\uc774\ub780--shortcut-connection-",level:2},{value:"Residual Connection\uc774 \ud544\uc694\ud55c \uc774\uc720",id:"residual-connection\uc774-\ud544\uc694\ud55c-\uc774\uc720",level:3},{value:"\ub3d9\uc791 \ubc29\uc2dd",id:"\ub3d9\uc791-\ubc29\uc2dd",level:3},{value:"$y = f(x) + x$",id:"y--fx--x",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:3}],m={toc:p},k="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"llm-12-transformer-block-\uc774\ud574\ud558\uae30"},"[LLM]"," 12. Transformer Block \uc774\ud574\ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"transfromer-block"},"Transfromer Block"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Transformer Block\uc744 \uc774\ud574\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c \uac1c\ub150\ub4e4\uc744 \uc54c\uace0 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Multi-Head Attention"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LayerNorm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FFN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Residual Connection")),(0,a.kt)("h3",{id:"\uc2e4\ud589-\ud750\ub984"},"\uc2e4\ud589 \ud750\ub984"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-test"},"\uc785\ub825 (Token Embedding + Positional Encoding)  \n    \u2193  \nLayerNorm (Self-Attention \uc804\uc5d0 \uc815\uaddc\ud654)  \n    \u2193  \nMulti-Head Self-Attention (\ubb38\uc7a5\uc5d0\uc11c \uc911\uc694\ud55c \ub2e8\uc5b4 \ucc3e\uae30)  \n    \u2193  \nResidual Connection (\uc6d0\ub798 \uc815\ubcf4 \uc720\uc9c0)  \n    \u2193  \nLayerNorm (FFN \uc804\uc5d0 \uc815\uaddc\ud654)  \n    \u2193  \nFeed Forward Network (FFN, Self-Attention \uacb0\uacfc\ub97c \uc815\uc81c)  \n    \u2193  \nResidual Connection (\uc6d0\ub798 \uc815\ubcf4 \uc720\uc9c0)  \n    \u2193  \n\ucd9c\ub825 (\ub2e4\uc74c Transformer \ube14\ub85d\uc73c\ub85c \uc804\ub2ec or \ucd5c\uc885 \uc608\uce21)\n\n")),(0,a.kt)("p",null,"Transformer Block\uc740 \uc704\uc640 \uac19\uc740 \ud504\ub85c\uc138\uc2a4\ub85c \ubb38\uc7a5\uc758 \uc758\ubbf8\ub97c \ud30c\uc545\ud558\uace0 \ud559\uc2b5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"layernorm"},"LayerNorm"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ub274\ub7f0 \ucd9c\ub825\uc744 \uc815\uaddc\ud654\ud558\uc5ec \ud559\uc2b5\uc744 \uc548\uc815\uc801\uc73c\ub85c \ub9cf\ub290\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4. \uc989 \uadf8\ub0e5 \ucd9c\ub825 \uc815\uaddc\ud654\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud544\uc694\ud55c-\uc774\uc720"},"\ud544\uc694\ud55c \uc774\uc720"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\uae30\uc6b8\uae30 \uc18c\uc2e4/\ubc1c\uc0b0 \ubb38\uc81c (Gradient Vanishing/Exploding)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\uac00 \uae4a\uc5b4\uc9c0\uba74 \ub274\ub7f0\uc758 \ucd9c\ub825\uc744 \uacc4\uc18d \uacf1\ud558\uace0 \ud569\uccd0\uc9c0\uba74\uc11c \uac11\uc774 \ub108\ubb34 \ucee4\uc9c0\uac70\ub098 \uc791\uc544\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac12\uc774 \ub108\ubb34 \ud06c\uba74 Exploding -> \ud559\uc2b5\uc774 \ubd88\uc548\uc815\ud574\uc9c0\uace0 NaN\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac12\uc774 \ub108\ubb34 \uc791\uc73c\uba74 Vanishing -> \ubaa8\ub378\uc774 \uc81c\ub300\ub85c \ud559\uc2b5\uc744 \ubabb\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ub274\ub7f0\uc758 \uac12 \ubd84\ud3ec\uac00 \uade0\uc77c\ud558\uc9c0 \uc54a\ub294 \ubb38\uc81c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ub274\ub7f0\uc740 \ud3c9\uade0\uc801\uc73c\ub85c 10\uc744 \ucd9c\ub825\ud558\uace0 \uc5b4\ub5a4 \ub274\ub7f0\uc740 0.1\uc744 \ucd9c\ub825\ud558\uac8c \ub418\uba74 \ud559\uc2b5\uc774 \ubd88\uade0\ud615 \ud574\uc9c0\uace0 \ud2b9\uc815 \ub274\ub7f0\uc758 \uc601\ud5a5\ub825\ub9cc \ucee4\uc9d1\ub2c8\ub2e4.")))),(0,a.kt)("p",null,"\uadf8\ub798\uc11c LayerNorm\uc744 \uc0ac\uc6a9\ud574\uc11c \ub274\ub7f0 \uac04 \uade0\ud615\uc744 \ub9de\ucda5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub3d9\uc791\uc6d0\ub9ac"},"\ub3d9\uc791\uc6d0\ub9ac"),(0,a.kt)("p",null,"LayerNorm\uc740 \ub274\ub7f0\ub4e4\uc758 \uac12\uc744 \uc815\uaddc\ud654\ud558\ub294\ub370 Self-Attention\uacfc FFN \uc804 \ub610\ub294 \ud6c4\uc5d0 \uc801\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"hatx--fracx---musigma--epsilon--gamma--beta"},"$\\hat{x} = \\frac{x - \\mu}{\\sigma + \\epsilon} * \\gamma + \\beta$"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \ud504\ub85c\uc138\uc2a4",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\uc785\ub825 x\uc758 \ud3c9\uade0\uc744 \ube7c\uc11c \ud3c9\uade0 0\uc73c\ub85c \ub9de\ucd94\uace0"),(0,a.kt)("li",{parentName:"ol"},"\ud45c\uc900\ud3b8\ucc28\ub85c \ub098\ub220\uc11c  \ucd9c\ub825\uc758 \ud06c\uae30\ub97c \uade0\uc77c\ud558\uac8c \ub9cc\ub4e0\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc774\ud6c4\uc5d0 \ud559\uc2b5 \uac00\ub2a5\ud55c \ud30c\ub77c\ubbf8\ud130\ub97c \uacf1\ud558\uace0 \ub354\ud558\uc5ec \ucd5c\uc801\uc758 \uc2a4\ucf00\uc77c\uc744 \uc870\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ubc29\uc2dd"},"\ubc29\uc2dd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Post-LayerNorm \ubc29\uc2dd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Self-Attention\uacfc FFN \ud6c4\uc5d0 LayerNorm\uc744 \ud558\ub294 \uacbd\uc6b0\uc774\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pre-LayerNorm \ubc29\uc2dd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Self-Attention\uacfc FFN \uc804\uc5d0 LayerNorm\uc744 \ud558\ub294 \uacbd\uc6b0\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucd5c\uadfc\uc5d0\ub294 \uc774 \ubc29\uc2dd\uc774 \ub354 \uc548\uc815\uc801\uc774\ub77c\uc11c GPT \ubaa8\ub378\uc5d0\uc11c \uc0ac\uc6a9\ud55c\ub2e4.")))),(0,a.kt)("h2",{id:"ffn\uc774\ub780"},"FFN\uc774\ub780"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"FFN\uc740 Transformer \ube14\ub85d \ub0b4\uc5d0\uc11c \ud1a0\ud070\uc744 \uac1c\ubcc4\uc801\uc73c\ub85c \uac00\uacf5\ud558\ub294 \uc911\uc694\ud55c \uc2e0\uacbd\ub9dd \ubaa8\ub4c8\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Self-Attention\uc774 \ubb38\ub9e5\uc744 \ubc18\uc601\ud55c \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\uba74 FFN\uc740 \uc774\ub97c \ub354 \uc815\uad50\ud558\uac8c \ud558\uc5ec \ud48d\ubd80\ud55c \uc758\ubbf8\ub97c \uac16\ub294 \ud45c\ud604\uc73c\ub85c \ub9cc\ub4e0\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"ffn-\ub3d9\uc791-\ubc29\uc2dd"},"FFN \ub3d9\uc791 \ubc29\uc2dd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ucc28\uc6d0\ud655\uc7a5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc785\ub825\ud1a0\ud070\uc744 \ub354 \ub113\uc740 \ucc28\uc6d0\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ube44\uc120\ud615 \ubcc0\ud658"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GELU\ub97c \uc801\uc6a9\ud558\uc5ec \ub354\uc6b1 \ubcf5\uc7a1\ud55c \ud328\ud134\uc744 \ud559\uc2b5\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ucc28\uc6d0 \ucd95\uc18c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc2dc \ucc28\uc6d0\uc744 \ucd95\uc18c\ud558\uc5ec \ubaa8\ub378\uc774 \ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"relu-vs-gelu"},"ReLU vs GELU"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ReLU (Rectified Linear Unit)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc591\uc218\ub294 \ub0a8\uae30\uace0 \uc74c\uc218\ub97c 0\uc73c\ub85c \ubc14\uafb8\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubd88\ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc81c\uac70\ud574\uc11c \ub354 \uac04\uacb0\ud55c \ud45c\ud604\uc744 \ub9cc\ub4e4\uace0\uc790 \ud558\ub294 \ubaa9\ud45c\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 GELU (Gaussiian Error Linear Unit)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ReLU\ubcf4\ub2e4 \uc870\uae08 \ub354 \ubd80\ub4dc\ub7fd\uac8c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc57d\ud55c \uc74c\uc218\ub97c \uc870\uae08 \ub0a8\uaca8\ub461\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc740 \uac12\ub4e4\uc740 0 \uadfc\ucc98\uc5d0\uc11c \ucc9c\ucc9c\ud788 \ubcc0\ud558\uace0 \ud070 \uac12\ub4e4\uc740 \ube60\ub974\uac8c \uc99d\uac00\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ube44\uc120\ud615-\ud568\uc218\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud558\ub294-\uc774\uc720"},"\ube44\uc120\ud615 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uc774\uc720"),(0,a.kt)("p",null,"\uc120\ud615 \uacc4\uce35\ub9cc \uc788\ub2e4\uba74 \ud558\ub098\uc758 \uc120\ud615 \ubcc0\ud658\uc744 \ud55c \ud6a8\uacfc\ub9cc \ub098\ud0c0\ub09c\ub2e4\uace0 \ud569\ub2c8\ub2e4. \uc218\ud559\uc801\uc778 \ubd80\ubd84\uc774\ub77c \ub118\uc5b4\uac00\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"residual-connection-\uc774\ub780--shortcut-connection-"},"Residual Connection \uc774\ub780? ( Shortcut Connection )"),(0,a.kt)("p",null,"\uc6d0\ub798 \uc815\ubcf4\ub97c \uc720\uc9c0\ud558\uba74\uc11c \uc0c8\ub85c\uc6b4 \uc815\ubcf4\ub97c \ucd94\uac00\ud558\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Self-Attention\uacfc FFN\uc744 \ud1b5\uacfc\ud55c \uc774\ud6c4\uc5d0\ub3c4 \uc6d0\ubcf8 \uc815\ubcf4\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"residual-connection\uc774-\ud544\uc694\ud55c-\uc774\uc720"},"Residual Connection\uc774 \ud544\uc694\ud55c \uc774\uc720"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uae30\uc6b8\uae30 \ubb38\uc81c.."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LayerNorm\uc5d0\uc11c\ub3c4 \ub9c8\uc8fc\ud55c \uae30\uc6b8\uae30 \ubb38\uc81c\uc778\ub370 \uae4a\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c\ub294 \ucd08\uae30 \uc785\ub825\uacfc \ucd9c\ub825\uac04\uc758 \ucc28\uc774\uac00 \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ed\uc804\ud30c \ud560 \ub54c Gradient\uac00 \uc0ac\ub77c\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc815\ubcf4 \uc190\uc2e4"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Self-Attention\uacfc FFN\uc744 \ud1b5\uacfc\ud558\uba74\uc11c \uc0c8 \uc815\ubcf4\ub97c \ucd94\uac00\ud558\ub2e4\ubcf4\uba74 \uae30\uc874 \uc911\uc694 \uc815\ubcf4\uac00 \uc0ac\ub77c\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud559\uc2b5 \uc18d\ub3c4 \ud5a5\uc0c1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc6d0\ub798 \uc815\ubcf4 \uc720\uc9c0\ud558\uba74\uc11c \uc0c8 \uc815\ubcf4 \ucd94\uac00\ud558\uae30 \ub54c\ubb38\uc5d0 \ud559\uc2b5 \uc18d\ub3c4\uac00 \ud5a5\uc0c1\ub418\uace0 \uc131\ub2a5\uc774 \ub098\ube60\uc9c0\ub294 \ubb38\uc81c \ubc29\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ub3d9\uc791-\ubc29\uc2dd"},"\ub3d9\uc791 \ubc29\uc2dd"),(0,a.kt)("h3",{id:"y--fx--x"},"$y = f(x) + x$"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \ud504\ub85c\uc138\uc2a4",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"$x$: \uc6d0\ubcf8 \uc785\ub825 (Self-Attention , FFN \ud1b5\uacfc \uc774\uc804 \uac12)"),(0,a.kt)("li",{parentName:"ol"},"$f(x)$: \uc0c8\ub85c\uc6b4 \uc815\ubcf4 (Self-Attention \ub610\ub294 FNN\uc744 \ud1b5\uacfc\ud55c \ucd9c\ub825)"),(0,a.kt)("li",{parentName:"ol"},"$y$: \ucd5c\uc885 \ucd9c\ub825 (\uc6d0\ubcf8 \uc785\ub825 + \uc0c8\ub85c\uc6b4 \uc815\ubcf4) ")))),(0,a.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Residual Connection\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc815\ubcf4 \uc190\uc2e4\uc774 \uc801\ub2e4 -> \ubb38\ub9e5 \uc720\uc9c0 \uac00\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"\ud559\uc2b5\uc774 \ub354 \ube68\ub9ac \uc9c4\ud589\ub41c\ub2e4 -> \ub124\ud2b8\uc6cc\ud06c\uac00 \uae4a\uc5b4\uc838\ub3c4 \uc548\uc815\uc801\uc784"),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \uc131\ub2a5 \ud5a5\uc0c1 -> \uc815\ubcf4\uac00 \ud48d\ubd80\ud558\uac8c \ub0a8\uc74c.")))))}c.isMDXComponent=!0}}]);