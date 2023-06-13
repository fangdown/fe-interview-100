/**
 * 千分位
 * 字符串
 *
 */
// 字符串
export const throusandNumber = (n: number) => {
    const str = n.toString();
    const len = str.length;
    let res = "";
    for (let i = len - 1; i >= 0; i--) {
        const j = len - i;
        if (j % 3 === 0) {
            if (i === 0) {
                res = str[i] + res;
            } else {
                res = "," + str[i] + res;
            }
        } else {
            res = str[i] + res;
        }
    }
    return res;
};
console.log(throusandNumber(1122033000));
