// 回文

export function huiwen(n) {
    const res = [];
    // 101 121

    for (let i = 0; i < n; i++) {
        if (check(i)) {
            res.push(i);
        }
    }
    // console.log(res);
}
function check(n) {
    const str = n.toString();
    let startIndex = 0;
    let endIndex = str.length - 1;

    let flag = true;
    while (startIndex <= endIndex) {
        if (str[startIndex] != str[endIndex]) {
            flag = false;
            break;
        }
        startIndex++;
        endIndex--;
    }
    return flag;
}
huiwen(200);

// 千分位
export function throundNumber(n) {
    const str = n.toString();
    const len = str.length;
    let res = "";
    for (let i = len - 1; i >= 0; i--) {
        const j = len - i;
        if (j % 3 === 0 && j > 0) {
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
}
// console.log(throundNumber(1000022200103100));

// 数组 移动0到末尾
// [1000220003]
function moveZeroToEnd(arr) {
    // console.log("arr", arr);
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && j == -1) {
            j = i;
        }
        if (arr[i] != 0 && j != -1) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

// console.log("moveZeroToEnd", moveZeroToEnd([1, 2, 5, 0, 9, 0, 0, 2]));

// 最长连续子串
// aaabbbbbcccc
export function continousChar(str) {
    let i = 0;
    let j = 0;
    const res = {
        char: "",
        count: 0,
    };
    let tempLen = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[j]) {
            j = i;
            tempLen++;
        }
        if (str[i] !== str[j]) {
            if (tempLen > res.count) {
                res.char = str[j];
                res.count = tempLen;
            }
            tempLen = 0;
            j = i;
            i--;
        }
    }
    return res;
}
// console.log(continousChar("aabbdbbeeeeeecacf1122"));
// 创建链表
export function createLink(arr) {
    const len = arr.length;
    let curNode = {
        value: arr[len - 1],
        next: null,
    };
    for (let i = len - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }
    return curNode;
}
export function reversekLink(linkNode) {
    let preNode = null;
    let curNode = null;
    let nextNode = linkNode;

    while (nextNode) {
        // 头
        if (!preNode && curNode) {
            curNode.next = null;
        }
        // 中
        if (preNode && curNode) {
            curNode.next = preNode;
        }
        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }
    curNode.next = preNode;
    return curNode;
}
// const linkNode = createLink([100, 200, 300]);
// console.log(linkNode);
// console.log(reversekLink(linkNode));

export function jumpStep(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let n1 = 1;
    let n2 = 2;
    let res = 0;
    for (let i = 2; i < n; i++) {
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }
    return res;
}
console.log(jumpStep(3));
