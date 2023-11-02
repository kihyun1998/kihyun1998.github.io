"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[5983],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,m=p["".concat(i,".").concat(d)]||p[d]||k[d]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:5},o="05. [BackEnd] Golang CRUD",c={unversionedId:"backend-master/backend5",id:"backend-master/backend5",title:"05. [BackEnd] Golang CRUD",description:"CRUD\ub780",source:"@site/docs/backend-master/backend5.md",sourceDirName:"backend-master",slug:"/backend-master/backend5",permalink:"/docs/backend-master/backend5",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backSidebar",previous:{title:"04. [BackEnd] DB Migration in golang",permalink:"/docs/backend-master/backend4"}},i={},s=[{value:"CRUD\ub780",id:"crud\ub780",level:2},{value:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:2},{value:"sqlc \uc124\uce58",id:"sqlc-\uc124\uce58",level:2},{value:"\ucffc\ub9ac \uc791\uc131",id:"\ucffc\ub9ac-\uc791\uc131",level:2},{value:"\uc124\uba85",id:"\uc124\uba85",level:3},{value:"sqlc generate\ud558\uae30",id:"sqlc-generate\ud558\uae30",level:2},{value:"models.go",id:"modelsgo",level:3},{value:"db.go",id:"dbgo",level:3},{value:"account.sql.go",id:"accountsqlgo",level:3},{value:"go mod init",id:"go-mod-init",level:3},{value:"\uc77d\uae30 \ud558\uae30",id:"\uc77d\uae30-\ud558\uae30",level:2},{value:"\ud558\ub098 \uc77d\uae30",id:"\ud558\ub098-\uc77d\uae30",level:3},{value:"\uc5ec\ub7ec\uac1c \uc77d\uae30",id:"\uc5ec\ub7ec\uac1c-\uc77d\uae30",level:3},{value:"\uc5c5\ub370\uc774\ud2b8 \ud558\uae30",id:"\uc5c5\ub370\uc774\ud2b8-\ud558\uae30",level:2},{value:"\uc0ad\uc81c \ud558\uae30",id:"\uc0ad\uc81c-\ud558\uae30",level:2}],u={toc:s},p="wrapper";function k(e){let{components:n,...r}=e;return(0,l.kt)(p,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"05-backend-golang-crud"},"05. ","[BackEnd]"," Golang CRUD"),(0,l.kt)("h2",{id:"crud\ub780"},"CRUD\ub780"),(0,l.kt)("p",null,"C\ub294 Create"),(0,l.kt)("p",null,"R\uc740 Read"),(0,l.kt)("p",null,"U\ub294 Update"),(0,l.kt)("p",null,"D\ub294 Delete\uc758 \uc57d\uc790\ub2e4."),(0,l.kt)("h2",{id:"\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"database/sql")),(0,l.kt)("p",null,"\ube60\ub974\uace0 \ub611\ubc14\ub974\uc9c0\ub9cc, \uc2e4\uc218\ud558\uae30 \uc27d\uace0 \ub7f0\ud0c0\uc784 \uc804\uc5d0 \uc5d0\ub7ec\uac00 \uc548\ub0a8"),(0,l.kt)("p",null,"\ub85c\uc6b0\ub808\ubca8\uc784"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"gorm")),(0,l.kt)("p",null,"CRUD \ud568\uc218\ub4e4 \uc774\ubbf8 \uad6c\ud604\ub418\uc5b4\uc788\uc74c \uadf8\ub798\uc11c \ucf54\ub4dc \uc9e7\uc544\uc9d0"),(0,l.kt)("p",null,"\ub2e8\uc810\uc740 gorm \ud568\uc218\ub4e4\uc744 \ubc30\uc6cc\uc57c\ud55c\ub2e4\ub294 \uc810, \ud2b8\ub798\ud53d \ub9ce\uc544\uc9c0\uba74 \ub290\ub9ac\ub2e4."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"SQLX")),(0,l.kt)("p",null,"\ube60\ub974\uace0 \ubc30\uc6b0\uae30 \uc26c\uc6c0"),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \ub7f0\ud0c0\uc784 \uc804\uc5d0 \uc5d0\ub7ec\uac00 \uc548\ub0a8"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"sqlc")),(0,l.kt)("p",null,"\uc27d\uace0 \ube60\ub984 sql\ub9cc \uc788\uc5b4\ub3c4 \ucf54\ub4dc \uc790\ub3d9 \uc0dd\uc131\ud574\uc90c"),(0,l.kt)("p",null,"\ucffc\ub9ac \uc5d0\ub7ec\ub3c4 \ube4c\ub4dc \uc804\uc5d0 \ubc1c\uacac \uac00\ub2a5"),(0,l.kt)("p",null,"\ub2e8\uc810\uc740 postgres\ub9cc \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("h2",{id:"sqlc-\uc124\uce58"},"sqlc \uc124\uce58"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.sqlc.dev/en/latest/overview/install.html"},"\uc5ec\uae30"),"\ub85c \uc774\ub3d9")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc124\uce58 \ud558\uae30"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install sqlc\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\uc124\uce58 \ubc84\uc804 \ud655\uc778")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sqlc version\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\ucd08\uae30\ud654 \ud558\uae30")),(0,l.kt)("p",null,"git init\uacfc \uac19\uc74c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sqlc init\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.sqlc.dev/en/latest/reference/config.html#version-2"},"\ud574\ub2f9 \uacbd\ub85c"),"\uc5d0\uc11c \uc124\uc815 \ud30c\uc77c \uc608\uc2dc\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2"\ncloud:\n  project: "<PROJECT_ID>"\nsql:\n- schema: "postgresql/schema.sql"\n  queries: "postgresql/query.sql"\n  engine: "postgresql"\n  gen:\n    go: \n      package: "authors"\n      out: "postgresql"\n  database:\n    managed: true\n  rules:\n    - sqlc/db-prepare\n- schema: "mysql/schema.sql"\n  queries: "mysql/query.sql"\n  engine: "mysql"\n  gen:\n    go:\n      package: "authors"\n      out: "mysql"\n')),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c mysql\uc740 \ub2f9\uc7a5\uc740 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2c8 mysql\uc744 \uc9c0\uc6b4\ub2e4."),(0,l.kt)("admonition",{title:"\ud544\ub4dc \uc124\uba85",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"schema"),": single SQL \ud30c\uc77c\uc774 \ud3ec\ud568\ub41c \ud3f4\ub354 / migration \ud3f4\ub354 \uc124\uc815",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"queries"),": SQL query\ud30c\uc77c\uc744 \ud3ec\ud568\ud558\ub294 \ud3f4\ub354",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"engine"),": \uc5d4\uc9c4\uc740 mysql \ud560\uc9c0 postgresql \ud560\uc9c0",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"gen"),": \uc5b4\ub5a4 \uc5b8\uc5b4 \uc0ac\uc6a9\ud560\uc9c0",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"package"),": db\ub85c \uc124\uc815\ud574\uc57c\ud568\n",(0,l.kt)("inlineCode",{parentName:"p"},"out"),": \uc5b4\ub514\uc5d0 out\ud560\uc9c0\n",(0,l.kt)("inlineCode",{parentName:"p"},"emit_json_tags"),": DB Model \uad6c\uc870\ub97c Json\uc73c\ub85c \uac00\uc9c8\uc9c0\n",(0,l.kt)("inlineCode",{parentName:"p"},"emit_interface"),": \ud14c\uc2a4\ud2b8\uc5d0 \uc0ac\uc6a9\n",(0,l.kt)("inlineCode",{parentName:"p"},"emit_empty_slices"),": \uc2ac\ub77c\uc774\uc2a4\ub97c \ubc18\ud658")),(0,l.kt)("p",null,"\uc644\uc131\ub41c \uc124\uc815\ud30c\uc77c\uc740 \uc544\ub798\uc640 \uac19\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2"\nsql:\n- schema: "db/migration"\n  queries: "db/query"\n  engine: "postgresql"\n  gen:\n    go: \n      package: "db"\n      out: "db/sqlc"\n      emit_json_tags: true\n      emit_interface: true\n      emit_empty_slices: true\n')),(0,l.kt)("p",null,"\uc9c0\uae08\uc740 query\ud3f4\ub354 \uc548\uc5d0 \ucffc\ub9ac\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlc generate")," \ud574\ub3c4 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2e4."),(0,l.kt)("h2",{id:"\ucffc\ub9ac-\uc791\uc131"},"\ucffc\ub9ac \uc791\uc131"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\uc124\uba85"},"\uc124\uba85"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-- name: CreateAccount :one"))),(0,l.kt)("p",null,"CreateAccount\ub294 \ud568\uc218\uba85\uc774\uace0 :one\uc740 \ud558\ub098\uc758 \uac1d\uccb4\ub97c \ubc18\ud658\ud560 \uac83\uc774\uae30\uc5d0 :one\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("p",null,"VALUES (\n$1, $2, $3\n)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO accounts(\n    owner,\n    balance,\n    currency\n) VALUES (\n    $1, $2, $3\n) RETURNING *;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSERT INTO"))),(0,l.kt)("p",null,"\uadf8\ub0e5 SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VALUES"))),(0,l.kt)("p",null,"INSERT INTO\uc548\uc5d0 3\uac1c\ub2c8\uae4c VALUES\uc548\uc5d0\ub3c4 3\uac1c"),(0,l.kt)("p",null,"\ucc38\uace0\ub85c $1, $2, $3 \uc774\uac83\ub4e4\uc740 \ub2e4 \uc778\uc790\uac12\uc774\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RETURNING *;"))),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uce7c\ub7fc\uc744 \ubc18\ud658\ud55c\ub2e4. \uc65c\uc4f0\ub0d0\uba74 \uc790\ub3d9 \uc0dd\uc131\ub418\ub294 \uce7c\ub7fc\uc740 \uc774\ub807\uac8c \uc548\ud558\uba74 \ubc18\ud658\uc774 \uc548\ub418\uae30 \ub300\ubb38"),(0,l.kt)("h2",{id:"sqlc-generate\ud558\uae30"},"sqlc generate\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"sqlc:\n    sqlc generate\n")),(0,l.kt)("p",null,"Makefile\uc5d0 \uc704 \uba85\ub839\uc5b4\ub97c \ucd94\uac00\ud588\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make sqlc\n")),(0,l.kt)("p",null,"\ud558\uba74 4\uac1c\uc758 \ud30c\uc77c\uc774 \uc0dd\uae34\ub2e4. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:t(3894).Z,width:"249",height:"120"})),(0,l.kt)("h3",{id:"modelsgo"},"models.go"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Code generated by sqlc. DO NOT EDIT.\n// versions:\n//   sqlc v1.23.0\n\npackage db\n\nimport (\n    "time"\n)\n\ntype Account struct {\n    ID        int64     `json:"id"`\n    Owner     string    `json:"owner"`\n    Balance   int64     `json:"balance"`\n    Currency  string    `json:"currency"`\n    CreatedAt time.Time `json:"created_at"`\n}\n\ntype Entry struct {\n    ID         int64 `json:"id"`\n    AccountsID int64 `json:"accounts_id"`\n    // can be negative or positive\n    Amount    int64     `json:"amount"`\n    CreatedAt time.Time `json:"created_at"`\n}\n\ntype Transfer struct {\n    ID             int64 `json:"id"`\n    FromAccountsID int64 `json:"from_accounts_id"`\n    ToAccountsID   int64 `json:"to_accounts_id"`\n    // must be positive\n    Amount    int64     `json:"amount"`\n    CreatedAt time.Time `json:"created_at"`\n}\n')),(0,l.kt)("p",null,"\ucf54\ub4dc\ub294 \uc704\ucc98\ub7fc \uc0dd\uacbc\ub2e4. \uc0dd\uc131\ud55c \ud14c\uc774\ube14\ub300\ub85c \ub098\uc624\uace0 json \ud0dc\uadf8\ub3c4 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Amount")," \ud544\ub4dc\ub294 \uc704\uc5d0 \uc8fc\uc11d\ub3c4 \uc0dd\uae34\ub2e4. \uc65c\ub0d0\ud558\uba74 \uc608\uc804\uc5d0 note \uc124\uc815\uc744 \ud574\uc918\uc11c"),(0,l.kt)("h3",{id:"dbgo"},"db.go"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Code generated by sqlc. DO NOT EDIT.\n// versions:\n//   sqlc v1.23.0\n\npackage db\n\nimport (\n    "context"\n    "database/sql"\n)\n\ntype DBTX interface {\n    ExecContext(context.Context, string, ...interface{}) (sql.Result, error)\n    PrepareContext(context.Context, string) (*sql.Stmt, error)\n    QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)\n    QueryRowContext(context.Context, string, ...interface{}) *sql.Row\n}\n\nfunc New(db DBTX) *Queries {\n    return &Queries{db: db}\n}\n\ntype Queries struct {\n    db DBTX\n}\n\nfunc (q *Queries) WithTx(tx *sql.Tx) *Queries {\n    return &Queries{\n        db: tx,\n    }\n}\n')),(0,l.kt)("p",null,"\uc774 \ud30c\uc77c\uc740 DBTX \uc778\ud130\ud398\uc774\uc2a4\uac00 \ud3ec\ud568\ub3fc\uc788\ub2e4."),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uad00\ub828\ub41c \uae30\ub2a5\ub4e4\uc774 \uc788\ub2e4\uace0 \ud558\ub124\uc694."),(0,l.kt)("h3",{id:"accountsqlgo"},"account.sql.go"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Code generated by sqlc. DO NOT EDIT.\n// versions:\n//   sqlc v1.23.0\n// source: account.sql\n\npackage db\n\nimport (\n    "context"\n)\n\nconst createAccount = `-- name: CreateAccount :one\nINSERT INTO accounts(\n    owner,\n    balance,\n    currency\n) VALUES (\n    $1, $2, $3\n) RETURNING id, owner, balance, currency, created_at\n`\n\ntype CreateAccountParams struct {\n    Owner    string `json:"owner"`\n    Balance  int64  `json:"balance"`\n    Currency string `json:"currency"`\n}\n\nfunc (q *Queries) CreateAccount(ctx context.Context, arg CreateAccountParams) (Account, error) {\n    row := q.db.QueryRowContext(ctx, createAccount, arg.Owner, arg.Balance, arg.Currency)\n    var i Account\n    err := row.Scan(\n        &i.ID,\n        &i.Owner,\n        &i.Balance,\n        &i.Currency,\n        &i.CreatedAt,\n    )\n    return i, err\n}\n')),(0,l.kt)("p",null,"package\uc774\ub984\uc774 db\uc778 \uac83\uc740 \uc6b0\ub9ac\uac00 yaml\ud30c\uc77c\uc5d0\uc11c \uc124\uc815\ud588\uae30 \ub54c\ubb38\uc774\uace0"),(0,l.kt)("p",null,"CreateAccount \ud568\uc218\ub294 query \ud3f4\ub354 \uc548\uc5d0 \uc788\ub358 \ud30c\uc77c\uc758 \ucffc\ub9ac\ub97c \ud568\uc218\ud654 \ud55c \uac83\uc774\ub2e4."),(0,l.kt)("h3",{id:"go-mod-init"},"go mod init"),(0,l.kt)("p",null,"go mod init\uc744 \ud574\uc918\uc57c \ud55c\ub2e4."),(0,l.kt)("p",null,"\uadfc\ub370 \ub09c \uc548\ud574\ub3c4\ub41c\ub2e4. \uc65c\ub0d0\ud558\uba74 vs code \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uce58\ud588\uae30 \ub54c\ubb38\uc774\ub2e4 !"),(0,l.kt)("h2",{id:"\uc77d\uae30-\ud558\uae30"},"\uc77d\uae30 \ud558\uae30"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\ud558\ub098-\uc77d\uae30"},"\ud558\ub098 \uc77d\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: GetAccount :one\nSELECT * FROM accounts\nWHERE id = $1 LIMIT 1;\n")),(0,l.kt)("p",null,"\uccab\ubc88\uc9f8 \ub9cc\ub098\ub294 \uacc4\uc815 \ud558\ub098\ub9cc \ub9ac\ud134\ud558\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ucd9c\ub825 \uc218\uc758 \uc81c\ud55c\uc744 \uc904 \uc218 \uc788\ub2e4."),(0,l.kt)("h3",{id:"\uc5ec\ub7ec\uac1c-\uc77d\uae30"},"\uc5ec\ub7ec\uac1c \uc77d\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: ListAccounts :many\nSELECT * FROM accounts\nORDER BY id\nLIMIT $1\nOFFSET $2;\n")),(0,l.kt)("p",null,"\uc5ec\ub7ec\uac1c\ub97c \uc77d\uc73c\ub824\uba74 many\ub97c \uc0ac\uc6a9\ud55c\ub2e4"),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET"),"\uc744 \uac19\uc774 \uc0ac\uc6a9\ud588\ub294\ub370 ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET"),"\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc2dc\uc791 \ud589"),"\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,l.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \ud480\uc5b4\ub9d0\ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET"),"\ubd80\ud130 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \uc218\ub9cc\ud07c \ubc18\ud658\ud558\ub294\uac70\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294 \ud398\uc774\uc9d5\uc744 \uc704\ud574\uc11c\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sqlc generate"),"\ud558\uba74 \uc5ed\uc2dc accounts.sql.go\uac00 \uc5c5\ub370\uc774\ud2b8 \ub41c\ub2e4."),(0,l.kt)("h2",{id:"\uc5c5\ub370\uc774\ud2b8-\ud558\uae30"},"\uc5c5\ub370\uc774\ud2b8 \ud558\uae30"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: UpdateAccount :exec\nUPDATE accounts \nSET balance = $2\nWHERE id = $1;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exec")," \ud0dc\uadf8\ub294 \uc544\ubb34\ub7f0 \ub370\uc774\ud130\ub3c4 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("p",null,"\uc5c5\ub370\uc774\ud2b8\ub41c \uac12\uc744 \ubc1b\uc544\ubcf4\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud558\uba74 \ub41c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: UpdateAccount :one\nUPDATE accounts \nSET balance = $2\nWHERE id = $1\nRETURNING *;\n")),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 sqlc generate\ud558\uba74 \uc0dd\uc131\ub41c\ub2e4."),(0,l.kt)("h2",{id:"\uc0ad\uc81c-\ud558\uae30"},"\uc0ad\uc81c \ud558\uae30"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- name: DeleteAccount :exec\nDELETE FROM accounts \nWHERE id = $1;\n")),(0,l.kt)("p",null,"\ub05d"))}k.isMDXComponent=!0},3894:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);