let arr=[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60,65,70]
function binaryRecursive(arr){
let position=undefined;
let start=0;
let end=arr.length-1;
let target=70;
while(start<=end){
    let mid=Math.floor((start+end)/2)
    // console.log(mid)
    if(arr[mid]==target){
        return arr[mid];
        // return mid;
    }else if(arr[mid]>target){
        end=mid-1
    }else{
     start=mid+1
    }
}


return position;


}

console.log(binaryRecursive(arr))