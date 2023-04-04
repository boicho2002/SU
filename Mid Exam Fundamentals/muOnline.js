function muOnline(roomsAsString) {
    let roomsAsArr = roomsAsString.split('|');
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    for (let room of roomsAsArr) {
        room = room.split(' ');
        let command = room[0];
        let number = Number(room[1]);
        roomCounter++;
        let healing;

        if (command == 'potion') {
            if (health + number > 100) {
                healing = 100 - health;
                health = 100;
            } else {
                healing = number;
                health += number;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            let monster = command;
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 60|chest 1000");