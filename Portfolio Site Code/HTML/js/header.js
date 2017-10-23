$(document).ready(function() {
    $('.header__open-button').click(function() {
        $('.header__nav-bar--mobile').slideDown();
    });

    $('.header__close-button').click(function() {
        $('.header__nav-bar--mobile').slideUp();
    });

    $('.header__nav-bar--mobile').hide();
});