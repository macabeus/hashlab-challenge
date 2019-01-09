import * as KoaRouter from 'koa-router'
import { index } from '../database/products'
import { getDiscount } from '../grpc_client/discount_service'

const productsRoute = (router: KoaRouter) => router.get('/product', async ctx => {
  const products = await index(ctx.dynamo)

  const productsDiscount = await Promise.all(products.map(async product => {
    try {
      const discount = await getDiscount(
        ctx.grpcClient,
        product.id,
        ctx.userId,
        ctx.debugOptions.forceDiscountDebug
      )

      product.discount.pct = discount
      product.discount.value_in_cents = product.price_in_cents * discount / 100

      return product
    } catch (e) {
      return product
    }
  }))

  ctx.body = productsDiscount
})

export default productsRoute
