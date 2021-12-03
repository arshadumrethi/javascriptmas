const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

christmasBtn.addEventListener("click", xmas)
snowBtn.addEventListener("click", snowy)

function xmas(){
    body.classList.remove("snow")
    body.classList.add("christmas")
}

function snowy(){
    body.classList.remove("christmas")
    body.classList.add("snow")
}
    


// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.