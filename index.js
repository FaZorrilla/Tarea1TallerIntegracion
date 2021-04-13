const Koa = require('koa');
const logger = require('koa-logger');
const views = require('koa-views');
const { router } = require('./routes');

const app = new Koa();

app.use(logger());

const render = views(__dirname + '/views', {
  map: {
    ejs: 'underscore',
  },
});

app.use(render).use(router.routes()).use(router.allowedMethods());

console.log('Listening on 3000.');
app.listen(3000);
