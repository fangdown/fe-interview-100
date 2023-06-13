/**
 * 移动0到末尾
 * 一层for循环 + 双指针思路
 */
export const moveToZero = (arr: number[]) => {
    const len = arr.length;
    if (len < 1) return;
    let i;
    let j = -1;
    for (i = 0; i < len; i++) {
        // j指向第一个0
        if (arr[i] === 0) {
            if (j < 0) {
                j = i;
            }
        }
        if (arr[i] !== 0 && j >= 0) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
};
const arr = [1, 0, 0, 2, 5, 0, 9];
moveToZero(arr);
console.log(arr);
