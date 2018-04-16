
/*------------------SELECT--------------------*/

$(function(){
    $("#sort").niceSelect();
});

/*----------------DROPDOWN MENU---------------*/

$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menu__bottom").stop().slideToggle();
	});
    

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});
      
    
    $(".toggleMobMenu").on("click",function(){
		$(".menu__top").stop().slideToggle();
	});
    

	$(".toggleMobMenu").on("click",function(){
		$(".header_bottom_basket").stop().slideToggle();
	});
    

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});
});

/*-------------------ACCORDION------------------*/

$(function(){
    $(".accordion__itemTitle").on("click",function(){
        
        var accordionItem = $(this).closest(".accordion__item");
        var accordionItemSiblings = $(accordionItem).siblings(".accordion__item");
        var accordionCheckboxWrap = $(accordionItemSiblings).children(".accordion__checkboxWrap");
        
        $(accordionCheckboxWrap).hide();
        
        $(this).siblings(".accordion__checkboxWrap").slideToggle();
    
    });
});

/*------------------MODAL WINDOW------------------*/

$(function(){
    $(".openModalBtn").on("click",function(){
        $(".modal").addClass("active");
    });
        
    $(".closeModalBtn").on("click",function(){
        $(".modal").removeClass("active");
        
    });
});
