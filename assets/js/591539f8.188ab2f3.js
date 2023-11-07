"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[6836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:12},i="12. [BackEnd] Implement RESTful HTTP API in Go use Gin",o={unversionedId:"backend-master/backend12",id:"backend-master/backend12",title:"12. [BackEnd] Implement RESTful HTTP API in Go use Gin",description:"Gin",source:"@site/docs/backend-master/backend12.md",sourceDirName:"backend-master",slug:"/backend-master/backend12",permalink:"/docs/backend-master/backend12",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"backSidebar",previous:{title:"11. [BackEnd] Github Action + Go + Postgres to unit test",permalink:"/docs/backend-master/backend11"}},u={},c=[{value:"Gin",id:"gin",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:3},{value:"\ucf54\ub4dc \uc791\uc131",id:"\ucf54\ub4dc-\uc791\uc131",level:2},{value:"Sever \uad6c\uc870\uccb4",id:"sever-\uad6c\uc870\uccb4",level:3},{value:"gin \uc720\ud6a8\uc131 \uac80\uc0ac",id:"gin-\uc720\ud6a8\uc131-\uac80\uc0ac",level:3},{value:"createAccount \ud568\uc218",id:"createaccount-\ud568\uc218",level:3},{value:"route run",id:"route-run",level:3},{value:"main.go",id:"maingo",level:3},{value:"Request \ud558\uae30",id:"request-\ud558\uae30",level:2},{value:"GET \ub9cc\ub4e4\uae30",id:"get-\ub9cc\ub4e4\uae30",level:2},{value:"GetRequest",id:"getrequest",level:3},{value:"\uc694\uccad",id:"\uc694\uccad",level:3},{value:"ListAccount \uc870\ud68c\ud558\uae30",id:"listaccount-\uc870\ud68c\ud558\uae30",level:2},{value:"\uac1c\uc120\uc0ac\ud56d",id:"\uac1c\uc120\uc0ac\ud56d",level:3},{value:"\uc219\uc81c",id:"\uc219\uc81c",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...l}=e;return(0,a.kt)(p,(0,r.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"12-backend-implement-restful-http-api-in-go-use-gin"},"12. ","[BackEnd]"," Implement RESTful HTTP API in Go use Gin"),(0,a.kt)("h2",{id:"gin"},"Gin"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"HTTP \uae30\ub2a5\uc774 \uc788\ub294 \uc6f9 \ud504\ub808\uc784\uc6cc\ud06c\ub294 \ub9ce\ub2e4."),(0,a.kt)("p",null,"\uadf8 \uc911 \uc774\ubc88 \uac15\uc758\ub294 Gin\uc744 \uc0ac\uc6a9\ud560 \uac83\uc774\ub2e4."),(0,a.kt)("h3",{id:"\uc124\uce58"},"\uc124\uce58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/gin-gonic/gin\n")),(0,a.kt)("h2",{id:"\ucf54\ub4dc-\uc791\uc131"},"\ucf54\ub4dc \uc791\uc131"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 api \ud3f4\ub354\uc5d0 server.go\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"sever-\uad6c\uc870\uccb4"},"Sever \uad6c\uc870\uccb4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Server struct {\n    store  *db.Store\n    router *gin.Engine\n}\n")),(0,a.kt)("p",null,"\uc11c\ubc84 \uad6c\uc870\uccb4\ub97c \ub9cc\ub4dc\ub294\ub370 store\ub294 db\uc640 \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\uace0\nrouter\ub294 \ub77c\uc6b0\ud305\uc744 \ud574\uc90d\ub2c8\ub2e4. \uc62c\ubc14\ub978 handler\ub85c \ubcf4\ub0b4\uc900\ub2e4\uace0 \ud558\ub124\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func NewServer(store *db.Store) *Server {\n    server := &Server{store: store}\n    router := gin.Default()\n\n    // \uacc4\uc815 \uc0dd\uc131\n    router.POST("/accounts", server.createAccount)\n\n    server.router = router\n    return server\n}\n')),(0,a.kt)("p",null,"\uc11c\ubc84 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 NewServer \ud568\uc218\ub97c \ub9cc\ub4dc\ub290\ub370 \uc704\uc640 \uac19\uc740 \ud615\uc2dd\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"router.Post\uc5d0\uc11c \uacbd\ub85c\ub97c \uc124\uc815\ud574\uc8fc\uace0 handler\ub294 \ud558\ub098 \uc774\uc0c1 \ub123\uc744 \uc218 \uc788\uace0 \uc5ec\ub7ec\uac1c\uac00 \uc624\ub294 \uacbd\uc6b0\ub294 \uc911\uac04\uc5d0\ub294 \ub2e4 \ubbf8\ub4e4\uc6e8\uc5b4\uace0 \ub9c8\uc9c0\ub9c9\uc5d0 \ub4e4\uc5b4\uc624\ub294 handler\uac00 \uc2e4\uc81c \ucc98\ub9ac\uae30\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"gin-\uc720\ud6a8\uc131-\uac80\uc0ac"},"gin \uc720\ud6a8\uc131 \uac80\uc0ac"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"binding")," : required \uc124\uc815\ud560 \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldBindJson"),"\uc73c\ub85c \uac80\uc0ac\ud560 \uc218 \uc788\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"oneof")," : enum\uac19\uc740 \ub290\ub08c, \uc774 \uac12 \uc911 \ud558\ub098\uac00 \uc640\uc57c \ud568."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type CreateAccountRequest struct {\n    Owner    string `json:"owner" binding:"required"`\n    Currency string `json:"currency" binding:"required,oneof=USD EUR"`\n}\n')),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \uc704\ucc98\ub7fc param\uc744 \uc815\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"createaccount-\ud568\uc218"},"createAccount \ud568\uc218"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (server *Server) createAccount(ctx *gin.Context) {\n\n}\n")),(0,a.kt)("p",null,"gin context\ub97c \uc785\ub825 \ubc1b\ub294 \uc774\uc720\ub294 gin\uc5d0\uc11c \uadf8\ub807\uac8c \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"api\ub97c \ub9cc\ub4e4 \ub54c \uc720\ud6a8\uc131 \uac80\uc0ac\ub3c4 \uad49\uc7a5\ud788 \uc911\uc694\ud55c\ub370 gin\uc740 \uc720\ud6a8\uc131 \uac80\uc0ac \ud328\ud0a4\uc9c0\uac00 \ub4e4\uc5b4\uc788\uc5b4\uc11c \uc790\ub3d9\uc73c\ub85c \ud574\uc900\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"binding"),"\ud0dc\uadf8\ub85c \ud544\uc218 \uc785\ub825\uc744 \uc54c\ub9ac\ub294 \uac83\ucc98\ub7fc\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (server *Server) createAccount(ctx *gin.Context) {\n    var req CreateAccountParams\n    if err := ctx.ShouldBindJSON(&req); err != nil {\n        ctx.JSON(http.StatusBadRequest, errorResponse(err))\n        return\n    }\n}\n")),(0,a.kt)("p",null,"\uccab \ubc88\uc9f8 \uc778\uc790\ub294 http status code\uace0 \ub450 \ubc88\uc9f8 \uc778\uc790\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ubcf4\ub0b4\ub294 JSON \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func errorResponse(err error) gin.H {\n    return gin.H{"error": err.Error()}\n}\n')),(0,a.kt)("p",null,"\uc7a0\uae50 \uc5d0\ub7ec \ud568\uc218\ub97c \ud655\uc778\ud574\ubcf4\uba74 gin.H\ub97c \ubc18\ud658\ud558\ub294\ub370 \uc774\ub294 map","[string]","any \ud615\uc2dd\uc774\ub77c \uac04\ub2e8\ud558\uac8c \ud0a4-\ubc1c\ub958 \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (server *Server) createAccount(ctx *gin.Context) {\n    var req CreateAccountParams\n\n    // \uc785\ub825\uac12 \uc720\ud6a8\uc131 \uac80\uc0ac\n    if err := ctx.ShouldBindJSON(&req); err != nil {\n        ctx.JSON(http.StatusBadRequest, errorResponse(err)) // \uc0ac\uc6a9\uc790 \uc5d0\ub7ec\n        return\n    }\n\n    // \uc778\uc790 \uc0dd\uc131\n    arg := db.CreateAccountParams{\n        Owner:    req.Owner,\n        Currency: req.Currency,\n        Balance:  0,\n    }\n\n    // \uacc4\uc815 \uc0dd\uc131\n    account, err := server.store.CreateAccount(ctx, arg)\n    if err != nil {\n        ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // \uc11c\ubc84 \uc5d0\ub7ec\n    }\n\n    // \uc131\uacf5 \uc2dc\n    ctx.JSON(http.StatusOK, account)\n}\n")),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ub7f0\uc2dd\uc73c\ub85c \uc644\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc911\uac04 \uc911\uac04 \uc624\ub958 \ubc18\ud658\ud558\ub294 \uac83\uacfc \uac12\uc744 \ubc18\ud658\ud558\ub294 \uac83\uc744 \uc81c\uc678\ud558\uba74 db transaction\uacfc \uc0b4\uc9dd \ube44\uc2b7\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"route-run"},"route run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \uc694\uccad \uc11c\ubc84\uc5d0\uc11c HTTP \uc11c\ubc84 \uc2e4\ud589, API \uc1a1\uc218\uc2e0 \uc2dc\uc791\nfunc (server *Server) Start(address string) error {\n    return server.router.Run(address)\n}\n")),(0,a.kt)("p",null,"gin\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud568\uc218\ub85c \uc694\uccad \uc11c\ubc84\uc5d0 api \uc1a1\uc218\uc2e0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"maingo"},"main.go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "database/sql"\n    "log"\n    "simplebank/api"\n    db "simplebank/db/sqlc"\n\n    _ "github.com/lib/pq"\n)\n\nfunc main() {\n    const (\n        dbDriver      = "postgres"\n        dbSource      = "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable"\n        serverAddress = "0.0.0.0:8080"\n    )\n\n    // \uc11c\ubc84 \uc0dd\uc131\ud558\ub824\uba74 db\uc5d0 \uc5f0\uacb0\ud558\uace0 store \uc0dd\uc131\ud574\uc57c\ud55c\ub2e4.\n\n    // db \uc5f0\uacb0\n    conn, err := sql.Open(dbDriver, dbSource)\n    if err != nil {\n        log.Fatal("cannot connect : ", err)\n    }\n\n    store := db.NewStore(conn)\n    server := api.NewServer(store)\n\n    err = server.Start(serverAddress)\n    if err != nil {\n        log.Fatalln("CANNOT START SERVER")\n    }\n}\n')),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc db\ub97c \uc5f0\uacb0\ud558\uace0 store\ub97c \uc0dd\uc131\ud558\uace0 server\ub97c \uc0dd\uc131\ud558\uc5ec server\ub97c start\ud558\ub294 \ucf54\ub4dc \uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"request-\ud558\uae30"},"Request \ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"talend api\uc5d0\uc11c \uc694\uccad\uc744 \ub0a0\ub838\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"method"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uc8fc\uc18c"),"\ub294 http://localhost:8080/accounts\ub85c \ub0a0\ub9ac\uace0"),(0,a.kt)("p",null,"Body\ub294 raw\ub370\uc774\ud130\ub85c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": "Park",\n  "currency":"USD"\n}\n')),(0,a.kt)("p",null,"\uc544\ub798 \ucc98\ub7fc \ub0a0\ub9ac\uba74"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(9914).Z,width:"1540",height:"482"})),(0,a.kt)("p",null,"\uc544\ub798 \ucc98\ub7fc \uc131\uacf5\ud588\ub2e4\uace0 \ub098\uc635\ub2c8\ub2e4 ! \uc2e0\uae30\ud558\ub124\uc694"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(5381).Z,width:"1542",height:"364"})),(0,a.kt)("h2",{id:"get-\ub9cc\ub4e4\uae30"},"GET \ub9cc\ub4e4\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"account id\ub85c \uacc4\uc815 \uc870\ud68c\ud558\ub294 api\ub9cc\ub4e4\uc5b4\ubd05\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"getrequest"},"GetRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type getAccountRequest struct {\n    ID int64 `uri:"id" binding:"required,min=1"`\n}\n')),(0,a.kt)("p",null,"\uacc4\uc815 \uc544\uc774\ub514\ub294 url\ub85c \ubc1b\uc2b5\ub2c8\ub2e4. uri:id\ub97c \ud1b5\ud574\uc11c url\ub85c \ubc1b\uc2b5\ub2c8\ub2e4.( \uc5ec\ub7ec\uac1c\uba74 \uc5b4\ub5bb\uac8c \ud558\uc9c0? )"),(0,a.kt)("p",null,"binding\uc744 \ud1b5\ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," \uc5ed\uc2dc \uc124\uc815\ud588\ub294\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"min=1"),"\ub3c4 \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucd5c\uc18c\uac12\uc774 1\uc774\ub77c\ub294 \uc18c\ub9ac\uc785\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"\uc8fc\uc758\ud560 \uc810",type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'ID int64 `uri:"id" binding:"required,min=1"\n')),(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc5d0\uc11c binding\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"required,min")," \uc774\ub807\uac8c \ub3fc\uc788\ub294\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"required, min")," \uc774\ub807\uac8c \ub744\uc5b4\uc4f0\uae30 \ud558\uba74 \uc5d0\ub7ec\ub09c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (server *Server) getAccount(ctx *gin.Context) {\n    var req getAccountRequest\n    if err := ctx.ShouldBindUri(&req); err != nil {\n        ctx.JSON(http.StatusBadRequest, errorResponse(err))\n        return\n    }\n\n    account, err := server.store.GetAccount(ctx, req.ID)\n    if err != nil {\n        if err == sql.ErrNoRows {\n            ctx.JSON(http.StatusNotFound, errorResponse(err)) //ID \uc5c6\uc744 \ub54c 404\n            return\n        }\n\n        ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84 \uc5d0\ub7ec\n    }\n    ctx.JSON(http.StatusOK, account)\n}\n")),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\uc11c \ud2b9\ubcc4\ud55c \uc810\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldBindJSON"),"\uc774 \uc544\ub2c8\ub77c ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldBindUri"),"\ub77c\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc694\uccad"},"\uc694\uccad"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(6859).Z,width:"1558",height:"634"})),(0,a.kt)("p",null,"\uc704\ucc98\ub7fc \uc694\uccad\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"listaccount-\uc870\ud68c\ud558\uae30"},"ListAccount \uc870\ud68c\ud558\uae30"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type listAccountRequest struct {\n    PageID   int32 `form:"page_id" binding:"required,min=1"`\n    PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`\n}\n')),(0,a.kt)("p",null,"\ucffc\ub9ac \uc2a4\ud2b8\ub9c1\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"form"),"\uc73c\ub85c \uc120\uc5b8\ud574\uc57c \ud558\uace0 \uc548\uc5d0 \uc788\ub294 page_id\ub098 page_size\uac19\uc740\uac8c \ubcc0\uc218\uba85\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (server *Server) listAccount(ctx *gin.Context) {\n    var req listAccountRequest\n    if err := ctx.ShouldBindQuery(&req); err != nil {\n        ctx.JSON(http.StatusBadRequest, errorResponse(err))\n        return\n    }\n\n    arg := db.ListAccountsParams{\n        Limit:  req.PageSize,\n        Offset: (req.PageID - 1) * req.PageSize,\n    }\n\n    account, err := server.store.ListAccounts(ctx, arg)\n    if err != nil {\n        ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84 \uc5d0\ub7ec\n    }\n    ctx.JSON(http.StatusOK, account)\n}\n")),(0,a.kt)("p",null,"\ud2b9\ubcc4\ud55c\uac8c 2\uac00\uc9c0 \uc788\ub294\ub370 \ud558\ub098\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldBindQuery"),"\uc774\uace0 \uc774\uac74 \uad73\uc774 \uc124\uba85\ud558\uc9c0 \uc54a\uc544\ub3c4 \uc54c\uace0.... \uc0ac\uc2e4 \uc124\uba85\ud558\uc790\uba74 \uc704\uc5d0\uc11c form\uc744 \uc37c\uae30 \ub54c\ubb38\uc774\ub2e4. bind\ud55c \ubcc0\uc218\uc758 \uc55e\uc5d0 form\uc744 \uc37c\uc73c\ub2c8 !"),(0,a.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c \ud2b9\ubcc4\ud55c \uac83\uc740 \ubc14\ub85c Offset\uc758 \uac12\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    arg := db.ListAccountsParams{\n        Limit:  req.PageSize,\n        Offset: (req.PageID - 1) * req.PageSize,\n    }\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \uc65c Offset\uc758 \uacc4\uc0b0\uc2dd\uc774 \uc800\ub807\uac8c \ub098\uc624\ub294\uc9c0 \ucc98\uc74c\ubcf4\uba74 \uc774\ud574\uac00 \uc548\uac08 \uc218\ub3c4 \uc788\ub294\ub370 page_id\uc774\uae30 \ub54c\ubb38\uc774\ub2e4. \uc608\ub97c\ub4e4\uc5b4 page_size\ub97c 5\ub85c\uc7a1\uc558\uc744 \ub54c \uc5b4\ub514\uc5d0 \uc788\ub294 \ud398\uc774\uc9c0\ub97c \ubcf4\uaca0\ub2e4. \uc774\uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \uc800\ub807\uac8c \ud45c\ud604\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("h3",{id:"\uac1c\uc120\uc0ac\ud56d"},"\uac1c\uc120\uc0ac\ud56d"),(0,a.kt)("p",null,"\ub9cc\uc57d page_id\ub97c 100, 1000 \uc774\ub807\uac8c \uc5c6\ub294 \uac12\uc744 \ub123\uc73c\uba74 null\uc774 \ubc18\ud658\ub418\ub294\ub370 \uc0ac\uc2e4 null\ubcf4\ub2e8 \ube48 \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\ub294\uac8c \uc88b\ub2e4."),(0,a.kt)("p",null,"\uc774\ub97c \uc704\ud574\uc11c sqlc.yaml \ud30c\uc77c\uc744 \uc218\uc815\ud574\uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"emit_empty_slices: true\n")),(0,a.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub97c gen: go: \uc758 \ub9e8 \ubc11\uc5d0 \ucd94\uac00\ud574\uc8fc\uba74 \ub41c\ub2e4. \uadf8\ub7fc \ub05d"),(0,a.kt)("h2",{id:"\uc219\uc81c"},"\uc219\uc81c"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uacc4\uc815 ",(0,a.kt)("inlineCode",{parentName:"p"},"delete api"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"update api")," \uc0dd\uc131"))}d.isMDXComponent=!0},9914:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image1-01db9c5d47e8f5f292be0aad564291cd.png"},5381:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image2-f3864f4400d5849d7d35ea6be26b3c90.png"},6859:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image3-64e81e6e2339b098ad9b13962ddd0ef6.png"}}]);