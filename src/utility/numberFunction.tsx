function randomNumber(highest: number) {
    return Math.floor(Math.random() * highest);
}

function dmsNumber() {
    let dmsNumber = [randomNumber(360), randomNumber(60), randomNumber(60)];
    return dmsNumber;
}

function addDMSNumbers(number1: number[], number2: number[]) {
    let seconds = number1[2]+number2[2];
    let minutes = number1[1]+number2[1];
    let degrees = number1[0]+number2[0];
    if(seconds > 59) {
        seconds = seconds - 60;
        minutes = minutes + 1;;
    }
    if(minutes > 59) {
        minutes = minutes - 60;
        degrees = degrees + 1;
    }
    return [degrees, minutes, seconds];
}

function subtractDMSNumbers(number1: number[], number2: number[]) {
    return 0;
}

export {randomNumber, dmsNumber, addDMSNumbers, subtractDMSNumbers};