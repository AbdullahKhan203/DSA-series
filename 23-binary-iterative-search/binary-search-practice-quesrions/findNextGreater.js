// function findNextGreater(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] > target) {
//             result = arr[mid];
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return result;
// }
// console.log(findNextGreater([1, 3, 5, 7, 9], 7)); // Output: 5



// practice by me
function findNextGreater(arr,left,right,target){
    let result=-1;
    while(left<=right){
       let mid=Math.floor((right+left)/2)
       if(arr[mid]>target){
          result=arr[mid]
          right=mid-1
       }else{
        left=mid+1
       }

   }

   return result;
}


// console.log(findNextGreater([1, 3, 5, 7, 9], 7)); // Output: 5
let arr=[1, 3, 5, 7, 9];
console.log(findNextGreater(arr,0,arr.length-1,5)); // Output: 5
