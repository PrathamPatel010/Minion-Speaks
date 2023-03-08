// let username = prompt("What is your name?");
// let welomemsg = `This script works ${username}`;
// alert(welomemsg);

let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#txt-output");

function clickHandler() {}
btnTranslate.addEventListener("click", function clickHandler() {
    outputDiv.innerText = "Hii gay" + txtInput.value;
});