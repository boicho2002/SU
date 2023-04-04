function foodPets(input)
{
    let num=Number(input[0]);
    let totalFood=Number(input[1]);
    let totalDog=0;
    let sum=0;
    let totalCat=0;
    let bCounter=0;
    let index=2;
    
    for(i=1;i<=num;i++)
    {
    
        let dogFood=Number(input[index++]);
        let catFood=Number(input[index++]);
        if(i%3==0)
        {
            bCounter=bCounter+(catFood+dogFood)*0.1;
        }
        totalDog+=dogFood;
        totalCat+=catFood;
        
    }
    sum=totalCat+totalDog;
    console.log(`Total eaten biscuits: ${bCounter}gr.`);
    console.log(`${(100*(sum/totalFood)).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(100*(totalDog/sum)).toFixed(2)}% eaten from the dog.`)
    console.log(`${(100*(totalCat/sum)).toFixed(2)}% eaten from the cat.`)

}
foodPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
