---
sidebar_position: 5
---

# [LLM] 5. position encoding 실습
---

## Sinusoidal Position Encoding 시각화
---

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

