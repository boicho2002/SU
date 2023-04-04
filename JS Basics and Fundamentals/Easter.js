function Easter(input)
{
    let n=Number(input[0]);
    let nR=0;
    let nO=0;
    let nB=0;
    let nG=0;
    for(let i=0;i<=n;i++)
    {
        let c=input[i];
    if(c=="red")
    {
        nR++;
    }
    if(c=="orange")
    {
        nO++;
    }
    if(c=="blue")
    {
        nB++;
    }
    if(c=="green")
    {
        nG++;
    }   
}
    let max="";
    if(nR>nB && nR>nG && nR>nO)
    {
        max=`Max eggs:${nR}->red`;
    }
    else if(nB>nR && nB>nG && nB>nO)
    {
        max=`Max eggs: ${nB} -> blue`;
    }
    else if(nG>nB && nG>nR && nG>nO)
    {
        max=`Max eggs:${nG}->green`;
    }
    else{
        max=`Max eggs:${nO}->orange`;

    }
    console.log(`Red eggs: ${nR}`);
    console.log(`Orange eggs: ${nO}`);
    console.log(`Blue eggs: ${nB}`);
    console.log(`Green eggs: ${nG}`);
    console.log(max);
    
}
    
Easter(["4","red","blue","orange","blue"])
