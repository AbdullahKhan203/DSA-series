function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr); // Find the maximum number of digits in the array

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); // Create buckets for digits 0-9

        for (let num of arr) {
            let digit = getDigit(num, k); // Extract the k-th digit
            digitBuckets[digit].push(num); // Place the number in the appropriate bucket
        }

        // Flatten the buckets back into the array
        arr = [].concat(...digitBuckets);
    }

    return arr;
}



let arr=[9,10,6,7,6,4,2,1]
let ans=radixSort(arr)
console.log(ans)
