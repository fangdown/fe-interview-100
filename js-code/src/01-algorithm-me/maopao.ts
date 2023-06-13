/**
 * 冒泡排序
 */

export const maopaoSort = (arr: number[]) => {
    if (!arr.length) return [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
console.log(maopaoSort([1, 2, 5, 10, 3, 6, 4]));
