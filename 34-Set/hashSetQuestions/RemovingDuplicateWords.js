// let str="JavaScript is great and JavaScript is versatile";
// str=str.split(" ")
// console.log(str)
// let uniqueWords=new Set(str);
// console.log(uniqueWords)


// good code 
let str = "JavaScript is great and JavaScript is versatile";

// Split the string, create a Set to remove duplicates, and join back to a single string
let result = [...new Set(str.split(" "))].join(" ");
console.log(result);  // Output: "JavaScript is great and versatile"
