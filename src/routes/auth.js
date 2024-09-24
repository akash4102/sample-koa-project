const Router = require("@koa/router");
const Controller = require("../controllers");

let r = new Router();

r.post("/auth/register", async (ctx, next) => {
    let controller = new Controller.Auth(ctx, next);
    await controller.execute('register');
});

module.exports = r;