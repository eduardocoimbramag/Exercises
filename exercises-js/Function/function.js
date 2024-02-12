// WRITE A FUNCTION THAN RECEIVE 2 NUMBERS AND RETURN THE BIGGEST
function biggest(x, y) {
    if (x > y) {
        console.log(`${x} is bigger than ${y}.`)
    }
    else if (y > x) {
        console.log(`${y} is bigger than ${x}.`)
    }
    else {
        console.log(`two numbers have same value.`)
    }
}

biggest(1, 0)
biggest(1, 2)
biggest(1, 1)