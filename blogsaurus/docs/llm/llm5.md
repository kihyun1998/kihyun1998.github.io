---
sidebar_position: 5
---

# [LLM] 5. Position Encoding 실습
---

## Sinusoidal Position Encoding
---

`Sinusoidal PE`는 미리 정의된 사인, 코사인 함수를 이용해서 토큰의 위치를 수학적으로 인코딩합니다.
모델이 학습하는 것이 아닌 위치 정보가 고정된 상태로 제공됩니다.

- ✅ 특징
    - 규칙적인 패턴을 가지며 절대적인 위치를 표현할 수 있습니다.
    - 위치 간 간격에 대한 정보가 그대로 보존되기 때문에 토큰 간 상대적 거리도 고려할 수 있음.
    - 수학적 관계를 갖기 때문에 긴 문장에서도 일반화가 잘된다.
    - 학습 파라미터가 필요 없다.

단점으로는 유연성이 낮다. 정도가 있습니다.

### 코드

```python
import numpy as np
import matplotlib.pyplot as plt

def get_position_encoding(seq_length, model_dim):
    """
    Sinusoidal Position Encoding을 계산하는 함수.
    
    Parameters:
    - seq_length: 문장의 최대 길이 (입력 토큰 개수)
    - model_dim: 임베딩 차원 (각 토큰이 표현되는 차원)
    
    Returns:
    - position_encoding: (seq_length, model_dim) 크기의 NumPy 배열
    """
    pos = np.arange(seq_length)[:, np.newaxis]  # (seq_length, 1) 형태로 위치 인덱스 생성
    i = np.arange(model_dim)[np.newaxis, :]  # (1, model_dim) 형태로 차원 인덱스 생성
    
    angle_rates = 1 / np.power(10000, (2 * (i // 2)) / np.float32(model_dim))  # 주기 설정
    encoding = pos * angle_rates  # 위치 * 주기 = 위치 인코딩 값
    
    # 짝수 인덱스에는 sin, 홀수 인덱스에는 cos 적용
    encoding[:, 0::2] = np.sin(encoding[:, 0::2])
    encoding[:, 1::2] = np.cos(encoding[:, 1::2])

    return encoding

# 문장 길이 20, 임베딩 차원 16으로 설정
seq_length = 2000
model_dim = 1600
pos_encoding = get_position_encoding(seq_length, model_dim)

# 위치 인코딩을 시각화 (Heatmap)
plt.figure(figsize=(10, 6))
plt.pcolormesh(pos_encoding, cmap='viridis', shading='auto')
plt.colorbar()
plt.xlabel("Embedding Dimension")
plt.ylabel("Word Position")
plt.title("Sinusoidal Positional Encoding Visualization")
plt.show()

```

위 코드를 사용해보면 sin-cos을 이용해서 규칙적인 패턴이 나오는 것을 확인해볼 수 있습니다.


### 규칙적인 패턴이 중요한 이유

- 단순 숫자 인코딩을 하면 모델은 다음과 같은 고민에 빠진다.
    - "위치 10과 위치 20의 차이가 얼마나 중요할까?"
    - "위치 1과 위치2의 차이가 위치 19와 위치 20의 차이보다 더 중요한가?"

- 단숫 숫자 표현은 거리를 표현하기가 어렵다. 순서를 표현하기에는 쉽지만 관계 표현에 있어서 연관성 추론이 어렵다.
- Sin & Cos를 사용하면 주기적인 패턴이 생기기 때문에 거리가 먼 단어여도 관계성을 갖을 수 있다.


## Learnable Position Encoding
---

`Learnable PE`는 위치 인코딩을 학습 가능한 가중치로 변경한 것. 각 위치마다 고유한 임베딩 벡터를 학습하는 방식. 훈련을 통해 최적의 위치 표현을 자동으로 찾는다.

- ✅ 특징
    - 위치 인코딩이 학습하면서 최적화된다.
    - 데이터에 맞는 위치 정보를 학습하기 때문에 특정 데이터셋에 더 나은 성능을 발휘할 수 있다.

단점은 모델의 크기 증가, 문장 길이가 길어지면 학습 어려울 수도 있다는 단점이 있습니다.


다른건 다 모르겠고 `Learnable PE`의 핵심은 NN의 학습 과정에서 자동으로 조정되는 파라미터라는 점이 핵심입니다.