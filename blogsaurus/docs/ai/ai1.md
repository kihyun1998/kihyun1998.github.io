---
sidebar_position: 1
---

# RAG (Retrieval Augmented Generation)
---

## RAG란
---

RAG란 Retrieval Augmented Generation의 약자이다.

검색, 증강, 생성의 약자다.

문서들을 기반으로 검색(Retrieval)하고 검색된 내용 기반으로 데이터를 증강(Augmented)하고 증강한 데이터를 통해서 생성하는 방식이다.

## 프로세스

1. `전처리 작업`  
2. `서비스 단계 작업`

프로세스로는 2가지가 있다.

`전처리 작업` 안에는 `Load`, `Split`, `Embed`, `Store` 총 4가지 일을 한다.

## 전처리 작업

### Load

Load하는 작업은 문서를 로드하는 과정인데, PDF나 JSON 그리고 URL까지 로드할 수 있다.

모델 선택 고려사항 : 
1. 인코딩 잘 하는지? **한글 인코딩**, **특수문자**

2. 어떤 메타데이터까지 가져오는지?

메타데이터 종류: 내용, 페이지 번호, 표, 차트, 좌표, 속성값(title..) 

3. 읽는 속도가 빠른지?


LangChain기준 추천 로더 : `fitz`(단순 빠른 요약), `PyPDFLoader`(한글 인코딩 Good, metaData: 파일명, 페이지번호), `UnstructuredPDFLoader`(많은 메타데이터 가져올 수 있음.), `PDFPlumber`(한글인코딩 Good, 메타데이터 다양, Best),

### Split

문서가 길기 때문에 작은 조각으로 나누는 작업이 필요하다(Chunking)

`CharacterTextSplitter` : 분할 가능한 최소의 단위로 분할 시도 공백이나 점 기준 분할 > 단어가 잘리지는 않지만 문장 완성이 안된다.

`RecursiveCharacterTextSplitter`: 범용적으로 많이 사용한다. 재귀적으로 분할을 시도한다.(분할한 값이 너무 길면 다음 방식으로 분할 시도) `"\n\n"`, `"\n"`, `" "`, `""` 

단락 분할 > 문장 분할 > 단어 분할

좋은 이유는 가장 의미가 관련있는 값으로 분할되기 때문이다.


`TokenTextSplitter` : 한글 깨질수도 > KonlpyTextSplitter를 사용하는게 해결책이 될수도. Kkma 형태소 분석을 사용하기 때문

`HugginFace의 Tokenizes`: 스플리터를 파인 튜닝할 수 있음. 특정 도메인 용어나 신조어에 대비 가능

`SemanticChunker`: 텍스트를 의미 유사성에 따라 분할한다.


### Embed

벡터 DB에 저장하기 위해서 임베딩하는 작업이 필요함.

임베딩은 텍스트의 벡터 표현(숫자로)을 만드는 작업이다. 의미 검색을 시키기 위해서 필요한 작업임.

문서를 임베딩하는 것과 사용자의 질의를 임베딩 하는 것을 고려해야한다.
(ex. 문서는 영어더라도 질문이 한국어로 들어올 가능성이 있다면 한국어 모델을 고려해야함.)

그리고 Document 임베딩 모델과 Query 임베딩 모델은 맞춰주는게 좋다. 버전까지


자주 사용하는 임베딩 모델은 OpenAI, Hugging Face에서 사용할 수 있음.

`OpenAIEmbeding`: 사용하면 돈은 들지만 장비에 대한 성능을 고려하지 않아도 되고 Embedding pipeline을 생략할 수 있음.

`CacheBackedEmbeddings`: 임베딩을 저장하거나 임시로 캐싱해서 다시 임베딩 하지 않도록 하기 위해서 사용한다. key-value 저장소다.

OpenAI와 같이 사용한다. 캐시에서 먼저 찾고 없으면 OpenAI로 임베딩함. 그래서 유료 임베딩 모델을 사용한다면 wraping을 해주는게 좋음 아래는 예시 코드

```python
openai_embedding = OpenAIEmbeddings()
store = localFileStore("./cache/")

cached_embedder = CacheBackEmbeddings.from_bytes_store(
    openai_embedding, store, namespace=openai_embedding.model
)
```

`HuggingFace 임베딩 모델` : 자체 서버 구축해서 할 수 있다. API도 있긴한데 속도가 느림.


