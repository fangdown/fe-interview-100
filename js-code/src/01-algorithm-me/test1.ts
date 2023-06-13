export const arrayRotate = (arr: number[], k: number): number[] => {
    const len = arr.length;
    if (len < 2) return arr;
    const step = Math.abs(k % len);
    const arr1 = arr.slice(-step);
    const arr2 = arr.slice(0, len - step);
    const arr3 = arr1.concat(arr2);
    return arr3;
};

const isMatch = (left: string, right: string): boolean => {
    if (
        (left === "{" && right === "}") ||
        (left === "[" && right === "]") ||
        (left === "(" && right === ")")
    ) {
        return true;
    }
    return false;
};
export const matchBracket = (str: string) => {
    if (!str) return true;
    const stack = [];
    const leftSymbols = "[{(";
    const rightSymbols = "]})";

    for (let i = 0; i < str.length; i++) {
        const val = str[i];
        if (leftSymbols.includes(val)) {
            stack.push(val);
        } else if (rightSymbols.includes(val)) {
            const top = stack.pop();
            if (!top) return false;
            const result = isMatch(top, val);
            if (result) {
                return true;
            }
            return false;
        }
    }
};

interface ILinkNode {
    value: number;
    next?: ILinkNode | undefined;
}
export const createLinkList = (arr: number[]) => {
    const lastValue = arr[arr.length - 1];
    let curNode: ILinkNode = {
        value: lastValue,
        next: undefined,
    };
    for (let i = arr.length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }
    return curNode;
};
export const reverseLinkList = (link: ILinkNode) => {
    let preNode: ILinkNode | undefined = undefined;
    let curNode: ILinkNode | undefined = undefined;
    let nextNode: ILinkNode | undefined = link;
    while (nextNode) {
        // 头
        if (!preNode && curNode) {
            curNode.next = undefined;
        }
        // 中
        if (preNode && curNode) {
            curNode.next = preNode;
        }
        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode.next;
    }
    // 尾
    // @ts-ignore
    curNode?.next = preNode;
    return curNode;
};
console.log(createLinkList([100, 200, 300]));

export class LinkQueue {
    private tail: ILinkNode | undefined = undefined;
    private head: ILinkNode | undefined = undefined;
    private len = 0;
    // 尾入
    add(n: number) {
        const curNode = {
            value: n,
            next: undefined,
        };
        if (!this.head) {
            this.head = curNode;
        }
        if (this.tail) {
            this.tail.next = curNode;
        }
        this.tail = curNode;
        this.len++;
    }
    // 头出
    delete() {
        const val = this.head?.value;
        this.head = this.head?.next;
        this.len--;
        return val;
    }
    get length() {
        return this.len;
    }
}
