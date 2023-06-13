import { matchBracket } from "./test1";
describe("测试数组旋转", () => {
    it("正常情况", () => {
        const str = "1{2}3(4)5[6]112";
        const result = matchBracket(str);
        expect(result).toBe(true);
    });
    it("不匹配", () => {
        const str = "12}}";
        const result = matchBracket(str);
        expect(result).toBe(false);
    });
    it("顺序不匹配", () => {
        const str = "12{(})";
        const result = matchBracket(str);
        expect(result).toBe(false);
    });
    it("顺序不匹配", () => {
        const str = "";
        const result = matchBracket(str);
        expect(result).toBe(true);
    });
});
