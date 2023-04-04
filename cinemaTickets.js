function cinemaTickets(input)
{
let index=0;
let student=0;
let standard=0;
let kid=0;
let totalT=0;
let movie=input[index];
index++;
while(movie!='Finish')
{
    let seatA=Number(input[index]);
    let seatB=0;
    index++;
    
    while(true)
    {
        if(seatA==seatB)
    {
        break;
    }
    let ticket=input[index];
    index++;
        if(ticket=='End')
         {
            break;
        }
        seatB++;
        totalT++;
        if(ticket=='student')
        {
            student++;
        }
        else if(ticket=='standard')
        {
            standard++;
        }
        else if(ticket=='kid')
        {
            kid++;
        }
    }
console.log(`${movie}- ${(100*seatB/seatA).toFixed(2)}% full`);
movie=input[index];
index++;  

}
console.log(`Total tickets: ${totalT}`);
console.log(`${(100*student/totalT).toFixed(2)}% student tickets.`);
console.log(`${(100*standard/totalT).toFixed(2)}% standard tickets.`);
console.log(`${(100*kid/totalT).toFixed(2)}% kid tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])