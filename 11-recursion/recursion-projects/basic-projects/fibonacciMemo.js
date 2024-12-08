// function fibonacciMemo(n, memo = {}) {
//     // Check if the result is already in the cache
//     if (n in memo) return memo[n];

//     // Base cases
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     // Recursive case with memoization
//     memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//     return memo[n];
// }

// // Example Usage

// //console.log(fibonacciMemo(5)); // Output: 5

// //console.log(fibonacciMemo(10));
// console.time("time start"); // Start the timer with a label "time start"
// console.log(fibonacciMemo(50)); // Call the memoized Fibonacci function
// console.timeEnd("time start"); // End the timer and output the time taken with the label "time start"



// other code with out memo
function fibonacciMemo(n){
    if(n<2){
        return n;
    }
    return fibonacciMemo(n-1) + fibonacciMemo(n-2)
} 
console.log(fibonacciMemo(50))





// without memoization
// function fibonacci(n) {
//     // Base cases
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     // Recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Example Usage
// // console.log(fibonacci(10)); // Output: 55
// console.time("time start")  //stuck in this case bacause of long output
// console.log(fibonacci(50)); // Output: 12586269025
// console.timeEnd("time start");
