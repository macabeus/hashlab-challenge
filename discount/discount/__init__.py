from typing import Optional
from datetime import datetime
from .birthday import birthday
from models.user import User


def apply(current_date: datetime, user: Optional[User]) -> int:
    if user is not None:
        return birthday(user, current_date)

    return 0
