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

	// $(".angelaHolton").click(function(){
	// 	event.preventDefault()

	// 	$(".angelaHoltonPop").fadeIn(500)
	// 	// $("body").addClass("stopScroll")
	// })

	
	 $('.angelaHolton').click(function() {
	    
	    $(".loaderBackground").fadeIn(400, function(){
	    	$(".loader").delay(100).fadeIn(400, function(){
	    		 $(".angelaHoltonPop").fadeIn(800, function(){
	    			$(".loader").delay(2000).fadeOut(400, function(){
	    				$(".loaderBackground").fadeOut(400)
	    			})
	   			 })
	    	})
	    })
	  })


	 $('.Slole').click(function() {
	    
	    $(".loaderBackground").fadeIn(400, function(){
	    	$(".loader").delay(100).fadeIn(400, function(){
	    		 $(".angelaHoltonPop").fadeIn(800, function(){
	    			$(".loader").delay(2000).fadeOut(400, function(){
	    				$(".loaderBackground").fadeOut(400)
	    			})
	   			 })
	    	})
	    })
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


	$('.samPeskie').click(function() {
	    
	    $(".loaderBackground").fadeIn(400, function(){
	    	$(".loader").delay(100).fadeIn(400, function(){
	    		 $(".samPeskiePop").fadeIn(800, function(){
	    			$(".loader").delay(2000).fadeOut(400, function(){
	    				$(".loaderBackground").fadeOut(400)
	    			})
	   			 })
	    	})
	    })
	  })


	$('.IslaAndMio').click(function() {
	    
	    $(".loaderBackground").fadeIn(400, function(){
	    	$(".loader").delay(100).fadeIn(400, function(){
	    		 $(".samPeskiePop").fadeIn(800, function(){
	    			$(".loader").delay(2000).fadeOut(400, function(){
	    				$(".loaderBackground").fadeOut(400)
	    			})
	   			 })
	    	})
	    })
	  })



	$(".samClose").click(function(){
		event.preventDefault()

		$(".samPeskiePop").fadeOut(500)
		// $("body").removeClass("stopScroll")
	})

	
	
});



//Nadiyah's Section (Footer)