import test from 'ava'
import productsRoute from '../../routes/products'
import { dynamoProducts, dynamoTwoProducts } from '../helpers/dynamo'
import { discountSecondProductError, withDiscount, withoutDiscount } from '../helpers/grpc_client'
import { mockKoaRouter } from '../helpers/koa_router'

test('GET /product without discount', async t => {
  const ctx: any = {
    grpcClient: withoutDiscount,
    dynamo: dynamoProducts,
  }
  const route = {}

  await productsRoute(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/product' }, 'Should route be "GET /product"')
  t.deepEqual(ctx.body, [
    {
      id: 1,
      price_in_cents: 125,
      title: 'Bola',
      description: 'Esfera chutavel.',
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
  ], 'Should return a valid product')
})

test('GET /product with discount', async t => {
  const ctx: any = {
    grpcClient: withDiscount,
    dynamo: dynamoProducts,
  }
  const route = {}

  await productsRoute(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/product' }, 'Should route be "GET /product"')
  t.deepEqual(ctx.body, [
    {
      id: 1,
      price_in_cents: 125,
      title: 'Bola',
      description: 'Esfera chutavel.',
      discount: {
        pct: 10,
        value_in_cents: 12.5,
      },
    },
  ], 'Should return a valid product')
})

test('GET /product when one a product fail to get a discount', async t => {
  const ctx: any = {
    grpcClient: discountSecondProductError,
    dynamo: dynamoTwoProducts,
  }
  const route = {}

  await productsRoute(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/product' }, 'Should route be "GET /product"')
  t.deepEqual(ctx.body, [
    {
      id: 1,
      price_in_cents: 125,
      title: 'Bola',
      description: 'Esfera chutavel.',
      discount: {
        pct: 10,
        value_in_cents: 12.5,
      },
    },
    {
      id: 2,
      price_in_cents: 200,
      title: 'Pirulito',
      description: 'Tipo o do quico.',
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
  ], 'Should return a valid product')
})
