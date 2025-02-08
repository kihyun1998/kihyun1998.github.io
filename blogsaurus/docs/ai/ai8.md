---
sidebar_position: 8
---

# Alpaca 프롬프트 형식
---

## Alpaca 프롬프트 란
---

Alpaca 프롬프트 형식은 Stanford의 Alpaca 프로젝트에서 처음 소개된 프롬프트 템플릿이에요.

```text
### Instruction:
작업이나 질문을 여기에 작성합니다.

### Input:
추가 입력이나 컨텍스트를 여기에 작성합니다. (선택사항)

### Response:
모델의 응답이 여기에 생성됩니다.
```

### 특징

`Instruction`은 모델에게 수행할 작업을 명확하게 지시합니다
`Input`은 선택적으로 추가 컨텍스트나 예시를 제공합니다
`Response`는 모델이 생성할 답변 영역입니다

instruction tunning에 효과적으로 알려져 있고 task-specific한 미세조정에 유용하게 사용된다고 하네요.

### 사용 예시

```text
### Instruction:
주어진 문장을 긍정적인 톤으로 바꿔주세요.

### Input:
오늘 날씨가 너무 추워서 기분이 안 좋아요.

### Response:
오늘은 시원한 날씨라 상쾌하고 활기찬 하루를 보낼 수 있겠네요!
```