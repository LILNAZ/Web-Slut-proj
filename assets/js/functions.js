$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'margin-top' : '' + wScroll /2 +'px'
	})
	$('.fore-gram').css({
		'margin-top' : '' + wScroll*1.5 +'px'
	});
	$('.fore-gram').css({
		'transform' : 'rotate('+ wScroll /25 +'deg)'
	});
});