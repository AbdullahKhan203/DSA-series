// // Example 1: Print Numbers in Ascending Order
// function printRange(start, end) {
//     // Base case: stop when start exceeds end
//     if (start > end) {
//         return;
//     }

//     // Print the current number
//     console.log(start);

//     // Recursive call to print the next number
//     printRange(start + 1, end);
// }

// // Example Usage
// printRange(1, 5); // Output: 1, 2, 3, 4, 5
// printRange(3, 7); // Output: 3, 4, 5, 6, 7



// // Example 2: Print Numbers in Descending Order
// function printRangeDescending(start, end) {
//     // Base case: stop when end is less than start
//     if (end < start) {
//         return;
//     }

//     // Print the current number
//     console.log(end);

//     // Recursive call to print the previous number
//     printRangeDescending(start, end - 1);
// }

// // Example Usage
// printRangeDescending(1, 5); // Output: 5, 4, 3, 2, 1
// printRangeDescending(3, 7); // Output: 7, 6, 5, 4, 3



// // Example 3: Print Numbers in Both Directions
// function printRangeBoth(start, end) {
//     // Base case: if we go beyond end, stop
//     if (start > end) {
//         return;
//     }

//     // Print the current number
//     console.log(start);

//     // Recursive call to go to the next number
//     printRangeBoth(start + 1, end);

//     // Print the current number again on the way back
//     console.log(start);
// }

// // Example Usage
// printRangeBoth(1, 3); 
// // Output: 1, 2, 3, 3, 2, 1









// practice by me
// function printRanageAsending(start,end){
//     if(start>end){
//         return;
//     }
//     console.log(start)
//     printRanageAsending(start+1,end)

// }
// printRanageAsending(1,5)


// function printRanageDescending(start,end){
//     if(end<start){
//         return;
//     }
//     console.log(end)
//     printRanageDescending(start,end-1)

// }
// printRanageDescending(1,5)



// function printRangeBoth(start,end){
//     if(start>end){
//         return 
//     }
//     console.log(start)
//     printRangeBoth(start+1,end)
//     console.log(start)
// } 

// printRangeBoth(1,3)

