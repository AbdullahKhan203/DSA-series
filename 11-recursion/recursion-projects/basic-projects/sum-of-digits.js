// function sumOfDigits(n) {
//     // Handle negative numbers
//     if (n < 0) {
//         n = Math.abs(n);
//     }

//     // Base case: when the number is 0, the sum is 0
//     if (n === 0) {
//         return 0;
//     }

//     // Recursive case: add the last digit to the sum of the remaining digits
//     return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// // Example Usage
// console.log(sumOfDigits(1234)); // Output: 10 (1 + 2 + 3 + 4)
// console.log(sumOfDigits(9876)); // Output: 30 (9 + 8 + 7 + 6)
// console.log(sumOfDigits(-4321)); // Output: 10 (4 + 3 + 2 + 1)






function sumOfDigits(n){
    if(n<0){
        n=Math.abs(n)
    }


    if(n==0){
        return 0
    }
    // console.log(n)
    return (n%10)+sumOfDigits(Math.floor(n/10))
}

console.log(sumOfDigits(-8745))

