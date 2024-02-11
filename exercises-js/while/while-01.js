// EXERCISE WHILE 1 - GENERATE RANDOM NUMBERS FROM 1 TO 10 UNTIL THE NUMBER 1 APPEARS.
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
//
const min = 1
const max = 10
let result = 0

while (result !== 1) {
    result = random(min, max)
    console.log(result)
}