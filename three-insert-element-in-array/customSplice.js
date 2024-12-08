function customSplice(array, start, deleteCount, ...itemsToAdd) {
    // Normalize start index if it's negative
    if (start < 0) {
        start = array.length + start;
    }

    // Normalize deleteCount if it's greater than the remaining elements
    if (deleteCount > array.length - start) {
        deleteCount = array.length - start;
    }

    // Step 1: Create arrays for the three parts
    const before = array.slice(0, start);  // Elements before the start index
    const removed = array.slice(start, start + deleteCount);  // Elements to be removed
    const after = array.slice(start + deleteCount);  // Elements after the removed section

    // Step 2: Create the new array by concatenating the before part, the new items, and the after part
    const result = before.concat(itemsToAdd, after);

    // Step 3: Modify the original array
    array.length = 0;  // Clear the original array
    result.forEach(element => array.push(element));  // Push all new elements into the original array

    // Step 4: Return the removed elements
    return removed;
}

// Testing the custom splice function
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Remove 2 elements starting at index 1 and add "Kiwi"
let removedElements = customSplice(fruits, 1, 2, "Kiwi");

console.log(fruits);         // Output: ["Apple", "Kiwi", "Orange"]
console.log(removedElements); // Output: ["Banana", "Mango"]
