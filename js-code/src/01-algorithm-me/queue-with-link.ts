/**
 * @description  链表实现队列
 * 画图
 */
interface ILinkNode {
    value: number;
    next?: ILinkNode | null;
}

class QueueWithLink {
    private head: ILinkNode | null = null;
    private tail: ILinkNode | null = null;
    private len: number = 0;
    // tail入队
    add(n: number) {
        const newNode = {
            value: n,
            next: null,
        };
        // 这里必须用this
        if (this.head === null) {
            this.head = newNode;
        }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.len++;
    }
    // head出队
    delete() {
        const headNode = this.head;

        if (headNode == null) return null;
        if (this.length <= 0) return null;
        const val = headNode?.value;
        this.len--;
        this.head = headNode.next as ILinkNode;
        console.log(this.head);
        return val;
    }
    get length(): number {
        return this.len;
    }
}
export default QueueWithLink;

const queue = new QueueWithLink();

queue.add(100);
queue.add(200);
queue.delete();
console.log("delete");
