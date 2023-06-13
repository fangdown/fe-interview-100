const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";
class MyPromise {
    constructor(fn) {
        this.status = PENDING;
        this.resolveCallback = [];
        this.rejectedCallback = [];

        const _resolve = (val) => {
            if (this.status !== PENDING) return;
            this.status = FULLFILLED;
            while (this.resolveCallback.length) {
                const fn = this.resolveCallback.pop();
                fn(val);
            }
        };
        const _reject = (val) => {
            if (this.status !== PENDING) return;
            this.status = REJECTED;
            while (this.rejectedCallback.length) {
                const fn = this.rejectedCallback.pop();
                fn(val);
            }
        };
        fn(_resolve, _reject);
    }
    then(resolveFn, rejectedFn) {
        this.resolveCallback.push(resolveFn);
        this.rejectedCallback.push(rejectedFn);
    }
}
