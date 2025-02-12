---
sidebar_position: 7
---

# [LLM] 7. 슬라이딩 윈도우
---

## 슬라이딩 윈도우 기법이란?

- LLM이 메모리의 한계 때문에 긴 문장을 한번에 학습하기 어렵다. (GTP-2 기준 1024개 토큰)
- 그래서 청크로 나눈다. 이 때 연속된 문맥을 유지하려면 슬라이딩 윈도우 기법을 이용한다.
- 학습 할 때 모든 내용을 보는 것 보다 일정한 크기로 쪼개서 문맥을 유지하며 학습하는 것이 중요하다. 
- 너무 짧은 윈도우로 쪼개면 문맥이 부족하여 의미 파악 어렵고 너무 큰 윈도우면 데이터가 많아져서 모델이 처리하기 어렵다.

### 실습 코드

```python
import tiktoken

# 예제 텍스트
text = "The sliding window technique allows LLM to learn the context better."

# GPT-2 토크나이저 사용
tokenizer = tiktoken.get_encoding("gpt2")
tokens = tokenizer.encode(text)

# 윈도우 크기 및 스트라이드 설정
window_size = 5  # 한 번에 볼 문맥 크기
stride = 2       # 이동할 거리 (2이면 두 토큰씩 이동)

# 학습 데이터 생성
X, Y = [], []
for i in range(0, len(tokens) - window_size, stride):
    X.append(tokens[i:i + window_size])  # 입력 데이터 (이전 토큰들)
    Y.append(tokens[i + window_size])    # 정답 데이터 (다음에 올 토큰)

# 출력 확인
for i in range(len(X)):
    print(f"입력: {X[i]} → 출력(다음 단어): {Y[i]}")
    print(f"입력(디코딩): {tokenizer.decode(X[i])} → 출력(디코딩): {tokenizer.decode([Y[i]])}")
```

### 결과

```text
입력: [464, 22292, 4324, 8173, 3578] → 출력(다음 단어): 27140
입력(디코딩): The sliding window technique allows → 출력(디코딩):  LL
입력: [4324, 8173, 3578, 27140, 44] → 출력(다음 단어): 284
입력(디코딩):  window technique allows LLM → 출력(디코딩):  to
입력: [3578, 27140, 44, 284, 2193] → 출력(다음 단어): 262
입력(디코딩):  allows LLM to learn → 출력(디코딩):  the
입력: [44, 284, 2193, 262, 4732] → 출력(다음 단어): 1365
입력(디코딩): M to learn the context → 출력(디코딩):  better
```

이렇게 모델이 사용하는 Sliding Window라는 개념에 대해서 실습해보며 알아보았습니다.