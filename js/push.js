$(function() {
  var $main = $('.js-main'),
      changedPage = false,

  /* ----- Do this when a page loads ----- */
  init = function() {
    /* ----- This is where I would run any page specific functions ----- */
  },

  /* ----- Do this for ajax page loads ----- */
  ajaxLoad = function(html) {
    init();

    /* ----- Here you could maybe add logic to set the HTML title to the new page title ----- */

    /* ----- Used for popState event (back/forward browser buttons) ----- */
    changedPage = true;
  },

  loadPage = function(href) {

    $main.wrapInner('<div class="new-results-div" />');

    /* ----- Set height of $main to ensure the footer doesn't jump up -----  */
    var newResultsHeight = $('.new-results-div').outerHeight();
    $main.height(newResultsHeight);

    $('.js-ajax-wrapper').velocity('transition.fadeOut', {
      /* ----- Upon completion of animating out content put user at top of page. ----- */
      complete: function(){
        $('html').velocity("scroll", {
          duration: 0,
          easing: "ease",
          mobileHA: false
        });
      }
    });

    $.ajax({
      type: 'POST',
      url: href,
      data: {},
      success: function(result){
        /* ----- Where the new content is added ----- */
        $main.html(result);

        /* ----- Wrap content in div so we can get it's height ----- */
        $main.wrapInner('<div class="new-results-div" />');

        /* ----- Get height of new container inside results container and set $main to it so there's no content jumpage -----  */
        var newResultsHeight = $('.new-results-div').outerHeight();
        $main.height(newResultsHeight);

        /* ----- Bring In New Content ----- */
        $('.js-main .js-ajax-wrapper').velocity('transition.fadeIn', {
          visibility: 'visible',
          complete: function() {
            /* ----- Removes the temp height from $main ----- */
            $main.css('height', '');

            ajaxLoad();
          }
        });
      },
      error: function(){
        console.log("error.");
        location.reload();
      }
    });

  };

  /* ----- This runs on the first page load with no ajax ----- */
  init();

  $(window).on("popstate", function(e) {
    // -------------------------------------
    //   If there was an AJAX page transition already,
    //   then AJAX page load the requested page from the back or forwards button click.
    //   Variable initially set after the $main variable.
    // -------------------------------------
    if (changedPage) loadPage(location.href);
  });

  $(document).on('click', 'a', function() {
    var href = $(this).attr("href");

    if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
      history.pushState({}, '', href);
      loadPage(href);
      return false;
    }
  });
});
