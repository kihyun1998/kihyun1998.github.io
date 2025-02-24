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