from botocore.exceptions import ClientError
from datetime import datetime
from database import dynamo
from models.user import User


table = dynamo.Table('Users')


def response_object_builder(dynamo_item):
    datetime_format = '%Y-%m-%d'

    return User(
        id=int(dynamo_item['Id']),
        first_name=dynamo_item['FirstName'],
        last_name=dynamo_item['LastName'],
        date_of_birth=datetime.strptime(
            dynamo_item['DateOfBirth'],
            datetime_format
        )
    )


def get_user(id: int):
    try:
        response = table.get_item(
            Key={
                'Id': id
            }
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
        return None
    else:
        item = response['Item']
        user = response_object_builder(item)
        return user
