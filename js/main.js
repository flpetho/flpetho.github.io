$(document).ready(function(){

	var randomNumber = Math.floor((Math.random() * 4) + 1);
	$('body.bg-image').css({'background' : 'url(img/hp/'+randomNumber+'.jpg)', 
							'background-repeat' : 'no-repeat', 
							'background-position' : 'center center', 
							'background-size' : 'cover'
						});



	$('#galleryContainer').masonry({
	  // columnWidth: 330,
	  columnWidth: ".grid-sizer",
	  itemSelector: ".item",
	  gutter: 5,
	  transitionDuration: 0,
	  isFitWidth: true,
	});



	var $container = $('#galleryContainer').masonry();
	// layout Masonry again after all images have loaded
	var loaded = false;
	var interval = setInterval(function() {
	  $container.masonry();
		if (loaded) {
			clearInterval(interval);
		  $container.masonry();
		}
	}, 100);
	$container.imagesLoaded( function() {
	  loaded = true;
	});



});


$(window).load(function() {
	$('footer').show();
});


$(function () {
	var els = $('.item a');
	if (els.fluidbox) {
		els.fluidbox();
	}
});







// var bgImage = ['img/hp/1.jpg', 'img/hp/2.jpg', 'img/hp/3.jpg', 'img/hp/4.jpg',];





	


