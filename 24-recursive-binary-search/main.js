let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let start=0;
let end=arr.length-1
let position=undefined;
let target=1;
function resursiveBinary(arr,start,end,target){
    let mid=Math.floor((start+end)/2)
    console.log(mid)
    if(arr[mid]==target){
        console.log("mid in function is",mid)
        console.log("answer in function is",arr[mid])
        return arr[mid];
    }else if(arr[mid]>target){
        resursiveBinary(arr,start,mid-1,target)
    }else if(arr[mid]<target){
        resursiveBinary(arr,mid+1,end,target)
    }




}

console.log("answer is ",resursiveBinary(arr,start,end,target))

