const EMAIL_ADDRESS = "bordonnet@hotmail.com";

;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var contactMe = function name(params) {
		$('.js-contactMe').on('click', function(event){
			const animationName = 'titileoAnimation';

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('#fh5co-about').offset().top
			}, 500, 'easeInOutExpo');

			$('.js-contactInfo')
			.addClass(animationName)
			.delay(3000)
			.queue(function () {
				$(this).removeClass(animationName).clearQueue();
			});
			
			return false;
		});
	};

	var mailMe = function name(params) {
		$('.js-mailMe').on('click', function(event){
			const LINE_BREAK_UNICODE = "%0D%0A";
			const SPACE_UNICODE = "%20";

			event.preventDefault();

			let body = $("#name").val() + " - " + $("#email").val() + LINE_BREAK_UNICODE + LINE_BREAK_UNICODE +
			$("#message").val().replaceAll("\n", LINE_BREAK_UNICODE).replaceAll(" ", SPACE_UNICODE);
			
			window.open('mailto:'+ EMAIL_ADDRESS +'?subject=' + $('#name').val()
			 + '&subject= '+ $('#subject').val()
			 + '&body='+ body);
			
			return false;
		});
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var copyToClipboard = function name(params) {
		$('.js-copyToClipboard').on('click', function(event){
			
			event.preventDefault();

			navigator.clipboard.writeText(EMAIL_ADDRESS);
			
			return false;
		});
	}

	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
		copyToClipboard();
		contactMe();
		mailMe();
	});


}());
