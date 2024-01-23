// app.js
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Bu kontrol eklenerek hatanın önüne geçilebilir
    var clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.innerText = timeString;
    }

    var day = now.getDate();
    var month = now.getMonth() + 1; // JavaScript months are 0-indexed
    var year = now.getFullYear();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var dateString = day + "/" + month + "/" + year;
    
    // Aynı şekilde burada da kontrol ekleniyor
    var dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.innerText = dateString;
    }

    setTimeout(updateClock, 1000); // Update the clock every second
}

// Call the function to initially set up the clock
updateClock();
