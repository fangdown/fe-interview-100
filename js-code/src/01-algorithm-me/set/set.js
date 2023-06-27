const set = new Set();
set.add(1);
set.add(5);
set.add("fang");
set.add({ name: "fang" });
set.delete(5);

for (let [key, value] of set.entries()) console.log(key, value);
for (let key of set.keys()) console.log(key);

// 互转

const arr1 = [...set];
const arr2 = Array.from(set);

const s1 = new Set(arr1);

// 交集
const intersection1 = new Set(arr1.forEach((item) => s1.has(item)));
// 差集
const diff = new Set(arr1.forEach((item) => !s1.has(item)));
