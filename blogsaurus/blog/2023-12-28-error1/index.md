---
slug: git-error-1
title: Git - LF will be replaced by CRLF the next time Git touches it
authors: [kihyun]
tags: [git]
---

# [Git] LF will be replaced by CRLF the next time Git touches it
---

## window
---

```bash
git config --global core.autocrlf true
```

## linux, mac
---

```bash
git config --global core.autocrlf input
```