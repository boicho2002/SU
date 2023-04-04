function sum(input) {
    let secondsFirst = Number(input[0]);
    let secondsSecond = Number(input[1]);
    let secondsThird = Number(input[2]);
    let secondsSum = secondsFirst + secondsSecond + secondsThird;
    let minutes = Math.floor(secondsSum / 60);
    let seconds = secondsSum % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sum(["35", "45", "44"])