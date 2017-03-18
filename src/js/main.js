jQuery(function($) {
	// #touch-menu
	var touch = $('#touch-menu');
	var menu = $('.nav');
	$(touch).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid> 768 && menu.is(':hidden')){
			menu.removeAttr('style');
		}
	});
	

	// //#main-slider
	// $(function(){
	// 	$('#main-slider.carousel').carousel({
	// 		interval: 8000
	// 	});
	// });
	
	
	// //Initiat WOW JS
	// new WOW().init();
	
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 100) {
	// 		$('.scrollup').fadeIn();
	// 		} else {
	// 			$('.scrollup').fadeOut();
	// 		}
	// 	});
	// 	$('.scrollup').click(function(){
	// 		$("html, body").animate({ scrollTop: 0 }, 1000);
	// 			return false;
	// 	});
	
	// // portfolio filter
	// $(window).load(function(){'use strict';
	// 	var $portfolio_selectors = $('.portfolio-filter >li>a');
	// 	var $portfolio = $('.portfolio-items');
	// 	$portfolio.isotope({
	// 		itemSelector : '.portfolio-item',
	// 		layoutMode : 'fitRows'
	// 	});
		
	// 	$portfolio_selectors.on('click', function(){
	// 		$portfolio_selectors.removeClass('active');
	// 		$(this).addClass('active');
	// 		var selector = $(this).attr('data-filter');
	// 		$portfolio.isotope({ filter: selector });
	// 		return false;
	// 	});
	// });
	
	//Pretty Photo
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false
	// });	
    
 //    //Google Map
    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(50.317794,30.2977455);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
 
});
