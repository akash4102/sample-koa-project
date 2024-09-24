const BaseClass = require("./base")

class Auth extends BaseClass {
    
    constructor(ctx, next) {
        super(ctx, next);

        this._beforeMethods = {
            //
        }
    }

    async register() {
        console.log("inside register");
        this.ctx.body = {
            success: true,
            message: "Yes I am here"
        }
    }
}

module.exports = Auth;