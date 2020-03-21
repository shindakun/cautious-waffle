import { APIGatewayProxyHandler } from 'aws-lambda'
import parseBody from './library/parse_body'
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
  /*first arg is token*/
  let [, slashCommand] = parseBody(event.body)

  try {
    return {
      statusCode: 200,
      body: slashCommand.command + ' ' + slashCommand.arguments
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Someting went wrong ' + e.message
    }
  }
}
