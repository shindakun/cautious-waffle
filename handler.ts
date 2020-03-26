import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda'
import 'source-map-support/register'
import getCommandHandler from './library/get_command_handler'
import db from './library/database/dynamodb'
import parseBody from './library/parse_body'
import verifySignature from './library/verify_signature'
import AWS from "aws-sdk";


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
  const body = await handler(slashCommand)
  const isJson = typeof body === 'object'

  try {
    return {
      statusCode: 200,
      headers: {
        'Content-type': isJson ? 'application/json' : 'text/plain'
      },
      body: isJson ? JSON.stringify(body) : body
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Something unexpectedly went wrong: ' + e.message
    }
  }
}

export const characters: APIGatewayProxyHandler = async (_event, _ctx) => {
  const request = await db(
      'scan',
      {
        TableName: process.env.CHARACTERS_TABLE_NAME
      });
  let data;
  try {
    const response = await request.promise();
    data = await response;
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify('Something went wrong connecting to the database' + e.message)
    }
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify('Something went wrong responding ' + e.message)
    }
  }
};