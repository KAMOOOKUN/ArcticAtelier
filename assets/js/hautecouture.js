$(function () {
    var data = [
        { "title": "Tailored Suits Line: Arctic Sartoria" },
        { "title": "Cashmere Sets Line: Polar Luxe" },
        { "title": "Loungewear Line: Aurora Comfort" },
        { "title": "Accessories Line: Frosted Elegance" },
        { "title": "Home Décor Line: Arctic Haven" },
        { "title": "Velouté Vogue" },
        { "title": "Serene Silhouettes" },
        { "title": "Éclat Élégance" },
        { "title": "Celestial Comfort" },
    ];
    var current = 0;

    var size = 12

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            current += size;
            renderContent()
        }
    });

    function renderContent() {
        var currentData = data.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-12 align-self-center col-md-6 text-center ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="title pt-3 pb-md-3">VIEWING ROOM</div>';
            content += '<a href="javascript:;">';
            content += '<h2>' + value.title + '</h2>';
            content += '</a>';
            content += '</div>';
            content += '<div class="col-12 col-md-6 mt-5 ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid" src="./assets/images/hautecouture/' + index % 12 + '.png"/>';
            content += '</a>';
            content += '</div>';
            $("#hautecoutureContent").append(content);
        })
    }

    renderContent();
})

