import test from 'ava'
import * as supertest from 'supertest'
import { server } from '../../../index'

test('GET /product without user and without discount', async t => {
  t.plan(2)

  const res = await supertest(server)
    .get('/product')
    .set({ 'force-discount-debug': 0 })

  t.deepEqual(res.status, 200, 'Should get success status')

  const bodyResult = res.body.sort((a, b) => a.id > b.id)
  const bodyAssertion = [
    {
      id: 1,
      title: 'Bola',
      description: 'Esfera chutavel.',
      price_in_cents: 100,
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
    {
      id: 2,
      title: 'Pirulito',
      description: 'Tipo o do quico.',
      price_in_cents: 125,
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
    {
      id: 3,
      title: 'Karaoke',
      description: 'Direto da Liberdade.',
      price_in_cents: 5000,
      discount: {
        pct: 0,
        value_in_cents: 0,
      },
    },
  ]

  t.deepEqual(bodyResult, bodyAssertion, 'Should return products at body without discount')
})

test('GET /product with user and returning a discount', async t => {
  t.plan(2)

  const res = await supertest(server)
    .get('/product')
    .set({ 'x-user-id': 1, 'force-discount-debug': 10 })

  t.deepEqual(res.status, 200, 'Should get success status')

  const bodyResult = res.body.sort((a, b) => a.id > b.id)
  const bodyAssertion = [
    {
      id: 1,
      title: 'Bola',
      description: 'Esfera chutavel.',
      price_in_cents: 100,
      discount: {
        pct: 10,
        value_in_cents: 10,
      },
    },
    {
      id: 2,
      title: 'Pirulito',
      description: 'Tipo o do quico.',
      price_in_cents: 125,
      discount: {
        pct: 10,
        value_in_cents: 12.5,
      },
    },
    {
      id: 3,
      title: 'Karaoke',
      description: 'Direto da Liberdade.',
      price_in_cents: 5000,
      discount: {
        pct: 10,
        value_in_cents: 500,
      },
    },
  ]

  t.deepEqual(bodyResult, bodyAssertion, 'Should return products at body with discount')
})
