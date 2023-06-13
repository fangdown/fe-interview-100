import { moveToZero } from "./moveToZero";

describe("移动数组0到末尾", () => {
    it("正常情况", () => {
        const arr = [1, 0, 0, 2, 5, 0, 9];
        moveToZero(arr);
        expect(arr).toEqual([1, 2, 5, 9, 0, 0, 0]);
    });
    it("全是0", () => {
        const arr = [0, 0, 0, 0, 0];
        moveToZero(arr);
        expect(arr).toEqual([0, 0, 0, 0, 0]);
    });
    it("没有0", () => {
        const arr = [1, 5, 9, 19];
        moveToZero(arr);
        expect(arr).toEqual([1, 5, 9, 19]);
    });
});
