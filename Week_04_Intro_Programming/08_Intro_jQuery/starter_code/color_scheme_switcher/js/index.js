/*jQuery("#grayButton").on("click", switchGray);
jQuery("#whiteButton").on("click", switchWhite);

function switchGray()	{
	jQuery("body").css({
		"background-color": "gray",
		"color":"white"
});

function switchWhite()	{
	jQuery("body").css({
	"background-color": "white",
	"color":"black"
});

}
*/


jQuery("#grayButton").on("click", function switchGray(){
  jQuery("body").css("background-color", "gray");
  jQuery("body").css("color", "white");
});

jQuery("#whiteButton").on("click", function switchWhite(){
  jQuery("body").css("background-color", "white");
  jQuery("body").css("color", "black");
});



/*document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
*/