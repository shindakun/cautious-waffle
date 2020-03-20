import { APIGatewayProxyHandler } from 'aws-lambda'
import qs from 'querystring'

import 'source-map-support/register'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }
}

export const slack: APIGatewayProxyHandler = async (event, _ctx) => {
  try {
    const {
      channel_id,
      channel_name,
      command,
      enterprise_id,
      enterprise_name,
      response_url,
      team_id,
      team_domain,
      text,
      token,
      trigger_id,
      user_id,
      user_name
    } = qs.parse(event.body)

    return {
      statusCode: 200,
      body: text
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Someting went wrong ' + e.message
    }
  }
}
