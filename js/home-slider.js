function nextSlide(e,i,a,s){e.removeClass("selected from-left from-right").addClass("is-moving").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e.removeClass("is-moving")}),i.children("li").eq(s).addClass("selected from-right").prevAll().addClass("move-left"),checkVideo(e,i,s)}function prevSlide(e,i,a,s){e.removeClass("selected from-left from-right").addClass("is-moving").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e.removeClass("is-moving")}),i.children("li").eq(s).addClass("selected from-left").removeClass("move-left").nextAll().removeClass("move-left"),checkVideo(e,i,s)}function updateSliderNavigation(e,i){var a=e.find(".selected");a.removeClass("selected"),e.find("li").eq(i).addClass("selected")}function setAutoplay(e,i,a){e.hasClass("autoplay")&&(clearInterval(autoPlayId),autoPlayId=window.setInterval(function(){autoplaySlider(i)},a))}function autoplaySlider(e){visibleSlidePosition<e-1?(nextSlide(slidesWrapper.find(".selected"),slidesWrapper,sliderNav,visibleSlidePosition+1),visibleSlidePosition+=1):(prevSlide(slidesWrapper.find(".selected"),slidesWrapper,sliderNav,0),visibleSlidePosition=0),updateNavigationMarker(navigationMarker,visibleSlidePosition+1),updateSliderNavigation(sliderNav,visibleSlidePosition)}function uploadVideo(e){e.find(".cd-bg-video-wrapper").each(function(){var e=$(this);if(e.is(":visible")){var i=e.data("video"),a=$('<video loop><source src="'+i+'.mp4" type="video/mp4" /><source src="'+i+'.webm" type="video/webm" /></video>');a.appendTo(e),e.parent(".cd-bg-video.selected").length>0&&a.get(0).play()}})}function checkVideo(e,i,a){var s=e.find("video");s.length>0&&s.get(0).pause();var l=i.children("li").eq(a).find("video");l.length>0&&l.get(0).play()}function updateNavigationMarker(e,i){e.removeClassPrefix("item").addClass("item-"+i)}var slidesWrapper=$(".cd-hero-slider");if(slidesWrapper.length>0){var primaryNav=$(".cd-primary-nav"),sliderNav=$(".cd-slider-nav"),navigationMarker=$(".cd-marker"),slidesNumber=slidesWrapper.children("li").length,visibleSlidePosition=0,autoPlayId,autoPlayDelay=5e3;uploadVideo(slidesWrapper),setAutoplay(slidesWrapper,slidesNumber,autoPlayDelay),primaryNav.on("click",function(e){$(e.target).is(".cd-primary-nav")&&$(this).children("ul").toggleClass("is-visible")}),sliderNav.on("click","li",function(e){e.preventDefault();var i=$(this);if(!i.hasClass("selected")){var a=i.index(),s=slidesWrapper.find("li.selected").index();s<a?nextSlide(slidesWrapper.find(".selected"),slidesWrapper,sliderNav,a):prevSlide(slidesWrapper.find(".selected"),slidesWrapper,sliderNav,a),visibleSlidePosition=a,updateSliderNavigation(sliderNav,a),updateNavigationMarker(navigationMarker,a+1),setAutoplay(slidesWrapper,slidesNumber,autoPlayDelay)}})}$.fn.removeClassPrefix=function(e){return this.each(function(i,a){var s=a.className.split(" ").filter(function(i){return 0!==i.lastIndexOf(e,0)});a.className=$.trim(s.join(" "))}),this};