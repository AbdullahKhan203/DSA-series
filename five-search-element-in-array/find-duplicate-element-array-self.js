// by built it functions
const arrNumber=[1,2,8,2,9,8,9]
const duplicates=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log("duplicates",duplicates);
// by user defined functions
function findDuplicates(arr) {
    let duplicates = [];  // Manually maintain an array for duplicates
    let dupIndex = 0;     // Index to keep track of position in the duplicates array
    let isDuplicate;      // Flag to check if a value is already in the duplicates array

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // If element is a duplicate
        if (count > 1) {
            isDuplicate = false;
            // Check if it's already in the duplicates array manually
            for (let k = 0; k < dupIndex; k++) {
                if (duplicates[k] === arr[i]) {
                    isDuplicate = true;
                    break;
                }
            }

            // If not already recorded as a duplicate, add it
            if (!isDuplicate) {
                duplicates[dupIndex] = arr[i]; // Manually adding to the array
                dupIndex++; // Move to the next index
            }
        }
    }

    // Return the duplicates array
    return duplicates;
}

// Example usage:
let array = [1, 2, 3, 4, 5, 3, 2, 6, 1];
let result = findDuplicates(array);

// Display the result manually
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}



// by myself
// let arr = [1, 2, 3, 4, 5, 3, 2, 6, 1];
// let duplicates = [];  // To store duplicates manually
// let countArray = [];  // To count occurrences of each element

// //   this loops can use individually for finding duplicates like If arr = [1, 2, 3, 4, 5, 3, 2, 6, 1], countArray will store [2, 2, 2, 1, 1, 2, 2, 1, 2]. outer loop inset element in loop and iner loop compare this single element with all array elements.similarly outer loop enter all elements one by one and inner loop compare this single element with all array elements.

// for(let i=0;i<arr.length;i++){
//     let count=0;
//  for(let j=0;j<arr.length;j++){
//      if(arr[i]===arr[j]){
//         count++;
//      }
//  }   
//  countArray[i]=count;
// }
// console.log(countArray);






