let arr=[1,2,3,4,0,9,7,5,7,10,15]


function findMinAndMax(arr){
    let min=arr[0]
    let max=arr[0]
   for(let i=0;i<arr.length;i++){
         if(arr[i]<min){
            min=arr[i]
         }
         if(arr[i]>max){
            max=arr[i]
         }
   }
   console.log(min,max)
}

findMinAndMax(arr)