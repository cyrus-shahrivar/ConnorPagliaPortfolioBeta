// retina js
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define(b):a.retinajs=b()})(this,function(){'use strict';function a(a){return Array.prototype.slice.call(a)}function b(a){var b=parseInt(a,10);return k<b?k:b}function c(a){return a.hasAttribute('data-no-resize')||(0===a.offsetWidth&&0===a.offsetHeight?(a.setAttribute('width',a.naturalWidth),a.setAttribute('height',a.naturalHeight)):(a.setAttribute('width',a.offsetWidth),a.setAttribute('height',a.offsetHeight))),a}function d(a,b){var d=a.nodeName.toLowerCase(),e=document.createElement('img');e.addEventListener('load',function(){'img'===d?c(a).setAttribute('src',b):a.style.backgroundImage='url('+b+')'}),e.setAttribute('src',b),a.setAttribute(o,!0)}function e(a,c){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,f=b(e);if(c&&1<f){var g=c.replace(l,'@'+f+'x$1');d(a,g)}}function f(a,b,c){1<k&&d(a,c)}function g(b){return b?'function'==typeof b.forEach?b:a(b):'undefined'==typeof document?[]:a(document.querySelectorAll(n))}function h(a){return a.style.backgroundImage.replace(m,'$2')}function i(a){g(a).forEach(function(a){if(!a.getAttribute(o)){var b='img'===a.nodeName.toLowerCase(),c=b?a.getAttribute('src'):h(a),d=a.getAttribute('data-rjs'),g=!isNaN(parseInt(d,10));if(null===d)return;g?e(a,c,d):f(a,c,d)}})}var j='undefined'!=typeof window,k=Math.round(j?window.devicePixelRatio||1:1),l=/(\.[A-z]{3,4}\/?(\?.*)?)$/,m=/url\(('|")?([^)'"]+)('|")?\)/i,n='[data-rjs]',o='data-rjs-processed';return j&&(window.addEventListener('load',function(){i()}),window.retinajs=i),i});
//# sourceMappingURL=retina.min.js.map

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