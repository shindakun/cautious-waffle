import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import parseBody from './library/parse_body'
import getCommandHandler from './library/get_command_handler'

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

  let handler = getCommandHandler(slashCommand.command)
  let body = await handler(slashCommand)

  try {
    return {
      statusCode: 200,
      body
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Someting went wrong ' + e.message
    }
  }
}
