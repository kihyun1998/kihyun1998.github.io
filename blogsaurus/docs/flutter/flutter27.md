---
sidebar_position: 27
---

# 27. [Flutter] shared_preferences

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='shared_preferences'

class _DetailScreenState extends State<DetailScreen> {
  late Future<WebtoonDetailModel> webtoon;
  late Future<List<WebtoonEpisodesModel>> episodes;
  late SharedPreferences prefs;
  bool isLiked = false;

  Future initPrefs() async {
    // 사용자 저장소와 커넥션
    prefs = await SharedPreferences.getInstance();
    final likedToons = prefs.getStringList('likedToons');
    if (likedToons != null) {
      // likedToons 안에 아이디가 있는지
      if (likedToons.contains(widget.id) == true) {
        // initState에서 값을 호출했더라도 setState로 refresh 해줘야한다.
        setState(() {
          isLiked = true;
        });
      }
    } else {
      // stringList 없다면 생성
      await prefs.setStringList('likedToons', []);
    }
  }

  @override
  void initState() {
    super.initState();
    webtoon = ApiService.getWebtoonById(widget.id);
    episodes = ApiService.getEpisodesById(widget.id);
    initPrefs();
  }

  toggleHeart() async {
    final likedToons = prefs.getStringList('likedToons');

    if (likedToons != null) {
      // isLiked였다면 삭제, isLiked 전이면 추가
      isLiked ? likedToons.remove(widget.id) : likedToons.add(widget.id);
      // 다시 핸드폰 저장소에 저장
      await prefs.setStringList('likedToons', likedToons);
    }

    // 토글이니까 반대값 설정
    setState(() {
      isLiked = !isLiked;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        elevation: 1,
        backgroundColor: Colors.white,
        foregroundColor: Colors.green,
        actions: [
          IconButton(
            onPressed: toggleHeart,
            icon: Icon(
              isLiked
                  ? Icons.favorite_outlined
                  : Icons.favorite_outline_outlined,
            ),
          )
        ],
        title: Text(
          widget.title,
          style: const TextStyle(
            fontSize: 25,
            fontWeight: FontWeight.w400,
          ),
        ),
      ),
      body:...
    );
  }
}
```


## 공부한 내용
---

핸드폰 저장소와 연결하려면 `shared_preferences`를 사용하면 된다.