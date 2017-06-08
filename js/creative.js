(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // setting the social buttons
    // setting youtube hover and mouseleave
	$(".youtube").hover(function () {
		$(".youtube .fa").fadeIn(400);
		$(".youtube span").text("");
	}).mouseleave(function () {
		$(".youtube .fa").fadeOut(0);
		$(".youtube span").text("Youtube");
	});
	
	// setting facebook hover and mouseleave
	$(".facebook").hover(function () {
		$(".facebook .fa").fadeIn(400);
		$(".facebook span").text("");
	}).mouseleave(function () {
		$(".facebook .fa").fadeOut(0);
		$(".facebook span").text("Facebook");
	});
	
	// setting linkedin hover and mouseleave
	$(".linkedin").hover(function () {
		$(".linkedin .fa").fadeIn(400);
		$(".linkedin span").text("");
	}).mouseleave(function () {
		$(".linkedin .fa").fadeOut(0);
		$(".linkedin span").text("linkedin");
	});

    // setting the loading screen
    $(window).load(function () {
        
        // fading out h1 elemnt first
        $(".loader .h1").fadeOut(1000, function () {
            // fading out the loading screen
            $(this).parent().fadeOut(1000, function () {
                // resetting the body overflow back to auto
                $("body").css("overflow", "auto");

                // removing the code from the dom
                $(this).remove();
            });
        });
    });

})(jQuery); // End of use strict
