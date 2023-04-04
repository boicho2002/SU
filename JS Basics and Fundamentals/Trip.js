function Trip(input)
{
let d=input[0];
let dates=input[1];
let number=input[2];
let price;
let sum=0;
if(d=="France"){
    if(dates=="21-23")
{
    price=30;
}
else if(dates=="24-27")
{
    price=35;
}
else if(dates=="28-31")
{
    price=40;
}
}
if(d=="Italy"){
    if(dates=="21-23")
    {
        price=28;
    }
    else if(dates=="24-27")
    {
        price=32;
    }
    else if(dates=="28-31")
    {
        price=39;
    }
    }
    if(d=="Germany"){
        if(dates=="21-23")
        {
            price=32;
        }
        else if(dates=="24-27")
        {
            price=37;
        }
        else if(dates=="28-31")
        {
            price=43;
        }
        }
        sum=price*number;
        console.log(`Easter trip to ${d} : ${sum.toFixed(2)} leva.`);
}
Trip(["Germany","24-27","5"])