document.getElementById("grayButton").onclick=changeToGrey;
document.getElementById("whiteButton").onclick=changeToWhite;


// Click on grey button
function changeToGrey () {
	// change background
	document.body.style.backgroundColor="grey";
	// change text
	document.body.style.color="white";
} 	

// Click on white button
function changeToWhite () {
	// change background
	document.body.style.backgroundColor="white";
	// change text
	document.body.style.color="black";
}	