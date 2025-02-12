---
sidebar_position: 6
---

# [LLM] 6. WordPiece와 BPE
---

토큰화하는 과정을 실습을 통해 알아가보겠습니다.

대표적인 두 방식인 **WordPiece(BERT)**와 **BPE(GPT)**에 대한 실습을 해보겠습니다.

## WordPiece
---

### 특징

- 단어를 자주 등장하는 형태소 단위로 분리
    - ex: `hugging` -> `hug` `##ging` (앞부분 보존, 접미사 분리)
- 장점: 학습 효율이 좋음, 새로운 단어 처리 가능
- 단점: `##`기호가 붙어서 직관성이 낮다.

## BPE
---

Byte Pair Encoding의 약자다.

### 특징

- 빈도 높은 문자 조합을 병합하는 방식
    - ex: `hugging` -> `hug` `ging`
- 장점: 문장을 작은 단위로 쪼개 사전에 없는 단어도 쉽게 표현할 수 있다.
- 단점: 너무 작은 단위까지 쪼개져서 가독성이 떨어질 수 있다.

## 실습 코드

```python
from transformers import AutoTokenizer

# 실험할 문장
text = "Hugging Face's Transformers library makes NLP easy!"

# WordPiece (BERT 토크나이저)
wordpiece_tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
wordpiece_tokens = wordpiece_tokenizer.tokenize(text)

# BPE (GPT-2 토크나이저)
bpe_tokenizer = AutoTokenizer.from_pretrained("gpt2")
bpe_tokens = bpe_tokenizer.tokenize(text)

# 결과 출력
print(f"Original Text: {text}\n")
print(f"WordPiece Tokens: {wordpiece_tokens}")
print(f"BPE Tokens: {bpe_tokens}")
```

### 결과

```text
Original Text: Hugging Face's Transformers library makes NLP easy!

WordPiece Tokens: ['hugging', 'face', "'", 's', 'transformers', 'library', 'makes', 'nl', '##p', 'easy', '!']
BPE Tokens: ['Hug', 'ging', 'ĠFace', "'s", 'ĠTransformers', 'Ġlibrary', 'Ġmakes', 'ĠN', 'LP', 'Ġeasy', '!']
```


### 결과 해석

- ✅ WordPiece
    - WordPiece는 사전에 존재하는 단어 단위로 쪼개는 경향이 강하기에 hugging을 쪼개지 않았습니다.

- ✅ BPE
    - BPE는 "hug" 와 "ging"을 나눠서 분리했습니다.
    - `Ġ`문자는 공백을 나타내는 특수 토큰입니다.


## 결론
---

WordPiece는 기존 단어를 유지하려는 성격이고 BPE는 자주 쓰이는 문자 조합으로 쪼개어 병합하려 합니다.

## GPT가 BPE를 선택한 이유

- ✅ 어휘 크기 절충
    - 전통적인 토큰화 방식은 어휘가 너무 커지고 문장 길어짐.
    - BPE는 단어를 서브워드 단위로 쪼개면서 어휘 크기 줄일 수 있음.
    - 여기서 어휘 크기는 모델의 `단어 사전`이라고 생각하면 된다.

- ✅ 희귀 단어 문제 해결
    - 기존 단어 기반 토큰화 방식은 자주 등장하지 않는 단어가 등장하면 Out of vocabulary 문제가 발생함.
    - BPE는 새로운 단어를 서브워드 단위로 쪼개서 모델이 학습할 수 있도록 함. 예를 들어서 `ChatGPT`같은 경우에는 `Chat` `G` `PT`로 나눠놓고 서브워드로 만들어서 사용 가능.