let arr = [3, 1, 4, 2];
arr.sort(); // [1, 2, 3, 4]

// Custom sort for asending order
arr.sort((a, b) => a - b); // [4, 3, 2, 1]
console.log(arr)
// Custom sort for descending order
arr.sort((a, b) => b - a); // [4, 3, 2, 1]
console.log(arr)