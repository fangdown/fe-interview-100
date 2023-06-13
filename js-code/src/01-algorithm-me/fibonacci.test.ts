import { fb2, fb3 } from "./fibonacci";

describe("斐波那契数列", () => {
    it("0 和1 ", () => {
        expect(fb2(0)).toBe(0);
        expect(fb2(1)).toBe(1);
    });
    it("正常情况", () => {
        expect(fb2(2)).toBe(1);
        expect(fb2(10)).toBe(55);
    });
    it("青蛙跳1-2级", () => {
        expect(fb3(1)).toBe(1);
        expect(fb3(2)).toBe(2);
    });
    it("青蛙跳2级以上", () => {
        expect(fb3(3)).toBe(1);
        expect(fb3(10)).toBe(2);
    });
});
