$(document).ready(function() {
					
	$(".viewProjectBtn").on("click", function(event){
		event.preventDefault();
		console.log("augh")
		$(".feature").fadeOut(1000)
		$(".feature2").fadeIn(2000)
		
	})

		$(".closePopButton").click(function(){
		event.preventDefault()

		$(".designerPageHolder ").fadeOut(800)
	})

	
	
});