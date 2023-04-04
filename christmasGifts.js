function christmasGifts(input)
{
    let index=0;
    let command=input[index];
    index++;
    let toys=0;
    let kids=0;
    let adults=0;
    let sweather=0;
    while(command!="Christmas")
    {
        let years=Number(command);
        
        if(years <= 16)
                {
                    kids++;
                    toys += 5;
                }
                if (years > 16)
                {
                    adults++;
                    sweather += 15;
                }
        command=input[index];
        index++;
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);   
    console.log(`Money for toys: ${toys}`);   
    console.log(`Money for sweaters: ${sweather}`);
}
christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])

