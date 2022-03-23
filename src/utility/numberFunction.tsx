function randomNumber(highest: number) {
    return Math.floor(Math.random() * highest);
}

function dmsNumber() {
    let dmsNumber = {
        degrees: randomNumber(360),
        minutes: randomNumber(60),
        seconds: randomNumber(60)
    }
    return dmsNumber;
}

export {randomNumber, dmsNumber};