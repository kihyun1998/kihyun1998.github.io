---
sidebar_position: 8
---

# [NestJS] Code Formatting 설정법


## 필요한 추가 패키지

```bash
npm install -D @types/node @types/express
npm install --save-dev prettier eslint-config-prettier
```

## setting.json

```json
    "[typescript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.codeActionsOnSave": {
            "source.fixAll": "explicit"
        }
    },
```

## .prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "semi": true,
  "tabWidth": 2,
  "endOfLine": "auto"
}
```


## .eslintrc.js

`.eslintrc.js` 파일 중간에 아래 내용을 추가해준다.

```js
...
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
...
```

## vscode extention

`prettier`와 `eslint` 설치