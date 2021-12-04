
//=======================================
//===== start Fire Of NiceScroll ========
//=======================================

$("html").niceScroll({
    border:0,
    background:"white",
    cursorborder:0,
    cursorborderradius:0,
    cursorcolor:"rgba(0,0,0,.6)",
    cursorwidth:"8px",
    zindex:241244,
});

//=======================================
//===== End Fire Of NiceScroll ========
//=======================================


//=======================================
//===== start Fire Of WoW ===============
//=======================================

new WOW().init();

//=======================================
//===== End Fire Of Wow ========
//=======================================

//=======================================
//===== start Fire Of owl-carousel ======
//=======================================

$("#slider").owlCarousel({
    nav:true,
    loop:true,
    autoWidth:true,
    item:1,
    center:true,
    margin:10,
    autoplay:true,
    smartSpeed: 500,
    lazyLoad: true,
    responsive:{
        0:{
            item:1
        },
        300:{
            item:1
        },
        500:{
          item:1
       }
    }
});


//=======================================
//===== End Fire Of owl-carousel ========
//=======================================


//=========================================
//= Start Fire Of owl-carousel English ====
//=========================================

$("#latest-films").owlCarousel({
    nav: true,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: false,
    singleItem: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        900:{
          items:4  
        }
    }
});

//=========================================
//= End Fire Of owl-carousel English ====
//=========================================


//=========================================
//= Start Fire Of owl-carousel Arabic ====
//=========================================

$("#latest-series").owlCarousel({
    nav: true,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: true,
    singleItem: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        420:{
            items:2
        },
        900:{
          items:4  
        }
    }
});
//=========================================
//= End Fire Of owl-carousel Arabic ====
//=========================================




//=========================================
//= Start Fire Of owl-carousel most-view ====
//=========================================
$("#general-list").owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed: 500,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    lazyLoad: true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        460:{
          items:3  
        },
        700:{
            items:4
        },
        1000:{
          items:6
        },
        1200:{
          items:7  
        }
    }
});
//=========================================
//= End Fire Of owl-carousel most-view ====
//=========================================