$(document).ready(function(){
	$('.news-slider').slick({
		infinite: true,
  		variableWidth: true,
  		 responsive: [
	    {
	      breakpoint: 400,
	      settings: {
	        arrows: false,
	        centerMode: true,

	      }
	    }, 
	    {
	      breakpoint: 500,
	      settings: {
	        arrows: false,
	        centerMode: true,
	      }
	    }, 
	    ]
	});
});

$(document).ready(function(){
	$('.sale-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
  		variableWidth: true,
  		autoplay: true,
  		autoplaySpeed: 6000,
  		centerMode: true,
  		adaptiveHeight: true,
		
	});
});

