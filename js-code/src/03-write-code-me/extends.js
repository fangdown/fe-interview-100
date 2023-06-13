/**
 * 继承方式
 */

// 构造函数继承
export function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
    console.log("hello ,say");
};

function Child(name, skill) {
    Parent.call(this, name);
    this.skill = skill;
}

// const c1 = new Child("fang", "it");
// console.log(c1.name);

// 原型链继承

Child.prototype = new Parent();
Child.prototype.constructor = Child;
const c2 = new Child("f2", "it");
c2.sayName();

// 寄生组合式继承

const inhreiProperty = (Parent, Child) => {
    const prototype = Object.create(Parent.prototype);
    Child.prototype = prototype;
    Child.prototype.constructor = Child;
};
inhreiProperty(Parent, Child);
const c3 = new Child("f3", "it");
console.log(c3.name);
c3.sayName();

class Parent2 {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

class Child2 extends Parent2 {
    constructor(name, skill) {
        super(name);
        this.skill = skill;
    }
    saySkill() {
        console.log(this.skill);
    }
}

const cc2 = new Child2("d2", "it");
cc2.sayName();
cc2.saySkill();
