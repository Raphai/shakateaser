$(document).ready(function() {
    //MENU ANIMATION
    function openMenu(){
        //alert('open');
        $( "#menu-list").removeClass("menu-list-close");
        $( "#l1-btn-menu-mobile").addClass("l1-state-close");
        $( "#l2-btn-menu-mobile").addClass("l2-state-close");
        $( "#am-contact").addClass("animated fadeOutRight");
        $( ".menu-list" ).find( ".am-item" ).addClass("animated fadeInUp");
        $( ".wrapper-main").hide();
    }
    function closeMenu(){
        //alert('close');
        $( "#menu-list").addClass("menu-list-close");
        $( "#l1-btn-menu-mobile").removeClass("l1-state-close");
        $( "#l2-btn-menu-mobile").removeClass("l2-state-close");
        $( "#am-contact").removeClass("fadeOutRight");
        $( "#am-contact").addClass("fadeInRight");
         $( ".menu-list" ).find( ".am-item" ).removeClass("fadeInUp");
        $( ".wrapper-main").show();
    }
    $("#btn-menu-mobile").click(function() {
        return (this.tog = !this.tog) ? openMenu() : closeMenu();
    });
});
