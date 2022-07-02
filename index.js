const koa = require('koa');//npm i koa
const koaBody = require('koa-body');//npm i koa-body
const router = require('./router');

const app = new koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Server running");
});


