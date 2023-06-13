export function myReduce(arr, callback, init) {
    let result = init ? init : arr[0];
    let start = init ? 0 : 1;
    for (let i = start; i < arr.length; i++) {
        result = callback(result, arr[i], arr);
    }
    return result;
}
const callback = function (x, y) {
    return x + y;
};
console.log(myReduce([1, 2, 3], callback));
