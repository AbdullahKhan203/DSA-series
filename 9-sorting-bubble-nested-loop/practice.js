



class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
    //     function sort(arr){         //has huge time complexity
    //         for(let i=0;i<arr.length-1;i++){
                
    //             for(let j=0;i<arr.length;j++){
    //                 if(arr[j]>arr[j+1]){
    //                     let temp=arr[j]
    //                     arr[j]=arr[j+1]
    //                     arr[j+1]=temp
    //                 }
    //             }
    //         }
            
    //         return arr;
    //     }
    function countingSort(arr) {
        let max = Math.max(...arr); // Find the maximum value
        let min = Math.min(...arr); // Find the minimum value
        let range = max - min + 1; // Range of values
        let count = new Array(range).fill(0); // Frequency array
        let output = new Array(arr.length); // Output array
    
        // Count each element's occurrence
        for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }
    
        // Modify count array to store the actual positions
        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
    
        // Build the sorted output array
        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }
    
        return output;
    }
    

        
        // arr=sort(arr)        //has huge T.C
        arr=countingSort(arr)    //has less time complexity 
        console.log("sorted array",arr)
        
        
       function binSearch(arr,num){
           let left=0;
           let right=arr.length-1
           let result=-1;
           while(left<=right){
               let mid=Math.floor((left+right)/2)
               if(arr[mid]==num){
                   result=mid;
                   return result;
               }else if(arr[mid]>num){
                   right=mid-1
               }else{
                   left=mid+1
               }
           }
           return result;
       }
       let count=1;
      while(true){
          let result=binSearch(arr,count)
          console.log(result)
          if(result==-1){
              return count
          }else{
              count++;
          }
          
          
      }
    }
}

let solution=new Solution()
let arr=[8, 2, 4, 5, 3, 7, 1]
let result=solution.missingNumber(arr)
console.log(result)