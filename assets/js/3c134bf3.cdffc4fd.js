"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[22354],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),p=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=a,s=d["".concat(u,".").concat(k)]||d[k]||m[k]||r;return n?l.createElement(s,o(o({ref:e},c),{},{components:n})):l.createElement(s,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92217:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const r={sidebar_position:9},o="[LLM] 9. Self Attention",i={unversionedId:"llm/llm9",id:"llm/llm9",title:"[LLM] 9. Self Attention",description:"---",source:"@site/docs/llm/llm9.md",sourceDirName:"llm",slug:"/llm/llm9",permalink:"/docs/llm/llm9",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"aiSidebar",previous:{title:"[LLM] 8. Token Embedding",permalink:"/docs/llm/llm8"},next:{title:"[LLM] 10. Casual Attention",permalink:"/docs/llm/llm10"}},u={},p=[{value:"Self Attention\uc774\ub780?",id:"self-attention\uc774\ub780",level:2},{value:"Query, Key, Value \ub9cc\ub4e4\uae30",id:"query-key-value-\ub9cc\ub4e4\uae30",level:3},{value:"Attention Score \uacc4\uc0b0\ud558\uae30",id:"attention-score-\uacc4\uc0b0\ud558\uae30",level:3},{value:"Attention Score \uacc4\uc0b0 \uc27d\uac8c \uc774\ud574\ud558\uae30",id:"attention-score-\uacc4\uc0b0-\uc27d\uac8c-\uc774\ud574\ud558\uae30",level:3},{value:"Dot Product \uc810\uacf1",id:"dot-product-\uc810\uacf1",level:3},{value:"Dot Product \uc608\uc81c \ucf54\ub4dc",id:"dot-product-\uc608\uc81c-\ucf54\ub4dc",level:3},{value:"Attention Score\ub97c Softmax\ub85c \ubcc0\ud658\ud558\uae30",id:"attention-score\ub97c-softmax\ub85c-\ubcc0\ud658\ud558\uae30",level:3},{value:"Softmax \ucd94\uac00 \uc2e4\uc2b5",id:"softmax-\ucd94\uac00-\uc2e4\uc2b5",level:3},{value:"Scaled Dot-Product Attention",id:"scaled-dot-product-attention",level:3},{value:"$\text{Scaled Attention Score} = \frac{Q cdot K^T}{sqrt{d_k}}$",id:"textscaled-attention-score--fracq-cdot-ktsqrtd_k",level:3},{value:"Scaled Dot-Product Attention \uc2e4\uc2b5 \ucf54\ub4dc",id:"scaled-dot-product-attention-\uc2e4\uc2b5-\ucf54\ub4dc",level:3},{value:"Value\ub780?",id:"value\ub780",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:3}],c={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"llm-9-self-attention"},"[LLM]"," 9. Self Attention"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uae30\uc874 NLP\ub294 RNN\uc640 CNN\uc744 \uc0ac\uc6a9\ud588\uc9c0\ub9cc \ud55c\uacc4\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ubaa8\ub378"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc7a5\uc810"),(0,a.kt)("th",{parentName:"tr",align:null},"\ub2e8\uc810"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RNN"),(0,a.kt)("td",{parentName:"tr",align:null},"\ubb38\uc7a5\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac"),(0,a.kt)("td",{parentName:"tr",align:null},"\uae34 \ubb38\uc7a5\uc5d0\uc11c \uacfc\uac70 \uc815\ubcf4\ub97c \uae30\uc5b5\ud558\uae30 \uc5b4\ub824\uc6c0 (\uc7a5\uae30 \uc758\uc874\uc131 \ubb38\uc81c)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CNN"),(0,a.kt)("td",{parentName:"tr",align:null},"\ubcd1\ub82c \uc5f0\uc0b0\uc774 \uac00\ub2a5\ud558\uace0 \uc5f0\uc0b0 \uc18d\ub3c4\uac00 \ube60\ub984"),(0,a.kt)("td",{parentName:"tr",align:null},"\ubb38\ub9e5\uc744 \uc7a5\uac70\ub9ac\ub85c \uc774\ud574\ud558\ub294 \ub370 \ud55c\uacc4\uac00 \uc788\uc74c")))),(0,a.kt)("h2",{id:"self-attention\uc774\ub780"},"Self Attention\uc774\ub780?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc6b0\ub9ac\uac00 \ucc45\uc744 \uc77d\uc744 \ub54c \ubaa8\ub4e0 \ubb38\uc7a5\uc744 \uc678\uc6b0\uc9c4 \uc54a\uc9c0\ub9cc \uc911\uc694\ud55c \ubb38\uc7a5\uc5d0 \ubc11\uc904\uc744 \uae0b\ub294\uac83\uacfc \uac19\ub2e4.."),(0,a.kt)("p",null,"LLM\ub3c4 Self-Attention\uc744 \uc774\uc6a9\ud574\uc11c \ubb38\uc7a5\uc5d0\uc11c \uc911\uc694\ud55c \ub2e8\uc5b4\uc5d0 \uc9d1\uc911\ud55c\ub2e4."),(0,a.kt)("h3",{id:"query-key-value-\ub9cc\ub4e4\uae30"},"Query, Key, Value \ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,"\ud2b8\ub79c\uc2a4\ud3ec\uba38 \ubaa8\ub378\uc5d0\uc11c\ub294 \ud1a0\ud070\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"Query(Q)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Key(K)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Value(V)"),"\ub77c\ub294 \uc138\uac00\uc9c0 \ubca1\ud130\ub85c \ubcc0\ud658\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Query(Q)")," : \uc774 \ub2e8\uc5b4\uac00 \ub2e4\ub978 \ub2e8\uc5b4\ub4e4\uacfc \uc5bc\ub9c8\ub098 \uad00\ub828 \uc788\ub294\uc9c0 ",(0,a.kt)("strong",{parentName:"li"},"\uc9c8\ubb38"),"\ud558\ub294 \ubca1\ud130"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Key(K)")," : \uc774 \ub2e8\uc5b4\uac00 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 ",(0,a.kt)("strong",{parentName:"li"},"\uc815\ubcf4"),"\ub97c \ub2f4\uace0 \uc788\ub294 \ubca1\ud130"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Value(V)")," : \uc2e4\uc81c\ub85c \ubaa8\ub378\uc774 \ud559\uc2b5\ud560 ",(0,a.kt)("strong",{parentName:"li"},"\uac12"),"\uc774 \ub2f4\uae34 \ubca1\ud130")),(0,a.kt)("p",null,"Query\uac00 \ub2e4\ub978 \ub2e8\uc5b4\ub4e4\uc758 Key\ub97c \ucc38\uace0\ud574\uc11c \uad00\ub828\uc131\uc744 \ucc3e\uace0 \uadf8 \uacb0\uacfc\ub97c Value\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ubc29\uc2dd.. \uc774\ub77c\uace0 \ud558\ub124\uc694."),(0,a.kt)("h3",{id:"attention-score-\uacc4\uc0b0\ud558\uae30"},"Attention Score \uacc4\uc0b0\ud558\uae30"),(0,a.kt)("p",null,"Q\uc640 K\uc758 \uc720\uc0ac\ub3c4\ub97c \uacc4\uc0b0\ud558\uc5ec \uc5b4\ub5a4 \ub2e8\uc5b4\uac00 \uc911\uc694\ud55c\uc9c0\ub97c \ud310\ub2e8\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc5f0\uc0b0\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc810\uacf1(Dot Product)"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Attention\xa0Score=Q\u22c5K^T\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub450 \ubca1\ud130\uc758 \ub0b4\uc801(dot product)\ub97c \uacc4\uc0b0\ud558\uba74 \uc11c\ub85c \uc5bc\ub9c8\ub098 \uc5f0\uad00\uc131\uc774 \uc788\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac12\uc774 \ud06c\uba74 \ub450 \ub2e8\uc5b4\uac00 \uc11c\ub85c \uac15\ud55c \uad00\ub828\uc774 \uc788\ub294 \uac83\uc774\uace0 \uc791\uc73c\uba74 \uad00\ub828\uc774 \uc801\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \uad6c\ud55c \uac12\uc744 ",(0,a.kt)("inlineCode",{parentName:"li"},"Softmax \ud568\uc218"),"\ub97c \uc801\uc6a9\ud558\uc5ec \ud655\ub960 \ubd84\ud3ec\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4..")),(0,a.kt)("h3",{id:"attention-score-\uacc4\uc0b0-\uc27d\uac8c-\uc774\ud574\ud558\uae30"},"Attention Score \uacc4\uc0b0 \uc27d\uac8c \uc774\ud574\ud558\uae30"),(0,a.kt)("p",null,"\uc27d\uac8c \uc124\uba85\ud558\uba74 \uadf8\ub0e5 \ub450 \ub2e8\uc5b4\uc758 \uc720\uc0ac\ub3c4\ub97c \uacc4\uc0b0\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\uce5c\uad6c 5\uba85\uc774 \ud568\uaed8 \uacf5\ubd80\ud55c\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubcf4\uc138\uc694.\n\uac01 \uce5c\uad6c\ub294 \uc11c\ub85c \ub2e4\ub978 \uacfc\ubaa9\uc5d0 \uac15\ud558\uace0, \uc11c\ub85c\uc5d0\uac8c \uc9c8\ubb38\uc744 \ud558\uba74\uc11c \uacf5\ubd80\ub97c \ud569\ub2c8\ub2e4.\n\uc774\ub54c, \ub0b4\uac00 \uc5b4\ub5a4 \uce5c\uad6c\uc5d0\uac8c \uc9c8\ubb38\uc744 \ub9ce\uc774 \ud558\ub294\uc9c0\ub97c "Attention Score(\uc5b4\ud150\uc158 \uc810\uc218)"\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub3fc\uc694.\n\n\uc608\ub97c \ub4e4\uc5b4, \ub0b4\uac00 \uc218\ud559\uc774 \uc57d\ud55c\ub370 \uce5c\uad6c \ucca0\uc218\uac00 \uc218\ud559\uc744 \uc798\ud55c\ub2e4\uace0 \ud558\uba74?\n> \ub098\ub294 \ucca0\uc218\uc5d0\uac8c \ub9ce\uc740 \uc9c8\ubb38(\ub192\uc740 Attention Score)\uc744 \ud558\uaca0\uc8e0!\n')),(0,a.kt)("p",null,"\ub2e4\uc2dc \ub9d0\ud574\uc11c Q\uc640 K\ub97c \uc774\uc6a9\ud574\uc11c Score\ub97c \uad6c\ud569\ub2c8\ub2e4. Q\uc640 K\uc758 \uc810\uacf1\uc774 \ud06c\uba74 \ub450 \ub2e8\uc5b4\uac00 \uac15\ud558\uac8c \uc5f0\uad00\uc774 \uc788\ub2e4 \uc774\ub9d0\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\uac74 \uc624\ucf00\uc774. \uc810\uacf1\uc774 \ubb54\ub370?"),(0,a.kt)("h3",{id:"dot-product-\uc810\uacf1"},"Dot Product \uc810\uacf1"),(0,a.kt)("p",null,"\uc810\uacf1\uc740 \uac04\ub2e8\ud558\uac8c \ube44\uc2b7\ud55c \ucde8\ud5a5 \ucc3e\uae30\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\uce5c\uad6c"),(0,a.kt)("th",{parentName:"tr",align:null},"SF"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc561\uc158"),(0,a.kt)("th",{parentName:"tr",align:null},"\ub85c\ub9e8\uc2a4"),(0,a.kt)("th",{parentName:"tr",align:null},"\uacf5\ud3ec"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\ub098(Query, Q)"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\ucca0\uc218(Key,K)"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"3")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub098\ub294 SF\uc640 \uc561\uc158\uc744 \uc88b\uc544\ud558\ub294\ub370 \ucca0\uc218\ub3c4 SF\uc640 \uc561\uc158\uc744 \uc88b\uc544\ud55c\ub2e4\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucde8\ud5a5\uc774 \ube44\uc2b7\ud558\ub2e4\uace0 \ud560 \uc218 \uc788\ub294\ub370 \uadf8\ub7ec\uba74 \ub192\uc740 \uc810\uc218\ub97c \uc5bb\uac8c \ub429\ub2c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Score= (5\xd74)+(4\xd75)+(1\xd71)+(2\xd73) = 20+20+1+6 = 47\n")),(0,a.kt)("p",null,"\uc774\ub7f0 \uacc4\uc0b0 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"dot-product-\uc608\uc81c-\ucf54\ub4dc"},"Dot Product \uc608\uc81c \ucf54\ub4dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\n\n# 3\uac1c\uc758 \ub2e8\uc5b4(\ud1a0\ud070)\ub97c \ud3ec\ud568\ud55c \ubb38\uc7a5\uc774 \uc788\ub2e4\uace0 \uac00\uc815\n# \uac01 \ub2e8\uc5b4(\ud1a0\ud070)\ub294 4\ucc28\uc6d0 \ubca1\ud130\ub85c \ud45c\ud604\ub428 (4\uac1c\uc758 \uc18d\uc131\uc744 \uac00\uc9d0)\nQ = torch.tensor([[1.0, 0.5, 0.3, 0.2],   # \ub2e8\uc5b4 1\n                  [0.8, 1.2, 0.4, 0.7],   # \ub2e8\uc5b4 2\n                  [0.5, 0.3, 1.5, 0.6]])  # \ub2e8\uc5b4 3\n\nK = torch.tensor([[0.9, 0.4, 0.2, 0.1],   # \ub2e8\uc5b4 1\n                  [1.0, 1.1, 0.5, 0.8],   # \ub2e8\uc5b4 2\n                  [0.4, 0.2, 1.2, 0.5]])  # \ub2e8\uc5b4 3\n\n# Query\uc640 Key\uc758 \uc810\uacf1(Dot Product) \uacc4\uc0b0\nAttention_Scores = torch.matmul(Q, K.T)\nprint(f"Dot Product: {Attention_Scores}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# \uacb0\uacfc\nDot Product: tensor([[1.1800, 1.8600, 0.9600],\n        [1.3500, 2.8800, 1.3900],\n        [0.9300, 2.0600, 2.3600]])\n")),(0,a.kt)("h3",{id:"attention-score\ub97c-softmax\ub85c-\ubcc0\ud658\ud558\uae30"},"Attention Score\ub97c Softmax\ub85c \ubcc0\ud658\ud558\uae30"),(0,a.kt)("p",null,"Softmax\ub85c \ubcc0\ud658\ud558\ub294 \uc774\uc720\ub294 \ud655\ub960\ub85c \ubcc0\ud658\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\uc778\ub370 \ud655\ub960\ub85c \ubcc0\ud658\uc2dc\ud0a4\ub294\uac8c \uc911\uc694\ud55c\uac8c. \uc0c1\ub300\uc801 \uc911\uc694\ub3c4\ub97c \uc54c\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \uc2dc\ud5d8 \ubb38\uc81c \uc911 \uac01 \ubb38\uc81c\uc758 \uc810\uc218\ub97c \ubc31\ubd84\uc728\ub85c \ubcc0\ud658\ud558\uba74 \uc5b4\ub5a4 \ubb38\uc81c\uac00 \uc911\uc694\ud55c \ubb38\uc81c\uc778\uc9c0 \uc54c\uc218 \uc788\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\uc989. Softmax\ub97c \uc801\uc6a9\ud558\uba74 \uc774 ",(0,a.kt)("strong",{parentName:"p"},"\ub2e8\uc5b4\uac00 \uc804\uccb4 \ubb38\uc7a5\uc5d0\uc11c \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uac00?"),"\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"softmax-\ucd94\uac00-\uc2e4\uc2b5"},"Softmax \ucd94\uac00 \uc2e4\uc2b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch.nn.functional as F\n\n...\n\n# Softmax \uc801\uc6a9\ud558\uc5ec Attention Weights \uc5bb\uae30\nAttention_Weights = F.softmax(Attention_Scores, dim=-1)\nprint(f"Softmax \uc801\uc6a9: {Attention_Weights}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# \uacb0\uacfc\nDot Product: tensor([[1.1800, 1.8600, 0.9600],\n        [1.3500, 2.8800, 1.3900],\n        [0.9300, 2.0600, 2.3600]])\nSoftmax \uc801\uc6a9: tensor([[0.2648, 0.5227, 0.2125],\n        [0.1502, 0.6935, 0.1563],\n        [0.1209, 0.3741, 0.5050]])\n")),(0,a.kt)("p",null,"\uc704 \ucf54\ub4dc\uc5d0\uc11c \uc774\ub807\uac8c pytorch\uc758 softmax\ud568\uc218\ub97c \ucd94\uac00\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"dim"),"\uac12\uc740 Softmax\ub97c \uc801\uc6a9\ud560 \ucd95\uc744 \uacb0\uc815\ud558\ub294 \uc635\uc158\uc778\ub370 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dim=0")," -> \uc138\ub85c \ubc29\ud5a5(\ud589 \ub2e8\uc704)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dim=1")," -> \uac00\ub85c \ubc29\ud5a5(\uc5f4 \ub2e8\uc704)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dim=-1")," -> \ub9c8\uc9c0\ub9c9 \ucc28\uc6d0")),(0,a.kt)("h3",{id:"scaled-dot-product-attention"},"Scaled Dot-Product Attention"),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 \uc9c0\uae08\uc758 \uc810\uacf1\uc5d0\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc810\uacf1\uc740 \ub450 \ubca1\ud130\uc758 \ud06c\uae30\uc640 \ubc29\ud5a5 \ubaa8\ub450\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc7a5\uc758 \uae38\uc774\uac00 \uae38\uc5b4\uc9c0\uac70\ub098 \ubca1\ud130 \ucc28\uc6d0\uc774 \ucee4\uc9c0\uba74 \uac12\uc774 \ub108\ubb34 \ucee4\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud574\uc694. \uadf8\ub798\uc11c \uc815\uaddc\ud654 \ud558\ub294 \uacfc\uc815\uc73c\ub85c K\uc758 \ucc28\uc6d0\uc778 d_k\ub85c \ub098\ub215\ub2c8\ub2e4. \uacf5\uc2dd\uc740 \uc544\ub798\uc640 \uac19\uc544\uc694."),(0,a.kt)("h3",{id:"textscaled-attention-score--fracq-cdot-ktsqrtd_k"},"$\\text{Scaled Attention Score} = \\frac{Q \\cdot K^T}{\\sqrt{d_k}}$"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 \uc65c \uaf2d \ub098\ub220\uc57c \ud558\ub098?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud559\uc0dd\ub4e4\uc774 \uc218\ud589 \ud3c9\uac00\ub97c \ubcf4\uace0 \uc810\uc218\ub97c \ud3c9\uade0\ub0b4\uc11c \ube44\uad50\ud558\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadfc\ub370 \ub204\uad6c\ub294 \ucd1d\uc810 500\uc810\uc9dc\ub9ac \uc218\ud589 \ud3c9\uac00\ub97c \ubcf4\uae30\ub3c4 \ud558\uace0 \ub204\uad6c\ub294 30\uc810\uc9dc\ub9ac \uc218\ud589 \ud3c9\uac00\ub97c \ubcf4\uae30\ub3c4 \ud558\uc8e0. "),(0,a.kt)("li",{parentName:"ul"},"\ucd1d\uc810\uc73c\ub85c \ube44\uad50\ud558\uba74 \ucd1d\uc810\uc774 \ub192\uc740 \uc218\ud589\ud3c9\uac00\ub97c \ub9ce\uc774 \ubcf8 \ud559\uc0dd\uc758 \uac12\uc774 \ub108\ubb34 \ub192\uc544\uc838\uc11c \ube44\uad50\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub798\uc11c \ud3c9\uade0 \uc810\uc218\ub85c \ube44\uad50\ud558\uba74 \uacf5\uc815\ud55c \ube44\uad50\uac00 \uac00\ub2a5\ud55c \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4.\\"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 \uc65c \u221ad_k\ub85c \ub098\ub204\ub098?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc77c\ub2e8 d_k\uac00 Key\uc758 \ucc28\uc6d0\uac12\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. Key\uc758 \ucc28\uc6d0\uc740 Query\uc758 \ucc28\uc6d0\uacfc \uac19\uae30 \ub54c\ubb38\uc5d0 \u221ad_k\ub85c \ub098\ub234\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u221a"),"\ub294 \uc65c \ubd99\ub098? \ub77c\ub294 \uc758\ubb38\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. -> \ubd84\uc0b0\uc744 1\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\uc778\ub370 \uc774 \ubd80\ubd84\uc740 \uc218\ud559\uc801\uc778 \ubd80\ubd84\uc774\ub77c \ub118\uc5b4\uac00\uaca0\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"scaled-dot-product-attention-\uc2e4\uc2b5-\ucf54\ub4dc"},"Scaled Dot-Product Attention \uc2e4\uc2b5 \ucf54\ub4dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nimport torch.nn.functional as F\n\n# Query, Key \ucd08\uae30\ud654 (\ucc28\uc6d0: 64)\nd_k = 64\nQ = torch.rand(3, d_k)\nK = torch.rand(3, d_k)\n\n# 1\ufe0f\u20e3 Scaling \uc5c6\uc774 \uc810\uacf1\nattn_scores_no_scaling = torch.matmul(Q, K.T)\n\n# 2\ufe0f\u20e3 \u221ad_k\ub85c \ub098\ub208 \uc810\uacf1 (Scaling \uc801\uc6a9)\nattn_scores_scaled = torch.matmul(Q, K.T) / (d_k ** 0.5)\n\n# 3\ufe0f\u20e3 Softmax \uc801\uc6a9\ud558\uc5ec Attention Weights \uc5bb\uae30\nattn_weights_no_scaling = F.softmax(attn_scores_no_scaling, dim=-1)\nattn_weights_scaled = F.softmax(attn_scores_scaled, dim=-1)\n\nprint("Attention Scores (No Scaling):\\n", attn_scores_no_scaling)\nprint("\\nAttention Scores (Scaled by \u221ad_k):\\n", attn_scores_scaled)\nprint("\\nAttention Weights (No Scaling):\\n", attn_weights_no_scaling)\nprint("\\nAttention Weights (Scaled by \u221ad_k):\\n", attn_weights_scaled)\n')),(0,a.kt)("p",null,"\ucc28\uc6d0 \uc218\ub97c \uc544\uc8fc \ud06c\uac8c \ub298\ub9b0 \uc608\uc81c\uc785\ub2c8\ub2e4. scaled\ub97c \uc801\uc6a9\ud55c \uac12\uacfc \uc801\uc6a9\ud558\uc9c0 \uc54a\uc740 \uac12\uc744 \ube44\uad50\ud574\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Attention Scores (No Scaling):\n tensor([[16.1353, 15.5896, 15.6609],\n        [14.6310, 13.3090, 13.0502],\n        [17.6245, 15.7619, 17.3316]])\n\nAttention Scores (Scaled by \u221ad_k):\n tensor([[2.0169, 1.9487, 1.9576],\n        [1.8289, 1.6636, 1.6313],\n        [2.2031, 1.9702, 2.1664]])\n\nAttention Weights (No Scaling):\n tensor([[0.4542, 0.2632, 0.2826],\n        [0.6791, 0.1811, 0.1398],\n        [0.5259, 0.0817, 0.3924]])\n\nAttention Weights (Scaled by \u221ad_k):\n tensor([[0.3476, 0.3247, 0.3276],\n        [0.3748, 0.3177, 0.3076],\n        [0.3628, 0.2874, 0.3498]])\n")),(0,a.kt)("h3",{id:"value\ub780"},"Value\ub780?"),(0,a.kt)("p",null,"\uc774\uc81c \uad6c\ud574\uc9c4 Attention Weight\ub97c Value\uac12\uacfc \ud1b5\ud569\ud558\uc5ec \ud559\uc2b5\uc5d0 \uc774\uc6a9\ud558\ub294\ub370 Value\uac12\uc774 \ubb34\uc5c7\uc778\uac00\ud558\uba74.."),(0,a.kt)("p",null,"\uadf8\ub0e5 \uc815\ubcf4\uac00 \ub4e4\uc5b4\uc788\ub294 \uac12\uc785\ub2c8\ub2e4. \ubcf4\ud1b5 \uc785\ub825 \uc784\ubca0\ub529 \ub610\ub294 \uc774\uc804 \ub808\uc774\uc5b4\uc758 \ucd9c\ub825 \uac12\uc774\ub77c\uace0 \ud558\ub124\uc694. \ud1a0\ud070\uc758 \ud2b9\uc9d5\uc744 \ub2f4\uc740 \uac12\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uac78 \uc774\uc81c Attntion Weight\uc640 \uc870\ud569\ud558\uba74 \uadf8\ub0e5 \uc815\ubcf4\uc5d0\uc11c \uc911\uc694\ud55c \uc815\ubcf4\uac00 \ub41c\ub2e4..\ub85c \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Value \uac12\uc740 \uc5b4\ub5bb\uac8c \uad6c\ud558\ub098\uc694?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Value \uac12\uc740 \uc785\ub825 \ubca1\ud130(X)\uc5d0 \ud559\uc2b5\ub41c \uac00\uc911\uce58(W_v)\ub97c \uacf1\ud55c \uac12\uc785\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \ub0b4\uc6a9 \uc694\uc57d")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Attention Score\ub294 \ubb38\uc7a5 \ub0b4 \ub2e8\uc5b4\ub4e4 \uac04\uc758 \uc5f0\uad00\uc131\uc744 \ub098\ud0c0\ub0c4."),(0,a.kt)("li",{parentName:"ol"},"Query(Q)\uc640 Key(K)\uc758 \uc810\uacf1(Dot Product)\uc73c\ub85c \uc720\uc0ac\ub3c4 \uacc4\uc0b0"),(0,a.kt)("li",{parentName:"ol"},"\uac12\uc774 \ud06c\uba74 \ub450 \ub2e8\uc5b4\uc758 \uad00\ub828\uc131 \ub192\uc74c"),(0,a.kt)("li",{parentName:"ol"},"Softmax\ub97c \uc801\uc6a9\ud574\uc11c \ud655\ub960\uac12\uc73c\ub85c \ubcc0\ud658 > \ubaa8\ub378\uc774 \ub354 \uc798 \ud559\uc2b5\ud55c\ub2e4.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Self Attention \uacfc\uc815")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Query(Q), Key(K), Value(V) \ub9cc\ub4e4\uae30"),(0,a.kt)("li",{parentName:"ol"},"Q\uc640 K\uc758 \uc810\uacf1(Dot Product)\uc73c\ub85c Attention Score \uacc4\uc0b0\ud558\uae30"),(0,a.kt)("li",{parentName:"ol"},"Softmax \uc801\uc6a9\ud558\uc5ec Attention Weight \uc5bb\uae30"),(0,a.kt)("li",{parentName:"ol"},"Attention Weight\ub97c \uc0ac\uc6a9\ud574\uc11c Value(V) \uac12\uc744 \uc870\ud569\ud558\uc5ec \ucd5c\uc885 \uacb0\uacfc \ub9cc\ub4e4\uae30")))}m.isMDXComponent=!0}}]);