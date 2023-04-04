function oscar(input)
{
let actor=input[0];
let pointsA=Number(input[1]);
let number=Number(input[2]);
for(let i=0;i<number*2;i+=2)
{   let judge=input[i+3];
    let pointsO=Number(input[i+4]);
    pointsA+=judge.lenght * pointsO /2;
    if(pointsA>1250.50)
    {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${pointsA.toFixed(1)}!`);
        break;
    }

}
if(pointsA<=1250.50)
{
   console.log(`Sorry, ${actor} you need ${(1250.5-pointsA).toFixed(1)} more!`);
}

}
oscar(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
