---
sidebar_position: 5
---

# Open Ko llm leaderboard
---

## Open Ko llm leaderboard란?
---

[Open-KO-LLM-leaderboard](https://huggingface.co/spaces/upstage/open-ko-llm-leaderboard)

open ko llm leaderboard는 한국어 LLM이 경쟁력을 갖추기 위해서 연구를 위해 리더보드 기능을 upstage에서 제공해주고 있습니다.

### 테스트 기준

```text
Ko-GPQA (Flitto 제공)
Ko-WinoGrande (Flitto 제공)
Ko-GSM8K (Flitto 제공)
Ko-EQ-Bench (Flitto 제공)
Ko-IFEval (Flitto 제공)
KorNAT-Knowledge (SELECTSTAR와 KAIST AI 제공)
KorNAT-Social-Value (SELECTSTAR와 KAIST AI 제공)
Ko-Harmlessness (SELECTSTAR와 KAIST AI 제공)
Ko-Helpfulness (SELECTSTAR와 KAIST AI 제공)
```

벤츠마크 테스트는 위와 같은 테스트를 진행합니다.

각 테스트는 아래와 같습니다.

```text
Ko-GPQA: 문제 해결 정확도
Ko-WinoGrande: 문장 이해 및 추론 정확도
Ko-GSM8K: 수학 문제 해결 정확률
Ko-EQ-Bench: 감정 이해 및 대응 능력
Ko-IFEval: 지침 따르기 성능
KorNAT-Knowledge: 한국어 지식 테스트 점수
KorNAT-Social-Value: 사회적 가치 이해도
Ko-Harmlessness: 윤리적 응답 평가
Ko-Helpfulness: 도움이 되는 응답의 비율
```