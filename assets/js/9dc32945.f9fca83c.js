"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[5728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:13},i="[Github Actions] Slack bot & Slack webhook",l={unversionedId:"dev-ops/dev-ops13",id:"dev-ops/dev-ops13",title:"[Github Actions] Slack bot & Slack webhook",description:"---",source:"@site/docs/dev-ops/dev-ops13.md",sourceDirName:"dev-ops",slug:"/dev-ops/dev-ops13",permalink:"/docs/dev-ops/dev-ops13",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"backSidebar",previous:{title:"[Github Actions] release\uc5d0 \uc5c5\ub85c\ub4dc",permalink:"/docs/dev-ops/dev-ops12"}},s={},c=[{value:"Slack \ud65c\uc6a9\ud558\uae30",id:"slack-\ud65c\uc6a9\ud558\uae30",level:2},{value:"Bot \ub9cc\ub4e4\uae30",id:"bot-\ub9cc\ub4e4\uae30",level:3},{value:"Webhook \ub9cc\ub4e4\uae30",id:"webhook-\ub9cc\ub4e4\uae30",level:3}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-actions-slack-bot--slack-webhook"},"[Github Actions]"," Slack bot & Slack webhook"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"slack-\ud65c\uc6a9\ud558\uae30"},"Slack \ud65c\uc6a9\ud558\uae30"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/"},"api.slack.com"),"\uc5d0\uc11c Bot\uacfc Webhook\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Your Apps")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Create New App")," >  ",(0,r.kt)("inlineCode",{parentName:"p"},"From scratch"),"\uc5d0\uc11c Slack \uc11c\ube44\uc2a4 \uac19\uc740 \uac78 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,r.kt)("h3",{id:"bot-\ub9cc\ub4e4\uae30"},"Bot \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Features")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth & Permissions")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Scopes")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot Token Scopes")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Add an OAuth scope"),"\uc5d0\uc11c \uad8c\ud55c\uc744 \uba3c\uc800 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Features")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth & Permissions")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth Tokens for Your Workspace"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Install to Workspace")," \ud574\uc8fc\uba74 \ud1a0\ud070\uc774 \ub098\uc628\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bot User OAuth Token"),"\uc744 Github Secret\uc73c\ub85c \uc9c0\uc815\ud558\uace0 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/invite @bot\uc774\ub984\n")),(0,r.kt)("p",null,"\ub97c \ud1b5\ud574\uc11c \ub2e4\ub978 \ucc44\ub110\uc5d0\uc11c bot\uc744 \ucd08\ub300\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: \ud83d\udce5 Notify on Slack when Success\n        if: success()\n        uses: slackapi/slack-github-action@v1.15.0\n        with:\n          channel-id: '\uc2ac\ub799 \ucc44\ub110 \uc544\uc774\ub514'\n          slack-message: 'Build succeeded! \ud83c\udf1e' \n        env:\n          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}\n")),(0,r.kt)("h3",{id:"webhook-\ub9cc\ub4e4\uae30"},"Webhook \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Basic Information"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Add features and functionality"),"(\uae30\ub2a5 \ud398\uc774\uc9c0) \uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Iconming Webhooks"),"\ub97c \ub4e4\uc5b4\uac00\uc11c webhook\uc744 \ud65c\uc131\ud654 \uc2dc\ucf1c\uc900\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \ubc11\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Add New Webhhok to Workspace"),"\ub97c \ub204\ub974\uace0 \uc124\uc815\ud55c \uac12\uc5d0 \ub530\ub77c \ub098\uc628 url\uc744 \uae43\ud5c8\ube0c \uc2dc\ud06c\ub9bf\uc5d0 \uc800\uc7a5\ud558\uc5ec \uc0ac\uc6a9\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'      - name: \ud83d\udce5 Notify on Slack when Success\n        if: success()\n        id: slack-success\n        uses: slackapi/slack-github-action@v1.24.0\n        with:\n          payload: |\n            {\n              "channel": "[slack \ucc44\ub110 \uc544\uc774\ub514]",\n              "attachments": [\n                {\n                  "color": "#36a64f",\n                  "title": "Build in ${{ github.repository }}",\n                  "title_link": "https://github.com/${{github.repository}}",\n                  "text": "\ud83d\ude80 GitHub Action \uc131\uacf5",\n                  "fields": [\n                    {\n                      "title": "Repository",\n                      "value": "${{ github.repository }}",\n                      "short": true\n                    },\n                    {\n                      "title": "Version",\n                      "value": "${{ github.ref_name }}",\n                      "short": true\n                    },\n                    {\n                      "title": "Branch",\n                      "value": "${{ github.ref_name }}",\n                      "short": true\n                    },\n                    {\n                      "title": "Commit",\n                      "value": "<https://github.com/${{ github.repository }}/commit/${{ github.sha }}|${{ github.sh }}>",\n                      "short": true\n                    },\n                    {\n                      "title": "Actions Log",\n                      "value": "<https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}|Workflow Log>",\n                      "short": true\n                    }\n                  ]      \n                }\n              ]\n            }\n        env:\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK\n')),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ud558\ub098\ud558\ub098 \uc815\uc758\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uace0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: \ud83d\udce5 Notify on Slack when Success\n        uses: 8398a7/action-slack@v3\n        with:\n          status: ${{job.status}}\n          fields: repo,message,commit,author,action,eventName,ref,workflow,job,took,pullRequest\n          mention: here\n          if_mention: failure, cancelled\n        env:\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK\n        if: always()\n")),(0,r.kt)("p",null,"\uc774\ub807\uac8c market place\uc5d0\uc11c \uc81c\uacf5\ud574\uc8fc\ub294 \uac04\ub2e8\ud55c \uac83\uc744 \uc0ac\uc6a9\ud558\uc5ec fields\ub97c \uace8\ub77c\uc11c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."))}k.isMDXComponent=!0}}]);