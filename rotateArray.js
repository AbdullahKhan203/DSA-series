
var rotate = function(nums, k) {
    //  my successfull solution 
    // if(nums.length==1) return nums;
    // if (typeof k !== 'number' || k < 0) return nums;
    // if(k>nums.length) k=k%nums.length 
    // let newArr=[]
    // for(let i=1;i<=k;i++){
    //    newArr.push(nums.at(-i))
    //  }
    // newArr=newArr.reverse()
    // // console.log(newArr)
    //    let numsLen=nums.length
    //      let newLen=numsLen-k
    //  for(let j=newLen-1;j>=0;j--){
    //       nums[k+j]=nums[j]
    //  }
    
     
    //   for(let i=0;i<k;i++){
    //    nums[i]=newArr[i]
    //  }
    //   return nums;

// optimize solution
let temp;
let left=0;
let right=nums.length-1
    function reverseArray(nums,left,right){
        if(left<=right){
            temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
            return reverseArray(nums,left+1,right-1)
        }
    }
    reverseArray(nums,left,right)
    console.log(nums)


      
     
   
};

rotate([1,2,3,4,5,6,7],3)