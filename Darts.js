function Darts(input)
{
let index=0;
let name=input[index];
index++;
let command=input[index];
index++;
let score=301;
let succes=0;
let fail=0;
while(command!=="Retire")
{
let game=command;
let p=Number(input[index]);
index++;
switch(game)
{
    case "Single":
        p=p*1;
        break;
    case "Double":
        p=p*2;
        break;
    case "Triple":
        p=p*3;
        break;
}
if(p<=score)
{
    succes++;
    score-=p;
}
else{
    fail++;
    command=input[index];
    index++;
    continue;
}
if(score==0)
{
    break;
}
command=input[index];
index++;
}
if(score==0)
{
    console.log(`${name} won the leg with ${succes} shots.`);
}
else{
    console.log(`${name} retired after ${fail} unsuccessful shots.`);
}

}
Darts(["Michael van Gerwen","Triple", "20","Triple","19","Double","10","Single","3","Single","1","Triple","20","Triple","20","Double","20"])
