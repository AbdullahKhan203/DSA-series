// function firstOccurrence(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             right = mid - 1; // Continue searching on the left
//         } else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return result;
// }
// console.log(firstOccurrence([2, 4, 4, 4, 6,2, 8], 8)); // Output: 1




// practice by me
function firstOccurrence(arr,left,right,target){
    let result=-1;
    while(left<=right){
   let mid=Math.floor((left+right)/2)
   if(arr[mid]==target){
      result=mid;
      right=mid-1
   }else if(arr[mid]>target){
      right=mid-1;
   }else{
       left=mid+1;
   }

}

return result;


}

let arr=[0,0,0,1,2,2,3,4,4,4,4,5,5]
console.log(firstOccurrence([0,0,0,1,2,2,3,4,4,4,4,5,5],0,arr.length-1,5))