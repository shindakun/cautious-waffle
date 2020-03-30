# cautious-waffle
Something to do with Dungeons and Dragons. Maybe play it in slack, I think.

---

## offline development

- Install DynamoDB Local
  - `sls dynamodb install`

- Start Serverless offline
  - `IS_OFFLINE=true serverless offline start`

- Calling the local API

With the local build running, we'll need to `POST` to the API at `localhost:3000/dev/slack` using a payload the mimics a call from Slack:

```text
token=TOKEN
&team_id=TEAM
&team_domain=waffle.slack.com
&channel_id=CHANNEL
&channel_name=bottest
&user_id=USER
&user_name=waffle
&command=/waffle
&text=api%20spells
```

Using the above and `curl` we would call `api spells`:

```
 curl -d 'token=TOKEN&team_id=TEAM&team_domain=waffle.slack.com&channel_id=CHANNEL&channel_name=bottest&user_id=USER&user_name=waffle&command=/waffle&text=api%20spells' -X POST http://localhost:3000/dev/slack
```

---
| Command | Description |
| --- | --- |
| `npm test` | run jest tests |
| `npm watch`  | run jest tests only on files that have been changed |
| `npm dev` | run serverless in offline mode for local development |


