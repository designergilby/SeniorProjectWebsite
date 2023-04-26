

$(document).ready(function() {
					
	// VARIABLES
	
	// EVENT HANDLERS

	$(".advanceFeature").on("click", function(event){
		event.preventDefault();
		$(".feature1").fadeOut(1000, function(){
			$(".revealedContent").fadeIn(1000);
		});
		$(".heroImg2").animate({
			"opacity":"1"
		}, 2000)
	})

	$(".viewAllProjectsBelow").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#viewAllProjects").offset().top
		}, 1000);
	});

	$(".physW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".physical").offset().top
		}, 1000);
	});

	$(".emoW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".emotional").offset().top
		}, 1000);
	});

	$(".intelW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".intellectual").offset().top
		}, 1000);
	});

	$(".socialW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".social").offset().top
		}, 1000);
	});

	$(".finanW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".financial").offset().top
		}, 1000);
	});

	$(".occW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".occupational").offset().top
		}, 1000);
	});

	$(".environW").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".environmental").offset().top
		}, 1000);
	});

	$(".physW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Physical wellness encourages people to choose what feels good, create a balanced routine, and listen to one’s bodily needs. Design for physical wellness should be adaptable, functional, and tangible.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("PHYSICAL")
			$(this).css("color","#ee739b")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".emoW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Emotional wellness inspires caring for oneself, adapting to difficult times, relaxation, and stress management. Design for emotional wellness should be interpretable, inclusive, responsive, and personalized.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("EMOTIONAL")
			$(this).css("color","#4f6ab2")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".intelW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Intellectual wellness encourages learning and open-mindedness, as well as engaging in mentally stimulating activities and exploring new ideas. Design for intellectual wellness should be reasonable, understandable, and interactive.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("INTELLECTUAL")
			$(this).css("color","#85459b")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".spiritW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Spiritual wellness allows us to be in tune with our spiritual selves and to discover our individual beliefs and values in this world. Design for spiritual wellness should be ethical, equitable, ritualistic, and transcendental.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("SPIRITUAL")
			$(this).css("color","#00a45b")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".socialW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Social wellness is related to our personal relationships and how we interact with others in public and private spaces. Design for social wellness should be influential, communal, and connectible.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("SOCIAL")
			$(this).css("color","#ee739b")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".finanW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Financial wellness focuses on knowing monetary processes and resources while understanding your own financial situation and prospects. Design for financial wellness should be affordable, secure, and resourceful.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("FINANCIAL")
			$(this).css("color","#51c0aa")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".occW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Occupational wellness inspires one to prepare for work that they love. Participation reflects personal interests, values, and beliefs. Design for occupational wellness should be learnable, practical, and inventive.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("OCCUPATIONAL")
			$(this).css("color","#6acdea")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});

	$(".environW").hover(function(){
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("Environmental wellness inspires us to live a lifestyle that is respectful of our surroundings. Design for environmental wellness should be inhabitable, resilient, spatial, and accessible.")
		}).fadeIn(250);
		$(".wellnessTitle").stop(true, false).fadeOut(250,function() {
			$(this).text("ENVIRONMENTAL")
			$(this).css("color","#99ca43")
		}).fadeIn(250);
	}, function() {
		$(".wellnessCopy").stop(true, false).fadeOut(250,function() {
			$(this).text("We are experiencing unprecedented economic, social, and environmental shifts that motivate us to become wellness-seekers. We aim to heal and guide users through adaptive and responsive brand archetypes, all while utilizing the eight dimensions of wellness.")
			}).fadeIn(250);
			$(".wellnessTitle").stop(true,false).fadeOut(250,function() {
				$(this).text("THE EIGHT DIMENSIONS OF WELLNESS")
				$(this).css("color","#0063b0")
		}).fadeIn(250);
	});
	
	
	// INITIALIZATION


	// ======================================== CHAR ======================
	///Hover function for the names to disapear////BG image is added in css/////

	var names = ['salmanAhmed', 'jasmineBussie', 'katelynChristiansen', 'AutumnFrantz', 'jasmineFredrick', 'jackGilbert', 'charlotteGreen', 'hallieGroeschel', 'anikaGuggisberg', 'eleniHein', 'christianHeo', 'indigoHoffman', 'angelaHolton', 'ashleyJandro', 'danielleJohnson', 'jamieKerwin','ceciliaKnudsen', 'alyssaKoepke', 'kaliKoester', 'tjorvenLandwehr', 'emmaLarson', 'beauLuzar', 'seringMcHugh', 'harlanMckay', 'carlyMeyer', 'nadiyahMC', 'joeMischke', 'sarahMorris', 'tylerMullin', 'lilyNess', 'laurenPechman', 'samPeskie', 'kaylaPurney', 'natalieReber', 'isabelRoberts', 'jadynSchoppers', 'destinySwen', 'vaughnVande', 'alexWoo'];
	$.each(names, function(index, name) {
	hoverEffect(name);
	});


	function hoverEffect(name) {
	$('.' + name).hover(function() {
	$("." + name + " p").css({"opacity": "0"});
	$("." + name).addClass("hoverTransition")
	}, function() {
	$("." + name + " p").css({"opacity": "1"});
	$("." + name).removeClass("hoverTransition")
	})
	}


	$('.projectImagesHolder').slick({
		autoplay:true,
		autoplaySpeed: 2000,
		speed:2000,
		dots:true,
		arrows:false,
	});


	// ======================================== POPUP ======================
	

	$('.angelaHolton, .Slole').click(function() {
		$("body").addClass("stopScroll")
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


	
	$(".closePopButton").click(function(){
		event.preventDefault()

		$(".popUp").fadeOut(500)
		$("body").removeClass("stopScroll")
	})
	
	
});