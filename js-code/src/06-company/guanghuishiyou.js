var a = 0,
    b = 0;
function A(a) {
    console.log("a", a);
    // 函数被改写了
    A = function (b) {
        console.log("b", b);
        console.log(a + b++);
    };
    console.log(++a);
}

A(1);
A(2);

var name = "world";
(function () {
    if (typeof name === "undefined") {
        console.log(1);
    } else {
        console.log(2);
    }
})();

var a = {};
var b = Object.prototype;
console.log(a.prototype === b);
console.log(Object.getPrototypeOf(a) == b);

function showCase(value) {
    switch (value) {
        case "A":
            console.log(1);
            break;
        default:
            console.log(2);
            break;
    }
}
//  new String 返回了一个对象，出题比较偏
showCase(new String("A"));

function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};

Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
