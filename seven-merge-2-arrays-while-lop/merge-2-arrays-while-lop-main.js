  // by myself
  let data1=[3,9,25,46,74,80,90]
  let data2=[3,4,7,10,12,19,45,73,91]
  let data3=[];
  let d1=0;
  let d2=0;
  let d3=0;
  while(d1<data1.length && d2<data2.length){
        if(data1[d1]<data2[d2]){
          data3[d3]=data1[d1]
          d1++;
          d3++;
          
        }else{
          data3[d3]=data2[d2]
          d2++;
          d3++;
        }
     
  }


  while(d1<data1.length){
      data3[d3]=data1[d1]
      d1++;
      d3++;
  }
  while(d2<data2.length){
      data3[d3]=data2[d2]
      d2++;
      d3++;
  }
  // d3++;
  console.log(data3);