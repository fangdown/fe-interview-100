/**
 * 斐波那契数列
 */

// 计算复杂度特别高
export const fibonacci = (n: number): number => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// 循环 + 计算缓存
export const fb2 = (n: number): number => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let n1 = 1;
    let n2 = 0;
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = n1 + n2;
        n2 = n1;
        n1 = res;
    }
    return res;
};

console.log(fb2(10));

export const fb3 = (n: number): number => {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    let n1 = 2;
    let n2 = 1;
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = n1 + n2;
        n2 = n1;
        n1 = res;
    }
    return res;
};
console.log(fb3(3));
console.log(fb3(10));
