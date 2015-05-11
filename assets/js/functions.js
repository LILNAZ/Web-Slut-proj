//skapar en funktion som kollar när man scrollar
$(window).scroll(function(){
	//skapar en variabel som kollar hur långt ner man har scrollat från toppen
	var wScroll = $(this).scrollTop();

	//tar css classen .logo och lägger till en margin top
	$('.logo').css({
		'margin-top' : '' + wScroll /2 +'px'
	})
	//tar css classen .for-gram och lägger till en margin top
	$('.fore-gram').css({
		'margin-top' : '' + wScroll*1.5 +'px'
	});
	//tar css classen .for-gram och lägger till en rotation
	$('.fore-gram').css({
		'transform' : 'rotate('+ wScroll /25 +'deg)'
	});
});


$( ".more" ).click(function() {
	$('.wrap-dropdown').css({
		'display' : 'block'
	})
	$('.more').css({
		'display' : 'none'
	})
});
