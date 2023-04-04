function Trainers(input)
{
    let num=Number(input[0]);
    let totalSum=0;
    let presentationC=0;
    let index=1;
    let presentation=input[index];
    index++;
    while(presentation!="Finish")
    {
        presentationC++;
        let sum=0;
        for(let i=0;i<num;i++)
        {
            let grade=Number(input[index]);
            index++;
            sum+=grade;
            totalSum+=grade;
        }
        console.log(`${presentation}-${(sum/num).toFixed(2)}`);
        presentation=input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(totalSum/(presentationC*num)).toFixed(2)}.`)

}
Trainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])