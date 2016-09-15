$(document).ready(function() {
    
	/* Next/prev and primary nav btn click handlers */

	$('a.parallax').click(function(e){
		var link = $(this);
    	$('html, body').animate({
    		scrollTop:$(link.attr('href')).offset().top
    	}, 500, function() {

		});
    	return false;
    });
    
});
