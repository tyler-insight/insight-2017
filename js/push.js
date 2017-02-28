$(function () {

    //Function that loads in the new content
    var load = function (url) {
      $("#content").load(url + " #content");
    };

    $(document).on('click', 'a', function (e) {
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

        load(url);

    });
    //Enables use of back and forward buttons in browser
    $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            document.title = state.title;
            load(state.url);
        } else {
            document.title = title;
            $("#content").empty();
        }
    });
});


// Need to reinitialize scripts so they run when page is loaded
