function movieRating(input)
{
    let n=Number(input[0]);
    
    let maxRating=Number.MIN_SAFE_INTEGER;
    let maxTitle="";
    let minRating=Number.MAX_SAFE_INTEGER;
    let minTitle="";
    let aggRating=0;
    let i=1;
    
    while(true)
    {
        if(i>=n * 2)
        {
            break;
        }
        let title=input[i++];
        let rating=Number(input[i++]);
        if(rating>maxRating)
        {
            maxRating=rating;
            maxTitle=title;
        }
        if(rating<minRating)
        {
            minRating=rating;
            minTitle=title;
        }
        aggRating+=rating;
    }
    
    
    console.log(`${maxTitle} is with highest rating: ${maxRating.toFixed(1)}`);    
    console.log(`${minTitle} is with lowest rating: ${minRating.toFixed(1)}`);   
    console.log(`Average rating: ${(aggRating/n).toFixed(1)}`);

}
movieRating(["3","Dangal","8.3","Interstellar","8.5","Green Book","8.2"])