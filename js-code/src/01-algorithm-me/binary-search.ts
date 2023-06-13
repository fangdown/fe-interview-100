/**
 * 二分查找
 *
 */

// while循环
export const binarySearch1 = (arr: number[], target: number) => {
    if (!arr.length) return -1;
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];
        if (target < midValue) {
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            startIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
};
// 递归
export const binarySearch2 = (
    arr: number[],
    target: number,
    startIndex?: number,
    endIndex?: number
): number => {
    startIndex = startIndex || 0;
    endIndex = endIndex || arr.length - 1;
    if (endIndex < startIndex) return -1;
    if (!arr.length) return -1;
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];
    if (target < midValue) {
        return binarySearch2(arr, target, startIndex, midIndex - 1);
    } else if (target > midValue) {
        return binarySearch2(arr, target, midIndex + 1, endIndex);
    } else {
        return midIndex;
    }
};

const arr = [100, 200, 300, 400, 500];
console.log(binarySearch1(arr, 100));
console.log(binarySearch2(arr, 300));
