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



$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menu__bottom").stop().slideToggle();
	});

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});

});


$(function(){
    $(".accordion__itemTitle").on("click",function(){
        
        var accordionItem = $(this).closest(".accordion__item");
        var accordionItemSiblings = $(accordionItem).siblings(".accordion__item");
        var accordionCheckboxWrap = $(accordionItemSiblings).children(".accordion__checkboxWrap");
        
        $(accordionCheckboxWrap).hide();
        
        $(this).siblings(".accordion__checkboxWrap").slideToggle();
    
    });
});
