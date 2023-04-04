function Prime(input)
{
    let sumP=0;
    let sumNP=0;
    let index=0;
    let command=input[index];
    index++;
    while(command!='stop')
    {
        let num=Number(command);
        if(num<0)
        {
            console.log("Number is negative. ");
            continue;
        }
        let isP=true;
        for(let i=2;i<=(num-1);i++)
        {
            if(num%i==0)
            {
                isP=false;
                break;
            }
        }
        if(isP==true)
        {
            sumP+=num;
        }
        else{
            sumNP+=num;
        }

        command=input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumP}`)
    console.log(`Sum of all non prime numbers is: ${sumNP}`)

}
Prime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])