// 两个栈实现队列

export class twoArrayQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];
    add(n: number) {
        const stack1 = this.stack1;
        stack1.push(n);
    }
    delete(): number | null {
        const stack1 = this.stack1;
        const stack2 = this.stack2;
        while (stack1.length) {
            const val = stack1.pop();
            if (val) {
                stack2.push(val);
            }
        }
        const res = stack2.pop();
        while (stack2.length) {
            const val = stack2.pop();
            if (val) {
                stack1.push(val);
            }
        }
        return res || null;
    }
    get length(): number {
        return this.stack1.length;
    }
}
