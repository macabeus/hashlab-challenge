import * as AWS from 'aws-sdk'

class DynamoError extends Error {
  public awsError: AWS.AWSError

  constructor(awsError: AWS.AWSError) {
    super('Dynamo error')

    this.name = 'DynamoError'
    this.awsError = awsError
  }
}

export default DynamoError
