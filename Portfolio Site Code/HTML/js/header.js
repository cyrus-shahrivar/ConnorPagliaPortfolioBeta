$(document).ready(function() {
    var $mobileHeaderOpenButton = $('.header__open-button');
    var $mobileHeaderCloseButtonOrListItem = $('.header__close-button, .header__nav-bar--mobile ul li a');
    var $mobileNav = $('.header__nav-bar--mobile');
    var $mobileBackgroundMask = $('.header__background-mask');
    var $mobileNavListItems = $('.header__nav-bar--mobile li');

    $mobileHeaderOpenButton.click(function() {
        $mobileNav.addClass('opening');
        // slide open header
        $mobileNav.slideDown('slow', function () {
            // fade in image
            $mobileBackgroundMask.css('opacity', 0);
            // slide down nav items
            $mobileNavListItems.css('opacity', 1);
            $mobileNavListItems.on('transitionrun', function () {
                $mobileNav.removeClass('opening');
                $mobileNavListItems.off('transitionend');
            });
            $mobileBackgroundMask.off('transitionend')
        });
    });

    $mobileHeaderCloseButtonOrListItem.click(function(e) {
        $mobileNav.addClass('closing');
        // slide up nav items
        $mobileNavListItems.css('opacity', 0);
        $mobileBackgroundMask.on('transitionend', function () {
            // slide close header
            $mobileNav.slideUp('slow', function () {
                // do something?
            });
            $mobileBackgroundMask.off('transitionend');
        });

        $mobileNavListItems.on('transitionend', function () {
            $mobileNav.removeClass('closing');
            // fade out image
            $mobileBackgroundMask.css('opacity', 1);
            $mobileNavListItems.off('transitionend');
        });

    });

    $mobileNav.hide();
});
