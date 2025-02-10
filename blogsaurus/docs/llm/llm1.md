---
sidebar_position: 1
---

# [LLM] 1. LLM 개요 및 기본 개념
---

## LLM
---

### LLM이란

LLM은 Large Language Model의 약자로 방대한 양의 텍스트 데이터를 학습해서 언어 이해 및 생성 능력을 갖춘 인공지능 모델을 뜻합니다.

대표적으로 `GPT`, `Llama`, `Claude` 등이 있습니다.

### 특징

- ✅ 대규모 데이터 학습 -> 수십억 개의 단어를 학습한다.
- ✅ 문맥 이해 능력 -> 이전 문장을 기반으로 의미 있는 텍스트를 생성한다.
- ✅ 다양한 응용 분야 -> 챗봇, 번역, 문서 요약, 코드 생성 등.. 다양한 분야에서 활용할 수 있다.


### LLM의 주요 응용 분야

| 📌 분야 | 🛠 활용 예시 |
|--------|-----------|
| **번역** | Google Translate, DeepL |
| **챗봇** | ChatGPT, Claude, Google Gemini |
| **코드 생성** | GitHub Copilot, OpenAI Codex |
| **문서 요약** | 뉴스 요약, 논문 요약 |
| **검색 및 질의 응답** | Google Bard, Bing AI |
| **창작 및 글쓰기 보조** | AI 기반 스토리 생성, 시나리오 작성 |


### LLM 개발 프로세스

LLM을 만들려면 다음 세가지 단계가 필요합니다.

1. **데이터 준비** : 텍스트 데이터 수집 및 전처리 (토큰화,샘플링)  
2. **모델 학습** : Transformer 기반 모델을 사용하여 학습
3. **배포 및 활용** : API로 배포 및 app에 통합

:::info
데이터 > 전처리 > 학습(Pretraining) > 미세조정(Fine-tuning) > 배포 및 활용
:::

## Transformer 아키텍처
---

LLM은 Transformer라는 신경망 구조를 기반으로 합니다.

### Transformer의 주요 개념

- ✅ Self-Attention: 문장에서 중요한 단어를 찾아 가중치를 부여
- ✅ Multi-Head Attention: 여러 시각으로 문맥을 분석
- ✅ Feed Forward Network: 각 토큰을 독립적으로 변환
- ✅ Layer Normalization & Residual Connection: 학습 안전화

### Self Attention

Transfromer의 핵심 메커니즘으로 입력 문장에서 중요한 단어를 찾아서 가중치를 부여하는 역할을 합니다.

- 문장 내에서 각 단어가 다른 단어와 얼마나 관련이 있는지를 계산하여 가중치를 부여합니다.

:::info 계산 방식
1. 각 단어를 `Query(Q)`, `Key(K)`, `Value(V)` 벡터로 변환합니다.  
2. Query와 Key 간의 **dot product**를 계산하여 유사도를 측정합니다.  
3. **softmax** 함수를 적용하여 어텐션 가중치를 생성합니다.  
4. 이 가중치를 Value 백터에 적용하여 최종 **Context Vector**를 생성합니다.
:::

:::note 예시
문장 `"I love deep learning."`이 있다고 하자.  
- "deep" 단어는 "learning"과 강한 연관성이 있다. 그래서 높은 가중치를 부여한다.  
- "I" 단어는 "learning"과 덜 연관돼있다. 그래서 낮은 가중치를 부여한다.
:::


### Multi-Head Attention

Self-Attention을 여러 개 실행하여 문장을 다양한 관점에서 분석하는 기법입니다.

- ✅ 필요한 이유
    - Self-Attention 만으로는 하나의 문맥 패턴만 학습할 수 있습니다.
    - Multi-Head Attention을 사용하면 문장에서 다양한 의미와 구조 관계를 포착할 수 있습니다.

- ✅ 구현 방식
    1. 여러 개의 Self-Attention 모듈을 병렬 실행합니다.  
    2. 각각의 결과를 연결한 후 다시 가중치를 적용하여 최종 결과를 생성합니다.

한 가지 시각(Self-Attention)으로 본다면 제한적인 정보를 얻지만 여러 시각(Multi-Head Attention)으로 본다면 더 풍부한 정보를 얻는 것과 같습니다.


### Feed Forward Network (FFN)

각 토큰을 독립적으로 변환하는 과정입니다.

- ✅ 구조
    1. 입력 백터 -> 선형 변환 (W1)  
    2. 비선형 활성화 함수 (GELU or ReLU)  
    3. 출력 백터 -> 또 다른 선형 변환 (W2)

- ✅ 중요한 이유
    - Attention 과정에서 학습한 정보를 변형하여 더욱 풍부한 표현으로 만들도록 돕습니다.

### Layer Normalization & Residual Connection

모델 학습 안정성을 높이는 기법입니다.

- ✅ Layer Normalization(레이어 정규화)
    - 각 레이어의 출력값을 정규화하여 학습 안정성을 증가시킵니다.
    - 변환된 벡터의 평균을 0, 분산을 1로 맞추어 수렴 속도를 향상시킵니다.

- ✅ Residual Connection (잔차 연결)
    - 입력값을 변형 없이 그대로 다음 레이어로 전달하는 구조입니다.
    - 기울기 소실 문제를 완화하여 깊은 신경망에서도 효과적인 학습이 가능합니다.

Residual Connection은 학습 과정에서 중요한 정보가 손실되지 않도록 원본 데이터를 보존하는 역할을 합니다.


### Encoder & Decoder

- ✅ Encoder
    - Encoder는 입력 문장을 받아서 그 문장의 의미를 압축하여 벡터 표현으로 변환하는 역할을 합니다.
    - 여러 개의 Self-Attention 레이어를 거치면서 문장 내 각 단어의 의미를 학습합니다.
    - 보통 문장 분석, 감성, 문서 분류 등 문장의 의미를 이해하는 작업에 사용됩니다.

- ✅ Decoder
    - 입력 문장과 Encoder가 만든 벡터 표현을 이용해서 새로운 문장을 생성하는 역할을 합니다.
    - 일반적으로 이전 단어들을 참고하여 다음 단어들을 예측하는 방식으로 동작합니다.
    - 기계 번역, 텍스트 생성, 챗봇 등 새로운 문장을 만들어야하는 작업에 사용됩니다.

`Encoder`는 사람의 뇌에서 입력 문장을 분석하는 과정. like "이 문장은 긍적적이네?"  
`Decoder`는 분석한 내용을 바탕으로 새로운 문장을 생성하는 과정. like "그럼 긍정적인 답변을 만들어야지."


|  | **BERT** | **GPT** |
|------|-----------------|-----------------|
| **사용하는 Transformer 부분** | **Encoder** | **Decoder** |
| **훈련 방식** | 양방향(Bidirectional) | 단방향(Autoregressive) |
| **입력 데이터 처리 방식** | 문장 전체를 동시에 고려 | 앞의 단어들만 보고 다음 단어를 예측 |
| **주요 활용 분야** | 감성 분석, 문서 분류, 질문 응답 | 텍스트 생성, 대화 모델, 문장 자동 완성 |
| **훈련 목표** | Masked Language Modeling (MLM) | Causal Language Modeling (CLM) |
| **대표적인 응용 모델** | Google Search, BERT 기반 QA 시스템 | ChatGPT, GPT-4 |
