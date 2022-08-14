jQuery(document).ready(function () {
  jQuery("blockquote p:first-child").before('<div class="blockquote-left-icon"><i class="fa fa-quote-left" aria-hidden="true"></i></div>');
  jQuery("blockquote p:last-child").after('<div class="blockquote-right-icon"><i class="fa fa-quote-right" aria-hidden="true"></i></div>');
});

// Blog post share button
jQuery(document).on('click', '.post-share-block > svg', function () {
  jQuery(this).siblings('.share-icons').toggle("slide");
});

//  Gallery load more images  AJAX
jQuery("#load_more_btn").on("click", function () {
  jQuery(".loader-gif").fadeIn();
  var page = parseInt(jQuery(this).data("page"));
  var category = jQuery("#load_more_btn").data("category");
  let ajaxurl = jQuery(this).data("url");
  jQuery.ajax({
    url: ajaxurl,
    type: "post",
    data: {
      page: page,
      category: category,
      action: "remove_wishlist"
    },
    error: function (response) {
      console.log(response);
    },
    success: function (response) {
      jQuery(".gallery-archive").append(response);
      if (jQuery("#hide").val() == 1) {
        jQuery("#load_more_btn").fadeOut();
      }
      jQuery(".loader-gif").hide();
    }
  });
  page += 6;
  jQuery("#load_more_btn").data("page", page);
});


/* Gallery modal slider */

jQuery(document).on('click', '.gallery-thumbnail', function () {
  jQuery('.carousel-inner').empty();
  var imageLink = jQuery(this).children('img').attr('src');
  jQuery('.carousel-inner').append('<div class="carousel-item active"><img src="' + imageLink + '"></div>');
  jQuery.each(jQuery('.gallery-thumbnail img'), function (index, val) {
    var imageSrc = val['src'];
    if (imageLink != imageSrc) {
      jQuery('.carousel-inner').append('<div class="carousel-item"><img src="' + imageSrc + '"></div>');
    }
  });
});
jQuery('#gallery-carousel').on('touchstart', function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  jQuery(this).one('touchmove', function (event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      jQuery(this).carousel('next');
    } else if (Math.floor(xClick - xMove) < -5) {
      jQuery(this).carousel('prev');
    }
  });
  jQuery('#gallery-carousel').on('touchend', function () {
    jQuery(this).off('touchmove');
  });
});


/* Front page modal slider */

jQuery('.wa-front-page .gallery-posts .post-image img').attr("data-toggle", "modal");
jQuery('.wa-front-page .gallery-posts .post-image img').attr("data-target", "#myModal");

jQuery(document).on('click', '.wa-front-page .gallery-posts .post-image img', function () {
  jQuery('.carousel-inner').empty();
  var imageLink = jQuery(this).attr('src');

  var count = 0
  console.log(count)
  jQuery.each(jQuery(".wa-front-page .gallery-posts .post-image img"), function (index, val) {
    var imageSrc = val['src'];
    if (imageSrc === imageLink && count === 0) {
      count = 1
      var carouselItem = jQuery('<div class="carousel-item active"><img alt src="' + imageSrc + '"></div>');
    } else {
      var carouselItem = jQuery('<div class="carousel-item"><img alt src="' + imageSrc + '"></div>');
    }
    jQuery('.carousel-inner').append(carouselItem);

  });
});
jQuery("#gallery-carousel").on("touchstart", function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  jQuery(this).one("touchmove", function (event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      jQuery(this).carousel("next");
    } else if (Math.floor(xClick - xMove) < -5) {
      jQuery(this).carousel("prev");
    }
  });
  jQuery("#gallery-carousel").on("touchend", function () {
    jQuery(this).off("touchmove");
  });
});

// Menu Header

