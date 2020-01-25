$(document).ready(function () {
	$('.slider ,.carousel-item').height($(window).height()- ($('header').innerHeight()+$('nav').innerHeight()));
	$('.ourfeatured ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');


		if($(this).data('class')=='all')
		{
			$('.images .row .col-md ').show();
		}
		else
		{
			$('.images .row .col-md ').hide();
			$($(this).data('class')).show();
		}

	});
	$(window).scroll(function(){

 			if($(window).scrollTop() >= 600)
 			{
 					$('.btn-scroll').show(1000);
 			}
 			else
   				$('.btn-scroll').hide(1000);

 	});
 	$('.btn-scroll').click(function(){
 		$('html, body').animate({scrollTop:0},1000);

 	});

});
$(window).on('load', function() {

	$('.lds-hourglass').fadeOut(3000,function(){

		$('.loading').slideUp(2000,function() {

			$('.loading').remove();
		});
		$('body').css('overflow','auto');
	});


 });
