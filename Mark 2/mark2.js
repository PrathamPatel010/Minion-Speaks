// dependency to use prompt() in vs code
const prompt = require("prompt-sync")({ sigint: true })

// This is a basic game that checks if you are true marvel fan
let score = 0
let queList = [
  {
    question: "What is character name of captain america?",
    answer: "Steve Rogers"
  },
  {
    question: "Who made the famous vibranium shield?",
    answer: "Howard Stark",
  },
  {
    question: "Which version of suit was used in Iron Man 3?(e.g. MK1,MK2)",
    answer: "MK42",
  },
  {
    question: "What is name of Thor's father?",
    answer: "Odin",
  },
  {
    question: "What is name of Thor's brother?",
    answer: "Loki"
  }
]

// function for greeting your user
function Hello() {
  let userName = prompt("Enter your name: ")
  console.log("Hello! " + userName)
  console.log("Welcome to Marvel quiz game")
}

// main method to run the game
function game() {
  for (let i = 0; i < queList.length; i++) {
    let currQue = queList[i]
    play(currQue.question, currQue.answer);
  }
}

// method for taking answer and checking it with real answer
function play(question, answer) {
  let userAnswer = prompt(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    score++
    console.log("YAY, you are correct")
    console.log("Your score is: " + score)
  } else {
    console.log("You are wrong")
    console.log("Your score is: " + score)
  }
}

// method to show final score
function FinalScore() {
  console.log("You scored " + score + " out of " + queList.length)
}

// method to show final score
function FinalScore() {
  console.log("You scored " + score + " out of " + queList.length)
}

// function calls
Hello();
game();
FinalScore();