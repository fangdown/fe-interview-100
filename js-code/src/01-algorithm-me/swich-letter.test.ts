import { switchLetters } from "./swich-letter";

describe("大小写互转", () => {
    it("正常情况", () => {
        const res = switchLetters("123AbdCdefeSfasfZYs");
        expect(res).toBe("123aBDcDEFEsFASFzyS");
    });
    it("没有字母", () => {
        const res = switchLetters("123456");
        expect(res).toBe("123456");
    });
    it("全是大写", () => {
        const res = switchLetters("AAAA");
        expect(res).toBe("aaaa");
    });
});
