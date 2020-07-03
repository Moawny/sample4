$(function () {

    var winH = $(window).innerHeight(),

        uppH = $('.upper').innerHeight(),

        navH = $('nav.navbar').innerHeight();

        slidH = $('.slider, .carousel-inner');

        // rbnH = $(".choose .row .col-sm-6").eq(1).innerHeight();

    // $(".choose .row .col-sm-6 img").innerHeight(rbnH);

    slidH.innerHeight(winH - (uppH + navH));

    $(".fetured ul li").click(function () {

        $(this).addClass("active").siblings().removeClass("active")

        if ($(this).data('class') === 'all') {

            $('.fetured .shuffle .row .col-md').css('opacity', 1);

        } else {

            $('.fetured .shuffle .row .col-md').css('opacity', '.05');

            $($(this).data('class')).parent().css('opacity', 1);

        }
    });

    $('#to-top').on('click', function () {

        $('html,body').animate({
            scrollTop:0
        },500)

    });

    $(window).load(function() {
        $('.loading > *').fadeOut(2000, function () {
            $(this).parent().fadeOut(500, function () {
                $(this).remove();
                $('.counter').counterUp({
                    time: 1000,
                    offset: 100
                });
            });
        });
    });

});

window.onload = function () {

    var top = document.getElementById('to-top');

    if (window.pageYOffset > 800) {
    
        top.style.display = 'block'
    
    } else {
    
        top.style.display = 'none'
    
    }
}

window.onscroll = function () {
    console.log(document.querySelector(".statics").pageYOffset);
    var top = document.getElementById('to-top');
    
    if (window.pageYOffset > 800) {
    
        top.style.display = 'block'
    
    } else {
    
        top.style.display = 'none'
    
    }
}

