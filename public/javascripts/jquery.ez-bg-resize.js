/******************************************************
    * jQuery plug-in
    * Easy Background Image Resizer
    * Developed by J.P. Given (http://johnpatrickgiven.com)
    * Useage: anyone so long as credit is left alone
******************************************************/

(function($) {
	// Global Var
    var jqez = null;

    // Define the plugin
    $.ezBgResize = function(obj) {

		// Set global to obj passed
		jqez = obj;

		// Create a unique div container
		$("body").append('<div id="jq_ez_bg"></div>');

		// Check for required options
		if ((jqez.width == undefined) || (jqez.height == undefined)) {
			alert('You must pass a width and height for the jQuery Easy Background Resizer to work.');
		}

		// Add the image to it.
		$("#jq_ez_bg").html('<img src="' + jqez.img + '" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');

		// First position object
        $("#jq_ez_bg").css("visibility","hidden");

		// Overflow set to hidden so scroll bars don't mess up image size.
        $("body").css({
            "overflow":"hidden"
        });

		// On window load, resize image.
        $(window).bind("load", function() {
            resizeImage();
        });

		// On window resize, resize image.
        $(window).bind("resize",function() {
            resizeImage();
        });

    };

	// Actual resize function
    function resizeImage() {

        $("#jq_ez_bg").css({
            "position":"fixed",
            "top":"0px",
            "left":"0px",
            "z-index":"-1",
            "overflow":"hidden",
            "width":$(window).width() + "px",
            "height":$(window).height() + "px",
			"opacity" : jqez.opacity
        });

		// Image relative to its container
		$("#jq_ez_bg").children('img').css("position", "relative");

        // Resize the img object to the proper ratio of the window.
        var iw = $("#jq_ez_bg").children('img').width();
        var ih = $("#jq_ez_bg").children('img').height();
        
        if ($(window).width() > $(window).height()) {
            //console.log(iw, ih);
            if (iw > ih) {
                var fRatio = iw/ih;
                $("#jq_ez_bg").children('img').css("width",$(window).width() + "px");
                $("#jq_ez_bg").children('img').css("height",Math.round($(window).width() * (1/fRatio)));

                var newIh = Math.round($(window).width() * (1/fRatio));

                if(newIh < $(window).height()) {
                    var fRatio = ih/iw;
                    $("#jq_ez_bg").children('img').css("height",$(window).height());
                    $("#jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
                }
            } else {
                var fRatio = ih/iw;
                $("#jq_ez_bg").children('img').css("height",$(window).height());
                $("#jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
            }
        } else {
            var fRatio = ih/iw;
            $("#jq_ez_bg").children('img').css("height",$(window).height());
            $("#jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
        }

		// Center the image
		if (jqez.center) {
			if ($("#jq_ez_bg").children('img').width() > $(window).width()) {
				var this_left = ($("#jq_ez_bg").children('img').width() - $(window).width()) / 2;
				$("#jq_ez_bg").children('img').css({
					"top"  : 0,
					"left" : -this_left
				});
			}
			if ($("#jq_ez_bg").children('img').height() > $(window).height()) {
				var this_height = ($("#jq_ez_bg").children('img').height() - $(window).height()) / 2;
				$("#jq_ez_bg").children('img').css({
					"left" : 0,
					"top" : -this_height
				});
			}
		}

        $("#jq_ez_bg").css({
			"visibility" : "visible"
		});

		// Allow scrolling again
		$("body").css({
            "overflow":"auto"
        });

        
    }
})(jQuery);