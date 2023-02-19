// Rock Paper Scissor - Game

// dependency to use prompt() in vs code
const prompt = require("prompt-sync")({ sigint: true })

// prompting user for input
let userIn = prompt("Enter R,P,S : ").toUpperCase();

// using random function to generate random input
let cpui = Math.floor(Math.random() * 3)
let cpu = ["R","P","S"][cpui];

// function that will check inputs and return the answer
const match = (userIn,cpu) => {
    if(userIn===cpu) {
        return "Nobody";
    } else if(userIn==="R" && cpu==="P") {
        return "cpu";
    } else if(userIn==="R" && cpu==="S") {
        return "user";
    } else if(userIn==="P" && cpu==="R") {
        return "user";
    } else if(userIn==="P" && cpu==="S") {
        return "cpu";
    } else if(userIn==="S" && cpu==="P") {
        return "user";
    } else if(userIn==="S" && cpu==="R") {
        return "cpu";
    }
}

let result = match(userIn,cpu).toUpperCase();
console.log(`User Selected: ${userIn} Computer selected: ${cpu}`)
console.log(`${result} Won this game!`);


