// required setup to use prompt in vscode
const prompt = require("prompt-sync")({ sigint: true })


// function to generate random number within range
function getNum(max = 100) {
    let random = Math.floor(Math.random() * max)
    return random
}
let num = getNum()

let correct = false
let count = Number.parseInt(0)
while (!correct) {
    let guess = prompt("Guess the number: ")
    if (guess > num) {
        count++
        console.log("Please enter lesser number")
    } else if (guess < num) {
        count++
        console.log("Please enter greater number")
    } else {
        count++
        correct = true
        console.log("You guessed the correct number")
        let score = Number.parseInt(100 - count)
        console.log("Your score is " + score)
    }
}