// sort([compareFunction]): Sorts the array in place. Without a comparison function, it converts elements to strings and compares them in lexicographical (alphabetical) order.

let arr = [3, 1, 4, 2];
arr.sort(); // [1, 2, 3, 4]

// Custom sort (ascending order)
arr.sort((a, b) => a - b);
// Custom sort (descending order)
arr.sort((a, b) => b - a);
