(function($){
	$(function(){
		$('.btn-ripple').on('click', function(e){
			var $div = $('<div class="ripple-effect"></div>');
			
			var btnPos = $(this).offset();
			var mouseX = e.pageX - btnPos.left;
			var mouseY = e.pageY - btnPos.top;
			
			var user_animation_duration = $(this).data('animation-duration');
			var user_ripple_color = $(this).data('ripple-color');
			

			if(user_animation_duration == undefined){
				user_animation_duration = 1000;
			}

			if(user_ripple_color != undefined){
				$div.css('background', user_ripple_color);
			}

			$div.css('animation-duration', user_animation_duration+'ms');

			$div.css({
				top: mouseY - 25, //Look in the CSS. 25 is half of .ripple-effects width/height 
				left: mouseX - 25,
			});
			
			$(this).append($div);
			
			window.setTimeout(function(){
		        $div.remove();
		  }, user_animation_duration);
		});
	});
})(jQuery);

