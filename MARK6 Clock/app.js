function getDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDay();
    var dateTime = `Day: ${day}/${month}/${year}`;
    return dateTime;
}

function getTime() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var time = `Time: ${hour} : ${minutes} : ${seconds}`;
    return time;
}

setInterval(function() {
    currentDate = getDate();
    currentTime = getTime();
    let div = document.getElementById("time");
    div.innerHTML = `<h1> ${currentDate} <br> ${currentTime}`;
}, 1000)