function biscuitFactory(input)
{
    arr=input.map(Number);
    let biscuits=input.shift();
    let workers=input.shift();
    let number=input.shift();
    let counter=0;
    for(let i=0;i<30;i++){
        if(i%3==0){
            let thirdDay=(biscuits*workers)*0.75;
            counter+=Math.floor(thirdDay);
        }
        else{counter+=biscuits*workers;
        }
    }
    let percent=((counter-number)/number)*100;
    console.log(`You have produced ${counter} biscuits for the past month.`);
    if(counter>=number){
        console.log(`You produce ${(percent.toFixed(2))} percent more biscuits.`)
    }
    else{
        console.log(`You produce ${Math.abs(percent).toFixed(2)} percent less biscuits.`)
    }
}
biscuitFactory(["78",
"8",
"16000"])