import { continouseChar2 } from "./continouse-char";
describe("测试数组旋转", () => {
    it("正常情况", () => {
        const str = "aaabbbcccccccddeeeee1122";
        const result = continouseChar2(str);
        expect(result).toEqual({
            char: "c",
            count: 7,
        });
    });
    it("空字符串", () => {
        const str = "";
        const result = continouseChar2(str);
        expect(result).toEqual({
            char: "",
            count: 0,
        });
    });
    it("全部连续", () => {
        const str = "aaa";
        const result = continouseChar2(str);
        expect(result).toEqual({
            char: "a",
            count: 3,
        });
    });
});
