from datetime import datetime
from database import dynamo
from database import users
import discount


user_id = 1
user = users.get_user(user_id)
