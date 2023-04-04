function graduation(input) {

    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
       index++;
       let grade = Number(input[index]);
        if(grade<4.00)
        {
          excluded++;
          continue;          
        }
        if(excluded>1)
{
console.log(`${name} has been excluded at ${grades} grade.`);
break;
}
        sum+=grade;
        grades++;
    }

let avarage=sum/12;
console.log(`${name} graduated. Avarage grade:${avarage.toFixed(2)}.`);

}
graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","2","3"])

   