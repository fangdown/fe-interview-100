/**
 * 切换字母大小写
 * 1. 正则
 * 2. charCode
 *
 */

// charCode
export const switchLetters = (s: string) => {
    const len = s.length;
    if (len <= 0) return s;
    let res = "";
    for (let i = 0; i < len; i++) {
        const val = s[i];
        const code = val.charCodeAt(0);
        // 大写
        if (code >= 65 && code <= 90) {
            res += val.toLowerCase();
        } else if (code >= 97 && code <= 122) {
            // 小写
            res += val.toUpperCase();
        } else {
            res += val;
        }
    }
    return res;
};

// 正则
export const switchLetters2 = (s: string) => {
    const len = s.length;
    if (len <= 0) return s;
    let res = "";
    const reg1 = /[a-z]/;
    const reg2 = /[A-Z]/;
    for (let i = 0; i < len; i++) {
        const val = s[i];
        // 大写
        if (reg2.test(val)) {
            res += val.toLowerCase();
        } else if (reg1.test(val)) {
            // 小写
            res += val.toUpperCase();
        } else {
            res += val;
        }
    }
    return res;
};
console.log(switchLetters2("123AbdCdefeSfasfZYs"));

console.time("switchLetters-charCode");
for (let i = 0; i < 10 * 10000; i++) {
    switchLetters(
        "123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs"
    );
}
console.timeEnd("switchLetters-charCode");

console.time("switchLetters-reg");
for (let i = 0; i < 10 * 10000; i++) {
    switchLetters2(
        "123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs123AbdCdefeSfasfZYs"
    );
}
console.timeEnd("switchLetters-reg");
