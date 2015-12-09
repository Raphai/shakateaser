$(document).ready(function() {
    //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
    function sizeSlideAccueil(){
        var h = $( window ).height(); // Taille de la fenetre
        $('.item-slide-accueil').css('height', (h * 0.78)+'px');
    }
    $(function () { sizeSlideAccueil(); });


    $('.slider-accueil').slick({
        dots: true,
        infinite: false,
        autoplay:true,
        speed: 300,
        autoplaySpeed:5500,
        slidesToShow: 1,
        arrows:false,
        mobileFirst:true
    });

    //MEDIAQUERIES > 767PX
    if (window.matchMedia("(min-width: 0px)").matches) {

    }

    //MEDIAQUERIES > 767PX
    if (window.matchMedia("(min-width: 767px)").matches) {

    }





});
