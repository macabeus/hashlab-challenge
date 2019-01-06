from unittest import TestCase, main
from datetime import datetime
from models.user import User
from discount.birthday import birthday


class TestBirthdayDiscount(TestCase):
    def test_when_is_birthday(self):
        user = User(
            id=1,
            first_name='Macabeus',
            last_name='Aquino',
            date_of_birth=datetime(1996, 6, 1)
        )

        current_date = datetime(2018, 6, 1)

        assert birthday(user, current_date) == 5, 'Should give 5 as descont'

    def test_when_not_is_birthday(self):
        user = User(
            id=1,
            first_name='Macabeus',
            last_name='Aquino',
            date_of_birth=datetime(1996, 6, 1)
        )

        current_date = datetime(2018, 12, 9)

        assert birthday(user, current_date) == 0, 'Should not give a descont'


if __name__ == '__main__':
    main()
