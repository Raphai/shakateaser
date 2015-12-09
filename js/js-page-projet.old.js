$(document).ready(function() {
    //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
    function home(){
        var h = $( window ).outerHeight(true); // Taille de la fenetre
        $('#section-projet').css('min-height', (h)+'px');
        $('.wrapper-projet-full').css('height', (h)+'px');
        $('.wrapper-projet-half').css('height', (h/2)+'px');

         if( /iPhone/i.test(navigator.userAgent) ) {
            var hi = h + 20;
            $('#section-projet').css('min-height', (hi)+'px');
            //alert(hi);
        }
    }
    $(function () { home(); });

    //PRJET SLIDER SLICK
    $('.slick-carousel').slick({
        slidesToShow : 2,
        vertical:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow : 1,
                    vertical:false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    //centerMode:true,
                    slidesToShow : 1,
                    vertical:false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    //centerMode:true,
                    slidesToShow : 1,
                    vertical:false,
                    //adaptiveHeight: true

                }
            }
        ]
     });



    //MEDIAQUERIES
    if (window.matchMedia("(max-width: 767px)").matches) {
        //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
        function sizemax768(){
            var h = 360; // Taille de la fenetre
            var windowsh = $( window ).outerHeight(true); // Taille de la fenetre

            $('.wrapper-projet-full').css('min-height', (h*1.5)+'px');
            $('.wrapper-projet-half').css('min-height', (h)+'px');

            $('#wrapper-projet-description').css('min-height', (windowsh / 2)+'px');
            $('#wrapper-projet-carousel').css('height', (windowsh )+'px');
             $('.slick-slide').css('height', (windowsh)+'px');
        }
        $(function () { sizemax768(); });
    }
    //MEDIAQUERIES
    if (window.matchMedia("(min-width: 768px)").matches) {
        //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
        function heigth768(){
            var h = $( window ).outerHeight(true); // Taille de la fenetre
            $('#wrapper-projet-description').css('height', (h/2)+'px');
            $('#wrapper-projet-carousel').css('height', (h/2)+'px');
        }
        $(function () { heigth768(); });

    }
    //MEDIAQUERIES
    if (window.matchMedia("(min-width: 1024px)").matches) {
        //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
        function heigth1024(){
            var h = $( window ).outerHeight(true); // Taille de la fenetre
            $('#wrapper-projet-description').css('height', (h)+'px');
            $('#wrapper-projet-carousel').css('height', (h)+'px');
            $('.slick-slide').css('height', (h/2)+'px');
        }
        $(function () { heigth1024(); });

    }
    //RESIZE IMAGE CAROUSEL
    $('.img-slick-projet').resizeToParent();

    //ANIMATION LOGO ACCUEIL
    $('#img-logo-accueil').addClass('animated fadeInDown');
    $('#h1-logo-accueil').addClass('animated fadeInUp');

    //PREPARATION MENU BTN
    $(".btn-menu").hide();

    //ANIMATION BTN MENU
    $('#btn-menu-1').addClass('animated fadeInDown');

    //MENU ANIMATION
    function a(){
        $( "#icon-close-menu").show(200);
        $( "#section-menu").addClass("section-menu-actif");
        $( "#wrapper-menu").addClass("wrapper-menu-full");
        $( "#btn-menu-3").show().addClass("animated fadeInUp").removeClass("fadeOutDown");
        $( "#btn-menu-4").show().addClass("animated fadeInUp").removeClass("fadeOutDown");
        $( "#btn-menu-5").show().addClass("animated fadeInUp").removeClass("fadeOutDown");
        $( "#btn-menu-6").show().addClass("animated fadeInUp").removeClass("fadeOutDown");
        $( "#btn-menu-7").show().addClass("animated fadeInUp").removeClass("fadeOutDown");
        $( "#btn-menu-2").show().addClass("animated fadeInDown").removeClass("fadeOutUp");
    }
    function closemenufunction(){
        $( "#icon-close-menu").hide(200);
        $( "#section-menu").removeClass("section-menu-actif");
        $( "#wrapper-menu").removeClass("wrapper-menu-full");
        $( "#btn-menu-3").removeClass("fadeInUp").addClass("fadeOutDown");
        $( "#btn-menu-4").removeClass("fadeInUp").addClass("fadeOutDown");
        $( "#btn-menu-5").removeClass("fadeInUp").addClass("fadeOutDown");
        $( "#btn-menu-6").removeClass("fadeInUp").addClass("fadeOutDown");
        $( "#btn-menu-7").removeClass("fadeInUp").addClass("fadeOutDown");
        $( "#btn-menu-2").removeClass("fadeInDown").addClass("fadeOutUp");
        function timer() {
            $( "#btn-menu-3").hide();
            $( "#btn-menu-4").hide();
            $( "#btn-menu-5").hide();
            $( "#btn-menu-6").hide();
            $( "#btn-menu-7").hide();
            $( "#btn-menu-2").hide();
        }
        setTimeout(timer, 500)
    }
    $("#btn-menu-1").click(function() {
        return (this.tog = !this.tog) ? a() : closemenufunction();
    });
    //DETECTION DU CLICK "OUSIDE" DE L ELEMENT #WRAPPER-MENU
    $("html").click(function(e) {
         var container = $("#wrapper-menu");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            //$(function () { closemenufunction(); });
            $( "#icon-close-menu").hide(200);
            $( "#section-menu").removeClass("section-menu-actif");
            $( "#wrapper-menu").removeClass("wrapper-menu-full");
            $( "#btn-menu-3").removeClass("fadeInUp").addClass("fadeOutDown");
            $( "#btn-menu-4").removeClass("fadeInUp").addClass("fadeOutDown");
            $( "#btn-menu-5").removeClass("fadeInUp").addClass("fadeOutDown");
            $( "#btn-menu-6").removeClass("fadeInUp").addClass("fadeOutDown");
            $( "#btn-menu-7").removeClass("fadeInUp").addClass("fadeOutDown");
            $( "#btn-menu-2").removeClass("fadeInDown").addClass("fadeOutUp");
            function timer() {
                $( "#btn-menu-3").hide();
                $( "#btn-menu-4").hide();
                $( "#btn-menu-5").hide();
                $( "#btn-menu-6").hide();
                $( "#btn-menu-7").hide();
                $( "#btn-menu-2").hide();
            }
            setTimeout(timer, 500)
        }
    });


    //Menu TEST
    $(".btn-menu").click(function() {
        alert('click btn-menu');
    });
    $("#btn-menu-2").click(function() {
        alert('click btn-menu-2');
    });

    //ACCUEIL ZONE PROJET AFFICHAGE DES IMAGES PROJETS
    $( ".wrapper-projet" ).hover(
        function() {
            $(this).find('.img-projet-hover').addClass( "animated fadeInUp" );
            $(this).find('.wrapper-infos .date').addClass( "animated fadeInLeft").removeClass("fadeOutRight");
            $(this).find('.wrapper-infos .cat-name').addClass( "animated fadeInLeft").removeClass("fadeOutRight");
        }, function() {
            $(this).find('.img-projet-off').addClass( "animated fadeInDown" );
            $(this).find('.wrapper-infos .date').addClass( "animated fadeOutRight" );
            $(this).find('.wrapper-infos .cat-name').addClass( "animated fadeOutRight" );
         }
    );
    //ACCUEIL ZONE CONTACT AFFICHAGE DES IMAGES NEGATIFS
    $( ".wrapper-contact" ).hover(
        function() {
             $(this).find('.img-contact-hover').addClass( "animated fadeInUp" );
        }, function() {
            $(this).find('.img-contact-off').addClass( "animated fadeInDown" );
         }
    );


});
