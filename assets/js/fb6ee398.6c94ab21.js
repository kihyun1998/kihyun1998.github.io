"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[70930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(g,l(l({ref:n},c),{},{components:t})):o.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const r={sidebar_position:5},l="[LLM] 5. position encoding \uc2e4\uc2b5",a={unversionedId:"llm/llm5",id:"llm/llm5",title:"[LLM] 5. position encoding \uc2e4\uc2b5",description:"---",source:"@site/docs/llm/llm5.md",sourceDirName:"llm",slug:"/llm/llm5",permalink:"/docs/llm/llm5",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"aiSidebar",previous:{title:"[LLM] 4. LLM\uc774 \uc774\ud574\ud558\ub294 text",permalink:"/docs/llm/llm4"},next:{title:"[LLM] 6. WordPiece\uc640 BPE",permalink:"/docs/llm/llm6"}},p={},s=[{value:"Sinusoidal Position Encoding \uc2dc\uac01\ud654",id:"sinusoidal-position-encoding-\uc2dc\uac01\ud654",level:2},{value:"\uaddc\uce59\uc801\uc778 \ud328\ud134\uc774 \uc911\uc694\ud55c \uc774\uc720",id:"\uaddc\uce59\uc801\uc778-\ud328\ud134\uc774-\uc911\uc694\ud55c-\uc774\uc720",level:3}],c={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"llm-5-position-encoding-\uc2e4\uc2b5"},"[LLM]"," 5. position encoding \uc2e4\uc2b5"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sinusoidal-position-encoding-\uc2dc\uac01\ud654"},"Sinusoidal Position Encoding \uc2dc\uac01\ud654"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport matplotlib.pyplot as plt\n\ndef get_position_encoding(seq_length, model_dim):\n    """\n    Sinusoidal Position Encoding\uc744 \uacc4\uc0b0\ud558\ub294 \ud568\uc218.\n    \n    Parameters:\n    - seq_length: \ubb38\uc7a5\uc758 \ucd5c\ub300 \uae38\uc774 (\uc785\ub825 \ud1a0\ud070 \uac1c\uc218)\n    - model_dim: \uc784\ubca0\ub529 \ucc28\uc6d0 (\uac01 \ud1a0\ud070\uc774 \ud45c\ud604\ub418\ub294 \ucc28\uc6d0)\n    \n    Returns:\n    - position_encoding: (seq_length, model_dim) \ud06c\uae30\uc758 NumPy \ubc30\uc5f4\n    """\n    pos = np.arange(seq_length)[:, np.newaxis]  # (seq_length, 1) \ud615\ud0dc\ub85c \uc704\uce58 \uc778\ub371\uc2a4 \uc0dd\uc131\n    i = np.arange(model_dim)[np.newaxis, :]  # (1, model_dim) \ud615\ud0dc\ub85c \ucc28\uc6d0 \uc778\ub371\uc2a4 \uc0dd\uc131\n    \n    angle_rates = 1 / np.power(10000, (2 * (i // 2)) / np.float32(model_dim))  # \uc8fc\uae30 \uc124\uc815\n    encoding = pos * angle_rates  # \uc704\uce58 * \uc8fc\uae30 = \uc704\uce58 \uc778\ucf54\ub529 \uac12\n    \n    # \uc9dd\uc218 \uc778\ub371\uc2a4\uc5d0\ub294 sin, \ud640\uc218 \uc778\ub371\uc2a4\uc5d0\ub294 cos \uc801\uc6a9\n    encoding[:, 0::2] = np.sin(encoding[:, 0::2])\n    encoding[:, 1::2] = np.cos(encoding[:, 1::2])\n\n    return encoding\n\n# \ubb38\uc7a5 \uae38\uc774 20, \uc784\ubca0\ub529 \ucc28\uc6d0 16\uc73c\ub85c \uc124\uc815\nseq_length = 2000\nmodel_dim = 1600\npos_encoding = get_position_encoding(seq_length, model_dim)\n\n# \uc704\uce58 \uc778\ucf54\ub529\uc744 \uc2dc\uac01\ud654 (Heatmap)\nplt.figure(figsize=(10, 6))\nplt.pcolormesh(pos_encoding, cmap=\'viridis\', shading=\'auto\')\nplt.colorbar()\nplt.xlabel("Embedding Dimension")\nplt.ylabel("Word Position")\nplt.title("Sinusoidal Positional Encoding Visualization")\nplt.show()\n\n')),(0,i.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574\ubcf4\uba74 sin-cos\uc744 \uc774\uc6a9\ud574\uc11c \uaddc\uce59\uc801\uc778 \ud328\ud134\uc774 \ub098\uc624\ub294 \uac83\uc744 \ud655\uc778\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uaddc\uce59\uc801\uc778-\ud328\ud134\uc774-\uc911\uc694\ud55c-\uc774\uc720"},"\uaddc\uce59\uc801\uc778 \ud328\ud134\uc774 \uc911\uc694\ud55c \uc774\uc720"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub2e8\uc21c \uc22b\uc790 \uc778\ucf54\ub529\uc744 \ud558\uba74 \ubaa8\ub378\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uace0\ubbfc\uc5d0 \ube60\uc9c4\ub2e4."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"\uc704\uce58 10\uacfc \uc704\uce58 20\uc758 \ucc28\uc774\uac00 \uc5bc\ub9c8\ub098 \uc911\uc694\ud560\uae4c?"'),(0,i.kt)("li",{parentName:"ul"},'"\uc704\uce58 1\uacfc \uc704\uce582\uc758 \ucc28\uc774\uac00 \uc704\uce58 19\uc640 \uc704\uce58 20\uc758 \ucc28\uc774\ubcf4\ub2e4 \ub354 \uc911\uc694\ud55c\uac00?"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub2e8\uc22b \uc22b\uc790 \ud45c\ud604\uc740 \uac70\ub9ac\ub97c \ud45c\ud604\ud558\uae30\uac00 \uc5b4\ub835\ub2e4. \uc21c\uc11c\ub97c \ud45c\ud604\ud558\uae30\uc5d0\ub294 \uc27d\uc9c0\ub9cc \uad00\uacc4 \ud45c\ud604\uc5d0 \uc788\uc5b4\uc11c \uc5f0\uad00\uc131 \ucd94\ub860\uc774 \uc5b4\ub835\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sin & Cos\ub97c \uc0ac\uc6a9\ud558\uba74 \uc8fc\uae30\uc801\uc778 \ud328\ud134\uc774 \uc0dd\uae30\uae30 \ub54c\ubb38\uc5d0 \uac70\ub9ac\uac00 \uba3c \ub2e8\uc5b4\uc5ec\ub3c4 \uad00\uacc4\uc131\uc744 \uac16\uc744 \uc218 \uc788\ub2e4."))))}m.isMDXComponent=!0}}]);