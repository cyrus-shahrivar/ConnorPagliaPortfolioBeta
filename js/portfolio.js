$(document).ready(function () {
    $(window).scroll(function () {
        var $header = $('header');
        var $mobileLogo = $('.header__nav-bar--mobile .header__logo');
        if ($(this).scrollTop() > 50) {
            $header.addClass('header-transition');
            $mobileLogo.addClass('mobile-toggle-transition');
        } else {
            $header.removeClass('header-transition');
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

    $.ajax({
        dataType: 'json',
        url: '/Portfolio/data/' + clientName + '.json'
      }).done(function(data) {
        var compiledHtml = compiledTemplate(data[clientName]);
        var $body = $('body');
        $body.append(compiledHtml);

        // Mobile Header Animations
        var $mobileNav = $('.header__nav-bar--mobile');
        var $mobileBackgroundMask = $('.header__background-mask');
        var $mobileNavListItems = $('.header__nav-bar--mobile li');
        var $mobileHeaderOpenCloseButtonOrHomepageLinks = $('.wrapper-menu, .homepage .header__nav-bar--mobile ul li a');

        $mobileHeaderOpenCloseButtonOrHomepageLinks.on('click', function() {
            $mobileHeaderOpenCloseButtonOrHomepageLinks.toggleClass('open');

            if ($mobileHeaderOpenCloseButtonOrHomepageLinks.hasClass('open')) {
                $mobileNav.addClass('opening');
                // slide open header
                $mobileNav.slideDown('slow', function() {
                    // fade in image
                    $mobileBackgroundMask.css('opacity', 0);
                    // slide down nav items
                    $mobileNavListItems.css('opacity', 1);
                    $mobileNavListItems.on('transitionrun', function() {
                        $mobileNav.removeClass('opening');
                        $mobileNavListItems.off('transitionend');
                    });
                    $mobileBackgroundMask.off('transitionend')
                });
            } else {
                $mobileNav.addClass('closing');
                // slide up nav items
                $mobileNavListItems.css('opacity', 0);
                $mobileBackgroundMask.on('transitionend', function() {
                    // slide close header
                    $mobileNav.slideUp('slow', function() {
                        // do something?
                    });
                    $mobileBackgroundMask.off('transitionend');
                });

                $mobileNavListItems.on('transitionend', function() {
                    $mobileNav.removeClass('closing');
                    // fade out image
                    $mobileBackgroundMask.css('opacity', 1);
                    $mobileNavListItems.off('transitionend');
                });
            }
        });

        $mobileNav.hide();

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768) {
            $('video').each(function (index, item) {
                $(item).prop('loop', false)
                    .prop('autoplay', false)
                    .prop('controls', true);
            });
        }
    });
})
