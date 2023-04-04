function treasureHunt(input){
    let loot=input.shift().split('|');
    // console.log(loot);
    let command=input.shift();
    while(command!= "Yohoho!"){
        tokens=command.split(" ");
        let action=tokens.shift();
        switch(action){
            case "Loot":
                for(let i of tokens){
                    if(loot.includes(i)){
                       continue; 
                    }
                    loot.unshift(i);
                }
                break;
            case "Drop":
                let index =Number(tokens[0]);
                if (index < 0 || index > loot.length-1) {
                    command = input.shift();
                    continue;
                }let removed = loot.splice(index, 1).join('');
                    loot.push(removed);
                break;
            case "Steal":
                let count=Number(tokens[0]);
                let element=loot.splice(-count);
                console.log(element.join(", "));
        }
        command=input.shift();
    }
    // console.log(loot.join(" "));
    if(loot.length==0){
        console.log("Failed treasure hunt");              
    }else {
        let sum = 0;
        for (let i of loot) {
            sum += i.length;
        }
        let avgGain = sum / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }


}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])