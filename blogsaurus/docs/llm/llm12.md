---
sidebar_position: 12
---

# [LLM] 12. Transformer Block 이해하기
---

## Transfromer Block
---

Transformer Block을 이해하기 위해서는 다음 개념들을 알고 있어야합니다.

`Multi-Head Attention`, `LayerNorm`, `FFN`, `Residual Connection`


### 실행 흐름

```test
입력 (Token Embedding + Positional Encoding)  
    ↓  
LayerNorm (Self-Attention 전에 정규화)  
    ↓  
Multi-Head Self-Attention (문장에서 중요한 단어 찾기)  
    ↓  
Residual Connection (원래 정보 유지)  
    ↓  
LayerNorm (FFN 전에 정규화)  
    ↓  
Feed Forward Network (FFN, Self-Attention 결과를 정제)  
    ↓  
Residual Connection (원래 정보 유지)  
    ↓  
출력 (다음 Transformer 블록으로 전달 or 최종 예측)

```

Transformer Block은 위와 같은 프로세스로 문장의 의미를 파악하고 학습합니다.

## LayerNorm
---

뉴런 출력을 정규화하여 학습을 안정적으로 맏느는 기법입니다. 즉 그냥 출력 정규화입니다.

### 필요한 이유

1. **기울기 소실/발산 문제 (Gradient Vanishing/Exploding)**
    - 네트워크가 깊어지면 뉴런의 출력을 계속 곱하고 합쳐지면서 갑이 너무 커지거나 작아질 수 있습니다.
    - 값이 너무 크면 Exploding -> 학습이 불안정해지고 NaN이 발생할 수 있습니다.
    - 값이 너무 작으면 Vanishing -> 모델이 제대로 학습을 못할 수도 있습니다.
2. **뉴런의 값 분포가 균일하지 않는 문제**
    - 어떤 뉴런은 평균적으로 10을 출력하고 어떤 뉴런은 0.1을 출력하게 되면 학습이 불균형 해지고 특정 뉴런의 영향력만 커집니다.

그래서 LayerNorm을 사용해서 뉴런 간 균형을 맞춥니다.

### 동작원리

LayerNorm은 뉴런들의 값을 정규화하는데 Self-Attention과 FFN 전 또는 후에 적용하게 됩니다.


### $\hat{x} = \frac{x - \mu}{\sigma + \epsilon} * \gamma + \beta$


- ✅ 프로세스
    1. 입력 x의 평균을 빼서 평균 0으로 맞추고
    2. 표준편차로 나눠서  출력의 크기를 균일하게 만든다.
    3. 이후에 학습 가능한 파라미터를 곱하고 더하여 최적의 스케일을 조정합니다.


### 방식

- Post-LayerNorm 방식
    - Self-Attention과 FFN 후에 LayerNorm을 하는 경우이다.

- Pre-LayerNorm 방식
    - Self-Attention과 FFN 전에 LayerNorm을 하는 경우이다.
    - 최근에는 이 방식이 더 안정적이라서 GPT 모델에서 사용한다.


## FFN이란
---

FFN은 Transformer 블록 내에서 토큰을 개별적으로 가공하는 중요한 신경망 모듈입니다.

Self-Attention이 문맥을 반영한 정보를 전달하면 FFN은 이를 더 정교하게 하여 풍부한 의미를 갖는 표현으로 만든다고 합니다.

### FFN 동작 방식

1. 차원확장
    - 입력토큰을 더 넓은 차원으로 변환합니다.

2. 비선형 변환
    - GELU를 적용하여 더욱 복잡한 패턴을 학습하도록 합니다.

3. 차원 축소
    - 다시 차원을 축소하여 모델이 효율적으로 처리할 수 있도록 합니다.


### ReLU vs GELU

- ✅ ReLU (Rectified Linear Unit)
    - 양수는 남기고 음수를 0으로 바꾸는 함수입니다.
    - 불필요한 정보를 제거해서 더 간결한 표현을 만들고자 하는 목표를 갖고 있습니다.

- ✅ GELU (Gaussiian Error Linear Unit)
    - ReLU보다 조금 더 부드럽게 처리합니다. 약한 음수를 조금 남겨둡니다.
    - 작은 값들은 0 근처에서 천천히 변하고 큰 값들은 빠르게 증가합니다.

### 비선형 함수를 사용해야 하는 이유

선형 계층만 있다면 하나의 선형 변환을 한 효과만 나타난다고 합니다. 수학적인 부분이라 넘어가도록 합니다.



## Residual Connection 이란? ( Shortcut Connection )

원래 정보를 유지하면서 새로운 정보를 추가하는 기법입니다.

Self-Attention과 FFN을 통과한 이후에도 원본 정보를 유지할 수 있도록 해줍니다.


### Residual Connection이 필요한 이유

1. 기울기 문제..
    - LayerNorm에서도 마주한 기울기 문제인데 깊은 네트워크에서는 초기 입력과 출력간의 차이가 커질 수 있습니다. 역전파 할 때 Gradient가 사라지는 문제가 발생하기 때문입니다.

2. 정보 손실
    - Self-Attention과 FFN을 통과하면서 새 정보를 추가하다보면 기존 중요 정보가 사라질 수도 있습니다.

3. 학습 속도 향상
    - 원래 정보 유지하면서 새 정보 추가하기 때문에 학습 속도가 향상되고 성능이 나빠지는 문제 방지 가능합니다.


### 동작 방식

### $y = f(x) + x$

- ✅ 프로세스
    1. x: 원본 입력
    