import test from 'ava'
import { index } from '../../database/products'


test('Index', async t => {
  const result = index()

  t.deepEqual(result, [
    {
      id: '1',
      price_in_cents: 100,
      title: 'Bola',
      description: 'Esfera chutavel.',
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
  ], 'Should return a valid product')
})
