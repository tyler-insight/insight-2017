$(".project-body img").on('click', function(){

  var pos = $(this).position();
  if(!$('.lightbox').hasClass('open')){
    var $img = $(this),
        origWidth = $img.prop("naturalWidth"),
        origHeight = $img.prop("naturalHeight"),
        posLeft = $(this).offset().left,
        posTop = $(this).offset().top,
        elWidth = $(this).width(),
        elHeight = $(this).height(),
        centerX = $(window).width() / 2,
        centerY = $(window).height() / 2,
        newX = centerX - (origWidth / 2),
        newY = centerY - (origHeight / 2),
    posTop = (posTop - $(window).scrollTop());

    console.log(
        $img.prop("naturalWidth") +'\n'+  // Width  (Natural)
        $img.prop("naturalHeight") +'\n'+ // Height (Natural)
        $img.prop("width") +'\n'+         // Width  (Rendered)
        $img.prop("height") +'\n'+        // Height (Rendered)
        $img.prop("x") +'\n'+             // X offset
        $img.prop("y")                    // Y offset ...
    );

    console.log(pos);
    console.log(elWidth);
    console.log(elHeight);
    console.log('Center X ' + centerX);
    console.log('Center Y ' + centerY);

    $('.lightbox').toggleClass('open');
    $(this).toggleClass('over');

    $(this).css({left: posLeft, top: posTop, width: elWidth, height: elHeight});
    $(this).velocity({
      top: newY,
      left: newX,
      easing: 'ease-out'
    }).velocity({
      width: origWidth,
      height: origHeight,
    });
  }



});
