from typing import Optional
from datetime import datetime
from .birthday import birthday
from .blackfriday import blackfriday
from .intermittent import intermittent
from models.user import User


def _limit(discount: int):
    LIMIT = 10
    if discount > LIMIT:
        return LIMIT

    return discount


def apply(
    current_date: datetime,
    user: Optional[User],
    product_id: int,
    intermittent_flag: bool
) -> int:
    intermittent(intermittent_flag, product_id)

    gross_discount = 0

    gross_discount += blackfriday(current_date)

    if user is not None:
        gross_discount += birthday(user, current_date)

    final_discount = _limit(gross_discount)

    return final_discount
