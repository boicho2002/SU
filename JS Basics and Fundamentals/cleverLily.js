function cleverLily(input){
let age=Number(input[0]);
let washingM=Number(input[1]);
let toyPrice=Number(input[2]);
let toyCount=0;
let Sum=0;
let money=10;
for(let i=1;i<=age;i++)
{
if(i%2==0)
{
    toyCount++;
}
else{
    Sum+=money;
    Sum--;
    money+=10
}


}
Sum+=toyCount*toyPrice;
if(Sum>=washingM)
{
    console.log(`Yes! ${(Sum-washingM).toFixed(2)}`)
}
else{
    console.log(`No! ${(washingM-Sum).toFixed(2)}`)

}

}
cleverLily(["10","170.00","6"])