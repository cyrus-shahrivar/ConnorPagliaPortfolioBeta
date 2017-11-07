$(document).ready(function() {
    $('.header__open-button').click(function() {
        $('.header__nav-bar--mobile').addClass('opening');
        // slide open header
        $('.header__nav-bar--mobile').slideDown('slow', function () {
            // fade in image
            $('.header__background-mask').css('opacity', 0);
            // slide down nav items
            $('.header__nav-bar--mobile li').css('opacity', 1);

        });

        $('.header__nav-bar--mobile').removeClass('opening');
    });

    $('.header__close-button').click(function() {
        $('.header__nav-bar--mobile').addClass('closing');
        // slide up nav items
        $('.header__nav-bar--mobile li').css('opacity', 0);
        // fade out image
        $('.header__background-mask').css('opacity', 1);
        // slide close header
        $('.header__background-mask').on('transitionend', function (params) {
            $('.header__nav-bar--mobile').slideUp('slow', function () {
                // do something?
            });
            $('.header__background-mask').off('transitionend');
        });

        $('.header__nav-bar--mobile').removeClass('closing');
    });

    $('.header__nav-bar--mobile').hide();
});