function Numbers(arr) {
    num = arr.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let avg = sum / num.length;
    let topFive = [];
    sorted = num.sort((a, b) => b - a)
    for (let i = 0; i < 5; i++) {
        if (sorted[i] > avg) {
            topFive.push(sorted[i]);
        }
    }
    if (topFive.length > 0) {
        console.log(topFive.join(' '));
    } else {
        console.log('No');
    }
}
Numbers('10 20 30 40 50')
console.log("---------");
Numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log("---------");
Numbers('-1 -2 -3 -4 -5 -6')