function pastryShop(input)
{
    let t=input[0];
    let num=Number(input[1]);
    let day=Number(input[2]);
    let price=0;
    let sum=0;
     if(t=="Cake")
     {
        if(day<=15)
        {
            price=24*num;
            sum=price-price*0.1;

        }
        else{
            price=28.70*num;
            sum=price;
        }
     }
     else if(t=="Souffle")
     {
        if(day<=15)
        {
            price=6.66*num;
            sum=price-price*0.1;

        }
        else{
            price=9.80*num;
            sum=price;
        }
     }
     else if(t=="Baklava")
     {
        if(day<=15)
        {
            price=12.60*num;
            sum=price-price*0.1;

        }
        else{
            price=16.98*num;
            sum=price;
        }
     }
     if(day<=22)
     {
        if(sum>=100 && sum<=200)
        {
            sum=sum-(sum*0.15);
        }
        if(sum>200){
            sum=sum-(sum*0.25);
        
        }
     }
     console.log(sum.toFixed(2));
    

}
pastryShop(["Cake",
"5",
"12"])


