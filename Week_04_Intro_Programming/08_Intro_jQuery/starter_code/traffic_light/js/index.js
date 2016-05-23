//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery("#stopButton").on("click", function (){
	jQuery(".bulb").css("background-color", "black");
	jQuery("#stopLight").css("background-color", "red");
});


jQuery("#slowButton").on("click", function (){
	jQuery(".bulb").css("background-color", "black");
	jQuery("#slowLight").css("background-color", "yellow");
});

jQuery("#goButton").on("click", function (){
	jQuery(".bulb").css("background-color", "black");
	jQuery("#goLight").css("background-color", "green");
});



/*document.getElementById('stopButton').onclick = illuminateRed;
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
*/

