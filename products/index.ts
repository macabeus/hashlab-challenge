import * as Koa from 'koa'
import setDynamo from './middlewares/set_dynamo'
import router from './routes'

const app = new Koa()

app
  .use(setDynamo)
  .use(router.routes())
  .listen(3000)

// tslint:disable-next-line: no-console
console.log('Server running on port 3000')
