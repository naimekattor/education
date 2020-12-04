/*
Template Name: Hoverable dropdown navbar Template
Author       : Naimur Rahman Naim
Version      : 1.1
*/
(function($)
{
	"use strict";
	
	
	
	$(document).on('ready', function () {
		
		// Dropdown menu 
		$('.dropdown').on('mouseenter', function () {
			$(this).addClass('open');
		});
		$(".dropdown").on('mouseleave', function () {
			$(this).removeClass('open');
		});
		
		//Masonry Grid 
		$('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-item'
		}); 
		
		//Header Fixed 
		$('.navbar-static-top').affix({
			  offset: {
				top: $('.top-bar').outerHeight()
			  }
		});	
		
		var pageBoby = $('body');
		var topBar=$('.top-bar').outerHeight();
		$(window).on('scroll', function() {
			if ($(this).scrollTop() >= topBar) {
				pageBoby.addClass("f-header");
			} else {
				pageBoby.removeClass("f-header");
			}
		});

		
		// Services Carousel 
	$("#services-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout:2000,
		margin:30,
		nav: false,
		smartSpeed:1000,
		dots:true,
		autoplayHoverPause:false,
		loop:true,
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  600: {
			items: 2,
		  },
		  768: {
			items: 3,
		  },
		  1200: {
			items: 3,
		  }
		}
	 });

	 
		// Counter Up 
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		});
		
		// Back to top 
		$(".back-top").hide();
		
		$('.back-top a').on('click', function(event) {
			$('body,html').animate({scrollTop:0},800);
			return false;
		});
		
		// Background Scrolling
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}
		
	});

	$(window).on('scroll', function() {
			
		// Back to top
			if($(this).scrollTop()>150){
				$('.back-top').fadeIn();
			}
			else{
				$('.back-top').fadeOut();
			}
			
			
		});

		jQuery(document).ready(function($) {

			var feedbackSlider = $('.feedback-slider');
			feedbackSlider.owlCarousel({
				items: 1,
				nav: true,
				dots: true,
				autoplay: true,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
				responsive:{
		
					// breakpoint from 767 up
					767:{
						nav: true,
						dots: false
					}
				}
			});
		
			feedbackSlider.on("translate.owl.carousel", function(){
				$(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
				$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
			});
		
			feedbackSlider.on("translated.owl.carousel", function(){
				$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
				$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
			});
			feedbackSlider.on('changed.owl.carousel', function(property) {
				var current = property.item.index;
				var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
				var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
				var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
				var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
				$('.thumb-prev').find('img').attr('src', prevThumb);
				$('.thumb-next').find('img').attr('src', nextThumb);
				$('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
				$('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
			});
			$('.thumb-next').on('click', function() {
				feedbackSlider.trigger('next.owl.carousel', [300]);
				return false;
			});
			$('.thumb-prev').on('click', function() {
				feedbackSlider.trigger('prev.owl.carousel', [300]);
				return false;
			});
			
		}); //end ready

		//Mentors Section  start
		$(function() {
			$('.material-card > .mc-btn-action').click(function () {
				var card = $(this).parent('.material-card');
				var icon = $(this).children('i');
				icon.addClass('fa-spin-fast');
	
				if (card.hasClass('mc-active')) {
					card.removeClass('mc-active');
	
					window.setTimeout(function() {
						icon
							.removeClass('fa-arrow-left')
							.removeClass('fa-spin-fast')
							.addClass('fa-bars');
	
					}, 800);
				} else {
					card.addClass('mc-active');
	
					window.setTimeout(function() {
						icon
							.removeClass('fa-bars')
							.removeClass('fa-spin-fast')
							.addClass('fa-arrow-left');
	
					}, 800);
				}
			});
		});
		//Mentors Section  start

		//Blog Section  start
		var swiper = new Swiper('.blog-slider', {
			spaceBetween: 30,
			effect: 'fade',
			loop: true,
			mousewheel: {
			  invert: false,
			},
			// autoHeight: true,
			pagination: {
			  el: '.blog-slider__pagination',
			  clickable: true,
			}
		  });
		//Blog Section  end

		//Events Section  start
		/*--------
		var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});
------*/
		//Events Section  end

	
	
})(jQuery);	
	
