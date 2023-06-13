/**
 * 求1000内的回文数量
 */

// 字符串反转
export const palindromNumbers = (n: number): number[] => {
    if (n <= 0) return [];
    const arr: number[] = [];
    for (let i = 1; i < n; i++) {
        const revert = i.toString().split("").reverse().join("");
        if (revert === i.toString()) {
            arr.push(i);
        }
    }

    return arr;
};
// whiile循环 前后对比是否相同
export const palindromNumbers2 = (n: number): number[] => {
    if (n <= 0) return [];
    const arr: number[] = [];
    for (let i = 1; i < n; i++) {
        const str = i.toString();
        let startIndex: number = 0;
        let endIndex: number = str.length - 1;
        let flag = true;
        while (startIndex < endIndex) {
            if (str[startIndex] !== str[endIndex]) {
                flag = false;
                break;
            } else {
                startIndex++;
                endIndex--;
            }
        }
        if (flag) {
            arr.push(i);
        }
    }

    return arr;
};
console.log(palindromNumbers(200));
console.log(palindromNumbers2(200));
