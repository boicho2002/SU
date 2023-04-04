function formatGrade(grade)
{
    let gradeText=' ';
    if(grade<3)
    {
        gradeText='Fail';
    }
    else if(grade<3.5)
    {
        gradeText='Poor';
    }
    else if(grade<4.5)
    {
        gradeText='Good';

    }
    else if(grade<5.5)
    {
        gradeText=' Very Good';
    }
    else if(grade<=6)
    {
         gradeText='Excellent';
    }
   
    let gradeValue=grade<3 ? '2': grade.toFixed(2);
    console.log(`${gradeText} (${gradeValue})`);
    
}
formatGrade(3.5);
formatGrade(2.5);
formatGrade(4.6);
formatGrade(5.4);
formatGrade(3.4);
formatGrade(5.7);