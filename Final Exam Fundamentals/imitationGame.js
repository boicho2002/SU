function imitationGame(arr) {
    let message = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split('|');
        let command = line[0];
        switch (command) {

            case 'Move':
                let n = Number(line[1]);
                for (let i = 0; i < n; i++) {
                    let f = message.substring(0, 1);
                    let aF = message.substring(1);
                    message = aF + f;
                }
                break;

            case 'Insert':

                let index = Number(line[1]);
                let value = line[2];
                message = message.substring(0, index) + value + message.substring(index);
                break;

            case 'ChangeAll':

                let sub = line[1];
                let p = line[2];
                while (message.includes(sub)) {
                    message = message.replace(sub, p);
                }
                break;

            case 'Decode':

                console.log(`The decrypted message is: ${message}`);
                return;


        }



    }



}
imitationGame(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])







