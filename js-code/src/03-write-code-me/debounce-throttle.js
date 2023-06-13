/**
 * 防抖节流
 */

export const debounce = (fn, wait) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        const self = this;
        timer = setTimout(() => {
            fn.apply(self, ...args);
        }, wait);
    };
};

export const throttle = (fn, wait) => {
    let timer;
    let lastime = 0;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        const self = this;
        const now = +Date.now();
        const remainTime = wait - (now - lastime);
        if (remainTime < wait) {
            fn.apply(self, args);
            lastime = now;
        } else {
            timer = setTimeout(() => {
                fn.apply(self, args);
                lastime = +Date.now();
            }, remainTime);
        }
    };
};
