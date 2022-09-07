jQuery('document').ready(function($){
	var menuBtn = $('.menu-icon'),
		menu = $('.navigation ul');

	menuBtn.click(function(){

		if(menu.hasClass('show')){ /*si tiene clase show la elimina*/
			menu.removeClass('show');
		}else{
			menu.addClass('show');
		}

	});
});