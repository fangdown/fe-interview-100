/**
 * 发布订阅模式
 */

class EventBus {
    constructor() {
        this.events = [];
    }
    add(type, fn) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(fn);
    }
    emit(type, val) {
        this.events[type]?.forEach((fn) => {
            fn?.(val);
        });
    }
    off(type, fn) {
        this.events[type] = this.events[type].filter((item) => !item === fn);
    }
}
