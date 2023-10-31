---
sidebar_position: 25
---

# 25. [Flutter] 인자가 있는 API Service

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='api service'
static Future<WebtoonDetailModel> getWebtoonById(String id) async {
  final url = Uri.parse('$baseURL/$id');
  final response = await http.get(url);
  if (response.statusCode == 200) {
    final webtoon = jsonDecode(response.body);
    return WebtoonDetailModel.fromJson(webtoon);
  }
  throw Error();
}

static Future<List<WebtoonEpisodesModel>> getEpisodesById(String id) async {
  List<WebtoonEpisodesModel> webtoonEpisodes = [];
  final url = Uri.parse('$baseURL/$id/episodes');
  final response = await http.get(url);
  if (response.statusCode == 200) {
    final List<dynamic> episodes = jsonDecode(response.body);
    for (var episode in episodes) {
      webtoonEpisodes.add(WebtoonEpisodesModel.fromJson(episode));
    }
    return webtoonEpisodes;
  }
  throw Error();
}
```


```dart title='호출'
late Future<WebtoonDetailModel> webtoon;
late Future<List<WebtoonEpisodesModel>> episodes;

@override
void initState() {
  super.initState();
  webtoon = ApiService.getWebtoonById(widget.id);
  episodes = ApiService.getEpisodesById(widget.id);
}
```


## 공부한 내용
---

### 인자를 사용해야 하는 API Service 호출

위처럼 인자가 있는 api service를 호출할 때 그 인자가 하드 코딩 되지 않은 인자라면 다른 방식으로 사용해야합니다.

즉 사용자의 행동에 다른 값을 입력받아서 그 값을 api service 호출에 사용한다면 ( 클릭한 사진의 id 또는 버튼을 클릭했을 때 초기화되는 칸의 값들 .. 등등)

**방법**

1. StatelessWidget을 StatefulWidget으로 변경한다.

2. 값을 받아올 변수를 선언한다.

3. initState를 사용해서 선언한 변수에 값을 넣는다.

4. 주의할 점은 위젯의 변수를 사용할 때 `widget.`을 앞에 붙여주고 사용한다. ( 상위 위젯에 정의됐기 때문)
