function newHouse(input){
let typeofFlowers=input[0];
let numberofFlowers=Number(input[1]);
let budget=Number(input[2]);
let rosePrice=5.00;
let dahliaPrice=3.80;
let tulipPrice=2.80;
let narcissPrice=3.00;
let gladiolPrice=2.50;
let Sum=0;
let leftBudget;
let neededSum;

  
if(typeofFlowers=="Roses")
{
    Sum=numberofFlowers*rosePrice;

if(numberofFlowers>80)
{
   Sum*=0.90;
}
}
  if(typeofFlowers=="Dahlias")
  {
    Sum=numberofFlowers*dahliaPrice;
 if(numberofFlowers>90)
{
    Sum*=0.85;

}
  }
 else if(typeofFlowers=="Tulips")
 {
    Sum=numberofFlowers*tulipPrice
  if(numberofFlowers>80)
{
    Sum*=0.85;
}
 }

    else if(typeofFlowers=="Narcissus")
    {
        Sum=numberofFlowers*narcissPrice;
    if(numberofFlowers<120)
{
    Sum*=1.15;

}
    }
else if(typeofFlowers=="Gladiolus")
{
    Sum=numberofFlowers*gladiolPrice;
if(numberofFlowers<80)
{
   Sum*=1.20;
}

}
if(budget>=Sum)
{
    leftBudget=budget-Sum;
    console.log(`Hey, you have a great garden with ${numberofFlowers} ${typeofFlowers} and ${leftBudget.toFixed(2)} leva left.`);
}
else{
    neededSum=Sum-budget;
console.log(`Not enough money, you need ${neededSum.toFixed(2)} leva more.`)
}


}
newHouse(["Tulips","88","270"])