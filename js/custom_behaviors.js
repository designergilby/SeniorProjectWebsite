const handleOnMouseMove = e => {
	const { currentTarget: target } = e;
	console.log("hit1");

	const rect = target.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top;

	target.style.setProperty("--mouse-x", `${x}px`);
	target.style.setProperty("--mouse-y", `${y}px`);
	console.log("hit1");
}

for(const card of document.querySelectorAll(".background")){
	card.onmousemove = e => handleOnMouseMove(e);
	console.log("hit2");
}

$(document).ready(function() {
					
	// VARIABLES
	var dimension = 1;
	
	// EVENT HANDLERS

	$(".heroSVG").on("click", function(event){
		event.preventDefault();
		$(".feature1").fadeOut(1000, function(){
			$(".revealedContent").fadeIn(1000);
		});
		$(".heroImg2").animate({
			"opacity":"1"
		}, 2000)
	})

	$(".exploreWellness").on("click", function(event){
		event.preventDefault();
		$(".heroImg2").animate({
			"width":"60vw",
			"height":"60vw",
			"margin-left":"-30vw",
			"top":"-30vw"
		}, 1000)
		$(".heroTextContW").animate({
			"top":"60vh"
		}, 1000)
		$(".physW").animate({
			"scale":"120%"
		})
		$(".exploreWellness").fadeOut(500, function(){
			$(".arrowCont").css("display","flex")
			$(".wellnessCopy").css("color","#007db6")
		})
		$(".decorateRectW").animate({
			"opacity":"0"
		}, 1000)

		countStep()




	})

	$(".arrowRight").on("click", function(event){
		event.preventDefault();
		if(dimension == 8){
			dimension = 1;
		}
		else{
			dimension++;
		}
		console.log(dimension)

		countStep()
	})

	$(".arrowLeft").on("click", function(event){
		event.preventDefault();
		if(dimension == 1){
			dimension = 8;
		}
		else{
			dimension--;
		}

		countStep()


	})
	
	// FUNCTIONS
	function countStep(){
		if(dimension == 1){
			//Physical
			$(".heroImg2").animate({
				"rotate":"0deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Physical wellness encourages people to choose what feels good, create a balanced routine, and listen to one’s bodily needs. Design for physical wellness should be adaptable, functional, and tangible.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("PHYSICAL")
				$(this).css("color","#ee739b")
			}).fadeIn(250);
			
		}
		else if(dimension == 2){
			//emotional
			$(".heroImg2").animate({
				"rotate":"45deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Emotional wellness inspires caring for oneself, adapting to difficult times, relaxation, and stress management. Design for emotional wellness should be interpretable, inclusive, responsive, and personalized.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("EMOTIONAL")
				$(this).css("color","#4f6ab2")
			}).fadeIn(250);
		}
		else if(dimension == 3){
			//Intellectual
			$(".heroImg2").animate({
				"rotate":"90deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Intellectual wellness encourages learning and open-mindedness, as well as engaging in mentally stimulating activities and exploring new ideas. Design for intellectual wellness should be reasonable, understandable, and interactive.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("INTELLECTUAL")
				$(this).css("color","#85459b")
			}).fadeIn(250);
			$(".viewSorter").fadeIn(200)
		}
		else if(dimension == 4){
			//Spiritual
			$(".heroImg2").animate({
				"rotate":"135deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Spiritual wellness allows us to be in tune with our spiritual selves and to discover our individual beliefs and values in this world. Design for spiritual wellness should be ethical, equitable, ritualistic, and transcendental.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("SPIRITUAL")
				$(this).css("color","#00a45b")
			}).fadeIn(250);
			$(".viewSorter").fadeOut(200)
		}
		else if(dimension == 5){
			//Social
			$(".heroImg2").animate({
				"rotate":"180deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Social wellness is related to our personal relationships and how we interact with others in public and private spaces. Design for social wellness should be influential, communal, and connectible.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("SOCIAL")
				$(this).css("color","#ee739b")
			}).fadeIn(250);
			$(".viewSorter").fadeIn(200)
		}
		else if(dimension == 6){
			//Financial
			$(".heroImg2").animate({
				"rotate":"225deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Financial wellness focuses on knowing monetary processes and resources while understanding your own financial situation and prospects. Design for financial wellness should be affordable, secure, and resourceful.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("FINANCIAL")
				$(this).css("color","#51c0aa")
			}).fadeIn(250);
		}
		else if(dimension == 7){
			//Occupational
			$(".heroImg2").animate({
				"rotate":"270deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Occupational wellness inspires one to prepare for work that they love. Participation reflects personal interests, values, and beliefs. Design for occupational wellness should be learnable, practical, and inventive.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("OCCUPATIONAL")
				$(this).css("color","#6acdea")
			}).fadeIn(250);
		}
		else if(dimension == 8){
			//Environmental
			$(".heroImg2").animate({
				"rotate":"315deg"
			})
			$(".wellnessCopy").fadeOut(250,function() {
				$(this).text("Environmental wellness inspires us to live a lifestyle that is respectful of our surroundings. Design for environmental wellness should be inhabitable, resilient, spatial, and accessible.")
			  }).fadeIn(250);
			$(".wellnessTitle").fadeOut(250,function() {
				$(this).text("ENVIRONMENTAL")
				$(this).css("color","#99ca43")
			}).fadeIn(250);
		}
	}
	
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