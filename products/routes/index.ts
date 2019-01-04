import * as KoaRouter from 'koa-router'
import productsRoute from './products'

const router = new KoaRouter()

productsRoute(router)

export default router
