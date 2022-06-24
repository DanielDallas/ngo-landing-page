jQuery(function ($) {
    'use strict';
		
	// Mean Menu
		jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	// Button Hover JS
	$('.default-btn')
	.on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		animateOut: "slideOutDown",
		animateIn: "slideInDown",
		items: 1,
		navText: [
			"<i class='flaticon-left-chevron'></i>",
			"<i class='flaticon-right-chevron'></i>"
		]
	});
	
	// Home Slides Two
	$('.home-slides-four').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		animateOut: "fadeOut",
		items: 1,
		navText: [
			"<i class='flaticon-left-chevron'></i>",
			"<i class='flaticon-right-chevron'></i>"
		]
	});
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".main-banner-content span").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content h1").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content .banner-btn").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".main-banner-content span").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content h1").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content .banner-btn").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
	});

	$(".home-slides-four").on("translate.owl.carousel", function(){
		$(".main-banner-content span").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content h1").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-banner-content .banner-btn").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
	});
	$(".home-slides-four").on("translated.owl.carousel", function(){
		$(".main-banner-content span").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content h1").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-banner-content .banner-btn").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
	});

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Banner Image Slider
	$('.banner-image-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	
	// Sidebar Modal
	$(".burger-menu").on('click',  function() {
		$('.sidebar-modal').toggleClass('active');
	});
	$(".sidebar-modal-close-btn").on('click',  function() {
		$('.sidebar-modal').removeClass('active');
	});
	
	// Search Popup JS
	$('.close-btn').on('click',function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click',function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	// Tabs
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li a').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Event Slider
	$('.event-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});
	
	// Testimonials Slider
	$('.testimonials-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	
	// Testimonials Slider Two
	$('.testimonials-slider-two').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});
	
	// Feature Slider
	$('.feature-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	
	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

	//skill
	jQuery('.skill-bar').each(function() {
		jQuery(this).find('.progress-content, .progress-content-two, .progress-content-three').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});

	// Feedback Slider
	$('.feedback-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	// Instagram Slides
	$('.instagram-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		smartSpeed: 750,
		autoplay: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 6,
			},
			1200: {
				items: 5,
			}
		}
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animate__animated animate__shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animate__animated animate__shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});
	
	// Popup Image
	$('a[data-imagelightbox="popup-btn"]')
	.imageLightbox({
		activity: true,
		overlay: true,
		button: true,
		arrows: true
	});
	
	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});

	// Preloader
	jQuery(window).on('load', function () {
		$('#preloader').fadeOut()
	})

	// Buy Now Btn
	$('body').append("<a href='https://themeforest.net/checkout/from_item/25802564?license=regular&support=bundle_6month&_ga=2.234118621.2131256700.1648234835-1425290503.1590986634' target='_blank' class='buy-now-btn'>Buy Now</a>");

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('huruma_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('huruma_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('huruma_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();