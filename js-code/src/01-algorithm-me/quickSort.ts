/**
 * 快排
 *
 */

// 二分思想
export const quickSort1 = (arr: number[]): number[] => {
    const len = arr.length;
    if (len <= 1) return arr;
    const midIndex = Math.floor(len / 2);
    const midValue = arr.splice(midIndex, 1)[0];
    let left: number[] = [];
    let right: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort1(left).concat(midValue, quickSort1(right));
};

const arr = [5, 1, 2, 46, 121];
console.log(quickSort1(arr));
