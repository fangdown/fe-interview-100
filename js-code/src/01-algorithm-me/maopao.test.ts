import { maopaoSort } from "./maopao";
describe("测试数组旋转", () => {
    it("正常情况", () => {
        const arr = [1, 2, 5, 10, 3, 6, 4];
        const result = maopaoSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 10]);
    });
    it("空数组", () => {
        const result = maopaoSort([]);
        expect(result).toEqual([]);
    });
    it("连续值数组", () => {
        const result = maopaoSort([1, 2, 2, 2, 5, 10, 5]);
        expect(result).toEqual([1, 2, 2, 2, 5, 5, 10]);
    });
});
