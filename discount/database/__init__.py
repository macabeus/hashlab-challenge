import boto3

dynamo = boto3.resource(
    'dynamodb',
    aws_access_key_id='accessKey',
    aws_secret_access_key='secretAccessKey',
    region_name='us-east-1',
    endpoint_url='http://localstack:4569'
)
