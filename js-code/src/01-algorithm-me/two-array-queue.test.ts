import { twoArrayQueue } from "./two-array-queue";
describe("测试数组旋转", () => {
    it("add and length", () => {
        const q = new twoArrayQueue();
        expect(q.length).toBe(0);

        q.add(100);
        q.add(200);
        q.add(300);
        expect(q.length).toBe(3);
    });

    it("delete", () => {
        const q = new twoArrayQueue();
        expect(q.delete()).toBeNull();

        q.add(100);
        q.add(200);
        q.add(300);
        expect(q.delete()).toBe(100);
        expect(q.length).toBe(2);
        expect(q.delete()).toBe(200);
        expect(q.length).toBe(1);
    });
});
