import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import parseBody from './library/parse_body'
import getCommandHandler from './library/get_command_handler'
import db from './library/database/dynamodb'

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

export const dyno: APIGatewayProxyHandler = async (event, _ctx) => {
  let [] = parseBody(event.body)

  let request = await db('scan', {
    TableName: 'characters'
  })
  request.send((e: any, data: any) => { console.log(e, data)});

  try {
    return {
      statusCode: 200,
      body: JSON.stringify('OK')
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify('Someting went wrong ' + e.message)
    }
  }
}