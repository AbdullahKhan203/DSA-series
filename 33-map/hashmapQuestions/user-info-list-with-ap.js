let register=new Map();

register.set(1,"ali")
register.set(2,"ahmad")
register.set(3,"hassan")
register.set(4,"zain")
register.set(5,"umar")

 console.log(register)
 
 if(register.has(1)) {register.set(1,register.get(1) + " Khan")}
 console.log(register)
 if(register.has(1)) {register.delete(1)}
 console.log(register)
//  if(!register.has(1)) {console.log("yes deleted successfully")}
