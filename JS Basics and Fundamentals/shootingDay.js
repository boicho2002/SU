function shootingDay(input)
{
let photosT=Number(input[0]);
let number=Number(input[1]);
let sceneT=Number(input[2]);
let t=number*sceneT;
let w=photosT*0.15;
let sumT=t+w;
if(photosT>sumT)
{
console.log(`You managed to finish the movie on time! You have ${(photosT-sumT).toFixed(0)} minutes left!`);
}
else{
    console.log(`Time is up! To complete the movie you need ${(sumT-photosT).toFixed(0)} minutes.`);
}
}
shootingDay(["60","15","3"])