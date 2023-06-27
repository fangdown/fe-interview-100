// 将一个函数放入到微队列里

const runMicrotask = (fun) => {
    if (typeof Promise === "function") {
        Promise.resolve().then(fun);
        return;
    }
    if (typeof MutationObserver === "function") {
        const ob = new MutationObserver(fun);
        var node = document.createTextNode("");
        ob.observe(node, { characterData: true });
        node.data = 1;
        return;
    }
    if (process && typeof process.next === "function") {
        process.next(fun);
        return;
    }
    setTimeout(() => {
        fun();
    }, 0);
};

runMicrotask(() => {
    console.log("task ");
});
