import Koa from 'koa2';
import bodyParser from 'koa-bodyparser'

const router = require('koa-router')()

const app = new Koa();
app.use(bodyParser());  // 解析request的body


router.get('/', async (ctx, next) => {
  // todo
})
app.use(router.routes);

// 在端口8081监听:
app.listen(3431);
