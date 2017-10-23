$(document).ready(function() {
    $('.header__open-button').click(function() {
        $('.header__nav-bar--mobile').show();
    });

    $('.header__close-button').click(function() {
        $('.header__nav-bar--mobile').hide();
    });
});