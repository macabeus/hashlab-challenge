from unittest import TestCase, main
from datetime import datetime
from discount.blackfriday import blackfriday, blackfriday_date


class TestBlackfridayDiscount(TestCase):
    def test_when_is_blackfriday(self):
        assert blackfriday(blackfriday_date) == 10, 'Should give 10 as descont'

    def test_when_not_is_blackfriday(self):
        current_date = datetime(2018, 1, 1)

        assert blackfriday(current_date) == 0, 'Should not give a descont'


if __name__ == '__main__':
    main()
