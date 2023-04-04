function Destination(input)
{
let budget=Number(input[0]);
let season=input[1];
let destination="";
let typeTrip="";
let Sum=0;
if(budget<=100)
{ 
    destination="Bulgaria";
if(season=="Summer")
{
    Sum=0.3*budget;
    typeTrip="Camp";
}
else if(season=="Winter")
{
    Sum=0.7*budget;
    typeTrip="Hotel";
}
}
else if(budget<=1000)
{
    destination="Balkans";

if(season=="Summer")
{
    Sum=0.4*budget;
    typeTrip="Camp";
}
else if(season=="Winter")
{
    Sum=0.8*budget;
    typeTrip="Hotel";
}
}
else if(budget>1000)
{
    destination="Europe";
    typeTrip="Hotel";
    Sum=0.9*budget;
}
console.log(`Somewhere in ${destination}  `);
console.log(`${typeTrip} - ${Sum.toFixed(2)}`);
}
Destination(["50","Summer"])