import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import getCommandHandler from './library/get_command_handler'
import parseBody from './library/parse_body'
import { createVerify } from 'crypto'
import verifySignature from './library/verify_signature'

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
  if (!verifySignature(event)) {
    return {
      statusCode: 401,
      body: 'Unauthorized'
    }
  }

  let slashCommand = parseBody(event.body)
  if (!slashCommand) {
    return {
      statusCode: 400,
      body: 'Could not determine slash command'
    }
  }

  let handler = getCommandHandler(slashCommand.command)

  try {
    return {
      statusCode: 200,
      body: await handler(slashCommand)
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Something unexpectedly went wrong: ' + e.message
    }
  }
}
