import test from 'ava'
import getDebugOptions from '../../../middlewares/get_debug_options'

test('Middleware getDebugOptions when passing no parameter', async t => {
  t.plan(1)

  const ctx: any = {
    header: {},
  }

  getDebugOptions(ctx, async () => {
    t.deepEqual(ctx.debugOptions, {}, 'Should have a empty object')
  })
})

test('Middleware getUserId when passing a valid force-discount-debug parameter', async t => {
  t.plan(1)

  const ctx: any = {
    header: {
      'force-discount-debug': 13,
    },
  }

  getDebugOptions(ctx, async () => {
    t.deepEqual(ctx.debugOptions, { forceDiscountDebug: 13 }, 'Should set the value at context')
  })
})

test('Middleware getUserId when passing a invalid force-discount-debug parameter', async t => {
  t.plan(1)

  const ctx: any = {
    header: {
      'force-discount-debug': 'foo',
    },
  }

  getDebugOptions(ctx, async () => {
    t.deepEqual(ctx.debugOptions, {}, 'Should have a empty object')
  })
})
