---
sidebar_position: 13
---

# [Github Actions] Slack bot & Slack webhook
---

## Slack 활용하기
---

[api.slack.com](https://api.slack.com/)에서 Bot과 Webhook을 만들 수 있다.


`Your Apps` > `Create New App` >  `From scratch`에서 Slack 서비스 같은 걸 만들 수 있다.


### Bot 만들기

`Features` > `OAuth & Permissions` > `Scopes` > `Bot Token Scopes` > `Add an OAuth scope`에서 권한을 먼저 추가해야 한다.

그리고 `Features` > `OAuth & Permissions` > `OAuth Tokens for Your Workspace`에서 `Install to Workspace` 해주면 토큰이 나온다

`Bot User OAuth Token`을 Github Secret으로 지정하고 아래와 같이 사용할 수 있다.

```bash
/invite @bot이름
```

를 통해서 다른 채널에서 bot을 초대할 수 있다.

```yaml
      - name: 📥 Notify on Slack when Success
        if: success()
        uses: slackapi/slack-github-action@v1.15.0
        with:
          channel-id: '슬랙 채널 아이디'
          slack-message: 'Build succeeded! 🌞' 
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

### Webhook 만들기

`Basic Information`에서 `Add features and functionality`(기능 페이지) 에서 `Iconming Webhooks`를 들어가서 webhook을 활성화 시켜준다.

그리고 밑에 `Add New Webhhok to Workspace`를 누르고 설정한 값에 따라 나온 url을 깃허브 시크릿에 저장하여 사용한다.

```yaml
      - name: 📥 Notify on Slack when Success
        if: success()
        id: slack-success
        uses: slackapi/slack-github-action@v1.24.0
        with:
          payload: |
            {
              "channel": "[slack 채널 아이디]",
              "attachments": [
                {
                  "color": "#36a64f",
                  "title": "Build in ${{ github.repository }}",
                  "title_link": "https://github.com/${{github.repository}}",
                  "text": "🚀 GitHub Action 성공",
                  "fields": [
                    {
                      "title": "Repository",
                      "value": "${{ github.repository }}",
                      "short": true
                    },
                    {
                      "title": "Version",
                      "value": "${{ github.ref_name }}",
                      "short": true
                    },
                    {
                      "title": "Branch",
                      "value": "${{ github.ref_name }}",
                      "short": true
                    },
                    {
                      "title": "Commit",
                      "value": "<https://github.com/${{ github.repository }}/commit/${{ github.sha }}|${{ github.sh }}>",
                      "short": true
                    },
                    {
                      "title": "Actions Log",
                      "value": "<https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}|Workflow Log>",
                      "short": true
                    }
                  ]      
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK
```

이렇게 하나하나 정의해서 사용할 수도 있고

```yaml
      - name: 📥 Notify on Slack when Success
        uses: 8398a7/action-slack@v3
        with:
          status: ${{job.status}}
          fields: repo,message,commit,author,action,eventName,ref,workflow,job,took,pullRequest
          mention: here
          if_mention: failure, cancelled
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK
        if: always()
```

이렇게 market place에서 제공해주는 간단한 것을 사용하여 fields를 골라서 사용할 수도 있다.