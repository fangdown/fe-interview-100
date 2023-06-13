/**
 * 两数之和
 * 双指针实现
 *
 */

// 有序数组
// 前后值相加 + 对比目标值 ，移位
export const twoNumbersSum = (arr: number[], sum: number): number[] => {
    const len = arr.length;
    if (len < 1) return [];
    let i = 0;
    let j = len - 1;
    const res = [];
    while (i < j) {
        const n1 = arr[i];
        const n2 = arr[j];
        const val = n1 + n2;
        if (val < sum) {
            i++;
        } else if (val > sum) {
            j--;
        } else {
            res.push(n1, n2);
            break;
        }
    }
    return res;
};

const arr = [1, 3, 5, 8, 11, 100, 150, 190, 200];

console.time("twoNumbersSum");
for (let i = 0; i < 10 * 100000; i++) {
    twoNumbersSum(arr, 14);
}
console.timeEnd("twoNumbersSum");
