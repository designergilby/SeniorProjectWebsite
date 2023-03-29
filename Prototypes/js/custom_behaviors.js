$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	$(".name").on("click", function(event){
		event.preventDefault()
		console.log("hit")
		$(".overlay").fadeIn(200)
	})

	$(".close").on("click", function(event){
		event.preventDefault()
		console.log("hit")
		$(".overlay").fadeOut(200)
	})
	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});