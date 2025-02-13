---
sidebar_position: 10
---

# [LLM] 10. Casual Attention
---

## Casual Attention
---

Casual Attention은 미래의 단어를 보지 않고 예측하는 방법입니다.

GPT 같은 Autogressive 모델에서 중요한 개념이라고 합니다. 모델이 다음 단어를 예측할 때 과거의 정보만 사용하도록 강제할 수 있습니다.

그래서 간단하게 말하면 **미래 단어를 가릴 수 있도록 마스킹** 하는 기술이라고 합니다.


### 왜 마스킹 하나?

- AI가 학습할 때 미래 단어를 미리 보면 답을 보고 문제를 푸는 것과 같아서 학습이 안된다고 합니다.

### 동작하는 방식

- 이전 단어들만 참고하고 미래 단어는 못보게 가린다는데 솔직히 이해는 가지 않습니다.


## 실습 코드
---

```python
import torch

# 1. 입력 데이터 (단순한 3개 단어 문장, 4차원 임베딩)
seq_len = 3   # 문장 길이 (예: "I love AI")
embed_dim = 4  # 임베딩 차원 (각 단어가 4차원 벡터로 표현)

# 예제 입력 (랜덤 값, 실제는 Transformer 임베딩 사용)
x = torch.randn(seq_len, embed_dim)
print("입력 데이터 (토큰 임베딩):\n", x)

# 2. Query, Key, Value 생성 (Self-Attention에서 사용됨)
W_q = torch.randn(embed_dim, embed_dim)  # Query 변환 행렬
W_k = torch.randn(embed_dim, embed_dim)  # Key 변환 행렬
W_v = torch.randn(embed_dim, embed_dim)  # Value 변환 행렬

Q = x @ W_q  # (3,4) x (4,4) = (3,4)
K = x @ W_k
V = x @ W_v



# 3. Attention Score 계산 (Q @ K.T)
attn_scores_no_scaling = torch.matmul(Q, K.T)
attn_scores = torch.matmul(Q, K.T) / (embed_dim ** 0.5)
print("\nAttention Score (원본):\n", attn_scores)

# 4. 마스킹 생성 (미래 단어 가리기)
mask = torch.triu(torch.ones(seq_len, seq_len), diagonal=1)  # 상삼각 행렬 생성
mask = mask.bool()  # Boolean 형태로 변환
print("\n마스킹 행렬:\n", mask)

# 5. Attention Score에 마스킹 적용
attn_scores.masked_fill_(mask, float('-inf'))  # 미래 단어를 -∞로 설정
print("\n마스킹 적용된 Attention Score:\n", attn_scores)

# 6. Softmax 적용 (확률값으로 변환)
attn_weights = torch.softmax(attn_scores, dim=-1)
print("\nSoftmax 후 Attention Weight:\n", attn_weights)

# 7. Attention 가중치 적용하여 최종 값 계산 (가중합)
output = attn_weights @ V  # (3,3) x (3,4) = (3,4)
print("\n최종 Attention Output:\n", output)

```


### 입력 데이터

```text
입력 데이터 (토큰 임베딩):
 tensor([[ 0.9811,  0.1954, -0.8982, -0.1720],
        [-0.2018,  0.2038,  1.6621,  1.8928],
        [ 0.3604, -0.5018,  1.4016, -0.6515]])
```

예시 입력 데이터 입니다.

### Attention Score (원본)

```text
Attention Score (원본):
 tensor([[-7.7534,  9.9981,  4.0247],
        [ 0.6387,  9.6488,  5.9596],
        [ 1.3511, 10.7251,  7.8433]])
```

Self-Attention 방식의 점수입니다.

### 마스킹 행렬

```text
마스킹 행렬:
 tensor([[False,  True,  True],
        [False, False,  True],
        [False, False, False]])
```

상삼각행렬을 이용하여 마스킹을 설정했습니다.

```python
mask = torch.triu(torch.ones(seq_len, seq_len), diagonal=1)
```

pytorch에서 triu함수를 쓰면 상삼각행렬을 사용할 수 있는데 아래 처럼 나옵니다.

```text
1 1 1 1
0 1 1 1
0 0 1 1
0 0 0 1
```

diagonal=1을 사용하면

```text
0 1 1 1
0 0 1 1
0 0 0 1
0 0 0 0
```

이렇게 변환할 수 있습니다.

- ✅ 마스킹을 왜 이렇게 하나요?
        - 이렇게 마스킹 방식으로 하기로 알고리즘 적으로 정해져있는 것입니다.


| 단어 | 단어1 | 단어2 | 단어3 | 
|------|---|---|---|
| 단어1 | ✅ | ❌ | ❌ |
| 단어2 | ✅ | ✅ | ❌ |
| 단어3 | ✅ | ✅ | ✅ |

위와 같은 마스킹 방식이 널리 사용되고 있다고 하네요.


### 마스킹 적용된 Attention Score

```text
마스킹 적용된 Attention Score:
 tensor([[-7.7534,    -inf,    -inf],
        [ 0.6387,  9.6488,    -inf],
        [ 1.3511, 10.7251,  7.8433]])
```

Attention Score (원본) 중 마스킹 값 true에 위치하는 애들을 -inf로 돌립니다.

### Softmax 후 Attention Weight

```text
Softmax 후 Attention Weight:
 tensor([[1.0000e+00, 0.0000e+00, 0.0000e+00],
        [1.2215e-04, 9.9988e-01, 0.0000e+00],
        [8.0390e-05, 9.4686e-01, 5.3057e-02]])
```

Softmax함수를 돌려서 보면 -inf인 곳은 모두 0으로 변했습니다.

### 최종 Attention Output

```text
최종 Attention Output:
 tensor([[-1.3495, -0.0827, -0.4479, -0.8731],
        [ 0.3756, -0.4200, -0.1823,  2.7832],
        [ 0.2240, -0.2482, -0.3019,  2.6438]])
```

value 값과 합쳐진 최종 값을 확인해본다면 masking이 적용됐다고 볼 수 있습니다.
