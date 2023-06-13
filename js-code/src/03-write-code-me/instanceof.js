function myInstanceof(left, right) {
    let L = left.__proto__;
    let R = right.prototype;
    while (true) {
        if (L === null) return false;
        if (L === R) return true;
        L = L.__proto__;
    }
}
