$(function () {

    AOS.init();
    setContent("main")

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    $(document).on('click', '#navbarNav .nav-link', function () {
        var page = $(this).data("page");
        if (page) {
            setContent(page)
        }
    });

    $(document).on('click', '.navbar-brand', function () {
        setContent($(this).data("page"))
    });

    //search-form
    $('[data-toggle=search-form]').on('click', function () {
        $('.search-form-wrapper').toggleClass('open');
        $('.search-form-wrapper .search').on('focus');
        $('html').toggleClass('search-form-open');
    });
    $('[data-toggle=search-form-close]').on('click', function () {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
    });

    function setContent(page) {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
        $("#content").load("./pages/" + page + ".html");
    }
});

