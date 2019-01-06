from datetime import datetime
from database import users
import discount


user_id = 1
user = users.get_user(user_id)

current_date = datetime.today()

print(discount.apply(current_date=current_date, user=user))
