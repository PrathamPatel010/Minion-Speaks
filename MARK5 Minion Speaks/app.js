// getting the required queries
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
// mock server url to test
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// actual server url
var serverURL = "https://api.funtranslations.com/translate/minion.json";

// method to construct URL
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

// error handling method in case of error occured
function errorHandler(error) {
    console.log(`error occured ${error}`);
    alert("Something wrong with server, Try after an hour");
}

// click event handler
btnTranslate.addEventListener("click", function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
});