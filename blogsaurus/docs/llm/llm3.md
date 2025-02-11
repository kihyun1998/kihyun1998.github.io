---
sidebar_position: 3
---

# [LLM] 3. GPT 모델 개요 및 실습
---

## GPT 모델이란
---

GPT는 **Generative Pre-trained Transformer**의 약자입니다. GPT는 autoregressive 방식으로 왼쪽에서 오른쪽으로 문장을 예측합니다.

:::tip GPT의 text 처리 방식
input text -> 토큰화 -> tokenized text -> 토큰 ID화 -> token IDs -> token embeddings -> `GPT decoder transformer` -> token embeddings -> token ids -> output text
:::

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


## 간단한 LLM 구현하기
---

PyTorch와 Hugging face의 transformers 라이브러리를 이용하여 GPT-2 모델을 가져와서 실행해보는 실습을 진행합니다.


```python
import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# load model & tokenizer
model_name = "gpt2"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

# input text 정의
input_text = "Artificial Intelligence is"
input_ids = tokenizer.encode(input_text, return_tensors="pt")

# text 생성
output = model.generate(input_ids, max_length=50, num_return_sequences=1)

generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
print("Generated Text: \n", generated_text)
```


코드를 나눠서 보자면

```python
model_name = "gpt2"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)
```

모델과 토크나이즈를 pretrained된 애들로 불러왔고


```python
input_text = "Artificial Intelligence is"
input_ids = tokenizer.encode(input_text, return_tensors="pt")
```

text를 token ID로 변환하여서

```python
output = model.generate(input_ids, max_length=50, num_return_sequences=1)
```

답변을 생성하였습니다.


```python
generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
```

생성된 답변을 decode하여 자연어로 볼 수 있도록 변환합니다.