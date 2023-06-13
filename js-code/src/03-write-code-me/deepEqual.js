/**
 * 对象比较
 * @param {*} obj1
 * @param {*} obj2
 */
export const deepEqual = (obj1, obj2) => {
    if (
        typeof obj1 === "object" &&
        typeof obj2 === "object" &&
        obj1 !== null &&
        obj2 !== null
    ) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;
        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    } else {
        return obj1 === obj2;
    }
};

const obj1 = {
    name: "fang",
    range: [1, 2, 3, { name: [1, 2] }],
};
const obj2 = {
    name: "fang",
    range: [1, 2, 3, { name: [1, 2] }],
};

console.log(deepEqual(obj1, obj2));
