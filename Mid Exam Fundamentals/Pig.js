function Pig(input)
{
    let foodKg=Number(input.shift());
    let heyKg=Number(input.shift());
    let coverKg=Number(input.shift());
    let weightKg=Number(input.shift());
    let h=false;
    for(let i=1;i<=30;i++)
    {
        foodKg-=0.3;
        if(i%2==0)
        {
            heyKg-=foodKg*0.05;
        }
        if(i%3==0)
        {
            coverKg-=weightKg/3;
        }
        if(foodKg<0 || heyKg<0 || coverKg<0)
        {
            h=true;
            break;
        }

    }
    return h ? `Merry must go to the pet store!` : `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${heyKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`

}
console.log(Pig(["10",
"5",
"5.2",
"1"]))