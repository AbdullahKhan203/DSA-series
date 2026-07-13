function countingSort(arr) {
    let max = Math.max(...arr); // Find the maximum value
    let min = Math.min(...arr); // Find the minimum value
    let range = max - min + 1; // Range of values
    let count = new Array(range).fill(0); // Frequency array
    let output = new Array(arr.length); // Output array

    // Count each element's occurrence
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Modify count array to store the actual positions
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the sorted output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    return output;
}

let arr=[3, 8, 3, 3, 10, 1, 4]
let ans=countingSort(arr)
console.log(ans)
