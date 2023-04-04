function choose(input){
let type=input[0];
switch(type){
case"banana":
case"apple":
case"watermelon":
case"kiwi":
case"grapes":
case"melon":console.log("fruit");break;
case"tomato":
case"cucumber":
case"carrot":console.log("vegetable");break;
case"pepsi":
case"coke":
case"fanta":console.log("soft drink");break;
default:console.log("Error");break;
}
}
choose(["cucumber"])