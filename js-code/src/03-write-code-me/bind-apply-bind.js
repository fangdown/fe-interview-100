Function.prototype.myCall = function (ctx, ...args) {
    const ctx = ctx || window;
    ctx.fn = this;
    const res = ctx.fn(...args);
    delete ctx.fn;
    return res;
};

Function.prototype.myApply = function (ctx, args) {
    const ctx = ctx || window;
    ctx.fn = this;
    const res = ctx.fn(...args);
    delete ctx.fn;
    return res;
};

Function.prototype.myBind = function (ctx, args) {
    const ctx = ctx || windown;
    return function () {
        ctx.fn = this;
        const allArgs = args.concat(...arguments);
        const res = ctx.fn(allArgs);
        delete ctx.fn;
        return res;
    };
};
