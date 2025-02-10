---
sidebar_position: 3
---

# [LLM] 3. GPT 모델 개요 및 실습
---

## GPT 모델이란
---

GPT는 **Generative Pre-trained Transformer**의 약자입니다. GPT는 autoregressive 방식으로 왼쪽에서 오른쪽으로 문장을 예측합니다.

### GPT 모델 실습 TOY 모델

```python
import random

corpus = [
    "오늘 날씨가 맑다",
    "오늘 날씨가 흐리다",
    "오늘 날씨가 춥다",
    "오늘 기분이 좋다",
    "오늘 기분이 나쁘다"
]

# 단어 사전 만들기
word_dict = {}
for sentence in corpus:
    words = sentence.split()
    for i in range(len(words)-1):
        key,value = words[i], words[i+1]
        if key not in word_dict:
            word_dict[key] = []
        word_dict[key].append(value)

# 다음 단어 예측 함수
def predict_next_word(word):
    if word in word_dict:
        return random.choice(word_dict[word])
    else:
        return "?"
    
# 단어 예측
input_word = "오늘"
predicted_word = predict_next_word(input_word)
print(f"'{input_word}' 다음에 올 단어는: '{predicted_word}'")
```

- ✅ 실행 예시

```text
'오늘' 다음에 올 단어는: '기분이'
'오늘' 다음에 올 단어는: '날씨가'
```