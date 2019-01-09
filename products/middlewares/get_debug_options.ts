import * as Koa from 'koa'

const getDebugOptions = (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.debugOptions = {}

  const forceDiscountDebug = Number(ctx.header['force-discount-debug'])
  if (forceDiscountDebug) {
    ctx.debugOptions.forceDiscountDebug = forceDiscountDebug
  }

  return next()
}

export default getDebugOptions
