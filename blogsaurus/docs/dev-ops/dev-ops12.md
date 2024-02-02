---
sidebar_position: 12
---

# [Github Actions] release에 업로드
---

## 먼저 다른 job으로

```yaml
  release:
    needs: build
    runs-on: ubuntu-latest

```

사실 build job 안에서 저는 다 해도 된다고 생각합니다. 그게 더 편하구요

## artifacts 다운로드

```yaml
      - name: Download Artifact
        uses: actions/download-artifact@v3
        with:
          name: ${{env.FILE_NAME}}
          path: ${{github.workspace}}
```

이런식으로 다운로드할 수 있습니다. 그럼 다운로드 받은 파일은 github.workspace 경로에 있겠죠

## Release 생성
---

### Create

```yaml
      - name: Create Release
        id: create_release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        with:
          tag_name: ${{env.TAG_NAME}}
          release_name: Release ${{env.FILE_NAME}}
          body: |
            # Release Success !
            - 이부분은 릴리즈 노트를 작성하는 부분입니다.

            ## sub
            - 뺄셈 프로그램입니다.
          draft: false
          prerelease: false
```

먼저 `id`를 설정해 줘야하는게 밑에서 업로드할 때 만든 경로로 사용합니다. 

그리고 github token을 사용해서 github api를 이용해야 합니다.

`tag_name`은 태그 이름  
`release_name`은 릴리즈 이름
`body`는 릴리즈 노트 작성하는 부분입니다. `|`를 사용해서 여러 줄 가능
`draft`는 공개되지 않은 릴리즈인지 여부 true 하면 다른 사용자들이 못봄  
`prerelease`는 아직 안정적인 버전이 아니라는 여부


### File upload

```yaml
      - name: Upload Release Asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        with:
          upload_url: ${{ steps.create_release.outputs.upload_url }}
          asset_path: ${{github.workspace}}/${{env.FILE_NAME}}
          asset_name: ${{env.FILE_NAME}}.tar
          asset_content_type: application/x-tar
```

업로드 시점에도 github api를 위해 token 정의해줘야함.

그리고 `upload_url`을 정의해줘야 하는데 위에서 id를 정한 이유가 나옵니다.

그리고 artifact를 다운로드 받은 `위치/파일이름`으로 `asset_path`정의해주고

release에 올라갈 `asset_name`과 타입을 정해줍니다.

```yaml
          asset_name: ${{env.FILE_NAME}}.tar
          asset_content_type: application/x-tar
```

위처럼 하면 tar

```yaml
          asset_name: ${{env.FILE_NAME}}.zip
          asset_content_type: application/zip
```

이렇게 하면 zip입니다.