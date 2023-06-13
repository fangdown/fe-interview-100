/**
 * 括号匹配
 * @param str
 */
function isMatch(left: string, right: string) {
    if (left === "(" && right === ")") return true;
    if (left === "[" && right === "]") return true;
    if (left === "{" && right === "}") return true;
    return false;
}
export function matchBracket(str: string) {
    let len = str.length;
    if (len === 0) return true;
    const leftSymbols = "{[(";
    const rightSymbols = "}])";
    const stack = [];
    for (let i = 0; i < len; i++) {
        const val = str[i];
        if (leftSymbols.includes(val)) {
            // 压栈
            stack.push(val);
        } else if (rightSymbols.includes(val)) {
            const top = stack[stack.length - 1];
            if (isMatch(top, val)) {
                // 出栈
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
const str1 = "12{)}}}}}}}";
console.log(matchBracket(str1));
