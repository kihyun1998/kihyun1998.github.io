"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2},i="[Gitlab] CI/CD \uc2e4\uc2b5",p={unversionedId:"dev-ops/dev-ops2",id:"dev-ops/dev-ops2",title:"[Gitlab] CI/CD \uc2e4\uc2b5",description:"---",source:"@site/docs/dev-ops/dev-ops2.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops2",permalink:"/docs/dev-ops/dev-ops2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backSidebar",previous:{title:"[GitHub Actions] self-host runner \uc0ac\uc6a9\ud558\uae30 in Ubuntu",permalink:"/docs/dev-ops/dev-ops1"},next:{title:"[Gitlab] CI/CD \uc2e4\uc2b5 2",permalink:"/docs/dev-ops/dev-ops3"}},o={},s=[{value:"CI/CD",id:"cicd",level:2},{value:"gitlab CI/CD \uc791\ub3d9\ubc29\uc2dd",id:"gitlab-cicd-\uc791\ub3d9\ubc29\uc2dd",level:2},{value:"push/pull \ud558\uae30",id:"pushpull-\ud558\uae30",level:2},{value:"\uae00\ub85c\ubc8c \uc124\uc815",id:"\uae00\ub85c\ubc8c-\uc124\uc815",level:3},{value:"create new repo (clone)",id:"create-new-repo-clone",level:3},{value:"create new repo.. (upload)",id:"create-new-repo-upload",level:3},{value:"Gitlab CI/CD pipeline",id:"gitlab-cicd-pipeline",level:2},{value:"\ud14c\uc2a4\ud2b8 CI",id:"\ud14c\uc2a4\ud2b8-ci",level:3},{value:"Build/Push Docker Image",id:"buildpush-docker-image",level:2},{value:"login docker",id:"login-docker",level:3},{value:"variables",id:"variables",level:3},{value:"stage",id:"stage",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-cicd-\uc2e4\uc2b5"},"[Gitlab]"," CI/CD \uc2e4\uc2b5"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud30c\uc774\uc36c \ub370\ubaa8 \uc571\uc744 \ud1b5\ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc2e4\ud589 \ud14c\uc2a4\ud2b8"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker Image build"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docker repository\uc5d0 push"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc11c\ubc84\uc5d0 \ubc30\ud3ec"),"\uae4c\uc9c0 \ub530\ub77c \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"cicd"},"CI/CD"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc9c0\uc18d\uc801\uc778 integration\uacfc \uc9c0\uc18d\uc801\uc778 deployment \ub610\ub294 delivary\uc774\ub2e4."),(0,a.kt)("p",null,"\ud14c\uc2a4\ud2b8, \ube4c\ub4dc, \ub9b4\ub9ac\uc988\ub97c \uc790\ub3d9\ud654\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"cd\uc5d0\ub294 \ub610 \uc885\ub958\uac00 \ub9ce\uc740\ub370(\uac1c\ubc1c\uc6a9, \uc0c1\ud488\uc6a9 \ub4f1..) \uc77c\ub2e8 \uac04\ub2e8\ud55c CI/CD\ub97c \uacbd\ud5d8\ud574\ubcf4\ub824 \ud55c\ub2e4."),(0,a.kt)("h2",{id:"gitlab-cicd-\uc791\ub3d9\ubc29\uc2dd"},"gitlab CI/CD \uc791\ub3d9\ubc29\uc2dd"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"gitlab instance \ub610\ub294 gitlab server\uac00 \uc788\ub294\ub370 gitlab\uc758 runner\uc5d0\uac8c job\uc744 \ub358\uc9c4\ub2e4. \ubaa8\ub450 gitlab\uc774 \uc81c\uacf5\ud55c\ub2e4\uace0 \ud55c\ub2e4."),(0,a.kt)("p",null,"\uadfc\ub370 \uc790\uccb4 \uc124\uc815 \uae30\ub2a5\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c."),(0,a.kt)("h2",{id:"pushpull-\ud558\uae30"},"push/pull \ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uae00\ub85c\ubc8c-\uc124\uc815"},"\uae00\ub85c\ubc8c \uc124\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "<\uc774\ub984>"\ngit config --global user.email "<\uc774\uba54\uc77c>"\n')),(0,a.kt)("h3",{id:"create-new-repo-clone"},"create new repo (clone)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://gitlab.com/<\uc870\uc9c1\uba85>/<\ud504\ub85c\uc81d\ud2b8\uba85>.git\ncd <\ud504\ub85c\uc81d\ud2b8\uba85>\ngit switch --create main\ntouch README.md\ngit add README.md\ngit commit -m "add README"\ngit push --set-upstream origin main\n')),(0,a.kt)("h3",{id:"create-new-repo-upload"},"create new repo.. (upload)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd <\ud3f4\ub354\uba85>\ngit init --initial-branch=main\ngit remote add origin https://gitlab.com/<\uc870\uc9c1\uba85>/<\ud504\ub85c\uc81d\ud2b8\uba85>.git\ngit add .\ngit commit -m "Initial commit"\ngit push --set-upstream origin main\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd existing_repo\ngit remote rename origin old-origin\ngit remote add origin https://gitlab.com/<\uc870\uc9c1\uba85>/<\ud504\ub85c\uc81d\ud2b8\uba85>.git\ngit push --set-upstream origin --all\ngit push --set-upstream origin --tags\n")),(0,a.kt)("h2",{id:"gitlab-cicd-pipeline"},"Gitlab CI/CD pipeline"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-ci"},"\ud14c\uc2a4\ud2b8 CI"),(0,a.kt)("p",null,"yaml\ud30c\uc77c\ub85c \uad6c\uc131\ud560 \uc218 \uc788\ub2e4. like Github Actions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/")," root path\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\ub85c \ub9cc\ub4e0\ub2e4."),(0,a.kt)("p",null,"\uadfc\ub370 \uc644\uc804 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),"\uc740 \uc544\ub2c8\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\ud30c\uc77c\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"run_tests:\n  script:\n    - make test\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \ub420 \uc904 \uc54c\uc558\ub294\ub370 \uc774\ub97c \uc131\uacf5\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),"\uac00 \uac00\ub2a5\ud574\uc57c \ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),"\uac00 \uac00\ub2a5\ud574\uc57c\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"python"),"\uc774 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc708\ub3c4\uc6b0\uc778\uc9c0 \ub9ac\ub205\uc2a4\uc778\uc9c0\ub3c4 \uc54c\uc544\uc57c\ud558\ub294\ub370 \uc774 \uc791\uc5c5\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab"),"\ub7ec\ub108\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub9ac\ub205\uc2a4\ub3c4 \uc708\ub3c4\uc6b0\ub3c4 \uc544\ub2cc ",(0,a.kt)("inlineCode",{parentName:"p"},"shell Executor"),"\ub77c\ub294 \uacf3\uc5d0\uc11c \uc2e4\ud589\ub41c\ub2e4\uace0 \ud558\ub124\uc694.\n\uc774\uacf3\uc5d0\uc11c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. "),(0,a.kt)("p",null,"Gitlab\uc758 runner\ub294 Ruby \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc9c0\uae08 \ud558\ub294 \uc2e4\uc2b5\uc5d0\uc11c\ub294 python \uc774\ubbf8\uc9c0\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\ub974 \ub36e\uc5b4\uc4f8 \uc218 \uc788\ub2e4\uace0 \ud558\ub124\uc694."),(0,a.kt)("p",null,"\uc5ec\ub7ec \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 runner\ub97c \ub098\ub220\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uaca0\ub124\uc694"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"test_go:\n  stage: test\n  image: golang:latest\n  script:\n    - go test \n\ntest_node:\n  stage: test\n  image: node:latest\n  before_script:\n    - npm install\n  script:\n    - npm test\n")),(0,a.kt)("p",null,"\uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c \ud560 \uc218 \uc788\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \ucc98\uc74c\ubcf4\ub294\uac8c \ub098\uc624\ub294\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"stage"),"\ub791 ",(0,a.kt)("inlineCode",{parentName:"p"},"before_script"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stage"),"\ub294 \uc9c0\uae08 \ubaa8\ub974\uaca0\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"before_script"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \uc804\uc5d0 \ud544\uc218 \uc2e4\ud589 script\ub290\ub08c\uc774\ub124\uc694. ",(0,a.kt)("inlineCode",{parentName:"p"},"after_script"),"\ub3c4 \uc788\uc5b4\uc694. ",(0,a.kt)("inlineCode",{parentName:"p"},"after_script"),"\ub294 \uc2e4\ud328\ud574\ub3c4 \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\uae30\ub3c4 \ud55c\ub2e4\ub124\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"run_tests:\n  image: python:3.12-bookworm\n  before_script:\n    - apt-get update && apt-get install make\n  script:\n    - make test\n")),(0,a.kt)("p",null,"\uc2e4\uc81c\ub85c\ub294 \uc774\ub807\uac8c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"pyhton3.12\uc758 bookworm \ubc84\uc804\uc744 \uc0ac\uc6a9\ud588\uace0 before_script\ub85c make\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"buildpush-docker-image"},"Build/Push Docker Image"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"docker private repository\uc5d0 push\ud558\ub294 \ubc29\uc2dd\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"login-docker"},"login docker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"CI/CD"),"\uc5d0\ub294 \ub2e4\uc591\ud55c \ucd94\uac00 \uc124\uc815\ub4e4\uc774 \ubaa8\uc5ec \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub85c\uadf8\uc778 \uc815\ubcf4\ub97c CI/CD \ud30c\uc77c\uc5d0 \uc9c1\uc811 \uc800\uc7a5\ud558\ub294 \uac83\uc740 \ubcf4\uc548 \uc704\ud5d8\uc774\uae30\uc5d0 \ubcc0\uc218\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"build_image:\n  before_script:\n    - docker login -u $LOGIN_USER -p $LOGIN_PASS\n  script:\n    - docker build -t $IMAGE_NAME:$IMAGE_TAG .\n    - docker push $IMAGE_NAME:$IMAGE_TAG\n")),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc before_script\ub85c login \ud558\uace0 build, push \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"variables"},"variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"variables:\n  IMAGE_NAME: parkkihyun/demo-test\n  IMAGE_TAG: python-app-1.0.0\n")),(0,a.kt)("p",null,"\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc124\uc815\ud558\ub294 \uac83 \ub9d0\uace0 \ud30c\uc77c\uc5d0\uc11c \uc9c1\uc811 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"build_image:\n  image: docker:24.0.7-git\n  services:\n    - docker:24.0.7-dind\n  variables:\n    DOCKER_TLS_CERTDIR: '/certs'\n  before_script:\n    - docker login -u $LOGIN_USER -p $LOGIN_PASS\n  script:\n    - docker build -t $IMAGE_NAME:$IMAGE_TAG .\n    - docker push $IMAGE_NAME:$IMAGE_TAG\n")),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub85c\uadf8\uc778\uc744 \uc704\ud574\uc11c services\ub97c \uc62e\uaca8\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"docker client\uc5d0\uc11c docker demon\uc73c\ub85c \uc62e\uaca8\uc57c\ud55c\ub2e4\ub294\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"services"),"\ub85c \uc815\uc758\ud560 \uc218 \uc788\ub2e4\uace0 \ud558\ub294\ub370 \uc774 \ubd80\ubd84\uc740 \uc544\uc9c1 \uc798 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"docker build\ub97c \ud558\uae30 \uc704\ud574\uc11c\ub294 Dockerfile\ub3c4 \ud544\uc694\ud569\ub2c8\ub2e4. \uc608\uc2dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM python:3.12-bookworm\n\nLABEL Name="Python Flask Demo App" Version=1.0.0\nLABEL org.opencontainers.image.source = "https://github.com/benc-uk/python-demoapp"\n\nARG srcDir=src\nWORKDIR /app\nCOPY $srcDir/requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY $srcDir/run.py .\nCOPY $srcDir/app ./app\n\nEXPOSE 5000\n\nCMD ["gunicorn", "-b", "0.0.0.0:5000", "run:app"]\n\n')),(0,a.kt)("h2",{id:"stage"},"stage"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc704\uc5d0 test ci\uc640 build ci\ub97c \uc791\uc131\ud574\ubd24\ub294\ub370 \uc774\ub807\uac8c \uc791\uc131\ud558\uba74 \ubcd1\ub82c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"test \uba3c\uc800 \ud6c4 build\ub97c \ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"stage"),"\ub77c\ub294 \uac83\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"stages:\n  - test\n  - build\n")),(0,a.kt)("p",null,"\uba3c\uc800 \uc774\ub807\uac8c stage \uc885\ub958\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"run_tests:\n  stage: test\n  ...\n\nbuild_image:\n  stage: build\n  ...\n")),(0,a.kt)("p",null,"\uc774\ub7f0 \uc2dd\uc73c\ub85c \uac01 \uc791\uc5c5\uc774 \uc5b4\ub5a4 \uc2a4\ud14c\uc774\uc9c0\uc5d0 \ud574\ub2f9\ud558\ub294\uc9c0 \uc815\uc758\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CD")," \uc989 \ubc30\ud3ec \uc790\ub3d9\ud654\ub294 \ub2e4\uc74c \uae00\uc5d0 \uc815\ub9ac\ud560\uac8c\uc694"))}d.isMDXComponent=!0}}]);