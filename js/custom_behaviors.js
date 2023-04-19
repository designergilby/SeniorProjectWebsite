$(document).ready(function() {
					
	$(".viewProjectBtn").on("click", function(event){
		event.preventDefault();
		console.log("augh")
		$(".feature").fadeOut(1000)
		$(".feature2").fadeIn(2000)
		
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

	$('.projectImagesHolder').slick({
		autoplay:true,
		autoplaySpeed: 2000,
		speed:2000,
		dots:true,
		arrows:false,
	});


	 $('.angelaHolton').hover(function() {
	    $(".angelaHolton p").css({"opacity": "0"});
	  }, function() {
	    $(".angelaHolton p").css({"opacity": "100"});
	  })

	$(".angelaHolton").click(function(){
		event.preventDefault()

		$(".angelaHoltonPop").fadeIn(500)
		// $("body").addClass("stopScroll")
	})

	$(".angelaClose").click(function(){
		event.preventDefault()

		$(".angelaHoltonPop").fadeOut(500)
		// $("body").removeClass("stopScroll")
	})


	 $('.samPeskie').hover(function() {
	    $(".samPeskie p").css({"opacity": "0"});
	  }, function() {
	    $(".samPeskie p").css({"opacity": "100"});
	  })

	$(".samPeskie").click(function(){
		event.preventDefault()

		$(".samPeskiePop").fadeIn(500)
		// $("body").addClass("stopScroll")
	})

	$(".samClose").click(function(){
		event.preventDefault()

		$(".samPeskiePop").fadeOut(500)
		// $("body").removeClass("stopScroll")
	})

	
	
});



//Nadiyah's Section (Footer)