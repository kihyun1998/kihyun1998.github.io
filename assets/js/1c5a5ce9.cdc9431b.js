"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3614],{3905:(e,r,n)=>{n.d(r,{Zo:()=>k,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},k=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,m=d["".concat(u,".").concat(p)]||d[p]||c[p]||o;return n?t.createElement(m,i(i({ref:r},k),{},{components:n})):t.createElement(m,i({ref:r},k))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98469:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={sidebar_position:21},i="21. [BackEnd] PASETO & JWT in Golang",l={unversionedId:"backend-master/backend21",id:"backend-master/backend21",title:"21. [BackEnd] PASETO & JWT in Golang",description:"\uc0ac\uc804 \ucf54\ub4dc",source:"@site/docs/backend-master/backend21.md",sourceDirName:"backend-master",slug:"/backend-master/backend21",permalink:"/docs/backend-master/backend21",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"backSidebar",previous:{title:"20. [BackEnd] PASETO",permalink:"/docs/backend-master/backend20"},next:{title:"22. [BackEnd] PASETO & JWT \ub97c \uc774\uc6a9\ud55c \ub85c\uadf8\uc778",permalink:"/docs/backend-master/backend22"}},u={},s=[{value:"\uc0ac\uc804 \ucf54\ub4dc",id:"\uc0ac\uc804-\ucf54\ub4dc",level:2},{value:"JWT",id:"jwt",level:2},{value:"\uc124\uce58\ud558\ub294 \ubc29\ubc95",id:"\uc124\uce58\ud558\ub294-\ubc29\ubc95",level:3},{value:"\uad6c\uc870\uccb4, \uc0dd\uc131\uc790",id:"\uad6c\uc870\uccb4-\uc0dd\uc131\uc790",level:3},{value:"Maker \ud544\uc218 \uba54\uc18c\ub4dc",id:"maker-\ud544\uc218-\uba54\uc18c\ub4dc",level:3},{value:"CreateToken",id:"createtoken",level:3},{value:"VerifyToken",id:"verifytoken",level:3},{value:"PASETO",id:"paseto",level:2},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:3},{value:"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0",id:"jwt-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ud574\uacb0",level:2}],k={toc:s},d="wrapper";function c(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},k,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"21-backend-paseto--jwt-in-golang"},"21. ","[BackEnd]"," PASETO & JWT in Golang"),(0,a.kt)("h2",{id:"\uc0ac\uc804-\ucf54\ub4dc"},"\uc0ac\uc804 \ucf54\ub4dc"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Maker interface {\n    CreateToken(username string, duration time.Duration) (string, error)\n\n    VerifyToken(token string) (*Payload, error)\n}\n")),(0,a.kt)("p",null,"\ud1a0\ud070\uc5d0 \ub300\ud55c \uc0dd\uc131\uacfc \uac80\uc99d\uc744 \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Payload struct {\n    ID        uuid.UUID `json:"id"`\n    Username  string    `json:"username"`\n    IssueAt   time.Time `json:"issued_at"`\n    ExpiredAt time.Time `json:"expired_at"`\n}\n')),(0,a.kt)("p",null,"\uac80\uc99d\uc5d0 \ud6c4 \ubc18\ud658\ub418\ub294 \ud398\uc774\ub85c\ub4dc \uad6c\uc870\uccb4\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"uuid\ub97c \uc704\ud574\uc11c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/google/uuid\n")),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \ud398\uc774\ub85c\ub4dc \uc0dd\uc131\nfunc NewPayload(username string, duration time.Duration) (*Payload, error) {\n    tokenID, err := uuid.NewRandom()\n    if err != nil {\n        return nil, err\n    }\n\n    payload := &Payload{\n        ID:        tokenID,\n        Username:  username,\n        IssueAt:   time.Now(),\n        ExpiredAt: time.Now().Add(duration),\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"\ud574\ub2f9 \ud568\uc218\ub85c Payload\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ubcc4\ud55c \ubd80\ubd84\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"jwt"},"JWT"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc124\uce58\ud558\ub294-\ubc29\ubc95"},"\uc124\uce58\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/golang-jwt/jwt/v5\n")),(0,a.kt)("p",null,"\uadfc\ub370 \uc601\uc0c1\uc774\ub791 \ubc84\uc804\uc774 \ub2e4\ub985\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad6c\uc870\uccb4-\uc0dd\uc131\uc790"},"\uad6c\uc870\uccb4, \uc0dd\uc131\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type JWTMaker struct {\n    secretKey string\n}\n\nfunc NewJWTMaker(secretKey string) (Maker, error) {\n    if len(secretKey) < minSecretKeySize {\n        return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)\n    }\n    return &JWTMaker{secretKey}, nil\n}\n')),(0,a.kt)("p",null,"JWTMaker \uad6c\uc870\uccb4\uc640 \uc0dd\uc131\uc790\uc785\ub2c8\ub2e4. Maker\ub97c \ubc18\ud658\ud558\ub294\ub370 Maker \ud544\uc218 \uba54\uc18c\ub4dc \ub4e4\uc744 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"maker-\ud544\uc218-\uba54\uc18c\ub4dc"},"Maker \ud544\uc218 \uba54\uc18c\ub4dc"),(0,a.kt)("p",null,".\n.\n."),(0,a.kt)("p",null,"\uc544\ub9c8 payload\ub97c \uacf5\uc720\ud558\ub824 \ud588\ub358 \uac83 \uac19\uc740\ub370 \uadf8\ub807\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"jwt \uc804\uc6a9 claim\uc744 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"ype Payload struct {\n    jwt.RegisteredClaims\n}\n\n// \ud398\uc774\ub85c\ub4dc \uc0dd\uc131\nfunc NewPayload(username string, duration time.Duration) (*Payload, error) {\n    tokenID, err := uuid.NewRandom()\n    if err != nil {\n        return nil, err\n    }\n\n    payload := &Payload{\n        jwt.RegisteredClaims{\n            ID:        tokenID.String(),\n            IssuedAt:  jwt.NewNumericDate(time.Now()),\n            NotBefore: jwt.NewNumericDate(time.Now()),\n            ExpiresAt: jwt.NewNumericDate(time.Now().Add(duration)),\n            Issuer:    username,\n        },\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"jwt.RegisteredClaims\ub97c \ud65c\uc6a9\ud574\uc11c \uc124\uc815\ud55c \uac12\uc744 \ud1b5\ud574"),(0,a.kt)("h3",{id:"createtoken"},"CreateToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (maker *JWTMaker) CreateToken(username string, duration time.Duration) (string, error) {\n    payload, err := NewPayload(username, duration)\n    if err != nil {\n        return "", nil\n    }\n\n    jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)\n    return jwtToken.SignedString([]byte(maker.secretKey))\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud574\uc57c payload\uac00 NewWithClaims\uc5d0 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc548\uadf8\ub7ec\uba74 \ucee4\uc2a4\ud140 \ud568\uc218\ub4e4\uc744 \uc5c4\uccad\ub098\uac8c \ub9ce\uc774 \uad6c\ud604\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"verifytoken"},"VerifyToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (maker *JWTMaker) VerifyToken(token string) (*Payload, error) {\n    keyFunc := func(token *jwt.Token) (interface{}, error) {\n        _, ok := token.Method.(*jwt.SigningMethodHMAC)\n        if !ok {\n            return nil, ErrTokenInvalid\n        }\n        return []byte(maker.secretKey), nil\n    }\n    jwtToken, err := jwt.ParseWithClaims(token, &Payload{}, keyFunc)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    payload, ok := jwtToken.Claims.(*Payload)\n    if !ok {\n        return nil, ErrTokenInvalid\n    }\n    return payload, nil\n}\n")),(0,a.kt)("p",null,"\uac80\uc99d\ud568\uc218\ub3c4 \uadf8\ub807\uc2b5\ub2c8\ub2e4. \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c \uc815\ud655\ud558\uac8c \uc804\ub2ec\ud558\uc9c0 \ubabb\ud558\uace0 log.Fatal\ub85c \ub3fc\uc788\uc2b5\ub2c8\ub2e4. \uc800\uac78 \uc548\ud558\uba74 \uc880 \uc774\uc0c1\ud558\ub354\ub77c\uad6c\uc694. \uac12\uc774 \uc548\uc640\uc57c\ud558\ub294\ub370 \uac12\uc774 \uc804\ub2ec\ub418\uace0 \uc554\ud2bc.. \uadf8\ub807\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"paseto"},"PASETO"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/o1egl/paseto\n")),(0,a.kt)("p",null,"\uc774\uac74 \ub2e4\ud589\ud788 \uc601\uc0c1\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type PasetoMaker struct {\n    paseto       *paseto.V2\n    symmetricKey []byte\n}\n\nfunc NewPasetoMaker(symmetricKey string) (MakerWantPaseto, error) {\n    if len(symmetricKey) != chacha20poly1305.KeySize {\n        return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)\n    }\n\n    maker := &PasetoMaker{\n        paseto:       paseto.NewV2(),\n        symmetricKey: []byte(symmetricKey),\n    }\n    return maker, nil\n}\n\nfunc (maker *PasetoMaker) CreateToken(username string, duration time.Duration) (string, error) {\n    payload, err := NewPasetoPayload(username, duration)\n    if err != nil {\n        return "", err\n    }\n    return maker.paseto.Encrypt(maker.symmetricKey, payload, nil)\n}\n\nfunc (maker *PasetoMaker) VerifyToken(token string) (*PasetoPayload, error) {\n    payload := &PasetoPayload{}\n    err := maker.paseto.Decrypt(token, maker.symmetricKey, payload, nil)\n    if err != nil {\n        return nil, ErrTokenInvalid\n    }\n\n    err = payload.Valid()\n    if err != nil {\n        return nil, err\n    }\n    return payload, nil\n}\n')),(0,a.kt)("p",null,"\uadf8\ub0e5 Encrypt\ud568\uc218 \uc4f0\uace0 Decrypt \ud568\uc218 \uc4f0\uba74 \ub05d\uc785\u3134\ub514\u314f. \uc27d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"jwt-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\ud574\uacb0"},"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"JWT \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \ud574\uacb0\ud588\uc2b5\ub2c8\ub2e4. \uc9d1\uc5d0\uc11c \ub9c8\uc800 \uc815\ub9ac\ud558\ub824 \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func TestJWTMaker(t *testing.T) {\n    maker, err := NewJWTMaker(util.RandomStr(32))\n    require.NoError(t, err)\n\n    username := util.RandomOwner()\n    duration := time.Minute\n\n    issuedAt := time.Now()\n    expiredAt := issuedAt.Add(duration)\n\n    token, err := maker.CreateToken(username, duration)\n    require.NoError(t, err)\n    require.NotEmpty(t, token)\n\n    payload, err := maker.VerifyToken(token)\n    require.NoError(t, err)\n    require.NotEmpty(t, payload)\n\n    require.NotZero(t, payload.ID)\n    require.Equal(t, username, payload.Issuer)\n    require.WithinDuration(t, issuedAt, payload.IssuedAt.Time, time.Second)\n    require.WithinDuration(t, expiredAt, payload.ExpiresAt.Time, time.Second)\n}\n\nfunc TestExpiredJWTToken(t *testing.T) {\n    maker, err := NewJWTMaker(util.RandomStr(32))\n    require.NoError(t, err)\n\n    token, err := maker.CreateToken(util.RandomOwner(), -time.Minute)\n    require.NoError(t, err)\n    require.NotEmpty(t, token)\n\n    payload, err := maker.VerifyToken(token)\n    require.Error(t, err)\n    require.EqualError(t, err, ErrTokenExpired.Error())\n    require.Nil(t, payload)\n}\n\nfunc TestInvalidJWTTokenAlgNone(t *testing.T) {\n    payload, err := NewJWTPayload(util.RandomOwner(), time.Minute)\n    require.NoError(t, err)\n\n    jwtToken := jwt.NewWithClaims(jwt.SigningMethodNone, payload)\n    token, err := jwtToken.SignedString(jwt.UnsafeAllowNoneSignatureType)\n    require.NoError(t, err)\n\n    maker, err := NewJWTMaker(util.RandomStr(32))\n    require.NoError(t, err)\n\n    payload, err = maker.VerifyToken(token)\n    require.Error(t, err)\n    require.EqualError(t, err, ErrTokenInvalid.Error())\n    require.Nil(t, payload)\n}\n")),(0,a.kt)("p",null,"\ud1a0\ud070 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc774\ub7ac\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud1a0\ud070\uc758 Verify \ud568\uc218\uac00 \ubc14\ub00c\uc5c8\ub294\ub370\uc694. (\uadf8\ub9ac\uace0 Payload\ub3c4 PASETO\ub791 JWT \ub098\ub214)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (maker *JWTMaker) VerifyToken(token string) (*JWTPayload, error) {\n    keyFunc := func(token *jwt.Token) (interface{}, error) {\n        _, ok := token.Method.(*jwt.SigningMethodHMAC)\n        if !ok {\n            return nil, ErrTokenInvalid\n        }\n        return []byte(maker.secretKey), nil\n    }\n    jwtToken, err := jwt.ParseWithClaims(token, &JWTPayload{}, keyFunc)\n    if err != nil {\n        if strings.Contains(err.Error(), "token is expired") {\n            return nil, ErrTokenExpired\n        } else if strings.Contains(err.Error(), "token is unverifiable") {\n            return nil, ErrTokenInvalid\n        } else {\n            log.Println(err.Error())\n            return nil, err\n        }\n    }\n\n    payload, ok := jwtToken.Claims.(*JWTPayload)\n    if !ok {\n        return nil, ErrTokenInvalid\n    }\n    return payload, nil\n}\n')),(0,a.kt)("p",null,"Fatal \ud558\ub2c8\uae4c return nil\uc774 \uc548\ub418\uc11c \uadf8\ub0e5 \uc774\uc0c1\ud558\ub354\ub77c\uad6c\uc694 \uadf8\ub798\uc11c \uaf2d return nil\uc744 \uc704\ud574\uc11c \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubc29\ubc95\uc740 \ub85c\uadf8\ub97c \ucc0d\uc5b4\ubcf4\uace0 \ud574\ub2f9 \ub85c\uadf8\uac00 \ub098\uc628 \ubb38\uc790\uc5f4\uc744 \ud3ec\ud568\ud55c \uc5d0\ub7ec \ubb38\uc790\uc5f4\uc774\ub77c\uba74(err.Error()) return nil\uacfc \ud574\ub2f9 \uc5d0\ub7ec\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \ud588\ub124\uc694 \uc774\ub7ec\uba74 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc804\ubd80 \ud1b5\uacfc\ub429\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);