from datetime import datetime


class User:
    def __init__(
        self,
        id: int,
        first_name: str,
        last_name: str,
        date_of_birth: datetime
    ):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.date_of_birth = date_of_birth
