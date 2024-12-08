// flatMap(callback): Maps each element, then flattens the result into a new array.
let arr = [1, 2, 3];
let mapped = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
