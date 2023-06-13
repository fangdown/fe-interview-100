/**
 * 柯里化
 */

export const curry = (fn) => {
    let fnLen = fn.length;
    let args = [];
    const cacheFn = (...args2) => {
        args = args.concat(args2);
        if (args.length < fnLen) {
            return cacheFn;
        } else {
            return fn(...args);
        }
    };
    return cacheFn();
};

const add = (x, y, z) => {
    return Number(x) + Number(y) + Number(z);
};
console.log(curry(add)(1)(2)(3));
