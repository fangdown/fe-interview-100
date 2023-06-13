import { binarySearch1, binarySearch2 } from "./binary-search";

describe("二分查找", () => {
    it("正常情况", () => {
        const arr = [100, 200, 300, 400, 500];
        expect(binarySearch1(arr, 200)).toBe(1);
    });
    it("空数组", () => {
        expect(binarySearch1([], 100)).toBe(-1);
    });
    it("target不能存在", () => {
        const arr = [100, 200, 300, 400, 500];
        expect(binarySearch1(arr, 600)).toBe(-1);
    });
    it("正常情况", () => {
        const arr = [100, 200, 300, 400, 500];
        expect(binarySearch2(arr, 200)).toBe(1);
    });
    it("空数组", () => {
        expect(binarySearch2([], 100)).toBe(-1);
    });
    it("target不能存在", () => {
        const arr = [100, 200, 300, 400, 500];
        expect(binarySearch2(arr, 600)).toBe(-1);
    });
});
