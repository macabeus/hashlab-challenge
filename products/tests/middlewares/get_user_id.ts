import test from 'ava'
import getUserId from '../../middlewares/get_user_id'

test('Middleware getUserId when passing a valid x-user-id', async t => {
  t.plan(1)

  const ctx: any = {
    header: {
      'x-user-id': '1',
    },
  }

  getUserId(ctx, async () => {
    t.deepEqual(ctx.userId, 1, 'Should set userId at context')
  })
})

test('Middleware getUserId when not passing a x-user-id', async t => {
  t.plan(1)

  const ctx: any = {
    header: {},
  }

  getUserId(ctx, async () => {
    t.deepEqual(ctx.userId, undefined, 'Should not set userId at context')
  })
})

test('Middleware getUserId when passing an invalid x-user-id', async t => {
  t.plan(1)

  const ctx: any = {
    header: {
      'x-user-id': 'foo',
    },
  }

  getUserId(ctx, async () => {
    t.deepEqual(ctx.userId, undefined, 'Should not set userId at context')
  })
})
