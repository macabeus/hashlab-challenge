import * as KoaRouter from 'koa-router'
import { index } from '../database/products'

const productsRoute = (router: KoaRouter) => router.get('/product', async ctx => {
  ctx.body = index()
})

export default productsRoute
