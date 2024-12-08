// my method
// let money=100;
// let apple=0;
// let pricePerApple=10
// function buyApple(x){
//     spendMoney(x)
// }

// function spendMoney(money){
//     if(money>0){
//         buyApple(money-pricePerApple)
//         apple++;
//         console.log("current apples are",apple)
// }else{
//     console.log("I am not able to buy apple",apple)
// }
// }
// buyApple(money)


// best method
let money=100;
let totalApple=0;

function buyApple(x) {
    if(x>0){
        console.log("I have",x,"RS and total apples are",totalApple)
        buyMore(x)
    }else{
        console.log("I don't have more money",totalApple)
    }
}


function buyMore(x){
totalApple++;
buyApple(x-5)
}


buyMore(money)






// interview question
// function test(x){
//     console.log(x)   // 5,4,3,2,1,0
//     if(x>0){
//         text(x-1)
//     }
//     console.log(x)   //0,1,3,4,5
// }

// let data=5;
// test(data)
