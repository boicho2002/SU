function mirrorWords(arr) {
    const regex = /([@#])([a-zA-Z]{3,})\1\1([a-zA-Z]{3,})\1/g;

    let matches = [];
    let pairs = 0;

    let match;

    while ((match = regex.exec(arr)) != null) {
        const wordOne = match[2];
        const wordTwo = match[3];
        const wordTwoReversed = wordTwo.split('').reverse().join('');
        pairs++;

        if (wordOne == wordTwoReversed) {
            matches.push(`${wordOne} <=> ${wordTwo}`);
        }
    }

    pairs == 0
        ? console.log('No word pairs found!')
        : console.log(`${pairs} word pairs found!`);

    if (matches.length > 0) {
        console.log(`The mirror words are: \n${matches.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
