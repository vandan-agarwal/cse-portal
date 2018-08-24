 $(".mobile-menu> li >a").click(function(){
        if ($(window).width() <= 991) {
            $('.mobile-menu> li').removeClass('on');
            $('.mobile-menu> li> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') === true) { 
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
    });