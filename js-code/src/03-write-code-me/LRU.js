export class LRUCache {
    constructor(num) {
        this.num = num;
        this.data = new Map();
    }
    get(key) {
        const val = this.data.get(key);
        if (!val) return null;
        this.data.delete(key);
        this.data.set(key, val);
    }
    set(key, value) {
        this.data.delete(key);
        this.data.set(key, value);
        console.log(this.data.size, this.num);
        if (this.data.size > this.num) {
            const key = this.data.keys().next().value;
            this.data.delete(key);
        }
    }
}

const lru = new LRUCache(5);
const k1 = { name: "fang1" };
const k2 = { name: "fang2" };
const k3 = { name: "fang3" };
const k4 = { name: "fang4" };
const k5 = { name: "fang5" };
const k6 = { name: "fang6" };
lru.set(k1, 111);
lru.set(k2, 222);
lru.set(k3, 333);
lru.set(k4, 444);
lru.set(k5, 555);
lru.set(k6, 666);
console.log(lru);
console.log(lru.get(k5));
