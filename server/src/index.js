const Koa = require('koa');
const router = require('./router');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');
const xtpl = require('koa-xtpl');
const cors = require('@koa/cors');


const staticPath = './public';
const app = new Koa();

app.use(cors());

app.use(static(
  path.join( __dirname,  staticPath)
));

app.use(xtpl({
	root: path.resolve(__dirname, staticPath ),
	extname: 'html',
	commands: {}
}));

app.use(router.routes())
    .use(router.allowedMethods());


app.use(async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream(__dirname + '/public/index.html');
});


app.listen(3000);