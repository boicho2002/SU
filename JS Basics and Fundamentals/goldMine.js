function goldMine(input)
{
    let locations = input[0];
    let averageSumGold = 0;
    let index=1;
    for (let i = 0; i < locations; i++)
    {
        let averageGold = Number(input[index++]);
        let days = Number(input[index++]);
        let sum = 0;
        for (let j = 0; j <days; j++)
        {
            let goldDay =Number(input[index++]);
            sum += goldDay;
        }
        
        averageSumGold = sum / days;
        if (averageSumGold >= averageGold)
        {
            
            console.log(`Good job! Average gold per day: ${averageSumGold.toFixed(2)}.`);
        }
            
        else
        {
           console.log(`You need ${(averageGold-averageSumGold).toFixed(2)} gold.`);
            
        }
    
}
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])




