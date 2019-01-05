import * as Koa from 'koa'
import dynamo from '../database/dynamo'

const setDynamo = (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.dynamo = dynamo
  return next()
}

export default setDynamo
