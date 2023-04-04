function secretChat(arr) {

    let secretMessage = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(':|:');
        let command = line[0];
        let value = line.slice(1);
        switch (command) {
            case 'ChangeAll':
                {
                    let sub = value[0];
                    let p = value[1];
                    while (secretMessage.includes(sub)) {
                        secretMessage = secretMessage.replace(sub, p);
                    }
                    console.log(secretMessage);
                    break;
                }
            case 'Reverse':
                {
                    let sub = value[0];
                    if (secretMessage.includes(sub)) {
                        secretMessage = secretMessage.replace(sub, '');
                        let reverse = reverseStr(sub);
                        secretMessage += reverse;
                        console.log(secretMessage);
                    }
                    else {
                        console.log('error');
                    }
                    break;
                }
            case 'InsertSpace':
                {
                    let index = value[0];
                    let left = secretMessage.substring(0, index);
                    let right = secretMessage.substring(index);
                    secretMessage = left + '' + right;
                    console.log(secretMessage);
                    break;
                }
            case 'Reveal':
                {
                    console.log(`You have a new text message: ${secretMessage}`);
                    return;
                }

        }



    }

    function reverseStr(text) {
        return text.split('').reverse().join('');
    }

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])