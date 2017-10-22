$(document).ready(function() {

    "use strict";

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({
            height: wh
        });
    }

    introHeight();
    $(window).bind('resize', function() {
        //Update slider height on resize
        introHeight();
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#contactform').submit(function() {
        var action = $(this).attr('action');
        $("#result").slideUp(300, function() {
            $('#result').hide();
            $('#submit')
                .attr('disabled', 'disabled');
            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val(),
                },
                function(data) {
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });

        return false;

    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* click switched with touch for mobile  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $('.gallery-inner img').bind('touchstart', function() {
        $(this).addClass('.gallery-inner  .captionWrapper');
    });

    $('.gallery-inner  img').bind('touchend', function() {
        $(this).removeClass('.gallery-inner  .captionWrapper');
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Parallax init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(function() {
            $('.captionWrapper.valign').css({
                top: '120px'
            });

            $('.parallaxLetter').css({
                display: 'none'
            });
        });


    } else {
        $(window).stellar({
            responsive: true,
            horizontalOffset: 0,
            horizontalScrolling: false
        });
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* fitvids */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('body').fitVids();


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var $container = $('.gallery').imagesLoaded(function() {
        $container.isotope({
            // options
        });
    });


    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    $container.isotope({
        filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
    });


    //    masonry 3 columns
    $(function() {
        var $container2 = $('.blogPostsWrapper');
        // initialize Masonry after all images have loaded
        $container2.imagesLoaded(function() {
            $container2.isotope({
                itemSelector: '.blogPost',
                masonry: {
                    columnWidth: '.grid-sizer-blog-3'
                }
            });
        });
    });


    //    masonry 2 columns
    $(function() {
        var $container3 = $('.blogPostsWrapper2');
        // initialize Masonry after all images have loaded
        $container3.imagesLoaded(function() {
            $container3.isotope({
                itemSelector: '.blogPost2',
                masonry: {
                    columnWidth: '.grid-sizer-blog-2'
                }
            });
        });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smoothscroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        offset: 50, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        before: function() {
            // console.log('in smooth scroll before callback');
        }, // Callback to run before scroll
        after: function() {
            // console.log('in smooth scroll after callback');
        } // Callback to run after scroll
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* scrollreveal */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // some code..
    } else {
        window.scrollReveal = new scrollReveal();
    }


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* owl-carousels */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("#owl-team").owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ]
    });



    $("#owl-clients").owlCarousel({
        items: 3,
        navigation: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });


    $("#owl-testimonials").owlCarousel({
        singleItem: true,
        autoPlay: true
    });


    $("#owl-featured").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x featuredNav'></i>",
            "<i class='fa fa-angle-right fa-2x featuredNav'></i>"
        ]
    });

    $("#owl-blog-single").owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x blogNav'></i>",
            "<i class='fa fa-angle-right fa-2x blogNav'></i>"
        ]
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#text-separator-timers').waypoint(function() {
        "use strict";
        // first timer
        $('.timer1').countTo({

            from: 0, // the number you want to start
            to: 60, // the number you want to reach
            speed: 600,
            refreshInterval: 100

        });

        // second timer
        $('.timer2').countTo({

            from: 0, // the number you want to start
            to: 2, // the number you want to reach
            speed: 500,
            refreshInterval: 50

        });


        // third timer
        $('.timer3').countTo({

            from: 0, // the number you want to start
            to: 12, // the number you want to reach
            speed: 500,
            refreshInterval: 10
        });


        // fourth timer
        $('.timer4').countTo({

            from: 0, // the number you want to start
            to: 7, // the number you want to reach
            speed: 500,
            refreshInterval: 10,


        });


    }, {
        offset: 500
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // Portfolio Page Back Flow Scrolling
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    var searchObject = {};
    var searchQuery = window.location.search.split('&');
    searchQuery.forEach(function (queryParamPair) {
        var pair = queryParamPair;
        if (queryParamPair.includes('?')) {
            pair = pair.split('?')[1];
        }

        var key = pair.split('=')[0];
        var value = pair.split('=')[1];
        searchObject[key] = value;
    })

    var isReturnFromClientsPage = searchObject.portfolioPageReturn;
    if (isReturnFromClientsPage) {
        var scrollTo = searchObject.scrollTo;
        var elementToScrollTo = document.getElementById(scrollTo);
        var elementToScrollToScrollPosition = elementToScrollTo.offsetTop;

        if (scrollTo === 'portfolio') {
            $(window).scrollTop(elementToScrollToScrollPosition + 100);
        } else {
            $(window).scrollTop(elementToScrollToScrollPosition - 40);
        }



        console.log('element scroll', elementToScrollToScrollPosition)


    }
});
