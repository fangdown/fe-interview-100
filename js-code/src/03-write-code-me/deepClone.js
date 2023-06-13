// 深拷贝
export const deepClone = (obj, map = new WeakMap()) => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (map.has(obj)) return map.get(obj);
    let target = Array.isArray(obj) ? [] : {};
    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((k, v) => {
            const k1 = deepClone(k);
            const v1 = deepClone(v);
            target.set(k1, v1);
        });
    } else if (obj instanceof Set) {
        target = new Map();
        obj.forEach((v) => {
            const v1 = deepClone(v);
            target.set(v1);
        });
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                target[key] = deepClone(obj[key]);
            }
        }
    }
    map.set(obj, target);
    return target;
};

const m1 = new Map();
m1.set("fff", 111);
const s1 = new Set();
s1.add("ddd");
const obj = {
    name: "fang",
    m1,
    s1,
    a1: [1, 2, 3],
};

console.log(deepClone(obj));
