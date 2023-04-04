function stringManipulator(arr) {
    let str = arr.shift();
    for (let i of arr) {
        if (i === 'End') {
            break;
        }
        else {
            let line = i.split(' ');
            let command = line[0];
            let token1 = line[1];
            let token2 = line[2];
            switch (command) {
                case 'Translate':
                    while (str.includes(token1)) {
                        str = str.replace(token1, token2)
                    }
                    console.log(str);
                    break;
                case 'Includes':
                    if (str.includes(token1)) {
                        console.log('True');
                    } else {
                        console.log('False');
                    }
                    break;
                case 'Start':
                    if (str.startsWith(token1)) {
                        console.log('True');
                    } else {
                        console.log('False');
                    }
                    break;
                case 'Lowercase':
                    str = str.toLowerCase()
                    console.log(str);
                    break;
                case 'FindIndex':
                    let lastIndex = str.lastIndexOf(token1);
                    console.log(lastIndex);
                    break;
                case 'Remove':
                    str = str.split('');
                    str.splice(token1, token2);
                    str = str.join('')
                    console.log(str);
                    break;
            }

        }
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])


