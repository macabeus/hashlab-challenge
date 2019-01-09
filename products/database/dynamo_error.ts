import * as AWS from 'aws-sdk'

class DynamoError extends Error {
  public awsError: AWS.AWSError

  constructor(awsError: AWS.AWSError) {
    super(awsError.message)

    this.name = 'DynamoError'
    this.awsError = awsError
  }
}

export default DynamoError
