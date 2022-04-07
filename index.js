const date_box = document.querySelector("#date-box");
const time_box = document.querySelector("#time-box");
const day_box = document.querySelector("#day-box");

setInterval(() => {
    date_box.innerHTML = new Date().toLocaleDateString();
    time_box.innerHTML = new Date().toLocaleTimeString();
    day_box.innerHTML = getDayFromNumber(new Date().getDay());
}, 1000);

function getDayFromNumber(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}