function coffeLover(input){
    let coffee = input.shift().split(" ");
    let counterC = Number(input.shift());

    for(let i = 0; i < counterC; i++){
        let tokens = input[i].split(" ");
        let command = tokens[0];
         
        switch(command)
        {
        case "Include":
            let typeCoffee = tokens[1];
            coffee.push(typeCoffee);
            break;
   
        case "Remove":
            let position = tokens[1];
            let number = tokens[2];
            if (position == "first") {
                coffee.splice(0, number);
            } else {
                coffee.splice(-number);
                
            }
            if (coffee.length <= number) {
                break;
            }
            break;
        case "Prefer":
            let index1 = tokens[1];
            let index2 = tokens[2];
            if((index1 >= 0 && index1 <= coffee.length) && (index2 >= 0 && index2 <= coffee.length)){
                let tempIndex = coffee[index1];
                coffee[index1] = coffee[index2];
                coffee[index2] = tempIndex;
            } else {
                break;
            }
            break;
        case "Reverse":
            coffee = coffee.reverse();
        }
    }
    
    console.log(`Coffees:\n${coffee.join(" ")}`);
    
}

coffeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"])
