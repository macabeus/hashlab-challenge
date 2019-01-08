from unittest import TestCase, main
from discount.intermittent import intermittent


class TestIntermittent(TestCase):
    def test_when_intermittent_is_enabled_and_product_is_even(self):
        with self.assertRaises(Exception) as error:
            intermittent(True, 2)

        assert str(error.exception) == 'Intermittent error simulation', \
            'Should raise an exception'

    def test_when_intermittent_is_disabled_and_product_is_even(self):
        try:
            intermittent(False, 2)
        except Exception:
            self.fail('Should not raise an exception')

    def test_when_intermittent_is_enabled_and_product_is_odd(self):
        try:
            intermittent(True, 1)
        except Exception:
            self.fail('Should not raise an exception')


if __name__ == '__main__':
    main()
