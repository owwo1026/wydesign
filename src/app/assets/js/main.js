import $ from 'jquery'

//----------- [START] global JS function
$(document).ready(function () {
    /* ---------------------------------------------- /*
    * Header Sticky
    /* ---------------------------------------------- */
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 100) {
            // $('.headerTop').fadeOut();
            $('.header-sticky').removeClass('not-sticky animate__fadeInDown');
        }
        if ($(window).scrollTop() >= 105) {
            // $('.header-sticky').removeClass('not-sticky animate__fadeInDown');
            $('.header .headerTop').css("background-color","rgb(145, 144, 132)");
            $('.header-sticky').addClass('header-fixed-top');
        }
        else {
            $('.header-sticky').removeClass('header-fixed-top');
            $('.header-sticky').addClass('not-sticky');
            $('.header .headerTop').css("background-color","rgba(113, 112, 97, 0.6)");
        }
    });

    /* ---------------------------------------------- /*
    * Scroll top
    /* ---------------------------------------------- */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }
    });
    $(".back_to_top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    /* ---------------------------------------------- /*
    * All Page Title Animate
    /* ---------------------------------------------- */
    // $('.title').addClass('animate__animated animate__slideInLeft');

})