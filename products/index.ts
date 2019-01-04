import * as Koa from 'koa'

import router from './routes'

const app = new Koa()

app
  .use(router.routes())
  .listen(3000)

// tslint:disable-next-line: no-console
console.log('Server running on port 3000')
