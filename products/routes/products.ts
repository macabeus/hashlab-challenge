import * as KoaRouter from 'koa-router'
import { index } from '../database/products'

const productsRoute = (router: KoaRouter) => router.get('/product', async ctx => {
  ctx.body = await index(ctx.dynamo)
})

export default productsRoute
