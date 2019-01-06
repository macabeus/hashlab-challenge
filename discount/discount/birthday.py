from datetime import datetime
from models.user import User


def birthday(user: User, current_date: datetime) -> int:
    is_birthday = (
        current_date.day == user.date_of_birth.day and
        current_date.month == user.date_of_birth.month
    )

    if is_birthday:
        return 5

    return 0
