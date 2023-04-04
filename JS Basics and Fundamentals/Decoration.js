function Decoration(input)
{
let index=0;
let countC=Number(input[index]);
index++;
let sum=0;
for(let i=0;i<countC;i++)
{
    let command=input[index];
    index++;
    let productCount=0;
    let productPrice=0;
    while(command!=="Finish")
    {
    let product=command;
    productCount++;
    switch(product){
        case "basket":
            productPrice+=1.50;
            break;
        case "wreath":
            productPrice+=3.80;
            break;
        case "chocolate bunny":
            productPrice+=7;
            break;
    }
    command=input[index];
    index++;
    }
    if(productCount%2==0)
    {
        productPrice-=0.2*productPrice;
    }
    console.log(`You purchased ${productCount} items for ${productPrice.toFixed(2)} leva.`);
    sum+=productPrice;
}
let avg=sum/countC;
console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`)

}
Decoration(["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"])