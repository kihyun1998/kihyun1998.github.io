"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3614],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(u,".").concat(p)]||d[p]||k[p]||o;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8469:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:21},l="21. [BackEnd] PASETO & JWT in Golang",i={unversionedId:"backend-master/backend21",id:"backend-master/backend21",title:"21. [BackEnd] PASETO & JWT in Golang",description:"\uc0ac\uc804 \ucf54\ub4dc",source:"@site/docs/backend-master/backend21.md",sourceDirName:"backend-master",slug:"/backend-master/backend21",permalink:"/docs/backend-master/backend21",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"backSidebar",previous:{title:"20. [BackEnd] PASETO",permalink:"/docs/backend-master/backend20"}},u={},s=[{value:"\uc0ac\uc804 \ucf54\ub4dc",id:"\uc0ac\uc804-\ucf54\ub4dc",level:2},{value:"JWT",id:"jwt",level:2},{value:"\uc124\uce58\ud558\ub294 \ubc29\ubc95",id:"\uc124\uce58\ud558\ub294-\ubc29\ubc95",level:3},{value:"\uad6c\uc870\uccb4, \uc0dd\uc131\uc790",id:"\uad6c\uc870\uccb4-\uc0dd\uc131\uc790",level:3},{value:"Maker \ud544\uc218 \uba54\uc18c\ub4dc",id:"maker-\ud544\uc218-\uba54\uc18c\ub4dc",level:3},{value:"CreateToken",id:"createtoken",level:3},{value:"VerifyToken",id:"verifytoken",level:3},{value:"PASETO",id:"paseto",level:2},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:3},{value:"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0",id:"jwt-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ud574\uacb0",level:2}],c={toc:s},d="wrapper";function k(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"21-backend-paseto--jwt-in-golang"},"21. ","[BackEnd]"," PASETO & JWT in Golang"),(0,a.kt)("h2",{id:"\uc0ac\uc804-\ucf54\ub4dc"},"\uc0ac\uc804 \ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Maker interface {\n    CreateToken(username string, duration time.Duration) (string, error)\n\n    VerifyToken(token string) (*Payload, error)\n}\n")),(0,a.kt)("p",null,"\ud1a0\ud070\uc5d0 \ub300\ud55c \uc0dd\uc131\uacfc \uac80\uc99d\uc744 \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Payload struct {\n    ID        uuid.UUID `json:"id"`\n    Username  string    `json:"username"`\n    IssueAt   time.Time `json:"issued_at"`\n    ExpiredAt time.Time `json:"expired_at"`\n}\n')),(0,a.kt)("p",null,"\uac80\uc99d\uc5d0 \ud6c4 \ubc18\ud658\ub418\ub294 \ud398\uc774\ub85c\ub4dc \uad6c\uc870\uccb4\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"uuid\ub97c \uc704\ud574\uc11c "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/google/uuid\n")),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \ud398\uc774\ub85c\ub4dc \uc0dd\uc131\nfunc NewPayload(username string, duration time.Duration) (*Payload, error) {\n    tokenID, err := uuid.NewRandom()\n    if err != nil {\n        return nil, err\n    }\n\n    payload := &Payload{\n        ID:        tokenID,\n        Username:  username,\n        IssueAt:   time.Now(),\n        ExpiredAt: time.Now().Add(duration),\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"\ud574\ub2f9 \ud568\uc218\ub85c Payload\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ubcc4\ud55c \ubd80\ubd84\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"jwt"},"JWT"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc124\uce58\ud558\ub294-\ubc29\ubc95"},"\uc124\uce58\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/golang-jwt/jwt/v5\n")),(0,a.kt)("p",null,"\uadfc\ub370 \uc601\uc0c1\uc774\ub791 \ubc84\uc804\uc774 \ub2e4\ub985\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad6c\uc870\uccb4-\uc0dd\uc131\uc790"},"\uad6c\uc870\uccb4, \uc0dd\uc131\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type JWTMaker struct {\n    secretKey string\n}\n\nfunc NewJWTMaker(secretKey string) (Maker, error) {\n    if len(secretKey) < minSecretKeySize {\n        return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)\n    }\n    return &JWTMaker{secretKey}, nil\n}\n')),(0,a.kt)("p",null,"JWTMaker \uad6c\uc870\uccb4\uc640 \uc0dd\uc131\uc790\uc785\ub2c8\ub2e4. Maker\ub97c \ubc18\ud658\ud558\ub294\ub370 Maker \ud544\uc218 \uba54\uc18c\ub4dc \ub4e4\uc744 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"maker-\ud544\uc218-\uba54\uc18c\ub4dc"},"Maker \ud544\uc218 \uba54\uc18c\ub4dc"),(0,a.kt)("p",null,".\n.\n."),(0,a.kt)("p",null,"\uc544\ub9c8 payload\ub97c \uacf5\uc720\ud558\ub824 \ud588\ub358 \uac83 \uac19\uc740\ub370 \uadf8\ub807\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"jwt \uc804\uc6a9 claim\uc744 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"ype Payload struct {\n    jwt.RegisteredClaims\n}\n\n// \ud398\uc774\ub85c\ub4dc \uc0dd\uc131\nfunc NewPayload(username string, duration time.Duration) (*Payload, error) {\n    tokenID, err := uuid.NewRandom()\n    if err != nil {\n        return nil, err\n    }\n\n    payload := &Payload{\n        jwt.RegisteredClaims{\n            ID:        tokenID.String(),\n            IssuedAt:  jwt.NewNumericDate(time.Now()),\n            NotBefore: jwt.NewNumericDate(time.Now()),\n            ExpiresAt: jwt.NewNumericDate(time.Now().Add(duration)),\n            Issuer:    username,\n        },\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"jwt.RegisteredClaims\ub97c \ud65c\uc6a9\ud574\uc11c \uc124\uc815\ud55c \uac12\uc744 \ud1b5\ud574"),(0,a.kt)("h3",{id:"createtoken"},"CreateToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (maker *JWTMaker) CreateToken(username string, duration time.Duration) (string, error) {\n    payload, err := NewPayload(username, duration)\n    if err != nil {\n        return "", nil\n    }\n\n    jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)\n    return jwtToken.SignedString([]byte(maker.secretKey))\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud574\uc57c payload\uac00 NewWithClaims\uc5d0 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc548\uadf8\ub7ec\uba74 \ucee4\uc2a4\ud140 \ud568\uc218\ub4e4\uc744 \uc5c4\uccad\ub098\uac8c \ub9ce\uc774 \uad6c\ud604\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"verifytoken"},"VerifyToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (maker *JWTMaker) VerifyToken(token string) (*Payload, error) {\n    keyFunc := func(token *jwt.Token) (interface{}, error) {\n        _, ok := token.Method.(*jwt.SigningMethodHMAC)\n        if !ok {\n            return nil, ErrTokenInvalid\n        }\n        return []byte(maker.secretKey), nil\n    }\n    jwtToken, err := jwt.ParseWithClaims(token, &Payload{}, keyFunc)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    payload, ok := jwtToken.Claims.(*Payload)\n    if !ok {\n        return nil, ErrTokenInvalid\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"\uac80\uc99d\ud568\uc218\ub3c4 \uadf8\ub807\uc2b5\ub2c8\ub2e4. \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c \uc815\ud655\ud558\uac8c \uc804\ub2ec\ud558\uc9c0 \ubabb\ud558\uace0 log.Fatal\ub85c \ub3fc\uc788\uc2b5\ub2c8\ub2e4. \uc800\uac78 \uc548\ud558\uba74 \uc880 \uc774\uc0c1\ud558\ub354\ub77c\uad6c\uc694. \uac12\uc774 \uc548\uc640\uc57c\ud558\ub294\ub370 \uac12\uc774 \uc804\ub2ec\ub418\uace0 \uc554\ud2bc.. \uadf8\ub807\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"paseto"},"PASETO"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/o1egl/paseto\n")),(0,a.kt)("p",null,"\uc774\uac74 \ub2e4\ud589\ud788 \uc601\uc0c1\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type PasetoMaker struct {\n    paseto       *paseto.V2\n    symmetricKey []byte\n}\n\nfunc NewPasetoMaker(symmetricKey string) (MakerWantPaseto, error) {\n    if len(symmetricKey) != chacha20poly1305.KeySize {\n        return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)\n    }\n\n    maker := &PasetoMaker{\n        paseto:       paseto.NewV2(),\n        symmetricKey: []byte(symmetricKey),\n    }\n    return maker, nil\n}\n\nfunc (maker *PasetoMaker) CreateToken(username string, duration time.Duration) (string, error) {\n    payload, err := NewPasetoPayload(username, duration)\n    if err != nil {\n        return "", err\n    }\n    return maker.paseto.Encrypt(maker.symmetricKey, payload, nil)\n}\n\nfunc (maker *PasetoMaker) VerifyToken(token string) (*PasetoPayload, error) {\n    payload := &PasetoPayload{}\n    err := maker.paseto.Decrypt(token, maker.symmetricKey, payload, nil)\n    if err != nil {\n        return nil, ErrTokenInvalid\n    }\n\n    err = payload.Valid()\n    if err != nil {\n        return nil, err\n    }\n    return payload, nil\n}\n')),(0,a.kt)("p",null,"\uadf8\ub0e5 Encrypt\ud568\uc218 \uc4f0\uace0 Decrypt \ud568\uc218 \uc4f0\uba74 \ub05d\uc785\u3134\ub514\u314f. \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"jwt-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ud574\uacb0"},"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0\ud588\uc2b5\ub2c8\ub2e4. \uc9d1\uc5d0\uc11c \ub9c8\uc800 \uc815\ub9ac\ud558\ub824 \ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);