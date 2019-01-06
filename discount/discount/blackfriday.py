from datetime import datetime


blackfriday_date = datetime(2019, 11, 25)


def blackfriday(current_date: datetime) -> int:
    days_to_blackfriday = (current_date - blackfriday_date).days

    if days_to_blackfriday == 0:
        return 10

    return 0
