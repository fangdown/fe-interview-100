function compose(middlewares) {
    return function (ctx, next) {
        const dispatch = (i) => {
            const fn = middlewares[i];
            if (i === middlewares.length) fn = next;
            if (!fn) return Promise.resolve();
            try {
                return Promise.resolve(fn(ctx, i + 1));
            } catch (error) {
                return Promise.reject(error);
            }
        };
        dispatch(0);
    };
}
