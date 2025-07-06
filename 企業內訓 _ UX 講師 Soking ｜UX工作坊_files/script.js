$(function () {

	function gototop() {
		if ($(this).scrollTop() > 100) {
			$('.fixed-bottom-contant').fadeIn("fast");
		} else {
			$('.fixed-bottom-contant').stop().fadeOut("fast");
		}
	}

	var headerHeight = $('header').outerHeight();

	function mobileSticky() {
		if ($(this).scrollTop() > headerHeight) {
			$('.info-mobileTab ,.course-mobileTab').addClass("fixed-top");
		} else {
			$('.info-mobileTab ,.course-mobileTab').removeClass("fixed-top");
		}
	}
	$(window).scroll(gototop);
	$(window).scroll(mobileSticky);
	// gotoTop============================
	$("#gotop").click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
		$("#share-btn").removeClass("open-btn").find('i').removeClass('fa-times').addClass('fa-share');
		$(".share-page").removeClass("open-menu");
	});

	// share-btn============================
	$("#share-btn").click(function () {
		$(this).toggleClass("open-btn").find('i').toggleClass('fa-share fa-times');
		$(".share-page").toggleClass("open-menu");
	});

	// ==========burger==========
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
	});

	// ========== purchase popup==========
	$(".fixed-bottom-popup .close-btn").click(function () {
		$(this).parents(".fixed-bottom-popup").fadeOut("fast");
	});

	// handle zeynepjs overlay click
	$('.overlayer').on('click', function () {
		zeynep.close();
		$(this).toggleClass("active");
		$('.hamburger').toggleClass("is-active");
	})

	// open zeynepjs side menu
	$('.hamburger').on('click', function () {
		$('.zeynep').toggleClass("opened");
		$('.overlayer').toggleClass("active");
	})

	// ========== 產品內頁規格燈箱及按鈕 ==========

	$("#spec_list > li ").on('click', function () {
		$(this).toggleClass("chosen").siblings().removeClass("chosen");
	});

	function standardResize() {
		if ($(window).width() < 767) {
			$("#spec_list").on('click', function () {
				$(".mobile-addcart-popup").fadeIn("fast");
				$(".popup-overlayer").fadeIn("fast");
			});
		} else {
			$("#spec_list > li ").on('click', function () {
				$(this).toggleClass("chosen").siblings().removeClass("chosen");
			});
		}
	};

	$(window).resize(function () {
		standardResize();
	});
	standardResize();

	$("#standard-mobile > li ").on('click', function () {
		$(this).toggleClass("chosen").siblings().removeClass("chosen");
	});

	$(".mobile-addcart-popup > .popup-close").on('click', function () {
		$(".mobile-addcart-popup").fadeOut("fast");
		$(".popup-overlayer").fadeOut("fast");
	});

	$(".popup-overlayer").on('click', function () {
		$(".mobile-addcart-popup").fadeOut("fast");
		$(".popup-overlayer").fadeOut("fast");
	});

	// ==========mobile選單換頁效果==========

	// init zeynepjs side menu
	var zeynep = $('.zeynep').zeynep();

	// ==========郵遞區號==========
	$('.twzipcode').twzipcode();
	// ==========product-dispaly carousel==========
	$('.my-carousel').carousel({
		interval: 4000
	});

	// datepicker https://gijgo.com/datepicker/configuration ============================
	$('#bookingdate').datepicker({
		uiLibrary: 'bootstrap4',
		format: 'yyyy-dd-mm',
		locale: 'zh-tw',
	});

	// ==========col-4 slider==========
	$('.col4-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 479,
			settings: {
				arrows: false,
				dots: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	// ==========col-3 slider==========
	$('.col3-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 479,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1
			}
		}
		]
	});

	// ==========col-2 slider==========
	$('.col-2-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 479,
				settings: {
					centerPadding: '10px',
				}
			}
		]
	});

	// ==========index-banner slider==========

	$('.index-banner-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		asNavFor: '.index-banner-nav'
	});

	$('.index-banner-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.index-banner-for',
		arrows: false,
		dots: false,
		focusOnSelect: true
	});

	// ==========product-detail slider==========

	$('.product-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-slider-nav',
	});


	$('.product-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slider-for',
		arrows: false,
		dots: false,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	// ==========product-package slider==========
	$('.pakage-slider').slick({
		infinite: true,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	// ==========首頁圖片瀑布流==========
	// init Masonry
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress(function () {
		$grid.masonry();
	});

	// ==========html5 audio ==========
	// Get container width and height
	var w = $('.audio-player').parent().width();
	var h = $('.audio-player').parent().height();

	$('.audio-player')
	.attr('width', w)
    .attr('height', h)
    .delay( 500 )
	.mediaelementplayer({
		alwaysShowControls: true,
		features: ['speed', 'skipback', 'jumpforward', 'playpause', 'volume', 'current', 'progress', 'duration'],
		defaultAudioWidth: w,
		defaultAudioHeight: h,
		audioWidth: -1,
		audioHeight: -1,
		enableAutosize: true,
	});

	// ========== Sticky sidebar ==========
	var sticky = new Sticky('.sticky');

	// ========== event gotoBuy show ==========

	function gotobuyEvent() {
		if ($(window).width() < 767) {
			$(window).scroll(function () {
				var headerHeight = $('header').outerHeight() + $('.event-intro-header').outerHeight();
				var scrollHeight = $(document).height();
				var scrollPosition = $(window).height() + $(window).scrollTop();
				var footerHeight = $('footer').outerHeight();
				var scrollbottom = scrollHeight - scrollPosition;
				if (scrollbottom >= footerHeight && $(window).scrollTop() >= headerHeight - 200) {
					$('.event-footer .gotoID').fadeIn("fast");
				}
				else {
					$('.event-footer .gotoID').fadeOut("fast");
				}
			});
		}
	};

	function gotobuyCourse() {
		if ($(window).width() < 767) {
			$(window).scroll(function () {
				var headerHeight = $('header').outerHeight() + $('.course-intro-header').outerHeight();
				var scrollHeight = $(document).height();
				var scrollPosition = $(window).height() + $(window).scrollTop();
				var footerHeight = $('footer').outerHeight();
				var scrollbottom = scrollHeight - scrollPosition;
				if (scrollbottom >= footerHeight && $(window).scrollTop() >= headerHeight - 500) {
					$('.course-intro-footer .gotoID').fadeIn("fast");
				}
				else {
					$('.course-intro-footer .gotoID').fadeOut("fast");
				}
			});
		}
	};

	$(window).resize(function () {
		gotobuyEvent();
		gotobuyCourse();
	});
	gotobuyEvent();
	gotobuyCourse();

});

// ==== anchor scroll ID ====
$(function () {
	function scrollToAnchor(hash) {
		var target = $(hash),
			pcNavHeight = 0,
			mobileNavHeight = 0; // Get fixed header height

		target = target.length ? target : $('[name=' + hash.slice(1) + ']');

		if ($(window).width() < 767) {
			$('html,body').animate({
				scrollTop: target.offset().top - mobileNavHeight
			}, 1000);
			return false;
		}
		else {
			$('html,body').animate({
				scrollTop: target.offset().top - pcNavHeight - 50
			}, 1000);
			return false;
		}
	}

	if (window.location.hash) {
		scrollToAnchor(window.location.hash);
	}
	$("#category-inner a[href*=\\#]:not([href=\\#])").click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
			location.hostname == this.hostname) {

			scrollToAnchor(this.hash);
		}
	});
});