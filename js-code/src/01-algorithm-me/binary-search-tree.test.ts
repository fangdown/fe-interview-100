import { tree, getValueForK } from "./binary-search-tree";

describe("搜索二叉树", () => {
    it("第k个数", () => {
        const res = getValueForK(tree, 3);
        expect(res).toBe(4);
    });
    it("不在范围里", () => {
        const res = getValueForK(tree, 1000);
        expect(res).toBeNull();
    });
});
