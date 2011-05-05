$(function(){
  $('.scrollbar-pane').scrollbar({
    containerHeight:   null,        // height of content container. If set to null, the current height before DOM manipulation is used
    arrows:            false,       // render up- and down-arrows
    handleHeight:      'auto',      // height of handle [px || 'auto']. If set to 'auto', the height will be calculated proportionally to the container-content height.
    handleMinHeight:   30,          // min-height of handle [px]. This property is only used if handleHeight is set to 'auto'
    scrollSpeed:       50,          // speed of handle while mousedown on arrows [milli sec]
    scrollStep:        20,          // handle increment between two mousedowns on arrows [px]
    scrollSpeedArrows: 40,          // speed of handle while mousedown within the handle container [milli sec]
    scrollStepArrows:  3            // handle increment between two mousedowns within the handle container [px]
  });
});

$(document).ready(function() {

  // Initialize Backgound Stretcher
  //$(document).bgStretcher({ images: [ '/images/backgrounds/home.jpg'], imageWidth: 1600, imageHeight: 1050 });

});

$(window).load(function() {

  $('#featured').orbit({
     animation: 'fade',                   // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 800,                 // how fast animtions are
     timer: true,                         // true or false to have the timer
     advanceSpeed: 5000,                  // if timer is enabled, time between transitions 
     pauseOnHover: false,                 // if you hover pauses the slider
     startClockOnMouseOut: false,         // if clock should start on MouseOut
     startClockOnMouseOutAfter: 1000,     // how long after MouseOut should the timer start again
     directionalNav: false,                // manual advancing directional navs
     captions: true,                      // do you want captions?
     captionAnimation: 'slideOpen',       // fade, slideOpen, none
     captionAnimationSpeed: 800,          // if so how quickly should they animate in
     bullets: false,                      // true or false to activate the bullet navigation
     bulletThumbs: false,                 // thumbnails for the bullets
     bulletThumbLocation: '',             // location from this file where thumbs will be
     afterSlideChange: function(){}       // empty function 
  });
  
});