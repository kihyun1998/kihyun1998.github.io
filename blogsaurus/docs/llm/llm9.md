---
sidebar_position: 9
---

# [LLM] 9. Self Attention
---

기존 NLP는 RNN와 CNN을 사용했지만 한계가 있었습니다.


| 모델 | 장점 | 단점 |
|------|------|------|
| RNN | 문장을 순차적으로 처리 | 긴 문장에서 과거 정보를 기억하기 어려움 (장기 의존성 문제) |
| CNN | 병렬 연산이 가능하고 연산 속도가 빠름 | 문맥을 장거리로 이해하는 데 한계가 있음 |


## Self Attention이란?
---

우리가 책을 읽을 때 모든 문장을 외우진 않지만 중요한 문장에 밑줄을 긋는것과 같다..

LLM도 Self-Attention을 이용해서 문장에서 중요한 단어에 집중한다.


### Query, Key, Value 만들기

트랜스포머 모델에서는 토큰을 `Query(Q)`, `Key(K)`, `Value(V)`라는 세가지 벡터로 변환한다.

- `Query(Q)` : 이 단어가 다른 단어들과 얼마나 관련 있는지 **질문**하는 벡터
- `Key(K)` : 이 단어가 얼마나 중요한지 **정보**를 담고 있는 벡터
- `Value(V)` : 실제로 모델이 학습할 **값**이 담긴 벡터


Query가 다른 단어들의 Key를 참고해서 관련성을 찾고 그 결과를 Value에서 가져오는 방식.. 이라고 하네요.


### Attention Score 계산하기

Q와 K의 유사도를 계산하여 어떤 단어가 중요한지를 판단합니다. 이 때 사용하는 연산이 `점곱(Dot Product)`이라고 합니다.

```text
Attention Score=Q⋅K^T
```

- 두 벡터의 내적(dot product)를 계산하면 서로 얼마나 연관성이 있는지 알 수 있습니다.
- 값이 크면 두 단어가 서로 강한 관련이 있는 것이고 작으면 관련이 적음을 의미합니다.
- 이렇게 구한 값을 `Softmax 함수`를 적용하여 확률 분포로 변환합니다..


### Attention Score 계산 쉽게 이해하기

쉽게 설명하면 그냥 두 단어의 유사도를 계산하는 과정입니다.

```text
친구 5명이 함께 공부한다고 상상해 보세요.
각 친구는 서로 다른 과목에 강하고, 서로에게 질문을 하면서 공부를 합니다.
이때, 내가 어떤 친구에게 질문을 많이 하는지를 "Attention Score(어텐션 점수)"라고 생각하면 돼요.

예를 들어, 내가 수학이 약한데 친구 철수가 수학을 잘한다고 하면?
> 나는 철수에게 많은 질문(높은 Attention Score)을 하겠죠!
```

다시 말해서 Q와 K를 이용해서 Score를 구합니다. Q와 K의 점곱이 크면 두 단어가 강하게 연관이 있다 이말입니다.

그건 오케이. 점곱이 뭔데?

### Dot Product 점곱

점곱은 간단하게 비슷한 취향 찾기라고 할 수 있습니다.


| 친구 | SF | 액션 | 로맨스 | 공포 |
|------|---|---|---|---|
| 나(Query, Q) | 5 | 4 | 1 | 2 |
| 철수(Key,K) | 4 | 5 | 1 | 3 |


- 나는 SF와 액션을 좋아하는데 철수도 SF와 액션을 좋아한다고 할 수 있습니다.
- 취향이 비슷하다고 할 수 있는데 그러면 높은 점수를 얻게 됩니다.


```text
Score= (5×4)+(4×5)+(1×1)+(2×3) = 20+20+1+6 = 47
```

이런 계산 결과를 얻을 수 있습니다.

### Dot Product 예제 코드

```python
import torch

# 3개의 단어(토큰)를 포함한 문장이 있다고 가정
# 각 단어(토큰)는 4차원 벡터로 표현됨 (4개의 속성을 가짐)
Q = torch.tensor([[1.0, 0.5, 0.3, 0.2],   # 단어 1
                  [0.8, 1.2, 0.4, 0.7],   # 단어 2
                  [0.5, 0.3, 1.5, 0.6]])  # 단어 3

K = torch.tensor([[0.9, 0.4, 0.2, 0.1],   # 단어 1
                  [1.0, 1.1, 0.5, 0.8],   # 단어 2
                  [0.4, 0.2, 1.2, 0.5]])  # 단어 3

# Query와 Key의 점곱(Dot Product) 계산
Attention_Scores = torch.matmul(Q, K.T)
print(f"Dot Product: {Attention_Scores}")
```


```text
# 결과
Dot Product: tensor([[1.1800, 1.8600, 0.9600],
        [1.3500, 2.8800, 1.3900],
        [0.9300, 2.0600, 2.3600]])
```


### Attention Score를 Softmax로 변환하기

Softmax로 변환하는 이유는 확률로 변환시키기 위해서인데 확률로 변환시키는게 중요한게. 상대적 중요도를 알기 쉽습니다.

예를 들어서 시험 문제 중 각 문제의 점수를 백분율로 변환하면 어떤 문제가 중요한 문제인지 알수 있는 것과 같습니다.
즉. Softmax를 적용하면 이 **단어가 전체 문장에서 얼마나 중요한가?**를 알 수 있습니다.


### Softmax 추가 실습

```python
import torch.nn.functional as F

...

# Softmax 적용하여 Attention Weights 얻기
Attention_Weights = F.softmax(Attention_Scores, dim=-1)
print(f"Softmax 적용: {Attention_Weights}")
```

