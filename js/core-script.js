/*
Template Name: Silver-Page  -  One Page Responsive - Light Version Core-Script
Author: SlyThemes

Index Of JS:

    :: 1. Page-Loader
       -1.1 Contact-Form 
    :: 2. Isotope
    :: 3. Filter
    :: 4. Smooth-Page-Scroll
    :: 5. Nav scrolling
    :: 6. Smooth Button-Scroll
    :: 7. Progress-Bar
    :: 8. Tabs
    :: 9. Magnific-Popup JS
    :: 10. Owl-Carousel JS
    :: 11. Stellar
    :: 12. Map
    :: 13. Animation-Code
        
*/

/* >>>>>>>>> Page-Loader >>>>>>>>>>*/
$(window).on("load",function (){

    $(".page-loader").fadeOut(500);

    /* >>>>>>>>> Contact-Form >>>>>>>>>>*/
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    /* >>>>>>>>> Isotope >>>>>>>>>>*/
    $('.gallery').isotope({
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
    });

 /* >>>>>>>>> Filter >>>>>>>>>>*/
    $('.filtering').on( 'click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on( 'click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});


$(function (){
    "use strict";

    var wind = $(window);

    /* >>>>>>>>> Smooth-Page-Scroll >>>>>>>>>>*/
    $('.navbar-nav').singlePageNav({
        speed:1000,
        currentClass:'active',
        offset:60
    });

    /* >>>>>>>>> Nav scrolling >>>>>>>>>>*/
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });

    /* >>>>>>>>> Smooth Button-Scroll >>>>>>>>>>*/
    $('.button-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    }); 


    /* >>>>>>>>> Progress-Bar >>>>>>>>>>*/
    wind.on('scroll', function () {
        $(".skill_progression span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    /* >>>>>>>>> Tabs >>>>>>>>>>*/
    $(".services").on("click", "li", function(){

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".services .item").hide();

        $("#" + myID + "-content").fadeIn();

    });


    /* >>>>>>>>> Magnific-Popup JS >>>>>>>>>>*/
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    /* >>>>>>>>> Owl-Carousel JS >>>>>>>>>>*/
    $('.demo4 .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
        '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
        smartSpeed:500
    });

    $('.Reviews .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    /* >>>>>>>>> Stellar >>>>>>>>>>*/
    wind.stellar();


    /* >>>>>>>>> Map >>>>>>>>>>*/
    $(".map-toggle").click(function (){
        $(".map-loc").slideToggle(10);
        $("span").toggleClass("open");
    });

     /* >>>>>>>>> Animation-Code >>>>>>>>>>*/
    $(window).scroll( function(){
        $('.hide-me').each( function(i){   
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},780);    
            }
            
        }); 
    
    });

});