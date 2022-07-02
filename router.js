const router = require('koa-router');
const routes = new router();

routes.get('/', (ctx) => {
    // ctx.req, ctx.res --> node request
    //ctx.request, ctx.response --> koa request
    ctx.status = 200;
    ctx.body = {
        status: "success",
        message:"API respond successful",
    }
    
 });
routes.post('/', () => { });

module.exports = routes;