$(document).ready(function () {
    $(window).scroll(function () {
        var $header = $('header');
        var $openButton = $('.header__open-button');
        var $closeButton = $('.header__close-button');
        var $mobileLogo = $('.header__nav-bar--mobile .header__logo');
        if ($(this).scrollTop() > 50) {
            $header.addClass('header-transition');
            $openButton.addClass('mobile-toggle-transition');
            $closeButton.addClass('mobile-toggle-transition');
            $mobileLogo.addClass('mobile-toggle-transition');
        } else {
            $header.removeClass('header-transition');
            $openButton.removeClass('mobile-toggle-transition');
            $closeButton.removeClass('mobile-toggle-transition');
            $mobileLogo.removeClass('mobile-toggle-transition');
        }
    });

    Handlebars.registerHelper('equals', function(item1, item2, options) {
        if(item1 === item2) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    // Partial Registration
    var headerPartial = $('#header').html();
    Handlebars.registerPartial('header', headerPartial);
    var heroPartial = $('#hero').html();
    Handlebars.registerPartial('hero', heroPartial);
    var contentPartial = $('#content').html();
    Handlebars.registerPartial('content', contentPartial);
    var footerPartial = $('#footer').html();
    Handlebars.registerPartial('footer', footerPartial);

    // Compile Main Template
    var mainTemplate = $("#main").html();
    var compiledTemplate = Handlebars.compile(mainTemplate);

    // Get Correct Data
    var clientName = window.location.search.split('name=')[1];

    $.getJSON('data.json').done(function(data) {
        var compiledHtml = compiledTemplate(data[clientName]);
        var $body = $('body');
        $body.append(compiledHtml);

        // Mobile Header Animations
        var $mobileHeaderOpenButton = $('.header__open-button');
        var $mobileHeaderCloseButton = $('.header__close-button');
        var $mobileNav = $('.header__nav-bar--mobile');
        var $mobileBackgroundMask = $('.header__background-mask');
        var $mobileNavListItems = $('.header__nav-bar--mobile li');

        $mobileHeaderOpenButton.click(function() {
            $mobileNav.addClass('opening');
            // slide open header
            $mobileNav.slideDown('slow', function () {
                // fade in image
                $mobileBackgroundMask.css('opacity', 0);
                $mobileBackgroundMask.on('transitionend', function () {
                    // slide down nav items
                    $mobileNavListItems.css('opacity', 1);
                    $mobileNavListItems.on('transitionend', function () {
                        $mobileNav.removeClass('opening');
                        $mobileNavListItems.off('transitionend');
                    });
                    $mobileBackgroundMask.off('transitionend')
                })
            });
        });

        $mobileHeaderCloseButton.click(function() {
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
})