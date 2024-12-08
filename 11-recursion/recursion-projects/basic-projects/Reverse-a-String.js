// function reverseString(str) {
//     // Base case: if the string is empty or has one character
//     if (str.length <= 1) {
//         return str;
//     }

//     // Recursive case: reverse the rest of the string and append the first character
//     return reverseString(str.slice(1)) + str[0];
// }

// // Example Usage
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("world")); // Output: "dlrow"
// console.log(reverseString("a"));     // Output: "a"
// console.log(reverseString(""));      // Output: ""




// by me 
function reverseString(str){
    if(str.length<=1){
        return str;
    }

    return reverseString(str.slice(1))+str[0]
}

console.log(reverseString("khan"))