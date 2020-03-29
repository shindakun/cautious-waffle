import AWS from 'aws-sdk'

const dynamodbOfflineOptions = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET' 
  },
  isOffline = () => process.env.IS_OFFLINE

const client = isOffline()
  ? new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions)
  : new AWS.DynamoDB.DocumentClient()

// add callback?
export default async (method: string, params: any): Promise<AWS.Request<string, object>> => {
  return await client[method](params) ;
};