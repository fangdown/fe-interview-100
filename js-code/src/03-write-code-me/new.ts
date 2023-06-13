function myNew(fn: Function, ...args: any[]) {
    const obj = Object.create(fn.prototype);
    const result = fn.apply(obj, args);
    return typeof result === "object" ? result : obj;
}
