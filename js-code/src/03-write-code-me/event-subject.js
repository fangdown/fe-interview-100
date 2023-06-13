/**
 * 观察者模式
 */

class Subject {
    constructor() {
        this.observers = [];
    }
    add(observer) {
        this.observers.push(observer);
    }
    emit(val) {
        this.observers.forEach((observer) => observer.update(val));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(val) {
        console.log(this.name + " update " + val);
    }
}

const o1 = new Observer("f1");
const o2 = new Observer("f2");
const s1 = new Subject();
s1.add(o1);
s1.add(o2);
s1.emit("good");
