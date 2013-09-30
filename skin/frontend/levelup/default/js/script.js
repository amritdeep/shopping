var $j = jQuery.noConflict();

$j(document).ready(function(){
	$j('.flexslider').flexslider({
		animation: "slide"
	});

	$j('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

	$j('.product-image-zoom').zoom();
});
