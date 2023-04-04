function solve(input) {
    let n = Number(input.shift());
    let heroes = {};


    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = { hp: Number(hp), mp: Number(mp) };
    }

    for (let line of input) {
        let [command, name, value1, value2] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(value1);
                let spellName = value2;
                if (heroes[name].mp >= mpNeeded) {
                    heroes[name].mp -= mpNeeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(value1);
                let attacker = value2;
                heroes[name].hp -= damage;
                if (heroes[name].hp > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
                } else {
                    delete heroes[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let mpAmount = Number(value1);
                let mpRecovered = Math.min(mpAmount, 200 - heroes[name].mp);
                heroes[name].mp += mpRecovered;
                console.log(`${name} recharged for ${mpRecovered} MP!`);
                break;
            case 'Heal':
                let hpAmount = Number(value1);
                let hpRecovered = Math.min(hpAmount, 100 - heroes[name].hp);
                heroes[name].hp += hpRecovered;
                console.log(`${name} healed for ${hpRecovered} HP!`);
                break;
            default:
                break;
        }
    }

    Object.keys(heroes).forEach(name => {
        console.log(`${name}\n  HP: ${heroes[name].hp}\n  MP: ${heroes[name].mp}`);
    });
}
solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])  