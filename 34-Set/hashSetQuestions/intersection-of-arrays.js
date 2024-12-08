// let arr1=[1, 2, 3, 4,5,6]
// let arr2=[3, 4, 5, 6]
//  let set=new Set()
//  let secondSet=new Set()
//  for(let i=0;i<arr1.length;i++){
//     set.add(arr1[i])
//  }
// console.log(set)
//  for(let i=0;i<arr2.length;i++){
//     if(set.has(arr2[i])) secondSet.add(arr2[i])
   
   
//  }
//  console.log(secondSet)



// good method
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6];

// Convert both arrays to Sets
let set1 = new Set(arr1);
let set2 = new Set(arr2);

// Iterate over the smaller set to find common elements
let intersection = new Set([...set1].filter(item => set2.has(item)));

console.log(intersection); // Output: Set { 3, 4, 5, 6 }
