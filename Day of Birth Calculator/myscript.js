var userMonth = document.getElementById("user-month");
var userDay = document.getElementById("user-day");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function(evt) {

    var message = document.getElementById("message");
    var parseMonth = (parseInt(userMonth.value) - 1);
    var parseDay = parseInt(parseDay.value);
    var parseYear = parseInt(parseYear.value);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var DateIs = new Date(parsedYear, parsedMonth, parsedDay);
    var weekdayIs = weekday[DateIs.getDay()];
    var monthIs = months[parseInt];

    if (weekdayIs === undefined || monthIs === undefined) {
        message.innerText = "";
        setTimeout(function() {
            message.innerText = "Please enter valid date";
        }, 500)
    } else {
        message.innerText = weekdayIs + "," + monthIs + " " + parseDay + ", " + parsedYear;
    }

})