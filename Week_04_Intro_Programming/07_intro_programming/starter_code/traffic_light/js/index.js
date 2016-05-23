document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}


function clearLights() {
  jQuery(".bulb").css("background-color", black);
}



/* jQuery children
function clearLights() {
  jQuery("body").children(".bulb").css("background-color", black);
}
*/

/* js version of clearlights
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
*/

/* 

different ways to say the same thing in js and jquery

document.getElementById('stopLight').style.backgroundColor = "red";
$("#stoplight").css("background-color", "red");
jQuery("#stoplight").css("background-color", "red");
*/