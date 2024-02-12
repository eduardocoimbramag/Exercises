// WRITE A FUNCTION THAN RECEIVE A NUMBER AND RETURN THIS:
// NUMBER IS DIVISIBLE FOR 3 = Fizz
// NUMBER IS DIVISIBLE FOR 5 = Buzz
// NUMBER IS DIVISIBLE FOR 3 AND 5 = FizzBuzz
// NUMBER IS NOT DIVISIBLE FOR 3 AND 5 = RETURN ITSELF


function isDivisible(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return console.log("FizzBuzz")
    } else if (number % 5 === 0) {
        return console.log("Buzz")
    } if (number % 3 === 0) {
        return console.log("Fizz")
    } else {
        return console.log(`${number}`)
    }
}

isDivisible(15)
isDivisible(10)
isDivisible(9)
isDivisible(23)