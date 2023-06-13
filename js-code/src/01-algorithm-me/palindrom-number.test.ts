import { palindromNumbers } from "./palindrom-number";

describe("回文测试", () => {
    it("正常情况", () => {
        const arr = palindromNumbers(200);
        expect(arr.length).toBe(28);
    });
    it("0的情况", () => {
        const arr = palindromNumbers(0);
        expect(arr).toEqual([]);
    });
});
