import { arrayRotate } from "./test1";
describe("测试数组旋转", () => {
    it("正常情况", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const result = arrayRotate(arr, k);
        expect(result).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
    it("数组为空", () => {
        const result = arrayRotate([], 3);
        expect(result).toEqual([]);
    });
    it("k为负数", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = -3;
        const result = arrayRotate(arr, k);
        expect(result).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
    it("k不是数字", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = "abc";
        // @ts-ignore
        const result = arrayRotate(arr, k);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
