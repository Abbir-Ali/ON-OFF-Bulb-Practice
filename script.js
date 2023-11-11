var bulb = document.querySelector(".bulb");
var btn = document.querySelector("button");
var isBulbOn = false;
btn.addEventListener("click", function (){
    bulb.style.backgroundColor = "yellow"
    if (isBulbOn) {
        // If the bulb is on, turn it off
        bulb.style.backgroundColor = "transparent"; // Set the background color to white (off)
    } else {
        // If the bulb is off, turn it on
        bulb.style.backgroundColor = "yellow"; // Set the background color to yellow (on)
    }
    isBulbOn = !isBulbOn;
});