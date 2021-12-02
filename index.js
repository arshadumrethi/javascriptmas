const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = new Date("Dec 25, 2021 00:00:00").getTime();
    const today = new Date().getTime()
    const timeTillChristmas = christmas - today;
        
    const days = Math.floor(timeTillChristmas / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeTillChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeTillChristmas % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeTillChristmas % (1000 * 60)) / 1000);
        
    return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds " 

}

countdownDisplay.textContent = renderCountdown()
// renderCountdown()

// Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.