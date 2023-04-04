function Football(input)
{
    let index=0;
    let player=input[index];
    index++;
    let topPlayer="";
    let topGoals=0;
    while(player!='END')
    {
        goals=Number(input[index]);
        index++;
        if(goals>topGoals)
        {
            topPlayer=player;
            topGoals=goals;
            
        }
        if(goals>=10)
        {
            break;
        } 
        player=input[index]
        index++;
    }
    console.log(`${topPlayer} is the best player!`);
    if(topGoals>=3)
    {
        console.log(`He has scored ${topGoals} goals and made a hat-trick !!!`);
    }  
    else {
        console.log(`He has scored ${topGoals} goals.`);
    }

}
Football(["Neymar","2","Ronaldo","1","Messi","3","END"])
