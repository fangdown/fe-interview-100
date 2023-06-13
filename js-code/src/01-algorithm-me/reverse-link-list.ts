/**
 * @description  反转单向链表， 从最后一项开始
 * 画图
 */
interface ILinkNode {
    value: number;
    next?: ILinkNode;
}
// 创建链表
export function createLinkList(arr: number[]) {
    let curNode: ILinkNode = {
        value: arr[arr.length - 1],
    };
    if (arr.length === 1) return curNode;
    for (let i = arr.length - 2; i >= 0; i--) {
        // 写法要注意
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }
    return curNode;
}
const res = createLinkList([100, 200, 300]);
console.log(res);
// 反转链表
export function reverseLinkList(listNode: ILinkNode) {
    let preNode: ILinkNode | undefined = undefined;
    let curNode: ILinkNode | undefined = undefined;
    let nextNode: ILinkNode | undefined = listNode;
    while (nextNode) {
        // 处理第一个 删除next
        if (curNode && !preNode) {
            delete curNode.next;
        }
        // 更改next
        if (curNode && preNode) {
            curNode.next = preNode;
        }
        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode.next;
    }
    // 处理最后一个
    curNode!.next = preNode;
    return curNode;
}

// console.log(
//     "reverseLinkList",
//     reverseLinkList(JSON.parse(JSON.stringify(res)))
// );
