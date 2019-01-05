import test from 'ava'
import productsRoute from '../../routes/products'
import { dynamoProducts } from '../helpers/dynamo'

test('GET /product', async t => {
  let path = ''
  const ctx: any = {
    dynamo: dynamoProducts,
  }

  const mockKoaRouter: any = {
    get: async (getPath, callback) => {
      path = getPath

      await callback(ctx)
    },
  }

  await productsRoute(mockKoaRouter)

  t.is(path, '/product', 'Should path be "/product"')
  t.deepEqual(ctx.body, [
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
