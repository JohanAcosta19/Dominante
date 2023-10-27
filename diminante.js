function dominant(arr) {
    const n = arr.length;
    let dom = arr[n - 1];
    const result = [dom];
    if (n === 0) {
        return [];
    }
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > dom) {
            result.push(arr[i]);
            dom = arr[i];
        }
    }
    return result.reverse();
}
console.log(dominant([1, 21, 4, 7, 5])); // [21, 7, 5]
console.log(dominant([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
