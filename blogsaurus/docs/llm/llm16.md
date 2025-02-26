---
sidebar_position: 16
---

# [LLM] 16. 학습 평가
---


## GPT가 텍스트를 만드는 원리
---

GPT 모델은 주어진 입력 다음에 올 확률이 높은 단어를 예측하여 텍스트를 생성합니다.

### 과정

1. 입력값 설정
2. 모델이 각 단계에서 다음 단어 예측하여 확률 분포 생성
3. 예측된 단어를 바탕으로 문장 확장
4. 다양한 샘플링 기법으로 창의적 결과 얻기


### 예제 코드

```python
def generate_text(model, prompt, tokenizer, max_length=50, temperature=1.0, top_k=10):
    """
    GPTModel을 사용하여 텍스트를 생성하는 함수
    - model: 사전 훈련된 GPT 모델
    - prompt: 초기 입력 문장 (str)
    - tokenizer: 텍스트를 토큰으로 변환하는 함수
    - max_length: 생성할 최대 토큰 길이
    - temperature: 창의성 조절 (높을수록 랜덤한 결과)
    - top_k: 상위 k개의 단어만 샘플링하여 선택

    return: 생성된 텍스트 (str)
    """
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)

    # 입력 토큰 변환
    input_ids = torch.tensor(tokenizer.encode(prompt)).unsqueeze(0).to(device)

    # 텍스트 생성
    for _ in range(max_length):
        with torch.no_grad():
            logits = model(input_ids)[:, -1, :]  # 마지막 단어에 대한 예측 확률
            logits = logits / temperature  # Temperature 조정

            # Top-k 샘플링 적용
            top_k_logits, top_k_indices = torch.topk(logits, top_k, dim=-1)
            probs = F.softmax(top_k_logits, dim=-1)

            # 확률 기반 샘플링
            sampled_token = torch.multinomial(probs, num_samples=1)

            # 새로운 토큰 추가
            input_ids = torch.cat([input_ids, top_k_indices.gather(-1, sampled_token)], dim=-1)

            # 종료 조건 (EOS 토큰)
            if input_ids[0, -1].item() == tokenizer.eos_token_id:
                break

    # 디코딩하여 텍스트 출력
    return tokenizer.decode(input_ids[0].tolist())

```

tokenizer를 활용하여 텍스트를 생성하는 예제입니다.


## GPT-2 tokenizer 사용 단어 예측
---

### 코드

```python
from text_generate import generate_text

from transformers import GPT2Tokenizer



import sys
sys.path.append("..")
from model.config import GPT_CONFIG_124M
from model.gpt_model import GPTModel


# 모델 초기화
model = GPTModel(GPT_CONFIG_124M)
model.eval()  # 평가 모드로 설정


# GPT-2 토크나이저 불러오기 (Hugging Face)
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

# 예제 프롬프트
prompt = "Once upon a time"

# 텍스트 생성
generated_text = generate_text(model, prompt, tokenizer, max_length=50, temperature=0.7, top_k=10)

# 결과 출력
print("\n📜 Generated Text:\n", generated_text)
```


### 결과

```text
📜 Generated Text:
 Once upon a timecars sketch invol ZIP balk locate McK mortality remain Week009 Hopefully compiledcoBer embargo everlasting eggsQuote situated breedforcer prooffamous paragraphs Indians inhumanitud FractLeadAuthorities remarks arminvokeCapture manifestation venom indic percentages centuries mortaliselpton expr encounteringAlthough crusCritics Prohibition Begins
```


## Huggin face tokenizer 사용 단어 예측
---

### 코드

```python
from transformers import AutoTokenizer
from text_generate import generate_text


import sys

sys.path.append("..")

from model.config import GPT_CONFIG_124M
from model.gpt_model import GPTModel

# 한국어 토크나이저 불러오기
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/polyglot-ko-1.3b")

# 원래 PyTorch 모델 사용
model = GPTModel(GPT_CONFIG_124M)
model.eval()

# 예제 프롬프트
prompt = "옛날 옛적에"

# 토크나이저로 인코딩
inputs = tokenizer(prompt, return_tensors="pt", padding=True)

# 여기서 원래 generate_text 함수 사용하거나 직접 생성 로직 구현
generated_text = generate_text(model, prompt, tokenizer, max_length=50, temperature=0.7, top_k=10)

print("\n📜 생성된 텍스트:\n", generated_text)
```

