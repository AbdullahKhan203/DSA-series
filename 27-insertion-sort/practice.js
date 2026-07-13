// let arr=[10,5,7,6,3,2,4,1,8,9]
let arr=[3,4,1,2]


function insertionSort(data){
  let i,current,j
  for(i=1;i<data.length;i++){
   current=data[i]
    j=i-1
    while(j>=0 && data[j]>current){
        data[j+1]=data[j]
        j=j-1
    }
    data[j+1]=current
  }
  return data
}

let ans=insertionSort(arr)
console.log(ans)