// Creating a Set (HashSet)
// const hashSet = new Set();

// Adding values
// hashSet.add(1);
// hashSet.add(2);
// hashSet.add(2); // Duplicate, won't be added
// hashSet.add("hello");

// // Checking for the presence of a value
// console.log(hashSet.has(1)); // Output: true
// console.log(hashSet.has(3)); // Output: false

// // Deleting a value
// hashSet.delete(2);

// // Getting the size of the Set
// console.log(hashSet.size); // Output: 2

// // Iterating through a Set
// hashSet.forEach(value => {
//     console.log(value); // Output: 1, "hello"
// });



let set=[
    "English",
    "Finnist",
    "English",
    "Finnist",
    "French",
    "German",
    "French",
    "German",
];

let  hashSet=new Set(set)
console.log(hashSet)