### 결과

```text
📜 생성된 텍스트:
 옛날 옛적에 a 어렴풋 스테이크 낳 용품 틱orm 절감 얘기� 보내다지만 따라야 옆 연말연시 방산 번개 포르쉐 중계인데다 베트 함께％  실거 사실치매정보 72 대중교통 창자본주의닐라주말
```

개판입니다.


## 손실
---

손실 함수는 모델이 얼마나 정확하게 다음 단어를 예측했나 평가하는 지표 입니다.

일반적으로 `Cross-Entropy Loss`를 사용하여 정답과 모델이 예측한 확률 분포간의 차이를 측정합니다.

- ✅ 과정
    1. 모델이 예측한 확률 분포(logits)를 가져옵니다.
    2. 실제 정답과 비교하여 cross-entropy loss를 계산합니다.
    3. 손실 값을 최소화 하도록 모델을 학습시킵니다.



### 훈련 손실

- 훈련 데이터를 학습하면서 출력하는 손실 값입니다.
- 가중치를 업데이트 하는데 사용됩니다. 
- `Cross-Entropy Loss`를 사용하여 단어 예측 성능을 평가합니다.

### 검증 손실

- 모델이 학습한 후 검증 데이터에 대한 출력하는 손실 값입니다.
- 모델이 새로운 데이터에 대해 얼마나 잘 일반화 하는지를 평가하는 지표입니다.
- 훈련 손실이 낮아도 검증 손실이 높다면 과적합의 가능성이 있습니다.

> 훈련 손실을 계속 감소해야 한다.
> 검증 손실은 처음에 감소하다가 일정 시점 이후 증가 할 수 있는데 과적합이 발생했을 가능성이 높다.


### 생성 손실

- 텍스트 생성 모델에서 주로 사용되는 손실 값
- Cross-Entorpy 방식을 주로 사용하겠지만 일부 경우 BLEU Score, Perplexity 등 메트릭을 사용해서 평가할 수도 있다.


### 과적합 방지 방법

1. 데이터 관련 기법
    - 많은 데이터 사용하기
    - train-validation split 비율 조정하기 (80:10:10, 90:10)


2. 모델 구조 관련 기법
    - dropout 추가 (보통 rate를 0.1~0.3에서 사용)
    - layer norm 사용
    - residual connection 활용

3. 학습 관련 기법
    - early stopping 사용 (검증 손실이 일정 에포크 동안 개선되지 않으면 학습을 조기 중단)
    - learning rate scheduling 적용(cosine anneling, wramupo, step decay등을 적용하여 동적 학습률 조정을 한다.) > 왜냐하면 학습률이 너무 크면 최적점 근처에서 진동하고 너무 작으면 최적점에 도달하는데 시간이 오래걸린다고 한다.
    - 기울기 클립핑 적용 (기울기 explosion 문제를 방지하려고 일정 이상 기울기를 제한하는거임)

4. 모델 크기 및 계산량 조절
    - LoRA 적용 (일부 파라미터만 조정하여 훈련 부담 줄임)
    - Quantization 적용 (양자화)

- 정리

|방법|설명|
|-----|------------|
|더 많은 데이터 확보|부족한 데이터로 과적합 방지|
|훈련/검증 split 조정| 훈련과 검증 데이터 균형 조절|
|Dropuot 사용|랜덤하게 비활성화 하여 일반화 능력 향상|
|Layer Norm|안정성 증가|
|Residual Connection|정보 손실 방지|
|Early Stopping|검증 손실 줄어들지 않으면 조기 학습 종료|
|Learning Rate Scheduling|학습률 동적으로 감소 시켜서 최적점에 수렴시키기|
|기울기 Clipping|기울기 폭발 방지|
|LoRA&Quantization|모델 경량화|
