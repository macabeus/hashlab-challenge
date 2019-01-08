import test from 'ava'
import setGrpcClient from '../../../middlewares/set_grpc_client'

test('Middleware setGrpcClient', async t => {
  t.plan(1)

  const ctx: any = {}

  setGrpcClient(ctx, async () => {
    t.not(ctx.grpcClient, undefined, 'Should set grpcClient property at context')
  })
})
