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

	$(".navButton").on("click", function(event){
		event.preventDefault()
		$("nav").fadeToggle(500)
	})
	
	$(window).on("resize", function(){
		if(window.innerWidth >=768){
			$("nav").css("display", "flex")
		} else {
			$("nav").css("display", "none")
		}
	})

	
	
});

//Nadiyah's Section (Footer)