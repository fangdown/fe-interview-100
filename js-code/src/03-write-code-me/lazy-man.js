/**
 * 懒惰执行
 *
 */

class LazyMan {
    constructor(name) {
        this.tasks = [];
        this.name = name;
        setTimeout(() => {
            this.next();
        }, 500);
    }
    next() {
        const task = this.tasks.shift();
        task?.();
    }
    eat(food) {
        const task = () => {
            console.log(`${this.name} eat ${food}`);
            this.next();
        };
        this.tasks.push(task);
        return this;
    }
    sleep(timer) {
        const task = () => {
            setTimeout(() => {
                console.log(`${this.name} sleep ${timer}s`);
                this.next();
            }, timer);
        };
        this.tasks.push(task);
        return this;
    }
}

const xm = new LazyMan("小明");
console.log(xm.eat("banana").eat("apple").sleep("2000").eat("milk"));
