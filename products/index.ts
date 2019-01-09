import * as Koa from 'koa'
import getDebugOptions from './middlewares/get_debug_options'
import getUserId from './middlewares/get_user_id'
import setDynamo from './middlewares/set_dynamo'
import setGrpcClient from './middlewares/set_grpc_client'
import router from './routes'

const app = new Koa()

const server = app
  .use(setDynamo)
  .use(setGrpcClient)
  .use(getDebugOptions)
  .use(getUserId)
  .use(router.routes())
  .listen(3000)

// tslint:disable-next-line: no-console
console.log('Server running on port 3000')

export { server }
