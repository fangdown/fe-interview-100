const jsonObj = {
    a: { b: { c: 1 } },
    d: { e: 2 },
};
const path = ["a", "b", "c", "d", "e"];
let p = jsonObj;
path.forEach((key) => {
    if (p?.[key]) {
        p = p[key];
    } else {
        p = undefined;
    }
});
console.log(p);
