$(function(){

	$(document).click(function(){
		if( $(document).scrollLeft() == 0 ){
			$("html,body").animate({scrollLeft: $('.right-slider-menu').width()}, 'fast');
			$("html,body").css('overflow-y','hidden');
		}else{
			$("html,body").animate({scrollLeft: 0}, 'fast');
			$("html,body").css('overflow-y','auto');
		}

	});














































































});













