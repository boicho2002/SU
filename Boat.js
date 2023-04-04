function Boat(input){
let budget=Number(input[0]);
let season=input[1];
let numberofFishers=Number(input[2]);
let Sum=0;

if(season=="Summer" || season=="Autumn")
{
Sum=4200;

}
else if(season=="Spring")
{
    Sum=3000;
}
else if(season=="Winter")
{
    Sum=2600;
}
if(numberofFishers<=6)
{
    Sum*=0.9;
}
else if(numberofFishers>=7 && numberofFishers<=11)
{
    Sum*=0.85;
}
else if(numberofFishers>12)
{
    Sum*=0.75;
}
if(numberofFishers%2==0 && season=="Spring" && season=="Summer" && season=="Winter")
{
    Sum*=0.95;
}
else{
    Sum*=1;
}
if(budget>=Sum)
{
    console.log(`Yes! You have ${(budget-Sum).toFixed(2)} leva left.`)

}
else{console.log(`Not enough money! You need ${(Sum-budget).toFixed(2)} leva.`)}
}
Boat(["3000","Summer","11"])