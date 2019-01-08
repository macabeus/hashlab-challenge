import * as Koa from 'koa'
import getUserId from './middlewares/get_user_id'
import setDynamo from './middlewares/set_dynamo'
import setGrpcClient from './middlewares/set_grpc_client'
import router from './routes'

const app = new Koa()

app
  .use(setDynamo)
  .use(setGrpcClient)
  .use(getUserId)
  .use(router.routes())
  .listen(3000)

// tslint:disable-next-line: no-console
console.log('Server running on port 3000')
