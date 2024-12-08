let counter=new Map();
let arr=["apple", "banana", "apple", "orange", "banana", "apple"]
for(let  i=0;i<arr.length;i++){
    let ch=arr[i]
    if(!counter.has(ch)) counter.set(ch,1)
     else {
    counter.set(ch,counter.get(ch)+1)
    }   
}
console.log(counter)