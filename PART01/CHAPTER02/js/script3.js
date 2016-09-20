////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
	$('.cssAnim1').hover(function(){
		$(this).addClass('rotateX');
	},function(){
		$(this).removeClass('rotateX');
	});

	$('.cssAnim2').hover(function(){
		$(this).addClass('rotateY');
	},function(){
		$(this).removeClass('rotateY');
	});
});
