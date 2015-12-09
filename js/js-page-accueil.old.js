$(document).ready(function() {
    //reload page on Resize
    $(window).resize(function(){location.reload();});

    //Définition de la hauteur de la premiere section
    function home(){
        var h = $( window ).height(); // Taille de la fenetre
        $('#section-accueil').css('height', (h)+'px');
        $('#section-vegas-slider').css('height', (h)+'px');
    }
    $(function () { home(); });

    //PLUGIN VEGAS
    $("#section-vegas-slider").vegas({
        timer:false,
        slides: [
            { src: "img/slider/lucien-servin-slide-1.jpg" },
            { src: "img/slider/lucien-servin-slide-2.jpg" },
            { src: "img/slider/lucien-servin-slide-3.jpg" },
            { src: "img/slider/lucien-servin-slide-4.jpg" }
        ]
    });

    //MENU
    $(window).scroll(function () {
        //var h = $( window ).height();
        if ($(this).scrollTop() > 30) {
            //$('#scrollup').fadeIn();
            $('#header-menu').addClass('header-fixed  animated bounceInDown').fadeIn(300);
            $('#header-menu').removeClass('bounceOutUp');

        } else {
            //$('#scrollup').fadeOut();
            $('#header-menu').addClass('bounceOutUp');
            $('#header-menu').removeClass('bounceInDown');
        }
    });

    //MENU ON OFF
    $( "#wrapper-btn-menu" ).click(function() {
        $( "#nav").addClass("nav-on animated bounceInLeft");
        $( "#nav").removeClass("bounceOutLeft");
    });
    $( "#btn-menu-section-accueil" ).click(function() {
        $( "#nav").addClass("nav-on animated bounceInLeft");
        $( "#nav").removeClass("bounceOutLeft");
    });
    $( "#wrapper-btn-close" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");

    });
    //BTN NAV MENU
    $( "#btn-nav-1" ).click(function() {
        $("html, body").animate({ scrollTop: 0}, 500);
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
    });
    $( "#btn-nav-2" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        $('#modal-service-6').show().addClass('animated bounceInLeft');
        $('#modal-service-6').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    $( "#btn-nav-3" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        $('#modal-service-7').show().addClass('animated bounceInLeft');
        $('#modal-service-7').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    $( "#btn-nav-4" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        var m = $('.wrapper-header-menu').outerHeight(true) ; // Hauteur du menu
        $('html, body').animate({
            scrollTop: $("#section-apropos").offset().top
        }, 500);
    });
    $( "#btn-nav-5" ).click(function() {
        //alert('Modal non actif');
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        $('#modal-service-9').show().addClass('animated bounceInLeft');
        $('#modal-service-9').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);

        function show_popup(){
            //MANSORY PAGE REFERENCES
            var $container = $('.wrapper-items-references');
            $container.imagesLoaded( function () {
                $container.masonry({
                    columnWidth: '.grid-item',
                    itemSelector: '.grid-item'
                });
            });
        };
        window.setTimeout( show_popup, 500 );

    });
    $( "#btn-nav-6" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        var m = $('.wrapper-header-menu').outerHeight(true) ; // Hauteur du menu
        $('html, body').animate({
            scrollTop: $("#section-bon-a-savoir").offset().top
        }, 500);
    });
    $( "#btn-nav-7" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        var m = $('.wrapper-header-menu').outerHeight(true) ; // Hauteur du menu
        $('html, body').animate({
            scrollTop: $("#section-partenaires").offset().top
        }, 500);
    });
    $( "#btn-nav-8" ).click(function() {
        $( "#nav").addClass("bounceOutLeft");
        $( "#nav").removeClass("bounceInLeft");
        $('#modal-service-8').show().addClass('animated bounceInLeft');
        $('#modal-service-8').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });


    //BTN SCROLL ACCUEIL
    $('#btn-scroll-down').click(function () {
        var h = $( window ).height();
        $("html, body").animate({ scrollTop: h }, 500);
        return false;
    });

    //SLICK SLIDESHOW
    $('#slider-professionnels-particuliers').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //fade: true,
        //cssEase: 'linear'
    });

    //Slick Button
    $('#btn-slick-1').click(function () {
        $('#slider-professionnels-particuliers').slick('slickGoTo',0);
        $('#btn-slick-1').addClass('active');
        $('#btn-slick-2').removeClass('active');
    });
    $('#btn-slick-2').click(function () {
        $('#slider-professionnels-particuliers').slick('slickGoTo',1);
        $('#btn-slick-2').addClass('active');
        $('#btn-slick-1').removeClass('active');
    });

    //Close MSG FLASH
    function closeflash(){
        $('#wrapper-msg-flash').addClass('animated bounceOutUp');
    };
    window.setTimeout( closeflash, 3000 );
    //Slick active slide detection
    $('#slider-professionnels-particuliers').on('afterChange', function(event, slick, direction){
        // Get the current slide
        var currentSlide = $('#slider-professionnels-particuliers').slick('slickCurrentSlide');
        var nb = currentSlide + 1;
        $('#btn-slick-1').removeClass('active');
        $('#btn-slick-2').removeClass('active');
        $('#btn-slick-'+nb).addClass('active');
    });

    //SLISER SLICK PARTENAIRES
    $('#slider-partenaires').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //BTN Lire la suite actu
    $('#btn-lire-la-suite-actu').click(function () {
        $(this).fadeOut(500);
        $('#excerpt-text-actu').fadeOut(500);
        $('#full-text-actu').addClass('full-on');
    });

    //Height section apropos
    //var apropos = $( '.zone-principale' ).height(); // Taille de la fenetre
    //alert( apropos );
    //$('#section-apropos').css('height', (apropos)+'px');

    //BTN close services modal
    $('#btn-close-service-description').click(function () {
        $('.section-modal-services').addClass(' animated bounceOutLeft');
        $(this).hide(500);
    });
    //BTN open services 1 modal
    $('#item-service-1').click(function () {
        $('#modal-service-1').show().addClass('animated bounceInLeft');
        $('#modal-service-1').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    //BTN open services 2 modal
    $('#item-service-2').click(function () {
        $('#modal-service-2').show().addClass('animated bounceInLeft');
        $('#modal-service-2').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    //BTN open services 3 modal
    $('#item-service-3').click(function () {
        $('#modal-service-3').show().addClass('animated bounceInLeft');
        $('#modal-service-3').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    //BTN open services 4 modal
    $('#item-service-4').click(function () {
        $('#modal-service-4').show().addClass('animated bounceInLeft');
        $('#modal-service-4').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    //BTN open services 5 modal
    $('#item-service-5').click(function () {
        $('#modal-service-5').show().addClass('animated bounceInLeft');
        $('#modal-service-5').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });

    //BTN open services 6 modal
    $('#btn-slick-1').click(function () {
        $('#modal-service-6').show().addClass('animated bounceInLeft');
        $('#modal-service-6').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });

    //BTN open services 7 modal
    $('#btn-slick-2').click(function () {
        $('#modal-service-7').show().addClass('animated bounceInLeft');
        $('#modal-service-7').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });

    //BTN open services 8 modal
    $('#btn-contact').click(function () {
        $('#modal-service-8').show().addClass('animated bounceInLeft');
        $('#modal-service-8').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    $('#btn-accueil-contact').click(function () {
        $('#modal-service-8').show().addClass('animated bounceInLeft');
        $('#modal-service-8').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    //BTN open services 9 modal
    $('#btn-devis').click(function () {
        $('#modal-service-9').show().addClass('animated bounceInLeft');
        $('#modal-service-9').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });
    $('#btn-accueil-devis').click(function () {
        $('#modal-service-9').show().addClass('animated bounceInLeft');
        $('#modal-service-9').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);
    });

    //BTN open services 10 modal
    $('#btn-mentions').click(function () {
        $('#modal-service-10').show().addClass('animated bounceInLeft');
        $('#modal-service-10').removeClass('bounceOutLeft');
        $('#btn-close-service-description').show(500);

    });



    //MediaQueries > 1024px
    if (window.matchMedia("(min-width: 1024px)").matches) {
        //Tailles des sections
        var h = $( window ).height(); // Taille de la fenetre
        $('#section-accueil-services').css('height', (h)+'px');

        //HOVER Items services
        $( "#item-service-1" ).hover(
            function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service-1.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }, function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }
        );
        $( "#item-service-2" ).hover(
            function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service-2.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }, function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }
        );
        $( "#item-service-3" ).hover(
            function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service-3.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }, function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }
        );
        $( "#item-service-4" ).hover(
            function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service-4.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }, function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service.jpg) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }
        );
        $( "#item-service-5" ).hover(
            function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service-5.jpg   ) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }, function() {
                $('#section-accueil-services').css('background', 'url(http://awesome.dev/lucien-servin/img/bg-service.jpg   ) no-repeat center top');
                $('#section-accueil-services').css('-webkit-background-size', 'cover');
                $('#section-accueil-services').css('-moz-background-size', 'cover');
                $('#section-accueil-services').css('-o-background-size', 'cover');
                $('#section-accueil-services').css('background-size', 'cover');
            }
        );
    }

});