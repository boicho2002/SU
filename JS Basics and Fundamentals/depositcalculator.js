function deposit(input){
let depositAmount=Number(input[0]);
let depositMonths=Number(input[1]);
let yearlypercent=Number(input[2])/100;
let finalAmount=depositAmount+depositMonths*((depositAmount*yearlypercent)/12);
console.log(finalAmount);


}
deposit(["200","3","5.7"])