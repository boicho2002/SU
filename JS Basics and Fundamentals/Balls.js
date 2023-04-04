function Balls(input)
{
    let n=Number(input[0]);
    let totalPoints=0;
    let nR=0;
    let nO=0;
    let nY=0;
    let nW=0;
    let times=0;
    let other=0;
    for(let i=0;i<=n;i++)
    {
        let c=input[i];
        if(c=='red')
        {
            nR++;
            totalPoints+=5;
        }
        else if(c=='orange')
        {
            nO++;
            totalPoints+=10;
        }
    
        else if(c=='yellow')
        {
            nY++;
            totalPoints+=15;
        }
        
        else if(c=='white')
        {
            nW++;
            totalPoints+=20;
        }
        
        else if(c=='black')
        {
            times++;
            totalPoints/=2;
        }
        
        else
        {
            other++;
        
        }

    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${nR}`);
    console.log(`Orange balls: ${nO}`);
    console.log(`Yellow balls: ${nY}`);
    console.log(`White balls: ${nW}`);
    console.log(`Others colors picked: ${other-1}`);
    console.log(`Divides from black balls: ${times}`);


}
Balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

