function summerOutfit(input){
let degrees=Number(input[0]);
let type=input[1];
let outfit;
let shoes;
if(degrees>=10 && degrees<=18)
{
if(type=="Morning")
{
    outfit="Sweatshirt";
    shoes="Sneakers";
}
else if(type=="Afternoon" || type=="Evening")
{
    outfit="Shirt";
    shoes="Moccasins";
}
}
if(degrees>18 && degrees<24)
{
if(type=="Morning" || type=="Evening")
{
    outfit="Shirt";
    shoes="Moccasins";
}
else if(type=="Afternoon")
{
    outfit="T-Shirt";
    shoes="Sandals";
}
}
if(degrees>=25)
{
    if(type=="Morning")
    {
        outfit="T-Shirt";
        shoes="Sandals";
    }
    else if(type=="Afternoon")
    {
        outfit="Swim Suit";
        shoes="Barefoot";
    }
    else if(type=="Evening")
{
    outfit="Shirt";
    shoes="Moccasins";
}
}
console.log(`Its ${degrees} degrees, get your ${outfit} and ${shoes}, Ivane!`)
}
summerOutfit(["23","Afternoon"])