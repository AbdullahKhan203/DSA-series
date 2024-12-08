// reduceRight(callback, initialValue): Same as reduce() but processes the array from right to left.

let arr = [1, 2, 3, 4];
let sum = arr.reduceRight((acc, curr) => acc + curr, 0); // 10
