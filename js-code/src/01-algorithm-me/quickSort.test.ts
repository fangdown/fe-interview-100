import { quickSort1 } from "./quickSort";

describe("快排", () => {
    it("正常情况", () => {
        const arr = [5, 1, 2, 46, 121];
        expect(quickSort1(arr)).toEqual([1, 2, 5, 46, 121]);
    });
    it("有负数", () => {
        const arr = [-5, 1, -2, 46, 121];
        expect(quickSort1(arr)).toEqual([-5, -2, 1, 46, 121]);
    });
    it("空数组", () => {
        expect(quickSort1([])).toEqual([]);
    });
    it("全部一样", () => {
        const arr = [5, 5, 5, 5, 5];
        expect(quickSort1(arr)).toEqual([5, 5, 5, 5, 5]);
    });
});