if (window.innerWidth >= 991) {
  jQuery("#masthead #primary-menu > li.menu-item-has-children > a").append("<span class='icon-chevron-down'></span>");
  jQuery("#masthead #primary-menu .sub-menu li.menu-item-has-children > a").append("<span class='icon-chevron-right'></span>");
  jQuery('#masthead #primary-menu li.menu-item-has-children').on('mouseover', function () {
    jQuery(this).children('.sub-menu').stop().fadeIn();
  });

  jQuery('#masthead #primary-menu li:not(.menu-item-has-children').on('mouseover', function () {
    jQuery(this).children('.sub-menu').stop().fadeOut();
  });

  jQuery('#masthead #primary-menu li.menu-item-has-children').on('mouseleave', function () {
    jQuery(this).children('.sub-menu').stop().fadeOut();
  });

}

if (window.innerWidth <= 991) {

  jQuery("#masthead #primary-menu > li.menu-item-has-children > a").after(jQuery("<span class='icon-chevron-down'></span>"));
  jQuery("#masthead #primary-menu .sub-menu li.menu-item-has-children > a").after(jQuery("<span class='icon-chevron-down'></span>"));

  jQuery('#masthead #primary-menu .icon-chevron-down').on('click', function () {
    jQuery(this).siblings('.sub-menu').slideToggle();
    jQuery(this).toggleClass('toggled');
  });

}

jQuery(document).on('click', '.menu-toggle', function () {
  jQuery('.main-navigation ul#primary-menu').slideToggle(350);
  if (jQuery(this).parent('nav').hasClass('toggled')) {
    jQuery(this).children('span:nth-child(2)').css('opacity', '0');
    jQuery(this).children('span:nth-child(1)').css('transform', 'rotate(45deg)');
    jQuery(this).children('span:nth-child(3)').css('transform', 'rotate(-45deg)');
  }
  else {
    jQuery(this).children('span:nth-child(2)').css('opacity', '1');
    jQuery(this).children('span:nth-child(1)').css('transform', 'none');
    jQuery(this).children('span:nth-child(3)').css('transform', 'none');
  }
});

jQuery(document).ready(function () {
  jQuery(".header-close-icon").addClass("d-none");
})

jQuery('#masthead .search-block .icon-search').on('click', function () {
  // jQuery(".menu-menu-header-container").addClass("d-none")
  jQuery('#masthead .search-form').fadeIn();
  jQuery('#masthead .search-block .header-search').css('opacity', '0');
  jQuery(".header-close-icon").removeClass("d-none");
});



//MOBILE MENU BUTOON MOUSEUP

jQuery(document).on('mouseup', function (event) {
  if (jQuery('.main-navigation').hasClass('toggled') && !jQuery(event.target).is('#mobile_toggle') && !jQuery(event.target).is('#mobile_toggle span')) {
    jQuery('.menu-toggle').click();
  }
});

//MOBILE MENU BUTOON TOUCHMOVE

jQuery(document).on('touchmove', function () {
  if (jQuery('.main-navigation').hasClass('toggled')) {
    jQuery('.menu-toggle').click();
  }
});

//MOBILE MENU BUTOON SCROLL

jQuery(document).on('scroll', function () {
  if (jQuery('.main-navigation').hasClass('toggled')) {
    jQuery('.menu-toggle').click();
  }
});


// HEADER MENU CHERVON

jQuery(document).ready(function(){
  jQuery('.menu-menu-header-container ul li a').append('<img src="http://localhost/liya/wp-content/uploads/2022/08/Shape-1.svg" alt="menu chervon" class="chervon-item">');
}); 
  

// CATEGORY CART BLOCK ANIMATION

jQuery(document).ready(function () {
  jQuery(".category-cart").mouseover(function(){
    jQuery(this).addClass('active');
    if(jQuery(".category-cart").hasClass("active")) {
      jQuery(this).addClass('d-none');
      jQuery(this).next().removeClass('d-none');
    }
  });  
  jQuery(".category-active").mouseout(function(){
      jQuery(this).addClass("d-none").prev().removeClass("active").removeClass('d-none');
  });
 
});

// MENU ITEMS CHEVRON TRANSITION

// jQuery(document).ready(function () {
//    jQuery('ul#primary-menu li img').hover(function () {
//     jQuery(this).css('transform','rotate(180deg)');
//    }     
//    );
// });