```text
# 결과
Dot Product: tensor([[1.1800, 1.8600, 0.9600],
        [1.3500, 2.8800, 1.3900],
        [0.9300, 2.0600, 2.3600]])
Softmax 적용: tensor([[0.2648, 0.5227, 0.2125],
        [0.1502, 0.6935, 0.1563],
        [0.1209, 0.3741, 0.5050]])
```

위 코드에서 이렇게 pytorch의 softmax함수를 추가해주면 됩니다.

여기서 `dim`값은 Softmax를 적용할 축을 결정하는 옵션인데 옵션은 다음과 같습니다.

- `dim=0` -> 세로 방향(행 단위)
- `dim=1` -> 가로 방향(열 단위)
- `dim=-1` -> 마지막 차원


### Scaled Dot-Product Attention

그러나 지금의 점곱에는 문제가 있습니다. 점곱은 두 벡터의 크기와 방향 모두에 영향을 받기 때문에 문장의 길이가 길어지거나 벡터 차원이 커지면 값이 너무 커지는 문제가 발생해요. 그래서 정규화 하는 과정으로 K의 차원인 d_k로 나눕니다. 공식은 아래와 같아요.

![alt text](./img/9/image.png)

- ✅ 왜 꼭 나눠야 하나?
    - 학생들이 수행 평가를 보고 점수를 평균내서 비교하는 것과 같습니다.
    - 근데 누구는 총점 500점짜리 수행 평가를 보기도 하고 누구는 30점짜리 수행 평가를 보기도 하죠. 
    - 총점으로 비교하면 총점이 높은 수행평가를 많이 본 학생의 값이 너무 높아져서 비교가 어렵습니다.
    - 그래서 평균 점수로 비교하면 공정한 비교가 가능한 것과 같습니다.\

- ✅ 왜 √d_k로 나누나?
    - 일단 d_k가 Key의 차원값이기 때문입니다. Key의 차원은 Query의 차원과 같기 때문에 √d_k로 나눴습니다.
    - `√`는 왜 붙나? 라는 의문이 들었습니다. -> 분산을 1로 만들기 위해서인데 이 부분은 수학적인 부분이라 넘어가겠습니다.

### Scaled Dot-Product Attention 실습 코드

```python
import torch
import torch.nn.functional as F

# Query, Key 초기화 (차원: 64)
d_k = 64
Q = torch.rand(3, d_k)
K = torch.rand(3, d_k)

# 1️⃣ Scaling 없이 점곱
attn_scores_no_scaling = torch.matmul(Q, K.T)

# 2️⃣ √d_k로 나눈 점곱 (Scaling 적용)
attn_scores_scaled = torch.matmul(Q, K.T) / (d_k ** 0.5)

# 3️⃣ Softmax 적용하여 Attention Weights 얻기
attn_weights_no_scaling = F.softmax(attn_scores_no_scaling, dim=-1)
attn_weights_scaled = F.softmax(attn_scores_scaled, dim=-1)

print("Attention Scores (No Scaling):\n", attn_scores_no_scaling)
print("\nAttention Scores (Scaled by √d_k):\n", attn_scores_scaled)
print("\nAttention Weights (No Scaling):\n", attn_weights_no_scaling)
print("\nAttention Weights (Scaled by √d_k):\n", attn_weights_scaled)
```

차원 수를 아주 크게 늘린 예제입니다. scaled를 적용한 값과 적용하지 않은 값을 비교해보면 다음과 같습니다.

```text
Attention Scores (No Scaling):
 tensor([[16.1353, 15.5896, 15.6609],
        [14.6310, 13.3090, 13.0502],
        [17.6245, 15.7619, 17.3316]])

Attention Scores (Scaled by √d_k):
 tensor([[2.0169, 1.9487, 1.9576],
        [1.8289, 1.6636, 1.6313],
        [2.2031, 1.9702, 2.1664]])

Attention Weights (No Scaling):
 tensor([[0.4542, 0.2632, 0.2826],
        [0.6791, 0.1811, 0.1398],
        [0.5259, 0.0817, 0.3924]])

Attention Weights (Scaled by √d_k):
 tensor([[0.3476, 0.3247, 0.3276],
        [0.3748, 0.3177, 0.3076],
        [0.3628, 0.2874, 0.3498]])
```


### Value란?

이제 구해진 Attention Weight를 Value값과 통합하여 학습에 이용하는데 Value값이 무엇인가하면..

그냥 정보가 들어있는 값입니다. 보통 입력 임베딩 또는 이전 레이어의 출력 값이라고 하네요. 토큰의 특징을 담은 값이라고 합니다.

이걸 이제 Attntion Weight와 조합하면 그냥 정보에서 중요한 정보가 된다..로 이해할 수 있습니다.

- ✅ Value 값은 어떻게 구하나요?
    - Value 값은 입력 벡터(X)에 학습된 가중치(W_v)를 곱한 값입니다.



### 정리

- ✅ 내용 요약
1. Attention Score는 문장 내 단어들 간의 연관성을 나타냄.
2. Query(Q)와 Key(K)의 점곱(Dot Product)으로 유사도 계산
3. 값이 크면 두 단어의 관련성 높음
4. Softmax를 적용해서 확률값으로 변환 > 모델이 더 잘 학습한다.

- ✅ Self Attention 과정
1. Query(Q), Key(K), Value(V) 만들기
2. Q와 K의 점곱(Dot Product)으로 Attention Score 계산하기
3. Softmax 적용하여 Attention Weight 얻기
4. Attention Weight를 사용해서 Value(V) 값을 조합하여 최종 결과 만들기