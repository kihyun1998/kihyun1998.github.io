"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[1880],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>k});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?t.createElement(k,l(l({ref:r},p),{},{components:n})):t.createElement(k,l({ref:r},p))}));function k(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2601:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const s={sidebar_position:18},l="18. [BackEnd] password hash & implement request user api",o={unversionedId:"backend-master/backend18",id:"backend-master/backend18",title:"18. [BackEnd] password hash & implement request user api",description:"\ud559\uc2b5 \ubaa9\ud45c",source:"@site/docs/backend-master/backend18.md",sourceDirName:"backend-master",slug:"/backend-master/backend18",permalink:"/docs/backend-master/backend18",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"backSidebar",previous:{title:"17. [BackEnd] db error handle",permalink:"/docs/backend-master/backend17"},next:{title:"19. [BackEnd] golang Custom Matcher \uad6c\ud604",permalink:"/docs/backend-master/backend19"}},i={},u=[{value:"\ud559\uc2b5 \ubaa9\ud45c",id:"\ud559\uc2b5-\ubaa9\ud45c",level:2},{value:"\ube44\ubc00\ubc88\ud638 \uc800\uc7a5 \ubc29\ubc95",id:"\ube44\ubc00\ubc88\ud638-\uc800\uc7a5-\ubc29\ubc95",level:2},{value:"golang\uc5d0\uc11c \uc801\uc6a9",id:"golang\uc5d0\uc11c-\uc801\uc6a9",level:2},{value:"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ubcc0\uacbd",id:"\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ubcc0\uacbd",level:3},{value:"create user API \uc0dd\uc131",id:"create-user-api-\uc0dd\uc131",level:2}],p={toc:u},d="wrapper";function c(e){let{components:r,...s}=e;return(0,a.kt)(d,(0,t.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"18-backend-password-hash--implement-request-user-api"},"18. ","[BackEnd]"," password hash & implement request user api"),(0,a.kt)("h2",{id:"\ud559\uc2b5-\ubaa9\ud45c"},"\ud559\uc2b5 \ubaa9\ud45c"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ube44\ubc00\ubc88\ud638 \ud574\uc2dc"),(0,a.kt)("h2",{id:"\ube44\ubc00\ubc88\ud638-\uc800\uc7a5-\ubc29\ubc95"},"\ube44\ubc00\ubc88\ud638 \uc800\uc7a5 \ubc29\ubc95"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ube44\ubc00\ubc88\ud638\ub294 \ud3c9\ubb38\uc73c\ub85c \ub123\ub294 \uacbd\uc6b0\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. bcrypt\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uc2dc \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9e4\uac1c\ubcc0\uc218\ub85c \ub77c\uc6b4\ub4dc \uc218, \uc54c\uace0\ub9ac\uc998 \ubc18\ubcf5 \uc218 \ub4f1\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubb34\uc791\uc704 \uc194\ud2b8 \uae30\ub2a5\ub3c4 \uc81c\uacf5\ud558\uc5ec \ub808\uc778\ubcf4\uc6b0 \ud14c\uc774\ube14 \uacf5\uaca9\uc5d0 \ub300\uc751\uc774 \ub429\ub2c8\ub2e4. \uc774 \uc194\ud2b8\uac00 \ud574\uc2dc \ubb38\uc790\uc5f4\uc5d0 \ud3ec\ud568\ub418\uc5b4\uc11c \uc0dd\uc131\ub418\uae30\uc5d0 \ubcf4\uc548\uc774 \uac15\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(3537).Z,width:"1426",height:"215"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALG")," : \uc54c\uace0\ub9ac\uc998 \uc2dd\ubcc4\uc790, bcrypt \uc54c\uace0\ub9ac\uc998\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"2A"),"\ub77c\uace0 \ud558\ub124\uc694."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"COST")," : 10\uc774\ub77c\uba74 2^10\ud68c\uc758 \ud0a4 \ud655\uc7a5 \ub77c\uc6b4\ub4dc\uac00 \uc788\ub2e4\ub294 \uc758\ubbf8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SALT")," : 16\ubc14\uc774\ud2b8\uc774\uace0 128\ube44\ud2b8\uc778 \uc194\ud2b8 22\uc790\uc758 \ubb38\uc790\uc5f4\uc744 base64 \ud615\uc2dd\uc73c\ub85c \uc778\ucf54\ub529\ub41c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HASH")," : 31\uae00\uc790 24\ubc14\uc774\ud2b8 \uac12"),(0,a.kt)("p",null,"\ub85c\uc9c1\uc740 "),(0,a.kt)("p",null,"\uc800\uc7a5 \ub85c\uc9c1 >> \ube44\ubc00\ubc88\ud638 \uc785\ub825 > cost, salt \uc801\uc6a9\ud574\uc11c \uc800\uc7a5"),(0,a.kt)("p",null,"\ube44\ubc00\ubc88\ud638 \ube44\uad50 >> \ube44\ubc00\ubc88\ud638 \uc785\ub825 > cost, salt \uc801\uc6a9, \uc800\uc7a5\ub41c \ube44\ubc00\ubc88\ud638\uc640 \ube44\uad50"),(0,a.kt)("h2",{id:"golang\uc5d0\uc11c-\uc801\uc6a9"},"golang\uc5d0\uc11c \uc801\uc6a9"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func HashPassword(password string) (string, error) {\n    hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)\n    if err != nil {\n        return "", fmt.Errorf("[ERR] FAILED TO HASH PASSWORD:%w", err)\n    }\n    return string(hashPassword), nil\n}\n\nfunc CheckPassword(password string, hashedPassword string) error {\n    return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))\n}\n')),(0,a.kt)("p",null,"bcrypt \ud328\ud0a4\uc9c0\uc5d0 \ub2e4 \ub4e4\uc5b4\uc788\uae30 \ub54c\ubb38\uc5d0 \uadf8\uac70 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ubcc0\uacbd"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ubcc0\uacbd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func createRandomUser(t *testing.T) User {\n    hashedPassword, err := util.HashPassword(util.RandomStr(6))\n    require.NoError(t, err)\n    arg := CreateUserParams{\n        Username:       util.RandomOwner(),\n        HashedPassword: hashedPassword,\n        FullName:       util.RandomOwner(),\n        Email:          util.RandomEmail(),\n    }\n    .\n    .\n    .\n}\n")),(0,a.kt)("p",null,"\ub9cc\ub4e4\uc5b4\ub454 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc11c \ube44\ubc00\ubc88\ud638\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(6976).Z,width:"1041",height:"713"})),(0,a.kt)("p",null,"\uc798 \uc800\uc7a5\ub418\ub294 \ubaa8\uc2b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func TestPassword(t *testing.T) {\n    password := RandomStr(6)\n\n    // \uc62c\ubc14\ub978 \ube44\ubc00\ubc88\ud638 \uccb4\ud06c\n    hashPassword1, err := HashPassword(password)\n    require.NoError(t, err)\n    require.NotEmpty(t, hashPassword1)\n\n    err = CheckPassword(password, hashPassword1)\n    require.NoError(t, err)\n\n    hashPassword2, err := HashPassword(password)\n    require.NoError(t, err)\n    require.NotEmpty(t, hashPassword2)\n    require.NotEqual(t, hashPassword1, hashPassword2)\n}\n")),(0,a.kt)("p",null,"\uac19\uc740 \ube44\ubc00\ubc88\ud638\ub97c \ud574\uc2dc \ud588\uc744 \ub54c \ub2e4\ub978 \ud574\uc2dc \uac12\uc774 \uc800\uc7a5\ub428\uc744 \ud655\uc778\ud558\uae30\ub3c4 \ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5b4\ub5a4 \ub3d9\uc791 \uc6d0\ub9ac\uac00 \uc788\ub098\uc694?"),(0,a.kt)("p",null,"\ubb34\uc791\uc704 \uc194\ud2b8 \ub54c\ubb38\uc5d0 \uc0dd\uc131\ub41c \ud574\uc2dc \uac12\uc774 \ub9e4\ubc88 \ub2ec\ub77c\uc9c4\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"create-user-api-\uc0dd\uc131"},"create user API \uc0dd\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type CreateUserRequest struct {\n    Username string `json:"username" binding:"required,alphanum"`\n    Password string `json:"password" binding:"required,min=6"`\n    FullName string `json:"full_name" binding:"required"`\n    Email    string `json:"email" binding:"required,email"`\n}\n')),(0,a.kt)("p",null,"\ud2b9\uc774\ud55c \ubd80\ubd84\uc774 \uba87\uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alphanum")," : \uc544\uc2a4\ud0a4\ucf54\ub4dc\uc0c1 \uc54c\ud30c\ubcb3\uacfc \uc22b\uc790\ub9cc \uac00\ub2a5\ud558\ub3c4\ub85d \uc81c\ud55c\ud558\ub294 \ubc14\uc778\ub529\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"email")," : \uc774\uba54\uc77c \ubb38\uc790\uc5f4\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud0dc\uadf8\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-playground/validator"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc591\ud55c \ud0dc\uadf8\ub4e4\uc744 \ub9cc\ub098\ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (server *Server) createUser(ctx *gin.Context) {\n    var req CreateUserRequest\n\n    // \uc785\ub825\uac12 \uc720\ud6a8\uc131 \uac80\uc0ac\n    if err := ctx.ShouldBindJSON(&req); err != nil {\n        ctx.JSON(http.StatusBadRequest, errorResponse(err))\n        return\n    }\n\n    hashedPassword, err := util.HashPassword(req.Password)\n    if err != nil {\n        ctx.JSON(http.StatusInternalServerError, errorResponse(err))\n        return\n    }\n\n    // \uc778\uc790 \uc0dd\uc131\n    arg := db.CreateUserParams{\n        Username:       req.Username,\n        HashedPassword: hashedPassword,\n        FullName:       req.FullName,\n        Email:          req.Email,\n    }\n\n    // \uc720\uc800 \uc0dd\uc131\n    user, err := server.store.CreateUser(ctx, arg)\n    if err != nil {\n        if pqErr, ok := err.(*pq.Error); ok {\n            switch pqErr.Code.Name() {\n            case "unique_violation":\n                ctx.JSON(http.StatusForbidden, errorResponse(err))\n                return\n            }\n        }\n        ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // \uc11c\ubc84 \uc5d0\ub7ec\n        return\n    }\n\n    // \uc131\uacf5 \uc2dc\n    ctx.JSON(http.StatusOK, user)\n}\n')),(0,a.kt)("p",null,"\uadf8\ub0e5 \ud558\ub358\ub300\ub85c api \ub9cc\ub4e4 \uc218 \uc788\uc5c8\uace0 \ub2e4\ub978 \ucf54\ub4dc\uc640 \uc2e0\uacbd\uc368\uc57c \ud558\ub294 \ubd80\ubd84\uc740 users \ud14c\uc774\ube14\uc5d0\ub294 2\uac1c(username,email)\uc758 unique \uc81c\uc57d\uc870\uac74\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \uc870\uac74\uc5d0 \ub300\ud574\uc11c 403 \ucc98\ub9ac\ub97c \ud574\uc8fc\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc57c \ud558\ub294 \uc810\uc774\ub2e4."),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c server.go\uc5d0 api \ub4f1\ub85d\ub9cc \ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(1463).Z,width:"971",height:"638"})),(0,a.kt)("p",null,"\ub4f1\ub85d\ud558\uace0 api \uc3d8\uba74 \uc798\ub41c\ub2e4! \uadfc\ub370 \ud574\uc2dc \ube44\ubc00\ubc88\ud638\uac00 \ub178\ucd9c\ub418\ub2c8 \uc774\ub97c \uc81c\uac70\ud574\uc57c \ud560 \ud544\uc694\uac00 \uc788\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ud558\uace0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type CreateUserResponse struct {\n    Username              string    `json:"username"`\n    FullName              string    `json:"full_name"`\n    Email                 string    `json:"email"`\n    PasswordLastChangedAt time.Time `json:"password_last_changed_at"`\n    CreatedAt             time.Time `json:"created_at"`\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\uc751\ub2f5\ud558\ub294 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uba74 \ub41c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"{\n    .\n    .\n    .\n    res := CreateUserResponse{\n        Username:              user.Username,\n        FullName:              user.FullName,\n        Email:                 user.Email,\n        PasswordLastChangedAt: user.PasswordLastChangedAt,\n        CreatedAt:             user.CreatedAt,\n    }\n    // \uc131\uacf5 \uc2dc\n    ctx.JSON(http.StatusOK, res)\n}\n")),(0,a.kt)("p",null,"\uc774\ub85c\uc368 \uc751\ub2f5\uac12\ub3c4 \uc6d0\ud558\ub294 \uac12\ub9cc \ubcf4\ub0bc \uc218 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud588\ub2e4."))}c.isMDXComponent=!0},3537:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/image1-f77beb82eef061d8d46ab43215fb264e.png"},6976:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/image2-9e83e0cb9f9a7844ada2e35d3c8977d9.png"},1463:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/image3-ed493c3db9edb0c54ff8cb7bf38baa5e.png"}}]);