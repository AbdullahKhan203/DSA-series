
function findElementInArray(){
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11;
let i=undefined;
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        return i;
    }
    
}
return i;

}
console.log(findElementInArray())
