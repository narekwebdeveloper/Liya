jQuery(document).ready(function () {

    jQuery('#top-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 6000,

        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        }
    })
});

jQuery(document).ready(function () {

    jQuery('#home_page_posts_carousel, #home_page_gallery_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 6000,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    })
});



jQuery(document).ready(function () {

    jQuery('#home-banner-slide').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 14000,
        autoplayTimeout: 16000,

        margin: 10,
        responsiveClass: true,
        dots: true,
        nav: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16.007" viewBox="0 0 24 16.007"><path id="Icon_ionic-ios-arrow-round-forward" data-name="Icon ionic-ios-arrow-round-forward" d="M16.57,11.558a1.089,1.089,0,0,1,.008,1.534L11.51,18.169H30.8a1.084,1.084,0,0,1,0,2.167H11.518l5.068,5.077a1.1,1.1,0,0,1-.008,1.534,1.079,1.079,0,0,1-1.526-.008L8.183,20.019h0a1.217,1.217,0,0,1-.225-.342,1.034,1.034,0,0,1-.083-.417,1.087,1.087,0,0,1,.308-.759l6.869-6.919A1.062,1.062,0,0,1,16.57,11.558Z" transform="translate(-7.875 -11.252)" fill="#275a53"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16.007" viewBox="0 0 24 16.007"><path id="Icon_ionic-ios-arrow-round-forward" data-name="Icon ionic-ios-arrow-round-forward" d="M23.18,11.558a1.089,1.089,0,0,0-.008,1.534l5.068,5.077H8.95a1.084,1.084,0,0,0,0,2.167H28.232l-5.068,5.077a1.1,1.1,0,0,0,.008,1.534,1.079,1.079,0,0,0,1.526-.008l6.869-6.919h0a1.217,1.217,0,0,0,.225-.342,1.034,1.034,0,0,0,.083-.417,1.087,1.087,0,0,0-.308-.759L24.7,11.583A1.062,1.062,0,0,0,23.18,11.558Z" transform="translate(-7.875 -11.252)" fill="#275a53"/></svg>'],
        // margin: 24,
        responsive: {
            0: {
                items: 1,
            },

        }
    })
});

jQuery(document).ready(function () {

    jQuery('#product-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 6000,
        margin: 24,
        responsiveClass: true,
        dots: true,
        nav: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 4,
            },

        }
    })
});


jQuery(document).ready(function () {

    jQuery('#best-selling-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 6000,
        margin: 24,
        responsiveClass: true,
        dots: true,
        nav: false,
        navText: [],
        responsive: {
          
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 4,
            },

        }
    })
});

jQuery(document).ready(function () {

    jQuery('#blog-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 6000,
        margin: 24,
        responsiveClass: true,
        dots: false,
        nav: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 4,
            },

        }
    })
});


jQuery(document).ready(function () {
    jQuery('.up-sells .products').addClass("owl-carousel");
    jQuery('.up-sells .products').addClass("carousel");
    jQuery('.up-sells .products').owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 2000,
        autoplayTimeout: 6000,
        margin: 24,
        responsiveClass: true,
        dots: true,
        nav: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    })
});


jQuery(document).ready(function () {

    jQuery('#projects-carusel').owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        margin: 10,
        responsiveClass: true,
        dots: true,
        nav: true,
        navText: [],
        margin: 24,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            }
            // 768: {
            //     items: 4,
            // },
            // 991: {
            //     items: 5,
            // },
            // 1200: {
            //     items: 6,
            // },
        }
    })
});








