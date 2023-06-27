const m = new Map();
m.set("name", "fang");
m.set("age", 10);
m.delete("age");
console.log(m);

// 交集

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // set

    // const s1 = [...new Set(nums1)].filter(item =>  nums2.includes(item))
    // return s1

    // map
    const map = new Map();
    nums1.forEach((n) => {
        if (!map.has(n)) {
            map.set(n, true);
        }
    });
    const res = [];
    nums2.forEach((m) => {
        if (map.get(m)) {
            res.push(m);
            map.delete(m);
        }
    });
    return res;
};

// 括号匹配
// 有缺陷
var isValid = function (s) {
    if (s.length < 2) return false;
    const map = new Map();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");
    const right = [")", "}", "]"];
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if (map.has(val)) {
            stack.push(val);
        } else {
            if (right.includes(val)) {
                const top = stack[stack.length - 1];
                const r = map.get(top);
                if (!r) return false;
                if (r === val) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("(])"));

/** 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        let n2 = target - n1;
        // 注意 这里是has， 不是get， has查键值
        if (map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n1, i);
        }
    }
};

/**3.无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let res = 0;
    const map = new Map();
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        console.log("l", l);
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
};

console.log(lengthOfLongestSubstring("abba"));

/**
 * 76. 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // 双指针
    // 需要的类型
    // 双while循环
    let l = 0;
    let r = 0;
    const need = new Map();
    let needType = need.size;
    for (let k of t) {
        need.set(k, need.has(k) ? need.has(k) + 1 : 1);
    }
    // s = "ADOBECODEBANC", t = "ABC"
    while (r < s.length) {
        const v1 = s[r];
        if (need.has(v1)) {
            need.set(v1, need.get(v1) - 1);
            if (need.get(v1) === 0) needType -= 1;
        }
        while (needType === 0) {
            const v2 = s[l];
            // 如果有就加到必须里， 退出循环
            // 如果没有就继续挪动左指针
            if (need.has(v2)) {
                need.set(v2, need.get(v2) + 1);
                if (need.get(v2) === 1) {
                    needType += 1;
                }
            }
            l += 1;
        }
        r += 1;
    }
};
