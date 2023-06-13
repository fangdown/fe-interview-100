import { twoNumbersSum } from "./two-numbers-sum";
describe("两数之和", () => {
    it("正常情况", () => {
        const arr = [1, 3, 5, 8, 11, 200];
        const sum = 9;
        expect(twoNumbersSum(arr, sum)).toEqual([1, 8]);
    });

    it("空数组", () => {
        const sum = 9;
        expect(twoNumbersSum([], sum)).toEqual([]);
    });
});
