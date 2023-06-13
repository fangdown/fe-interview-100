import { LinkQueue } from "./test1";

/**
 * @description  链表实现队列
 * 画图
 */
describe("链表实现队列", () => {
    it("添加入队", () => {
        const queue = new LinkQueue();
        queue.add(100);
        queue.add(200);
        expect(queue.length).toBe(2);
    });
    it("删除出队", () => {
        const queue = new LinkQueue();
        queue.add(100);
        queue.add(200);
        queue.delete();
        queue.delete();
        expect(queue.length).toBe(0);
    });
});
