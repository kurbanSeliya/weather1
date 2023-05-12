// live time

setInterval(Timer);
function Timer() {
    const date = new Date();
    document.getElementById("date-time").innerHTML = date.toLocaleTimeString();
}

const wday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const a = new Date();
let day = wday[a.getDay()];
document.getElementById("week").innerHTML = day;


var datetime = document.getElementById('date');
var d = new Date();
var formatted = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
datetime.innerHTML = formatted;

