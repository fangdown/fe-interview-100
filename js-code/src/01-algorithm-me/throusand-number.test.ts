import { throusandNumber } from "./throusand-number";

describe("千分位", () => {
    it("正常情况", () => {
        expect(throusandNumber(1122033000)).toBe("1,122,033,000");
    });
    it("不到1000", () => {
        expect(throusandNumber(0)).toBe("0");
        expect(throusandNumber(10)).toBe("10");
        expect(throusandNumber(100)).toBe("100");
    });
});
