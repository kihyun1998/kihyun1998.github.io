---
sidebar_position: 15
---

# [LLM] 15. 토큰 입력 부터 단어 예측까지
---


## 토큰 임베딩 코드
---

```python

class GPTModel(nn.Module):
    def __init__(self, vocab_size,d_model,num_heads, num_layers,dropout,context_length):
        super().__init__()

        # 1. Token embedding (단어 > 벡터)
        self.token_embedding = nn.Embedding(vocab_size,d_model)

        # 2. position encoding
        self.position_encoding = nn.Embedding(context_length, d_model)
        
        # 3. transformer blocks
        self.blocks = nn.ModuleList([
            TransformerBlock(d_model, num_heads, dropout, context_length) for _ in range(num_layers)
        ])

        # 4. Linear Projection
        self.ln_final = nn.LayerNorm(d_model)
        self.output_layer = nn.Linear(d_model,vocab_size)
        
    def forward(self, input_ids, mask=None):
        # 1. token embedding 적용
        token_embeds = self.token_embedding(input_ids)

        # 2. position embedding 적용
        pos_embeds = self.position_encoding(torch.arange(input_ids.shape[1],device=input_ids.device))

        # token embedding + position encoding
        x = token_embeds + pos_embeds

        # 4. transformer block 통과
        for block in self.blocks:
            x = block(x, mask)
        
        # 5. 최종
        x = self.ln_final(x)
        logits = self.output_layer(x)

        return logits
```


### 시각화 해서 확인

```python
# 모델 설정
vocab_size = 100    # 단어 개수
d_model = 128       # 임베딩 차원
context_length = 20 # 최대 문장 길이

# GPT 모델 생성
model = GPTModel(vocab_size,d_model,num_heads=4,num_layers=4,dropout=0.1,context_length=context_length)

# 가짜 데이터
input_ids = torch.randint(0,vocab_size,(1,context_length))

with torch.no_grad():
    token_embeds = model.token_embedding(input_ids).squeeze(0).numpy()  # (seq_length, d_model)
    pos_embeds = model.position_encoding(torch.arange(context_length)).numpy()  # (seq_length, d_model)
    combined_embeds = token_embeds + pos_embeds  # 최종 Transformer 입력

# 🔹 히트맵 시각화 (Embedding 확인)
fig, axes = plt.subplots(1, 3, figsize=(18, 5))

sns.heatmap(token_embeds, cmap="coolwarm", ax=axes[0])
axes[0].set_title("Token Embedding")

sns.heatmap(pos_embeds, cmap="coolwarm", ax=axes[1])
axes[1].set_title("Positional Encoding")

sns.heatmap(combined_embeds, cmap="coolwarm", ax=axes[2])
axes[2].set_title("Token + Positional Encoding")

plt.show()
```

![alt text](img/15/1.png)


## 예측해보기
---

```python
import torch
import torch.nn.functional as F

from embedding import GPTModel

# 어휘집
vocabulary = ["hello","world","this","is","a","test","model","GPT","language","AI"]
vocabulary_size = len(vocabulary)

# 토큰 인코딩 함수
def encode(text):
    return torch.tensor([vocabulary.index(word) for word in text.split() if word in vocabulary]).unsqueeze(0)

# 토큰 디코딩 함수
def decode(tokens):
    return " ".join([vocabulary[index] for index in tokens])

# 가짜 입력 문장
input_text = "hello world this is"
input_ids = encode(input_text)

# 모델 생성
model = GPTModel(
    vocab_size=vocabulary_size, 
    d_model=128,
    num_heads=4,
    num_layers=4,
    dropout=0.1,
    context_length=vocabulary_size)

model.eval() # 평가 모드

with torch.no_grad():
    logits = model(input_ids)
    next_token_logits = logits[:,-1,:]
    next_token = torch.argmax(F.softmax(next_token_logits,dim=1),dim=-1).item()

# 결과 출력
print(f"입력 문장: {input_text}")
print(f"예측된 다음 단어: {vocabulary[next_token]}")
```

아래 처럼 출력되는데 어차피 랜덤입니다. 왜냐하면 모델을 통해 학습이 된게 아니기 때문입니다.

```text
입력 문장: hello world this is
예측된 다음 단어: test
```



### 여러개 예측하기

```python
def generate(model,tokenizer,start_text,max_new_tokens):
    model.eval()
    input_ids=encode(start_text)

    for _  in range(max_new_tokens):
        with torch.no_grad():
            logits = model(input_ids)
            next_token_logits = logits[:,-1,:]
            next_token = torch.argmax(F.softmax(next_token_logits,dim=1),dim=-1).item()
            
            # 입력에 추가
            input_ids = torch.cat([input_ids, torch.tensor([[next_token]])], dim=1)

    return decode(input_ids.squeeze(0).tolist())

# 실행
generated_text = generate(model, encode, "hello world this is", max_new_tokens=5)
print("🔥 생성된 문장:", generated_text)
```



```text
🔥 생성된 문장: hello world this is a world model AI a
```

이런식으로 여러개 예측할 수 있습니다.. 학습이 된 모델이 아니기에 랜덤값입니다.




## 전에 다뤘던 코드
---

### Transformer Block
```python
class TransformerBlock(nn.Module):
    """
    d_model: 입력 차원 크기
    num_heads: Multi-Head Attention에서 사용할 Attention Head 개수
    dropout: 과적합 방지를 위한 드롭아웃 비율
    context_length: 한번에 처리할 수 있는 최대 문장 길이
    """
    def __init__(self, d_model, num_heads, dropout, context_length):
        super().__init__()

        self.context_length = context_length
        # Layer Normalization (Pre-LayerNorm 방식)
        self.ln1 = nn.LayerNorm(d_model)
        self.ln2 = nn.LayerNorm(d_model)
        
        # Multi-Head Attention (MHA)
        self.attn = nn.MultiheadAttention(embed_dim=d_model, num_heads=num_heads, dropout=dropout, batch_first=True)

        # Feed Forward Network (FFN)
        self.ffn = nn.Sequential(
            nn.Linear(d_model, d_model * 4),  # 확장 (기본적으로 4배 크기로 증가)
            nn.GELU(),  # 활성화 함수
            nn.Linear(d_model * 4, d_model),  # 다시 원래 크기로 축소
            nn.Dropout(dropout),
        )

        # 미리 causal mask를 만들어두기
        self.register_buffer("causal_mask", self._create_causal_mask(context_length))

    def _create_causal_mask(self, seq_length):
        """
        상삼각 행렬을 만들어서 미래 단어를 보지 못하도록 함.
        """
        mask = torch.triu(torch.ones(seq_length, seq_length), diagonal=1)
        mask = mask.masked_fill(mask == 1, float('-inf'))
        return mask

    def forward(self, x, mask=None):
        # 입력 시퀀스 확인
        seq_length = x.size(1)
        if mask is None:
            mask = self._create_causal_mask(seq_length).to(x.device) 

        # Multi-Head Attention (Self-Attention)
        x = self.ln1(x)
        attn_out,_ = self.attn(x,x,x,attn_mask=mask,need_weights=False)
        x = x + attn_out # residual_connection

        # Feed Forward Network (FFN)
        x = self.ln2(x)
        ffn_out = self.ffn(x)
        x = x + ffn_out # residual_connection
        
        return x
```