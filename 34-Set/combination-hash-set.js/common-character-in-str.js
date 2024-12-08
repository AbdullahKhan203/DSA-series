// with set only
// let str1="hello"
// let str2="world"

// let set1=new Set(str1)
// let set2=new Set(str2)

// // let commonChr=new Set([...set1].filter(ch=>set2.has(ch)))
// let commonChr=new Set([...set1].filter(ch=>set2.has(ch)))
// console.log(commonChr)




// with set and map
let str1 = "hello";
let str2 = "world";

// Using Map to count occurrences in both strings
let charCountMap = new Map();

// Count each character in the first string
for (let char of str1) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
}

// Track characters in both strings using a Set
let commonCharacters = new Set();

for (let char of str2) {
    if (charCountMap.has(char)) {
        // Add to commonCharacters Set if it's in both strings
        commonCharacters.add(char);
    }
}

console.log(commonCharacters); // Output: Set { 'o', 'l' }
