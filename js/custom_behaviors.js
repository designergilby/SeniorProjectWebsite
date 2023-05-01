

$(document).ready(function() {
					
	// VARIABLES
	
	// EVENT HANDLERS

	$(".advanceFeature").on("click", function(event){
		event.preventDefault();
		$(".feature1").fadeOut(1000, function(){
			$(".revealedContent").fadeIn(1000);

			if(window.innerWidth >=768){
				$("nav").addClass("revealNav")
				$("nav").fadeIn(1000);
			} else {
				$("nav").css("display", "none")
			}
		});

		$(".heroImg2").animate({
			"opacity":"1"
		}, 2000)
	})

	$(".heroImg").on("click", function(event){
		event.preventDefault();
		$(".feature1").fadeOut(1000, function(){
			$(".revealedContent").fadeIn(1000);

			if(window.innerWidth >=768){
				$("nav").addClass("revealNav")
				$("nav").fadeIn(1000);
			} else {
				$("nav").css("display", "none")
			}
		});

		$(".heroImg2").animate({
			"opacity":"1"
		}, 2000)
	})

	$(".blobNavElement").on("click", function(event){
		event.preventDefault();
		$(".revealedContent").fadeOut(1000, function(){
			$(".feature1").fadeIn(1000);
		});

		if(window.innerWidth >=768){
			$("nav").fadeOut(1000);
		}

		$(".heroImg2").animate({
			"opacity":"0"
		}, 2000)
	})

	

	// Jack if you could link the blob in the nav to go back to the opening screen that would be great

	$(".navElement1").on("click", function(event){
		event.preventDefault();

		$([document.documentElement, document.body]).animate({
			scrollTop: $("#viewAllProjects").offset().top
		}, 1000);
	})

	$(".navElement2").on("click", function(event){
		event.preventDefault();

		$([document.documentElement, document.body]).animate({
			scrollTop: $("#aboutTheShow").offset().top
		}, 1000);
	})

	$(".viewAllProjectsBelow").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#viewAllProjects").offset().top
		}, 1000);
	});

	$(".viewAllProjectsSorted").click(function() {
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

	var names = ['salmanAhmed', 'jasmineBussie', 'katelynChristiansen', 'jasmineFredrick', 'jackGilbert', 'charlotteGreen', 'hallieGroeschel', 'anikaGuggisberg', 'eleniHein', 'christianHeo', 'indigoHoffman', 'angelaHolton', 'ashleyJandro', 'danielleJohnson', 'jamieKerwin','ceciliaKnudsen', 'alyssaKoepke', 'kaliKoester', 'tjorvenLandwehr', 'emmaLarson', 'beauLuzar', 'seringaMcHugh', 'harlanMckay', 'carlyMeyer', 'nadiyahMC', 'joeMischke', 'sarahMorris', 'tylerMullin', 'lilyNess', 'laurenPechman', 'samPeskie', 'kaylaPurney', 'natalieReber', 'isabelRoberts', 'jadynSchoppers', 'destinySwen', 'vaughnVande', 'alexWoo'];
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
		// lazyLoad: 'ondemand',
		// // slidesToShow:1,
		// // slidesToScroll:1,
	});



	// ======================================== POPUP ======================
	


	$('.salmanAhmed, .Bday').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".salmanAhmedPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.jasmineBussie, .BlumeBar').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".jasmineBussiePop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.katelynChristiansen, .DoThat').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".katelynChristiansenPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	
	$('.jasmineFredrick, .Fake').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".jasmineFredrickPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.hallieGroeschel, .Muud').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".hallieGroeschelPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.anikaGuggisberg, .Somind').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".anikaGuggisbergPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.eleniHein, .Neuros').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".eleniHeinPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.christianHeo, .Listenupp').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".christianHeoPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.indigoHoffman, .Lumi').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".indigoHoffmanPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
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
	$('.ashleyJandro, .Ruted').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".ashleyJandroPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.ceciliaKnudsen, .MyVCP').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".ceciliaKnudsenPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.seringaMcHugh, .AdoptYourself').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".seringaMcHughPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.harlanMckay, .IntroSpec').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".harlanMcKayPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.alyssaKoepke, .BeaverCreek').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".alyssaKoepkePop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.kaliKoester, .Ritual').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".kaliKoesterPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.emmaLarson, .Openit').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".emmaLarsonPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.beauLuzar, .Blush').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".beauLuzarPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.tylerMullin, .Rngr').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".tylerMullinPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.lilyNess, .ForagedBlends').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".lilyNessPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.laurenPechman, .Resalve').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".laurenPechmanPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.samPeskie, .IslaAndMio').click(function() {
		$("body").addClass("stopScroll")
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
	$('.kaylaPurney, .Combi').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".kaylaPurneyPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.natalieReber, .Silphi').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".natalieReberPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.isabelRoberts, .Hatch').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".isabelRobertsPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.jadynSchoppers, .EcoArt').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".jadynSchoppersPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.destinySwen, .JustATip').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".destinySwenPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.alexWoo, .Tranquillo').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".alexWooPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.nadiyahMC, .Journei').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".nadiyahMCPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.sarahMorris, .Healink').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".sarahMorrisPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})


	$('.tjorvenLandwehr, .Pesto').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".tjorvenLandwehrPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	

	$('.jamieKerwin, .Solace').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".jamieKerwinPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	$('.charlotteGreen, .Courage').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".charlotteGreenPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})
	
	$('.jackGilbert, .Skildr').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".jackGilbertPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})

	$('.danielleJohnson').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".danielleJohnsonPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})

	$('.carlyMeyer').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".carlyMeyerPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})


	$('.Unbubl').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".unbublPop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})

	$('.joeMischke').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".joeMischkePop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})

	$('.vaughnVande').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".vaughnVandePop").fadeIn(800, function(){
					$(".loader").delay(2000).fadeOut(400, function(){
						$(".loaderBackground").fadeOut(400)
					 })
				})
			})
		})
	})

	$('.FederationAudio').click(function() {
		$("body").addClass("stopScroll")
		$(".loaderBackground").fadeIn(400, function(){
			$(".loader").delay(100).fadeIn(400, function(){
				$(".federationAudioPop").fadeIn(800, function(){
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