$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menuCont").stop().slideToggle();
	});

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});

});

$(function(){
    $("#sort").niceSelect();
});