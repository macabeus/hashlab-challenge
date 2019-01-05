import test from 'ava'
import setDynamo from '../../middlewares/set_dynamo'

test('Middleware setDynamo', async t => {
  t.plan(1)

  const ctx: any = {}

  setDynamo(ctx, async () => {
    t.not(ctx.dynamo, undefined, 'Should set dynamo property at context')
  })
})
