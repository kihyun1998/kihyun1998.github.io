---
sidebar_position: 2
---


# Ollama+LLM
---

Ollama로 ggu 파일을 다운로드 해서 LangServe로 배포 > Remote runable만든다.

## 참조
---

[참조](https://www.youtube.com/watch?v=VkcaigvTrug&list=PLzf55F5cTQwknpwCgieem3TDpUKX195Ze&index=48)

## 모델 다운로드
---

```bash
huggingface-cli download \
  heegyu/EEVE-Korean-Instruct-10.8B-v1.0-GGUF \
  ggml-model-Q5_K_M.gguf \
  --local-dir ./model \
  --local-dir-use-symlinks False
```

### Modelfile

```dockerfile
FROM ggml-model-Q5_K_M.gguf

TEMPLATE """{{- if .System }}
<s>{{ .System }}</s>
{{- end }}
<s>Human:
{{ .Prompt }}</s>
<s>Assistant:
"""

SYSTEM """A chat between a curious user and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the user's questions."""

PARAMETER stop <s>
PARAMETER stop </s>
```

```yaml
{{- if .System }}
<s>{{ .System }}</s>
{{- end }}
```

위를 해석하면 처음에 SYSTEM에 할당된 값을 출력하고 

```yaml
<s>Human:
{{ .Prompt }}</s>
```

사람의 질문 들어가고


```yaml
<s>Assistant:
```

그다음부터 챗봇이 답변한다는 뜻

모델별로 다르다.


### 꿀팁

템플릿 제공이 안된 모델은 base 모델을 찾아서 템플릿 찾을 수 있음.

문법은 ollama 공식 github site에 있음.


## ollama
---

```bash
pip install ollama
```

이렇게 설치가능