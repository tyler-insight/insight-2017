runScripts();

function runScripts() {
    var page = $(location).attr('href');

    if (page.indexOf("contact") >= 0){
      map();
    };
    accordion();
    navigation();
    if (page.indexOf("culture") >= 0){
      cultureHeader();
    };

    employees();
    $('.images-rotation').imagesRotation();

    function accordion() {

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
                var self = this;
                setTimeout(function() {
                    theOffset = $(self).offset();
                    $('body,html').animate({
                        scrollTop: theOffset.top - 10
                    }, 800, 'swing');
                }, 100); // ensure the collapse animation is done
            }
        }
    };

    function navigation() {
        var mainHeader = $('.cd-auto-hide-header'),
            secondaryNavigation = $('.cd-secondary-nav'),
            //this applies only if secondary nav is below intro section
            belowNavHeroContent = $('.sub-nav-hero'),
            headerHeight = mainHeader.height();
        var isLateralNavAnimating = false;

        //set scrolling variables
        var scrolling = false,
            previousTop = 0,
            currentTop = 0,
            scrollDelta = 10,
            scrollOffset = 0;

        mainHeader.on('click', '.nav-trigger', function(event) {
            // open primary navigation on mobile
            event.preventDefault();
            if (!isLateralNavAnimating) {
                if ($(this).parents('.csstransitions').length >= 0) isLateralNavAnimating = true;


                mainHeader.toggleClass('nav-open');
                $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    //animation is over
                    isLateralNavAnimating = false;
                });
            }
        });
        mainHeader.on('click', 'a', function(event) {
          mainHeader.toggleClass('nav-open');
          isLateralNavAnimating = false;
        });

        $(window).on('scroll', function() {
            if (!scrolling && !mainHeader.hasClass("nav-open")) {
                scrolling = true;
                (!window.requestAnimationFrame) ?
                setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
            }
        });

        $(window).on('resize', function() {
            headerHeight = mainHeader.height();
        });

        function autoHideHeader() {
            var currentTop = $(window).scrollTop();

            (belowNavHeroContent.length > 0) ?
            checkStickyNavigation(currentTop) // secondary navigation below intro
                : checkSimpleNavigation(currentTop);

            previousTop = currentTop;
            scrolling = false;
        };

        function checkSimpleNavigation(currentTop) {
            //there's no secondary nav or secondary nav is below primary nav
            if (previousTop - currentTop > scrollDelta) {
                //if scrolling up...
                mainHeader.removeClass('is-hidden');
            } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
                //if scrolling down...
                mainHeader.addClass('is-hidden');
            }
        };

        function checkStickyNavigation(currentTop) {
            //secondary nav below intro section - sticky secondary nav
            var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

            if (previousTop >= currentTop) {
                //if scrolling up...
                if (currentTop < secondaryNavOffsetTop) {
                    //secondary nav is not fixed
                    mainHeader.removeClass('is-hidden');
                    secondaryNavigation.removeClass('fixed slide-up');
                    belowNavHeroContent.removeClass('secondary-nav-fixed');
                } else if (previousTop - currentTop > scrollDelta) {
                    //secondary nav is fixed
                    mainHeader.removeClass('is-hidden');
                    secondaryNavigation.removeClass('slide-up').addClass('fixed');
                    belowNavHeroContent.addClass('secondary-nav-fixed');
                }

            } else {
                //if scrolling down...
                if (currentTop > secondaryNavOffsetTop + scrollOffset) {
                    //hide primary nav
                    mainHeader.addClass('is-hidden');
                    secondaryNavigation.addClass('fixed slide-up');
                    belowNavHeroContent.addClass('secondary-nav-fixed');
                } else if (currentTop > secondaryNavOffsetTop) {
                    //once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset
                    mainHeader.removeClass('is-hidden');
                    secondaryNavigation.addClass('fixed').removeClass('slide-up');
                    belowNavHeroContent.addClass('secondary-nav-fixed');
                }

            }
        };
    };

    function cultureHeader(){
      //set animation timing
    	var animationDelay = 4000,
    		//loading bar effect
    		barAnimationDelay = 3800,
    		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    		//letters effect
    		lettersDelay = 50,
    		//type effect
    		typeLettersDelay = 150,
    		selectionDuration = 500,
    		typeAnimationDelay = selectionDuration + 800,
    		//clip effect
    		revealDuration = 600,
    		revealAnimationDelay = 1500;

    	initHeadline();


    	function initHeadline() {
    		//insert <i> element for each letter of a changing word
    		singleLetters($('.headline.letters').find('b'));
    		//initialise headline animation
    		animateHeadline($('.headline'));
    	}

    	function singleLetters($words) {
    		$words.each(function(){
    			var word = $(this),
    				letters = word.text().split(''),
    				selected = word.hasClass('is-visible');
    			for (i in letters) {
    				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
    				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
    			}
    		    var newLetters = letters.join('');
    		    word.html(newLetters).css('opacity', 1);
    		});
    	}

    	function animateHeadline($headlines) {
    		var duration = animationDelay;
    		$headlines.each(function(){
    			var headline = $(this);

    			if(headline.hasClass('loading-bar')) {
    				duration = barAnimationDelay;
    				setTimeout(function(){ headline.find('.words-wrapper').addClass('is-loading') }, barWaiting);
    			} else if (headline.hasClass('clip')){
    				var spanWrapper = headline.find('.words-wrapper'),
    					newWidth = spanWrapper.width() + 10
    				spanWrapper.css('width', newWidth);
    			} else if (!headline.hasClass('type') ) {
    				//assign to .words-wrapper the width of its longest word
    				var words = headline.find('.words-wrapper b'),
    					width = 0;
    				words.each(function(){
    					var wordWidth = $(this).width();
    				    if (wordWidth > width) width = wordWidth;
    				});
    				headline.find('.words-wrapper').css('width', width);
    			};

    			//trigger animation
    			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    		});
    	}

    	function hideWord($word) {
    		var nextWord = takeNext($word);

    		if($word.parents('.headline').hasClass('type')) {
    			var parentSpan = $word.parent('.words-wrapper');
    			parentSpan.addClass('selected').removeClass('waiting');
    			setTimeout(function(){
    				parentSpan.removeClass('selected');
    				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
    			}, selectionDuration);
    			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

    		} else if($word.parents('.headline').hasClass('letters')) {
    			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
    			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
    			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    		}  else if($word.parents('.headline').hasClass('clip')) {
    			$word.parents('.words-wrapper').animate({ width : '2px' }, revealDuration, function(){
    				switchWord($word, nextWord);
    				showWord(nextWord);
    			});

    		} else if ($word.parents('.headline').hasClass('loading-bar')){
    			$word.parents('.words-wrapper').removeClass('is-loading');
    			switchWord($word, nextWord);
    			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
    			setTimeout(function(){ $word.parents('.words-wrapper').addClass('is-loading') }, barWaiting);

    		} else {
    			switchWord($word, nextWord);
    			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    		}
    	}

    	function showWord($word, $duration) {
    		if($word.parents('.headline').hasClass('type')) {
    			showLetter($word.find('i').eq(0), $word, false, $duration);
    			$word.addClass('is-visible').removeClass('is-hidden');

    		}  else if($word.parents('.headline').hasClass('clip')) {
    			$word.parents('.words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
    				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
    			});
    		}
    	}

    	function hideLetter($letter, $word, $bool, $duration) {
    		$letter.removeClass('in').addClass('out');

    		if(!$letter.is(':last-child')) {
    		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    		} else if($bool) {
    		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    		}

    		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
    			var nextWord = takeNext($word);
    			switchWord($word, nextWord);
    		}
    	}

    	function showLetter($letter, $word, $bool, $duration) {
    		$letter.addClass('in').removeClass('out');

    		if(!$letter.is(':last-child')) {
    			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    		} else {
    			if($word.parents('.headline').hasClass('type')) { setTimeout(function(){ $word.parents('.words-wrapper').addClass('waiting'); }, 200);}
    			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    		}
    	}

    	function takeNext($word) {
    		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    	}

    	function takePrev($word) {
    		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    	}

    	function switchWord($oldWord, $newWord) {
    		$oldWord.removeClass('is-visible').addClass('is-hidden');
    		$newWord.removeClass('is-hidden').addClass('is-visible');
    	}


    };

    function employees(){
      /*
       * Images rotation jQuery plugin | 2014-08-12
       * Copyright (c) 2013-2014 sladex | MIT License
       * https://github.com/sladex/images-rotation
       */

      $.fn.imagesRotation = function (options) {
          var defaults = {
                  images: [],         // urls to images
                  dataAttr: 'images', // html5 data- attribute which contains an array with urls to images
                  imgSelector: 'img', // element to change
                  interval: 1000,     // ms
                  intervalFirst: 500, // first image change, ms
                  callback: null      // first argument would be the current image url
              },
              settings = $.extend({}, defaults, options);

          var clearRotationInterval = function ($el) {
                  clearInterval($el.data('imagesRotaionTimeout'));
                  $el.removeData('imagesRotaionTimeout');
                  clearInterval($el.data('imagesRotaionInterval'));
                  $el.removeData('imagesRotaionInterval');
              },
              getImagesArray = function ($this) {
                  var images = settings.images.length ? settings.images : $this.data(settings.dataAttr);
                  return $.isArray(images) ? images : false;
              },
              preload = function (arr) {  // images preloader
                  $(arr).each(function () {
                      $('<img/>')[0].src = this;
                  });
              },
              init = function () {
                  var imagesToPreload = [];
                  this.each(function () {  // preload next image
                      var images = getImagesArray($(this));
                      if (images && images.length > 1) {
                          imagesToPreload.push(images[1]);
                      }
                  });
                  preload(imagesToPreload);
              };

          init.call(this);

          this.on('mouseenter.imagesRotation', function () {
              var $this = $(this),
                  $img = settings.imgSelector ? $(settings.imgSelector, $this) : null,
                  images = getImagesArray($this),
                  imagesLength = images ? images.length : null,
                  changeImg = function () {
                      var prevIndex = $this.data('imagesRotationIndex') || 0,
                          index = (prevIndex + 1 < imagesLength) ? prevIndex + 1 : 0,
                          nextIndex = (index + 1 < imagesLength) ? index + 1 : 0;
                      $this.data('imagesRotationIndex', index);
                      if ($img && $img.length > 0) {
                          if ($img.is('img')) {
                              $img.attr('src', images[index]);
                          }
                          else {
                              $img.css('background-image', 'url(' + images[index] + ')');
                          }
                      }
                      if (settings.callback) {
                          settings.callback(images[index]);
                      }
                      preload([images[nextIndex]]); // preload next image
                  };
              if (imagesLength) {
                  clearRotationInterval($this); // in case of dummy intervals
                  var timeout = setTimeout(function () {
                      changeImg();
                      var interval = setInterval(changeImg, settings.interval);
                      $this.data('imagesRotaionInterval', interval); // store to clear interval on mouseleave
                  }, settings.intervalFirst);
                  $this.data('imagesRotaionTimeout', timeout);
              }
          }).on('mouseleave.imagesRotation', function () {
              clearRotationInterval($(this));
          }).on('imagesRotationRemove', function () {
              var $this = $(this);
              $this.off('.imagesRotation');
              clearRotationInterval($this);
          });
      };

      $.fn.imagesRotationRemove = function () {
          this.trigger('imagesRotationRemove');
      };
    };

    function map(){
      //set your google maps parameters
    	var latitude = 44.485759,
    		longitude = -87.992912,
    		map_zoom = 14;

    	//google map custom marker icon - .png fallback for IE11
    	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    	var marker_url = ( is_internetExplorer11 ) ? '/img/contact/cd-icon-location.png' : '/img/contact/cd-icon-location.svg';

    	//define the basic color of your map, plus a value for saturation and brightness
    	var	main_color = '#2d313f',
    		saturation_value= 0,
    		brightness_value= 5;

    	//we define here the style of the map
    	var style= [
    		{
    			//set saturation for the labels on the map
    			elementType: "labels",
    			stylers: [
    				{saturation: saturation_value}
    			]
    		},
    	    {	//poi stands for point of interest - don't show these lables on the map
    			featureType: "poi",
    			elementType: "labels",
    			stylers: [
    				{visibility: "off"}
    			]
    		},
    		{
    			//don't show highways lables on the map
    	        featureType: 'road.highway',
    	        elementType: 'labels',
    	        stylers: [
    	            {visibility: "off"}
    	        ]
    	    },
    		{
    			//don't show local road lables on the map
    			featureType: "road.local",
    			elementType: "labels.icon",
    			stylers: [
    				{visibility: "off"}
    			]
    		},
    		{
    			//don't show arterial road lables on the map
    			featureType: "road.arterial",
    			elementType: "labels.icon",
    			stylers: [
    				{visibility: "off"}
    			]
    		},
    		{
    			//don't show road lables on the map
    			featureType: "road",
    			elementType: "geometry.stroke",
    			stylers: [
    				{visibility: "off"}
    			]
    		},
    		//style different elements on the map
    		{
    			featureType: "transit",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "poi",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "poi.government",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "poi.sport_complex",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "poi.attraction",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "poi.business",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "transit",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "transit.station",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "landscape",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]

    		},
    		{
    			featureType: "road",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "road.highway",
    			elementType: "geometry.fill",
    			stylers: [
    				{ hue: "#baab84" },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		},
    		{
    			featureType: "water",
    			elementType: "geometry",
    			stylers: [
    				{ hue: main_color },
    				{ visibility: "on" },
    				{ lightness: brightness_value },
    				{ saturation: saturation_value }
    			]
    		}
    	];

    	//set google map options
    	var map_options = {
          	center: new google.maps.LatLng(latitude, longitude),
          	zoom: map_zoom,
          	panControl: false,
          	zoomControl: false,
          	mapTypeControl: false,
          	streetViewControl: false,
          	mapTypeId: google.maps.MapTypeId.ROADMAP,
          	scrollwheel: false,
          	styles: style,
        }
        //inizialize the map
    	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    	//add a custom marker to the map
    	var marker = new google.maps.Marker({
    	  	position: new google.maps.LatLng(latitude, longitude),
    	    map: map,
    	    visible: true,
    	 	icon: marker_url,
    	});

    	//add custom buttons for the zoom-in/zoom-out on the map
    	function CustomZoomControl(controlDiv, map) {
    		//grap the zoom elements from the DOM and insert them in the map
    	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
    	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
    	  	controlDiv.appendChild(controlUIzoomIn);
    	  	controlDiv.appendChild(controlUIzoomOut);

    		// Setup the click event listeners and zoom-in or out according to the clicked element
    		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
    		    map.setZoom(map.getZoom()+1)
    		});
    		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
    		    map.setZoom(map.getZoom()-1)
    		});
    	}

    	var zoomControlDiv = document.createElement('div');
     	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

      	//insert the zoom div on the top left of the map
      	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    };

};
