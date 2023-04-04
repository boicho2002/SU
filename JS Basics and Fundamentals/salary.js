function salary(input){
let F=150;
let I=100;
let R=50;
let n=Number(input[0]);
let sA=Number(input[1]);
for(let i=1;i<n;i++)
{
let website=input[i];
if(website=="Facebook")
{
    sA-=F;
}
else if(website=="Instagram")
{
    sA-=I;
}
else if(website=="Reddit")
{
    sA-=R;
}
}
if(sA<=0)
{
    console.log(`You have lost your salary.`);

}
else{
    console.log(sA);
}
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

