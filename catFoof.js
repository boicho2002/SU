function catFood(input)
{
    let num=Number(input[0]);
    let countOne=0;
    let countTwo=0;
    let countThree=0;
    let sum=0;
    for(let i=0;i<=num;i++)
    {
        let foodGrams=Number(input[i])
        sum+=foodGrams;
        if (foodGrams >= 100 && foodGrams < 200)
                {
                    countOne++;
                }
                else if (foodGrams >= 200 && foodGrams < 300)
                {
                    countTwo++;
                }
                else if (foodGrams >= 300 && foodGrams <400)
                {
                    countThree++;
                }
                
    }
    console.log(`Group 1: ${countOne} cats.`);
    console.log(`Group 2: ${countTwo} cats.`);
    console.log(`Group 3: ${countThree} cats.`);
    console.log(`Price for food per day: ${(((sum-num)/1000)*12.45).toFixed(2)} lv.`);
}
catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])

