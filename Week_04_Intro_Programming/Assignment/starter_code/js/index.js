//Use $.ready() to delay code from executing until fully loaded
$(document).ready(function(){

//if user clicks Read more $.slideDown() and $.show()
	$(".readmore").on("click", function (event){
		event.preventDefault();
		$(".readmore").hide();
		$("#show-this-on-click").slideDown();
		$(".readless").show();
	})
//Read less
	$(".readless").on("click", function (event){
		event.preventDefault();
		$(".readless").hide();
		$("#show-this-on-click").slideUp();
		$(".readmore").fadeIn(1500).show();
	})
//Learn more $.slideDown()
	$(".learnmore").on("click", function (event){
		event.preventDefault();
		$(".learnmore").hide();
		$("#learnmoretext").slideDown();
	})

})
