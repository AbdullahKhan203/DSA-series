function power(a, b) {
    // Base case: Any number to the power of 0 is 1
    if (b === 0) return 1;

    // Recursive case
    return a * power(a, b - 1);
} 

// Example Usage
console.log(power(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2)
console.log(power(5, 4)); // Output: 625 (5^4 = 5 * 5 * 5 * 5)
console.log(power(7, 0)); // Output: 1 (7^0 = 1)
