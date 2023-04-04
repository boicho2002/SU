function andProcess(input)
{
    let nP=Number(input[0]);
    let nS=Number(input[1]);
    let workingDays=Number(input[2]);
    let workHours=nS*workingDays*8;
    let made=Math.floor(workHours/3);
    if(made>=nP)
    {
        console.log(`Profit: -> ${((made-nP)*110.10).toFixed(2)} BGN`);
    }
    else{
        console.log(`Losses: -> ${((nP-made)*110.10).toFixed(2)} BGN`);
    }

}
andProcess(["150",
"7",
"18"])

