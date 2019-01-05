import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'accessKey',
  secretAccessKey: 'secretAccessKey',
  region: 'us-east-1',
  logger: process.stdout,
})

const dynamo = new AWS.DynamoDB({ endpoint: 'localstack:4569', sslEnabled: false })

export default dynamo
