"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},i="[Gitlab] yml\ud30c\uc77c \uae30\ub85d",l={unversionedId:"dev-ops/dev-ops6",id:"dev-ops/dev-ops6",title:"[Gitlab] yml\ud30c\uc77c \uae30\ub85d",description:"---",source:"@site/docs/dev-ops/dev-ops6.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops6",permalink:"/docs/dev-ops/dev-ops6",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backSidebar",previous:{title:"[Gitlab] self host runner",permalink:"/docs/dev-ops/dev-ops5"},next:{title:"[Gitlab] push rules",permalink:"/docs/dev-ops/dev-ops7"}},s={},p=[{value:"CI tar\ub85c \ub9d0\uc544\uc11c \uc2e4\ud589\ud30c\uc77c \uc0ad\uc81c\uae4c\uc9c0",id:"ci-tar\ub85c-\ub9d0\uc544\uc11c-\uc2e4\ud589\ud30c\uc77c-\uc0ad\uc81c\uae4c\uc9c0",level:2},{value:"CI \uc0ad\uc81c \ub85c\uc9c1 \ud6c4 scp\ub85c \uc62e\uae30\uae30",id:"ci-\uc0ad\uc81c-\ub85c\uc9c1-\ud6c4-scp\ub85c-\uc62e\uae30\uae30",level:2},{value:"scp \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c \uc0ac\uc804 \uc791\uc5c5",id:"scp-\ud1b5\uc2e0\ud558\uae30-\uc704\ud55c-\uc0ac\uc804-\uc791\uc5c5",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-yml\ud30c\uc77c-\uae30\ub85d"},"[Gitlab]"," yml\ud30c\uc77c \uae30\ub85d"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ci-tar\ub85c-\ub9d0\uc544\uc11c-\uc2e4\ud589\ud30c\uc77c-\uc0ad\uc81c\uae4c\uc9c0"},"CI tar\ub85c \ub9d0\uc544\uc11c \uc2e4\ud589\ud30c\uc77c \uc0ad\uc81c\uae4c\uc9c0"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"stages:          \n  - test\n  - build\n\n\ud83d\udd25 test-add:\n  stage: test\n  tags:\n    - linux\n  script:\n    - make test-add\n  rules:\n    - if: '$CI_COMMIT_TAG =~ /^V3/'\n\n\ud83d\udd25 test-sub:\n  stage: test\n  tags:\n    - linux\n  script:\n    - make test-sub\n  rules:\n    - if: '$CI_COMMIT_TAG =~ /^V3/'\n\n\ud83d\udee0\ufe0f build:\n  stage: build\n  tags:\n    - linux\n  script:\n    - make build-add\n    - make build-sub\n    - tar -cvf CAL_$CI_COMMIT_TAG.tar $CI_COMMIT_TAG*\n    - echo CAL_$CI_COMMIT_TAG.tar\n  after_script:\n    - find . ! -name CAL_$CI_COMMIT_TAG.tar -mindepth 1 -delete\n  rules:\n    - if: '$CI_COMMIT_TAG =~ /^V3/'\n")),(0,a.kt)("h2",{id:"ci-\uc0ad\uc81c-\ub85c\uc9c1-\ud6c4-scp\ub85c-\uc62e\uae30\uae30"},"CI \uc0ad\uc81c \ub85c\uc9c1 \ud6c4 scp\ub85c \uc62e\uae30\uae30"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scp-\ud1b5\uc2e0\ud558\uae30-\uc704\ud55c-\uc0ac\uc804-\uc791\uc5c5"},"scp \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c \uc0ac\uc804 \uc791\uc5c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ubuntu(\ubcf4\ub0b4\ub824\ub294 \uc11c\ubc84) RedHat(\ubc1b\ub294 \uc11c\ubc84)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ubuntu\uc5d0\uc11c ssh-key\ub97c \ubc1c\uae09\ubc1b\uace0 \uac1c\uc778\ud0a4\ub97c gitlab\uc5d0 \uc800\uc7a5")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"RedHat\uc5d0 Ubuntu\uc758 ssh pub\ud0a4 \uc800\uc7a5 (~/.ssh/authorized_keys)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"permission \ubb38\uc81c \ud574\uacb0\ud574\uc918\uc57c\ud568 chmod 400")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CI/CD Variables\uc5d0\uc11c \uc6d0\ub798\ub294 protect \ubcc0\uc218\ub85c \ud574\ub3c4 \ub418\ub294\ub370 \uc548\ub418\uc11c \uc77c\ub2e8 \ud574\uc81c\ud588\uc74c"))))}d.isMDXComponent=!0}}]);