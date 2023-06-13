/**
 * 单例模式
 */

export const Signle = (function () {
    let instance;
    return function (name) {
        if (!instance) {
            instance = this;
            this.name = name;
        }
        return instance;
    };
})();

const s1 = new Signle("111");
const s2 = new Signle("222");

console.log(s1.name, s2.name);
