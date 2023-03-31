// dependency to use prompt() in vs code
const prompt = require("prompt-sync")({ sigint: true })

// This is a basic game made using Node JS that checks if you know me at my best.
let score = 0
let queList = [
  {
    question: "Who is my favourite superhero? ",
    answer: "Ironman"
  },
  {
    question: "Am I single or in relationship? ",
    answer: "Single",
  },
  {
    question: "Which is my favourite programming language? ",
    answer: "Java",
  }
]

// function for greeting your user
function Hello() {
  let userName = prompt("Enter your name: ")
  console.log("Hello " + userName)
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

// function calls
Hello();
game();
FinalScore();