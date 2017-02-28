$(function() {

    //Initialize all scripts for page
    init = function() {
            runScripts();
            var page = $(location).attr('href');
            if (page.indexOf("contact") >= 0) {
                $(".typed").typed({
                    stringsElement: $('.typed-strings'),
                    typeSpeed: 10,
                    // time before backspacing
                    backDelay: 2000,
                    // loop
                    loop: true
                });
            };

        },

        ajaxLoad = function(html) {
            init();

            $("body").scrollTop(0);
            $('#content').velocity('fadeIn', {
              visibility: 'visible',
              complete: function() {
              }
            });
        };

    init();
    //Run Script that performs navigation hid/show and mobile function
    navigation();
    //Function that loads in the new content

    var load = function(url) {
        $("#content").load(url + " #content");
    };

    //Action to perform on link click
    $(document).on('click', 'a', function(e) {
        e.preventDefault();

        //Sets variables to be used for url and page name
        var $this = $(this),
            url = $this.attr("href"),
            title = $this.text();

        //Makes entries into browser history
        history.pushState({
            url: url,
            title: title
        }, title, url);

        document.title = title;

        $('#content').velocity('fadeOut', {
          visibility: 'visible',
          complete: function() {

            load(url);
          }
        });
        //Run script to load new content


    });

    // Need to reinitialize scripts so they run when page is loaded
    $(document).ajaxComplete(function() {
        console.log("Ajax Loaded");
        ajaxLoad();

        var page = $(location).attr('href');
        if (page.indexOf("contact") >= 0) {
            $(".typed").typed({
                stringsElement: $('.typed-strings'),
                typeSpeed: 10,
                // time before backspacing
                backDelay: 2000,
                // loop
                loop: true
            });
        };
    });

    //Enables use of back and forward buttons in browser
    $(window).on('popstate', function(e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            document.title = state.title;
            load(state.url);
        } else {
            document.title = title;
            $("#content").empty();
        }
    });

    //Start of navigation script
    function navigation() {
        console.log("Navigation script running");
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
            if (mainHeader.hasClass("nav-open")) {
                mainHeader.toggleClass('nav-open');
                isLateralNavAnimating = false;
            }

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
    //End of navigation script

    function runScripts() {
        // Find what current page is
        var page = $(location).attr('href');

        console.log("Main scripts running");

        //Run script that cycles employee images on hover
        employees();
        $('.images-rotation').imagesRotation();

        //Run script that allows for accordion drop downs
        accordion();


        //If agency page, run video script
        if (page.indexOf("agency") >= 0) {
            video();
        };

        //If culture page, run script for cycling cover image and text
        if (page.indexOf("culture") >= 0) {
            cultureHeader();
        };

        //If contact page, run script for text typing and load google map
        if (page.indexOf("contact") >= 0) {
            typing();
            map();
        };


        //Start of typing script
        function typing() {
            console.log("Typing script running");
            var Typed = function(el, options) {

                // chosen element to manipulate text
                this.el = $(el);

                // options
                this.options = $.extend({}, $.fn.typed.defaults, options);

                // attribute to type into
                this.isInput = this.el.is('input');
                this.attr = this.options.attr;

                // show cursor
                this.showCursor = this.isInput ? false : this.options.showCursor;

                // text content of element
                this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

                // html or plain text
                this.contentType = this.options.contentType;

                // typing speed
                this.typeSpeed = this.options.typeSpeed;

                // add a delay before typing starts
                this.startDelay = this.options.startDelay;

                // backspacing speed
                this.backSpeed = this.options.backSpeed;

                // amount of time to wait before backspacing
                this.backDelay = this.options.backDelay;

                // div containing strings
                this.stringsElement = this.options.stringsElement;

                // input strings of text
                this.strings = this.options.strings;

                // character number position of current string
                this.strPos = 0;

                // current array position
                this.arrayPos = 0;

                // number to stop backspacing on.
                // default 0, can change depending on how many chars
                // you want to remove at the time
                this.stopNum = 0;

                // Looping logic
                this.loop = this.options.loop;
                this.loopCount = this.options.loopCount;
                this.curLoop = 0;

                // for stopping
                this.stop = false;

                // custom cursor
                this.cursorChar = this.options.cursorChar;

                // shuffle the strings
                this.shuffle = this.options.shuffle;
                // the order of strings
                this.sequence = [];

                // All systems go!
                this.build();
            };

            Typed.prototype = {

                constructor: Typed,

                init: function() {
                    // begin the loop w/ first current string (global self.strings)
                    // current string will be passed as an argument each time after this
                    var self = this;
                    self.timeout = setTimeout(function() {
                        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;

                        // shuffle the array if true
                        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        // Start typing
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
                    }, self.startDelay);
                },

                build: function() {
                    var self = this;
                    // Insert cursor
                    if (this.showCursor === true) {
                        this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                        this.el.after(this.cursor);
                    }
                    if (this.stringsElement) {
                        this.strings = [];
                        this.stringsElement.hide();
                        console.log(this.stringsElement.children());
                        var strings = this.stringsElement.children();
                        $.each(strings, function(key, value) {
                            self.strings.push($(value).html());
                        });
                    }
                    this.init();
                },

                // pass current string state to each function, types 1 char per call
                typewrite: function(curString, curStrPos) {
                    // exit when stopped
                    if (this.stop === true) {
                        return;
                    }

                    // varying values for setTimeout during typing
                    // can't be global since number changes each time loop is executed
                    var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
                    var self = this;

                    // ------------- optional ------------- //
                    // backpaces a certain string faster
                    // ------------------------------------ //
                    // if (self.arrayPos == 1){
                    //  self.backDelay = 50;
                    // }
                    // else{ self.backDelay = 500; }

                    // contain typing function in a timeout humanize'd delay
                    self.timeout = setTimeout(function() {
                        // check for an escape character before a pause value
                        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                        // single ^ are removed from string
                        var charPause = 0;
                        var substr = curString.substr(curStrPos);
                        if (substr.charAt(0) === '^') {
                            var skip = 1; // skip atleast 1
                            if (/^\^\d+/.test(substr)) {
                                substr = /\d+/.exec(substr)[0];
                                skip += substr.length;
                                charPause = parseInt(substr);
                            }

                            // strip out the escape character and pause value so they're not printed
                            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                        }

                        if (self.contentType === 'html') {
                            // skip over html tags while typing
                            var curChar = curString.substr(curStrPos).charAt(0)
                            if (curChar === '<' || curChar === '&') {
                                var tag = '';
                                var endTag = '';
                                if (curChar === '<') {
                                    endTag = '>'
                                } else {
                                    endTag = ';'
                                }
                                while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                                    tag += curString.substr(curStrPos).charAt(0);
                                    curStrPos++;
                                    if (curStrPos + 1 > curString.length) {
                                        break;
                                    }
                                }
                                curStrPos++;
                                tag += endTag;
                            }
                        }

                        // timeout for any pause after a character
                        self.timeout = setTimeout(function() {
                            if (curStrPos === curString.length) {
                                // fires callback function
                                self.options.onStringTyped(self.arrayPos);

                                // is this the final string
                                if (self.arrayPos === self.strings.length - 1) {
                                    // animation that occurs on the last typed string
                                    self.options.callback();

                                    self.curLoop++;

                                    // quit if we wont loop back
                                    if (self.loop === false || self.curLoop === self.loopCount)
                                        return;
                                }

                                self.timeout = setTimeout(function() {
                                    self.backspace(curString, curStrPos);
                                }, self.backDelay);

                            } else {

                                /* call before functions if applicable */
                                if (curStrPos === 0) {
                                    self.options.preStringTyped(self.arrayPos);
                                }

                                // start typing each new char into existing string
                                // curString: arg, self.el.html: original text inside element
                                var nextString = curString.substr(0, curStrPos + 1);
                                if (self.attr) {
                                    self.el.attr(self.attr, nextString);
                                } else {
                                    if (self.isInput) {
                                        self.el.val(nextString);
                                    } else if (self.contentType === 'html') {
                                        self.el.html(nextString);
                                    } else {
                                        self.el.text(nextString);
                                    }
                                }

                                // add characters one by one
                                curStrPos++;
                                // loop the function
                                self.typewrite(curString, curStrPos);
                            }
                            // end of character pause
                        }, charPause);

                        // humanized value for typing
                    }, humanize);

                },

                backspace: function(curString, curStrPos) {
                    // exit when stopped
                    if (this.stop === true) {
                        return;
                    }

                    // varying values for setTimeout during typing
                    // can't be global since number changes each time loop is executed
                    var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
                    var self = this;

                    self.timeout = setTimeout(function() {

                        // ----- this part is optional ----- //
                        // check string array position
                        // on the first string, only delete one word
                        // the stopNum actually represents the amount of chars to
                        // keep in the current string. In my case it's 14.
                        // if (self.arrayPos == 1){
                        //  self.stopNum = 14;
                        // }
                        //every other time, delete the whole typed string
                        // else{
                        //  self.stopNum = 0;
                        // }

                        if (self.contentType === 'html') {
                            // skip over html tags while backspacing
                            if (curString.substr(curStrPos).charAt(0) === '>') {
                                var tag = '';
                                while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
                                    tag -= curString.substr(curStrPos).charAt(0);
                                    curStrPos--;
                                    if (curStrPos < 0) {
                                        break;
                                    }
                                }
                                curStrPos--;
                                tag += '<';
                            }
                        }

                        // ----- continue important stuff ----- //
                        // replace text with base text + typed characters
                        var nextString = curString.substr(0, curStrPos);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // if the number (id of character in current string) is
                        // less than the stop number, keep going
                        if (curStrPos > self.stopNum) {
                            // subtract characters one by one
                            curStrPos--;
                            // loop the function
                            self.backspace(curString, curStrPos);
                        }
                        // if the stop number has been reached, increase
                        // array position to next string
                        else if (curStrPos <= self.stopNum) {
                            self.arrayPos++;

                            if (self.arrayPos === self.strings.length) {
                                self.arrayPos = 0;

                                // Shuffle sequence again
                                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                                self.init();
                            } else
                                self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                        }

                        // humanized value for typing
                    }, humanize);

                },
                /**
                 * Shuffles the numbers in the given array.
                 * @param {Array} array
                 * @returns {Array}
                 */
                shuffleArray: function(array) {
                    var tmp, current, top = array.length;
                    if (top)
                        while (--top) {
                            current = Math.floor(Math.random() * (top + 1));
                            tmp = array[current];
                            array[current] = array[top];
                            array[top] = tmp;
                        }
                    return array;
                },

                // Start & Stop currently not working

                // , stop: function() {
                //     var self = this;

                //     self.stop = true;
                //     clearInterval(self.timeout);
                // }

                // , start: function() {
                //     var self = this;
                //     if(self.stop === false)
                //        return;

                //     this.stop = false;
                //     this.init();
                // }

                // Reset and rebuild the element
                reset: function() {
                    var self = this;
                    clearInterval(self.timeout);
                    var id = this.el.attr('id');
                    this.el.empty();
                    if (typeof this.cursor !== 'undefined') {
                        this.cursor.remove();
                    }
                    this.strPos = 0;
                    this.arrayPos = 0;
                    this.curLoop = 0;
                    // Send the callback
                    this.options.resetCallback();
                }

            };

            $.fn.typed = function(option) {
                return this.each(function() {
                    var $this = $(this),
                        data = $this.data('typed'),
                        options = typeof option == 'object' && option;
                    if (data) {
                        data.reset();
                    }
                    $this.data('typed', (data = new Typed(this, options)));
                    if (typeof option == 'string') data[option]();
                });
            };

            $.fn.typed.defaults = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                // typing speed
                typeSpeed: 0,
                // time before typing starts
                startDelay: 0,
                // backspacing speed
                backSpeed: 0,
                // shuffle the strings
                shuffle: false,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: false,
                // false = infinite
                loopCount: false,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // attribute to type (null == text)
                attr: null,
                // either html or text
                contentType: 'html',
                // call when done callback function
                callback: function() {},
                // starting callback function before each string
                preStringTyped: function() {},
                //callback for every typed string
                onStringTyped: function() {},
                // callback for reset
                resetCallback: function() {}
            };
        }
        //End of typing script

        //Start of accordion script
        function accordion() {
            console.log("Accordion script running");
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
        //End of accordion script



        //Start of culture script
        function cultureHeader() {
            console.log("Culture script running");
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
                $words.each(function() {
                    var word = $(this),
                        letters = word.text().split(''),
                        selected = word.hasClass('is-visible');
                    for (i in letters) {
                        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
                    }
                    var newLetters = letters.join('');
                    word.html(newLetters).css('opacity', 1);
                });
            }

            function animateHeadline($headlines) {
                var duration = animationDelay;
                $headlines.each(function() {
                    var headline = $(this);

                    if (headline.hasClass('loading-bar')) {
                        duration = barAnimationDelay;
                        setTimeout(function() {
                            headline.find('.words-wrapper').addClass('is-loading')
                        }, barWaiting);
                    } else if (headline.hasClass('clip')) {
                        var spanWrapper = headline.find('.words-wrapper'),
                            newWidth = spanWrapper.width() + 10
                        spanWrapper.css('width', newWidth);
                    } else if (!headline.hasClass('type')) {
                        //assign to .words-wrapper the width of its longest word
                        var words = headline.find('.words-wrapper b'),
                            width = 0;
                        words.each(function() {
                            var wordWidth = $(this).width();
                            if (wordWidth > width) width = wordWidth;
                        });
                        headline.find('.words-wrapper').css('width', width);
                    };

                    //trigger animation
                    setTimeout(function() {
                        hideWord(headline.find('.is-visible').eq(0))
                    }, duration);
                });
            }

            function hideWord($word) {
                var nextWord = takeNext($word);

                if ($word.parents('.headline').hasClass('type')) {
                    var parentSpan = $word.parent('.words-wrapper');
                    parentSpan.addClass('selected').removeClass('waiting');
                    setTimeout(function() {
                        parentSpan.removeClass('selected');
                        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                    }, selectionDuration);
                    setTimeout(function() {
                        showWord(nextWord, typeLettersDelay)
                    }, typeAnimationDelay);

                } else if ($word.parents('.headline').hasClass('letters')) {
                    var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                    hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                    showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

                } else if ($word.parents('.headline').hasClass('clip')) {
                    $word.parents('.words-wrapper').animate({
                        width: '2px'
                    }, revealDuration, function() {
                        switchWord($word, nextWord);
                        showWord(nextWord);
                    });

                } else if ($word.parents('.headline').hasClass('loading-bar')) {
                    $word.parents('.words-wrapper').removeClass('is-loading');
                    switchWord($word, nextWord);
                    setTimeout(function() {
                        hideWord(nextWord)
                    }, barAnimationDelay);
                    setTimeout(function() {
                        $word.parents('.words-wrapper').addClass('is-loading')
                    }, barWaiting);

                } else {
                    switchWord($word, nextWord);
                    setTimeout(function() {
                        hideWord(nextWord)
                    }, animationDelay);
                }
            }

            function showWord($word, $duration) {
                if ($word.parents('.headline').hasClass('type')) {
                    showLetter($word.find('i').eq(0), $word, false, $duration);
                    $word.addClass('is-visible').removeClass('is-hidden');

                } else if ($word.parents('.headline').hasClass('clip')) {
                    $word.parents('.words-wrapper').animate({
                        'width': $word.width() + 10
                    }, revealDuration, function() {
                        setTimeout(function() {
                            hideWord($word)
                        }, revealAnimationDelay);
                    });
                }
            }

            function hideLetter($letter, $word, $bool, $duration) {
                $letter.removeClass('in').addClass('out');

                if (!$letter.is(':last-child')) {
                    setTimeout(function() {
                        hideLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else if ($bool) {
                    setTimeout(function() {
                        hideWord(takeNext($word))
                    }, animationDelay);
                }

                if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                    var nextWord = takeNext($word);
                    switchWord($word, nextWord);
                }
            }

            function showLetter($letter, $word, $bool, $duration) {
                $letter.addClass('in').removeClass('out');

                if (!$letter.is(':last-child')) {
                    setTimeout(function() {
                        showLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else {
                    if ($word.parents('.headline').hasClass('type')) {
                        setTimeout(function() {
                            $word.parents('.words-wrapper').addClass('waiting');
                        }, 200);
                    }
                    if (!$bool) {
                        setTimeout(function() {
                            hideWord($word)
                        }, animationDelay)
                    }
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
        //End of culture script

        //Start of employees script
        function employees() {
            console.log("Employees script running");
            /*
             * Images rotation jQuery plugin | 2014-08-12
             * Copyright (c) 2013-2014 sladex | MIT License
             * https://github.com/sladex/images-rotation
             */

            $.fn.imagesRotation = function(options) {
                var defaults = {
                        images: [], // urls to images
                        dataAttr: 'images', // html5 data- attribute which contains an array with urls to images
                        imgSelector: 'img', // element to change
                        interval: 1000, // ms
                        intervalFirst: 500, // first image change, ms
                        callback: null // first argument would be the current image url
                    },
                    settings = $.extend({}, defaults, options);

                var clearRotationInterval = function($el) {
                        clearInterval($el.data('imagesRotaionTimeout'));
                        $el.removeData('imagesRotaionTimeout');
                        clearInterval($el.data('imagesRotaionInterval'));
                        $el.removeData('imagesRotaionInterval');
                    },
                    getImagesArray = function($this) {
                        var images = settings.images.length ? settings.images : $this.data(settings.dataAttr);
                        return $.isArray(images) ? images : false;
                    },
                    preload = function(arr) { // images preloader
                        $(arr).each(function() {
                            $('<img/>')[0].src = this;
                        });
                    },
                    init = function() {
                        var imagesToPreload = [];
                        this.each(function() { // preload next image
                            var images = getImagesArray($(this));
                            if (images && images.length > 1) {
                                imagesToPreload.push(images[1]);
                            }
                        });
                        preload(imagesToPreload);
                    };

                init.call(this);

                this.on('mouseenter.imagesRotation', function() {
                    var $this = $(this),
                        $img = settings.imgSelector ? $(settings.imgSelector, $this) : null,
                        images = getImagesArray($this),
                        imagesLength = images ? images.length : null,
                        changeImg = function() {
                            var prevIndex = $this.data('imagesRotationIndex') || 0,
                                index = (prevIndex + 1 < imagesLength) ? prevIndex + 1 : 0,
                                nextIndex = (index + 1 < imagesLength) ? index + 1 : 0;
                            $this.data('imagesRotationIndex', index);
                            if ($img && $img.length > 0) {
                                if ($img.is('img')) {
                                    $img.attr('src', images[index]);
                                } else {
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
                        var timeout = setTimeout(function() {
                            changeImg();
                            var interval = setInterval(changeImg, settings.interval);
                            $this.data('imagesRotaionInterval', interval); // store to clear interval on mouseleave
                        }, settings.intervalFirst);
                        $this.data('imagesRotaionTimeout', timeout);
                    }
                }).on('mouseleave.imagesRotation', function() {
                    clearRotationInterval($(this));
                }).on('imagesRotationRemove', function() {
                    var $this = $(this);
                    $this.off('.imagesRotation');
                    clearRotationInterval($this);
                });
            };

            $.fn.imagesRotationRemove = function() {
                this.trigger('imagesRotationRemove');
            };
        };
        //End of employees script

        //Start of video script
        function video() {
            console.log("Video script running");
            var fullScreenVideo = fullScreenVideo || {};
            var containerHeight = 0;

            fullScreenVideo = {
                name: 'fullScreenVideo',
                backgroundVideo: 'kr5kajxq3j',
                backgroundVideoDiv: '#wistia_kr5kajxq3j',

                embedVideo: function() {
                    var videoOptions = {};

                    Wistia.obj.merge(videoOptions, {
                        plugin: {
                            cropFill: {
                                src: "//fast.wistia.com/labs/crop-fill/plugin.js"
                            }
                        }
                    });

                    wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundVideo, videoOptions);

                    wistiaEmbed.bind("play", function() {
                        wistiaEmbed.pause();
                        wistiaEmbed.time(0);
                        $(fullScreenVideo.backgroundVideoDiv).css('visibility', 'visible');
                        wistiaEmbed.play();
                        return this.unbind;
                    });

                },

                fixTextPosition: function() {
                    var width = $(window).width();
                    var height = $(window).height();
                    textWidth = $("#text").width();
                    textHeight = $("#text").height();
                    $("#video_container").css("width", width).css("height", (height * .65));
                    var containerHeight = $("#video_container").height();
                    $("#text").css("left", (width / 2) - (textWidth / 2)).css("top", (containerHeight / 2) - (textHeight / 2));
                },

                fixVideoPosition: function() {}
            }

            $(document).ready(function() {
                fullScreenVideo.fixTextPosition();
                fullScreenVideo.fixVideoPosition();
                $("#text").delay(200).animate({
                    opacity: 1
                }, 650);
            });

            $(window).resize(fullScreenVideo.fixTextPosition);

            fullScreenVideo.embedVideo();
        }
        //End of video script

        //Start of map script
        function map() {
            console.log("Map script running");
            //set your google maps parameters
            var latitude = 44.485759,
                longitude = -87.992912,
                map_zoom = 14;

            //google map custom marker icon - .png fallback for IE11
            var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
            var marker_url = (is_internetExplorer11) ? '/img/contact/cd-icon-location.png' : '/img/contact/cd-icon-location.svg';

            //define the basic color of your map, plus a value for saturation and brightness
            var main_color = '#2d313f',
                saturation_value = 0,
                brightness_value = 5;

            //we define here the style of the map
            var style = [{
                    //set saturation for the labels on the map
                    elementType: "labels",
                    stylers: [{
                        saturation: saturation_value
                    }]
                },
                { //poi stands for point of interest - don't show these lables on the map
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    //don't show highways lables on the map
                    featureType: 'road.highway',
                    elementType: 'labels',
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    //don't show local road lables on the map
                    featureType: "road.local",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    //don't show arterial road lables on the map
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                {
                    //don't show road lables on the map
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                },
                //style different elements on the map
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.government",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.sport_complex",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.attraction",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "poi.business",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]

                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                            hue: "#baab84"
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                            hue: main_color
                        },
                        {
                            visibility: "on"
                        },
                        {
                            lightness: brightness_value
                        },
                        {
                            saturation: saturation_value
                        }
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
                var controlUIzoomIn = document.getElementById('cd-zoom-in'),
                    controlUIzoomOut = document.getElementById('cd-zoom-out');
                controlDiv.appendChild(controlUIzoomIn);
                controlDiv.appendChild(controlUIzoomOut);

                // Setup the click event listeners and zoom-in or out according to the clicked element
                google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                    map.setZoom(map.getZoom() + 1)
                });
                google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                    map.setZoom(map.getZoom() - 1)
                });
            }

            var zoomControlDiv = document.createElement('div');
            var zoomControl = new CustomZoomControl(zoomControlDiv, map);

            //insert the zoom div on the top left of the map
            map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
        };
        //End of map script

    };
    //End of runScripts
});
