import * as Koa from 'koa'

const getUserId = (ctx: Koa.Context, next: () => Promise<any>) => {
  const userId = Number(ctx.header['x-user-id'])

  if (userId) {
    ctx.userId = userId
  }

  return next()
}

export default getUserId
