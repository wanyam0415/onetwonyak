$(function(){
    var menu = $('.menu a');
    var content = $('.notice, .form');
    var popupimg = $('main #etc .form span img');

    menu.click(function(e){
        e.preventDefault();
        idx = $(this).index();
        var prevIdx = idx - 1;
        var nextIdx = idx + 1;

        menu.removeClass('on');
        $(this).addClass('on');
        
        content.eq(idx).removeClass('on');
        content.eq(nextIdx).addClass('on');

        content.eq(idx).addClass('on');
        content.eq(prevIdx).removeClass('on');

    });


    popupimg.click(function(a){
        a.preventDefault();
        
        $('.popup').fadeIn(200);
    });
    $('.popup').click(function(){$('.popup').fadeOut(200);})

});