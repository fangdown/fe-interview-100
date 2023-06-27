// 去重

const arr = [1, 2, 2];
const arr2 = [...new Set(arr)];
console.log(arr2);

// 判断是否在集合中

const set1 = new Set(arr);
console.log(set1.has(2));

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set(arr.filter((item) => set1.has(item)));
console.log(set3);

// 349. 两个数组的交集
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const s1 = [...new Set(nums1)].filter((item) => nums2.includes(item));
    return s1;
};
