/**
 * 出现次数最多的连续字符串及次数
 */
interface IRes {
    char: string;
    count: number;
}
// 双循环
export const continouseChar1 = (str: string) => {
    const res = {
        char: "",
        count: 0,
    };
    if (!str) return res;
    let tempLen = 0;
    const len = str.length;
    for (let i = 0; i < len; i++) {
        tempLen = 0;
        for (let j = i; j < len; j++) {
            if (str[i] === str[j]) {
                tempLen++;
            }
            // 注意这里不是 else if
            if (str[i] != str[j] || j == str.length - 1) {
                if (tempLen > res.count) {
                    res.char = str[i];
                    res.count = tempLen;
                }
                // 跳步
                if (i < length - 1) {
                    i = j - 1;
                }

                break;
            }
        }
    }
    return res;
};

// 双指针

export const continouseChar2 = (str: string) => {
    const res = {
        char: "",
        count: 0,
    };
    if (!str) return res;
    const len = str.length;
    let tempLen = 0;
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (str[i] == str[j]) {
            tempLen++;
        }
        if (str[i] != str[j] || i == len - 1) {
            if (tempLen > res.count) {
                res.char = str[j];
                res.count = tempLen;
            }
            if (i < len - 1) {
                // 追上i
                j = i;
                // 细节
                i--;
                console.log("i", j);
            }
            tempLen = 0;
        }
    }
    return res;
};

const str = "bbbbba";
console.log(continouseChar2(str));
