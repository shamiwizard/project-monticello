$(document).ready(function(){

    $('.news-owl').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

});