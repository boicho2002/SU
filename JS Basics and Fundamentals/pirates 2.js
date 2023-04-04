function solve(input) {
    const targets = {};
    let line = input.shift();

    // parse targets
    while (line !== "Sail") {
        const [town, population, gold] = line.split("||");
        targets[town] = {
            population: Number(population),
            gold: Number(gold),
        };
        line = input.shift();
    }

    // handle events
    line = input.shift();
    while (line !== "End") {
        const [action, town, arg1, arg2] = line.split("=>");
        if (action === "Plunder") {
            const people = Number(arg1);
            const gold = Number(arg2);
            targets[town].population -= people;
            targets[town].gold -= gold;
            console.log(
                `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );
            if (targets[town].population <= 0 || targets[town].gold <= 0) {
                delete targets[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (action === "Prosper") {
            const gold = Number(arg1);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                targets[town].gold += gold;
                console.log(
                    `${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`
                );
            }
        }
        line = input.shift();
    }

    // print remaining targets
    const remainingTargets = Object.keys(targets);
    if (remainingTargets.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${remainingTargets.length} wealthy settlements to go to:`);
        remainingTargets.sort().forEach((town) => {
            console.log(`${town} -> Population: ${targets[town].population} citizens, Gold: ${targets[town].gold} kg`);
        });
    }
}
solve((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]))  