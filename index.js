// 'use strict'
$(document).ready(function () {

    let width = $(window).width();

    if(width <= 991) {
        $('#navigation-horizontal').show();
        $('#navigation-vertical').hide();
    }else{
        $('#navigation-vertical').show();
        $('#navigation-horizontal').hide();
    }

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        console.log(position);
        if(position > 300){
            $('#scroll-btn').fadeIn('slow');
        }else{
            $('#scroll-btn').fadeOut('slow');
        }
    });

    $('#scroll-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});
