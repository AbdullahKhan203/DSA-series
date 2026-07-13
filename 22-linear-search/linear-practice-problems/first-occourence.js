let arr=[1,2,3,1,5,6,2,8,3,10];
let target=1;


function firstOccourence(){
    let arr=[1,2,3,1,5,6,2,8,3,10];
    let target=2;
    let i=-1;
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]==target){
            return i;
        }
        
    }
    return i;
    
    }
    console.log(firstOccourence())



