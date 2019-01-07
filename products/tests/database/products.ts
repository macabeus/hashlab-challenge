import test from 'ava'
import DynamoError from '../../database/dynamo_error'
import { index } from '../../database/products'
import { dynamoFail, dynamoProducts } from '../helpers/dynamo'

test('Index', async t => {
  const result = await index(dynamoProducts)

  t.deepEqual(result, [
    {
      id: 1,
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

test('Index Error', async t => {
  const result: DynamoError = await t.throwsAsync(() => index(dynamoFail))

  t.deepEqual(result.name, 'DynamoError', 'Should return an error')
})
