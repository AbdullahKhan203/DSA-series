 let arrayOne=[10,20,30,40,50]
        let arrayTwo=[60,70,80,90,100]
        let arrAyThree=[]
        for(let i=0;i<arrayOne.length;i++){
               arrAyThree[i]=arrayOne[i]
        }
        console.log(arrAyThree);
        
        for(let i=0;i<arrayTwo.length;i++){
            arrAyThree[arrayOne.length+i]=arrayTwo[i]
            console.log(arrayOne.length+i)
        }
        console.log(arrAyThree);