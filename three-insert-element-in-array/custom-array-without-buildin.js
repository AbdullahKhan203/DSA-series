


function customSplice(array, start, deleteCount, ...itemsToAdd) {
    // Handle negative start index (count from the end)
    if (start < 0) {
        start = array.length + start;
        if (start < 0) start = 0;  // In case start is still negative, reset to 0
    }

    // If deleteCount is not provided, delete everything from start to the end
    if (deleteCount === undefined) {
        deleteCount = array.length - start;
    }

    // Ensure deleteCount does not exceed array length
    if (deleteCount > array.length - start) {
        deleteCount = array.length - start;
    }

    // Step 1: Remove elements and store them in an array
    let removed = [];
    for (let i = 0; i < deleteCount; i++) {
        removed.push(array[start + i]);
    }

    // Step 2: Shift elements to remove the deleted part
    let newLength = array.length - deleteCount + itemsToAdd.length;
    for (let i = start; i < array.length - deleteCount; i++) {
        array[i] = array[i + deleteCount];
    }

    // Step 3: Truncate the array to the new length
    array.length = newLength;

    // Step 4: Insert new items at the 'start' index
    for (let i = array.length - 1; i >= start + itemsToAdd.length; i--) {
        array[i] = array[i - itemsToAdd.length];
    }

    for (let i = 0; i < itemsToAdd.length; i++) {
        array[start + i] = itemsToAdd[i];
    }

    // Return the array of removed elements
    return removed;
}

// Test Cases
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Remove 2 elements starting at index 1 and add "Kiwi"
let removedElements = customSplice(fruits, 1, 2, "Kiwi","Pineapple");

console.log(fruits);         // Output: ["Apple", "Kiwi", "Orange"]
console.log(removedElements); // Output: ["Banana", "Mango"]
