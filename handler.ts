import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import getCommandHandler from './library/get_command_handler'
import parseBody from './library/parse_body'
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
  try {
    const tokenequality = verifySignature(event)
    if (tokenequality) {
      return {
        statusCode: 200,
        body: 'Error: tokens dont match: ' + tokenequality
      }
    }
  } catch (e) {
    return {
      statusCode: 200,
      body: 'Error: ' + e.message
    }
  }

  const slashCommand = parseBody(event.body)
  if (!slashCommand) {
    return {
      statusCode: 400,
      body: 'Could not determine slash command'
    }
  }

  const handler = getCommandHandler(slashCommand.command)

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
