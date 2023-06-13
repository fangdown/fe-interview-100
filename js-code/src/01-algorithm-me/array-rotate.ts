/**
 * 数组旋转k个数
 * @param arr
 * @param k
 * @returns
 */
// pop+shift
export const arrayRotate = (arr: number[], k: number): number[] => {
    const length = arr.length;
    if (!k || length === 0) return arr;
    const step = Math.abs(k % length);
    // 复杂度 o-n
    for (let i = 0; i < step; i++) {
        const value = arr.pop();
        if (value) {
            // 复杂度 o-n
            arr.unshift(value);
        }
    }
    return arr;
};

// slice + concat
export const arrayRotate2 = (arr: number[], k: number): number[] => {
    const length = arr.length;
    if (!k || length === 0) return arr;
    const step = Math.abs(k % length);
    const arr1 = arr.slice(-step);
    const arr2 = arr.slice(0, length - step);
    const arr3 = arr1.concat(arr2);
    return arr3;
};
