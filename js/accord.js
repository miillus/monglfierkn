$('#accordion-js').find('h2').click(function(){
	    $(this).next().stop().slideToggle();
	}).next().stop().hide();
