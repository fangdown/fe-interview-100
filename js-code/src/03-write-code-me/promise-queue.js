class PromiseQueue {
    constructor(tasks, maxCount) {
        this.tasks = tasks;
        this.maxCount = maxCount;
        this.curCount = 0;
    }
    run() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }
    request() {
        if (this.curCount > this.maxCount || !this.tasks.length) return;
        const p = this.tasks.shift();
        this.curCount++;
        p.then(() => {
            this.curCount--;
            this.request();
        }).catch(() => {
            this.curCount--;
            this.request();
        });
    }
}

const queue = new PromiseQueue();
