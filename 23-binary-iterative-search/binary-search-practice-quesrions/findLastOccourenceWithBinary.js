// function lastOccurrence(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             left = mid + 1; // Continue searching on the right
//         } else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return result;
// }
// console.log(lastOccurrence([2, 4, 4, 4, 6, 8], 4)); // Output: 3




// practice by me
function lastOccurrence(arr,left,right,target){
    let result=-1;
    while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target){
        result=mid;
        left=mid+1
    }else if(arr[mid]>target){
       right=mid-1
    }else{
         left=mid+1
    }

}

return result;
}

let arr=[2,2,2,4,4,4,6,6, 8,8,8]
console.log(lastOccurrence(arr,0,arr.length-1,2)); // Output: 3