### Store

임베딩이 끝나면 벡터 DB에 저장

[https://python.langchain.com/v0.2/docs/integrations/vectorstores/](랭체인 벡터DB 목록)

다양한 벡터디비가 있다.

크게 나누면 2가지로 나눌 수 있음. > `클라우드`, `로컬`

클라우드에서는 `Pinecone`, `Weaviate`, `ElasticSearch`가 있고  
로컬에서는 `Chroma`, `FAISS`가 있다.

`milvus`라는 것도 존재함

FAISS를 추천함 > 메타에서 개발

### 전처리 관련 팁

- 페이지 단위 분할

메타데이터 정보에 (페이지번호, 파일명, mod, author) 추가하는게 좋다.

파일명, 페이지번호가 중요한 이유가 답변에 대한 신뢰도 측면에서임. 출처를 남기기 위해서.

mod도 중요한 이유가 최신 정보 필터하기 위해서

author 작성자 정보도 좋다고 함.

추가적으로 키워드 추출해서 태깅하는게 좋다.

- 필요한 영역 crop

불필요한 정보 제거해야함. 상단 바나 라이센스관한 정보

- 분할 문서 파싱

파싱 전략을 잘 세워야함.

1:1 분할 문서의 경우 PDFPlumber의 Bounding Box를 사용하면 해결할 수 있음. 아니면 PDFminer를 사용

PDFminer는 후처리 필요함.

- 표추출

camelot...

- chunk overlap은 여유롭게

or 이전 페이지 뒷부분과 앞 부분 병합

or 여러 chunk size 적용해서 retrieval한 값 union함


- 이미지

fitz를 사용하면 이미지만 추출 가능


## 서비스 단계 작업


전체적으로 보면 질문을 통해서 retrieve를 하고 prompt 날리면 LLM이 답변해주는 작업이다.

### Retriever

쿼리를 기반으로 벡터 DB에 저장된 정보에서 원하는 내용 검색하는 도구


- `Sparse Retriever`

전통적인 검색, 키워드 벡터로 변환하여 처리한다는데, 단어 등장 빈도수를 중요도로 본다. > 키워드 선택에 크게 의존한다.

- `Dense Retriever`

키워드가 완벽히 일치하지 않아도 의미적으로 관련된 문서 검색.

- `vector store 지원 retriever`

vector store가 지원하는 기본적인 retriever. 의미기반 검색이라 dense retriever이다.

- `Multi-Query Retriever`

거리 기반 벡터 DB 검색은 유사한 임베딩 문서를 찾는데 쿼리 문구가 미묘하면 의미 파악을 잘 못하는 경우 있음.

그래서 이 리트리버는 한 질문에 대해 여러 잠재적 쿼리를 만들어줌.

- `Ensemble Retriever`

반드시 써봐야함. 시맨틱 서치가 유사 의미 문서 검색에서는 유리하지만 특정 키워드가 반드시 포함되어야 하는 검색 시 유사 단어가 포함된 문서가 검색 될 수 있다는 단점 있음 > 너무 많은 필요없는 정보 제공해줌.

Sparse Retriever(bm25)는 키워드 기반이고 Dense Retriever(faiss_retriever)는 의미 기반이라고 하면 앙상블은 두개 합한거다.



예시는 아래와 같음

```python
bm25_r = BM25Retriver_from_..
..

faiss_r = FAISS.from..


ensemble_r = EnsembleRetriever(
    retrievers=[bm25_r,faiss_r],weights=[0.5,0.5]
)
```

이런식으로 2개의 알고리즘을 갖고 있는 리트리버 섞어서 쓰는거

`Long Context Reorder` : LLM은 중간 부분을 무시하는 특성이 있음.

매우 중요 - 덜 중요 - 중요 순서로 정렬해서 넣어야 이상적 결과를 가질 수 있음. > 이걸 해결해주는게 이거임.

`Multi-Vector Retriever`: 여러 리트리버 앙상블
`ContextualCompressor` : 긴 길이 압축
`LLMChainFilter`: 결과 필터링


## 정리
---

후반부에는 결국 하는일은 `질문`을 해서 `검색(Retrieve)`을 vector store에서 해서 나온 값을
`prompt`와 조합하여 `LLM`에 넘기면 답변이 나옵니다.