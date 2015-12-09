$(document).ready(function() {
    //CALCUL HAUTEUR SCREEN POUR SECTIONS et POUR LES PROJETS
    function home(){
        var h = $( window ).outerHeight(true); // Taille de la fenetre
      //  $('#section-projet').css('min-height', (h)+'px');
        $('.slide-item').css('height', (h)+'px');
        $('.image').css('height', (h)+'px');
        $('.section-ajsa').css('min-height', (h)+'px');
        //$('.zone1').css('height', (h/2)+'px');
        //$('.zone2').css('height', (h/2)+'px');
    }
    $(function () { home(); });


    //FUNCTION height1 : redimentionnement des element du slide d'accueil en version mobile < 480px
    function height1(){
        var h = $( window ).outerHeight(true); // Taille de la fenetre
        $('.titre').css('height', (h*0.18)+'px');
        $('.zone1').css('height', (h*0.41)+'px');
        $('.zone2').css('height', (h*0.41)+'px');
    }
    //FUNCTION height2 : redimentionnement des element du slide d'accueil en version mobile > 480px
    function height2(){
        var h = $( window ).outerHeight(true); // Taille de la fenetre
        $('.titre').css('height', 'inherit');
        $('.zone1').css('height', (h/2)+'px');
        $('.zone2').css('height', (h/2)+'px');
    }

    //PROJET SLIDER SLICK
    $('.slick-carousel').slick({
        slidesToShow : 1,
        vertical:false
     });

    //MOUSE WHEEL ACTIONS
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            //alert( "scroll up");
            $('.slick-carousel').slick('slickNext');
        }
        else {
            //alert( "scroll down");
            $('.slick-carousel').slick('slickPrev');

        }
    });

    //RESIZE IMAGE CAROUSEL
    // $('.img-projet-presentation-1').resizeToParent();
    // $('.img-projet-presentation-2').resizeToParent();
     $('.img-slick-projet').resizeToParent();
    //$('.img-projet-presentation-1').resizeToParent();
    //$('.img-projet-presentation-2').resizeToParent();


    //MEDIAQUERIES
    if (window.matchMedia("(max-width: 479px)").matches) {
        $(function () { height1(); });

    }
    //MEDIAQUERIES
    if (window.matchMedia("(min-width: 480px)").matches) {
        $(function () { height2(); });

    }
    //MEDIAQUERIES
    if (window.matchMedia("(min-width: 768px)").matches) {


    }
    //MEDIAQUERIES
    if (window.matchMedia("(min-width: 1024px)").matches) {


    }


    //ANIMATION LOGO ACCUEIL
    //$('#img-logo-accueil').addClass('animated fadeInDown');
    //$('#h1-logo-accueil').addClass('animated fadeInUp');

    //PREPARATION MENU BTN
    $(".btn-menu").hide();

    //ANIMATION BTN MENU
    $('#btn-menu-1').addClass('animated fadeInDown');

    //MENU ANIMATION
    function a(){
        $( "#icon-close-menu").show(200);
        $( "#section-menu").addClass("section-menu-projet-actif");
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
        $( "#section-menu").removeClass("section-menu-projet-actif");
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
            $( "#section-menu").removeClass("section-menu-projet-actif");
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


    //BTN OPEN MODAL MENTIONS LEGALES
    $("#btn-link-mentions").click(function() {
        $("#section-page-3").show().addClass( "animated fadeInUp").removeClass("fadeOutDown");
    });
    //BTN CLOSE MODAL PAGE 3
    $(".btn-close-modal-page3").click(function() {
        $("#section-page-3").addClass( "animated fadeOutDown").removeClass("fadeInUp");
    });



});
