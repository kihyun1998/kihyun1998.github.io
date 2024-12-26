---
sidebar_position: 8
---

# [NestJS] Code Formatting 설정법


## 필요한 추가 패키지

```bash
npm install -D @types/node @types/express
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

## vscode extention

`prettier`와 `eslint` 설치