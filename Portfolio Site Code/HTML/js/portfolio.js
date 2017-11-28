//*smooth scroll*

/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},s=function(e){return e?a(e)+e.offsetTop:0},l=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(a,d){var m,h,g,p,v,b,y,S={};S.cancelScroll=function(){cancelAnimationFrame(y)},S.animateScroll=function(t,a,r){var f=o(m||n,r||{}),d="[object Number]"===Object.prototype.toString.call(t),h=d||!t.tagName?null:t;if(d||h){var g=e.pageYOffset;f.header&&!p&&(p=document.querySelector(f.header)),v||(v=s(p));var b,y,E,I=d?t:c(h,v,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),O=I-g,A=u(),C=0,w=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(g<o&&e.innerHeight+r)>=A)return S.cancelScroll(),l(t,o,d),f.after(t,a),b=null,!0},Q=function(t){b||(b=t),C+=t-b,y=C/parseInt(f.speed,10),y=y>1?1:y,E=g+O*i(f,y),e.scrollTo(0,Math.floor(E)),w(E,I)||(e.requestAnimationFrame(Q),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),S.cancelScroll(),e.requestAnimationFrame(Q)}};var E=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),S.animateScroll(h,g),h=null,g=null)},I=function(t){if(!f()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(a))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=r(decodeURIComponent(g.hash))}catch(e){n=r(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?E():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),E()))}},O=function(e){b||(b=setTimeout((function(){b=null,v=s(p)}),66))};return S.destroy=function(){m&&(document.removeEventListener("click",I,!1),e.removeEventListener("resize",O,!1),S.cancelScroll(),m=null,h=null,g=null,p=null,v=null,b=null,y=null)},S.init=function(a){t&&(S.destroy(),m=o(n,a||{}),p=m.header?document.querySelector(m.header):null,v=s(p),document.addEventListener("click",I,!1),e.addEventListener("hashchange",E,!1),p&&e.addEventListener("resize",O,!1))},S.init(d),S}}));

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
        $body.html(compiledHtml);

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