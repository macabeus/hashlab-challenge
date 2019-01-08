from unittest import TestCase, main
from models.user import User
from discount.blackfriday import blackfriday_date
import discount


class TestLimitDiscount(TestCase):
    def test_should_not_give_more_than_10_descont(self):
        user = User(
            id=1,
            first_name='Macabeus',
            last_name='Aquino',
            date_of_birth=blackfriday_date
        )

        assert discount.apply(
            current_date=blackfriday_date,
            user=user,
            product_id=1,
            intermittent_flag=False
        ) == 10, \
            'Should give 10 as descont'


if __name__ == '__main__':
    main()
