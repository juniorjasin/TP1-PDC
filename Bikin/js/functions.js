(function ($) {
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
		    $('.navbar-nav li').removeClass('active');
		    $(this).closest('li').addClass('active');
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
						
	});	
	
	$('body').flipLightBox({
			
		lightbox_text_status: 0,
		lightbox_navigation_status: 0
    
	})
	
	$('.parallax-window').parallax({imageSrc: 'img/3.png'});

	$('#countdown_dashboard').countDown({

		targetOffset: {
			'day':      0,
			'month':    0,
			'year':     1,
			'hour':     0,
			'min':      0,
			'sec':      0
		},
	});
	
	wow = new WOW({}).init();


})(jQuery);

$(document).ready(function () {
	//your code here

	function updateTextInput(val) {
		document.getElementById('ichancesarg').value=val + '%'; 
	}
	
	function updateTextInput2(val) {
		document.getElementById('ipuntajesanpaoli').value=val; 
	}
	
  });

