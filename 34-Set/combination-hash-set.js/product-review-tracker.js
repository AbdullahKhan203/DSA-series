// let products = new Map();
// let users = new Map();
// let productsLikes = new Map();

// // Function to add a new product
// function addProduct(productId, productName) {
//     products.set(productId, productName);
//     productsLikes.set(productId, new Set()); // Initialize an empty Set for likes
// }

// // Function to add a new user (for tracking purposes, though not strictly required)
// function addUser(userId, userName) {
//     users.set(userId, userName);
// }

// // Function to record a like from a user for a specific product
// function likeProduct(productId, userId) {
//     if (productsLikes.has(productId)) {
//         productsLikes.get(productId).add(userId); // Add user ID to the Set for the product
//     } else {
//         console.log(`Product with ID ${productId} does not exist.`);
//     }
// }

// // Function to check if a specific user liked a specific product
// function didUserLikeProduct(productId, userId) {
//     return productsLikes.has(productId) && productsLikes.get(productId).has(userId);
// }

// // Function to list all users who liked a product
// function listUsersWhoLikedProduct(productId) {
//     if (productsLikes.has(productId)) {
//         return Array.from(productsLikes.get(productId)); // Convert Set to array for easy viewing
//     } else {
//         console.log(`Product with ID ${productId} does not exist.`);
//         return [];
//     }
// }

// // Example Usage
// addProduct("p1", "Apple");
// addProduct("p2", "Banana");
// addProduct("p3", "Grapes");

// addUser("u1", "Ali");
// addUser("u2", "Ahmad");
// addUser("u3", "Usman");

// likeProduct("p1", "u1");
// likeProduct("p1", "u2");
// likeProduct("p2", "u3");

// console.log(didUserLikeProduct("p1", "u1")); // true
// console.log(didUserLikeProduct("p1", "u3")); // false

// console.log(listUsersWhoLikedProduct("p1")); // [ 'u1', 'u2' ]
// console.log(listUsersWhoLikedProduct("p2")); // [ 'u3' ]
// console.log(listUsersWhoLikedProduct("p3")); // [ 'u3' ]







// by myself
let products=new Map()
let productsLikes=new Map()
let users=new Map()

function addProduct(productId,productName){
       products.set(productId,productName)
       productsLikes.set(productId,new Set())
}

function addUser(userId,userName){
       users.set(userId,userName)
}

function likeProduct(productId,userId){
    if(productsLikes.has(productId)){
        productsLikes.get(productId).add(userId)
    }else{
        console.log(`Product with id ${productId} does not exist`)
    }
}

function didUserLikeProduct(productId,userId){
    return productsLikes.has(productId) && productsLikes.get(productId).has(userId)
}
function listUsersWhoLikedProduct(productId){
    if(productsLikes.has(productId)){
   return Array.from(productsLikes.get(productId))
}else{
    console.log(`Product with Id ${productId} does not exist`)
    return []
}
}



addProduct("p1","motia")
addProduct("p2","ratLiRani")
addProduct("p3","Jasmine")
addProduct("p4","MArwa")

addUser("u1","Ali")
addUser("u2","Ahmad")
addUser("u3","Hassan")
addUser("u4","Umar")


likeProduct("p1","u1")
likeProduct("p1","u2")
likeProduct("p1","u3")
likeProduct("p2","u1")
likeProduct("p2","u2")

console.log(didUserLikeProduct("p1","u1"))
console.log(didUserLikeProduct("p1","u4"))


console.log(listUsersWhoLikedProduct("p1"))
console.log(listUsersWhoLikedProduct("p2"))