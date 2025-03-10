---
sidebar_position: 18
---

# [LLM] 18. 사전학습 용어 정리
---




1️⃣ seq_length=256 👉 한 문장은 256개 토큰으로 고정
2️⃣ batch_size=16 👉 한 번 학습할 때 16개 문장을 한 스텝에 학습
3️⃣ train_dataset 크기=40 👉 총 40개 문장(샘플) 존재
4️⃣ 40 / 16 = 2.5 → 3개의 배치 생성 (drop_last=False 때문!)

Batch 1: 16개 문장
Batch 2: 16개 문장
Batch 3: 8개 문장 (마지막 작은 배치)
👉 그래서 3/3이 나오는 것!