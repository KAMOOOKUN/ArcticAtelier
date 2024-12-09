$(function () {

    var dataForHim = [
        { "name": "Aurora Men" },
        { "name": "The Voyager" },
        { "name": "Northern Edge" },
        { "name": "Minimalist Man" },
        { "name": "Tundra Style" },
        { "name": "Glacier Atelier" },
        { "name": "Polaris" },
        { "name": "Wild Terrain" },
        { "name": "Midnight Wanderer" },
        { "name": "Snowfield Walk" },
        { "name": "Frost Gentleman" },
        { "name": "Ice Age Men" },
        { "name": "Blizzard Warrior" },
        { "name": "Far North Tailor" },
        { "name": "Frozen Peak" },

    ];

    var dataForHer = [
        { "name": "Snow Embrace" },
        { "name": "Arctic Grace" },
        { "name": "Aurora Aesthetics" },
        { "name": "Winter Bloom" },
        { "name": "Frost Elegance" },
        { "name": "Glacier Muse" },
        { "name": "Snowland Radiance" },
        { "name": "Midnight Elegance" },
        { "name": "Frosted Charm" },
        { "name": "Stellar Weave" },
        { "name": "Frozen Beauty" },
        { "name": "Icy Allure" },
        { "name": "Snowflake Tales" },
        { "name": "Glacial Romance" },
        { "name": "Frosted Silhouette" },

    ];

    var dataForHome = [
        { "name": "Nordic Haven" },
        { "name": "Arctic Serenity" },
        { "name": "Snowfall Moments" },
        { "name": "Glacier Luxe" },
        { "name": "Frosted Comfort" },
        { "name": "Northern Sanctuary" },
        { "name": "Alpine Essence" },
        { "name": "Arctic Cocoon" },

    ];

    var tab = "#represented";

    var current = 0;

    var size = 15

    $(document).on('click', '#fashionTab a', function () {
        tab = $(this).attr('data-bs-target');
        current = 0;
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            current += size;
            switch (tab) {
                case "#represented":
                    renderRepresentedContent()
                    break;
                case "#works":
                    renderWorksContent()
                    break;
            }
        }
    });

    function renderWorksContent() {

        var currentData = dataForHim.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-6 col-md-4 artist-block ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="img-hover-zoom img-hover-zoom--xyz position-relative">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid position-relative img-filter ls-is-cached lazyloaded" src="./assets/images/forhim/' + index % 15 + '.png"/>';
            content += '</a>';
            content += '<div class="position-absolute text-nowrap">';
            content += '<div class="artist">';
            content += '<a href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            $("#works .text-center").append(content);
        })

    }

    function renderRepresentedContent() {

        var currentData = dataForHer.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-6 col-md-4 artist-block ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="img-hover-zoom img-hover-zoom--xyz position-relative">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid position-relative img-filter ls-is-cached lazyloaded" src="./assets/images/forher/' + index % 15 + '.png"/>';
            content += '</a>';
            content += '<div class="position-absolute text-nowrap">';
            content += '<div class="artist">';
            content += '<a href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            $("#represented .text-center").append(content);
        })
    }

    function renderListContent() {
        var content = "";
        $.each(dataForHome, function (index, value) {
            content += '<div class="col-6 col-md-3 animate__animated animate__fadeInUp animate__slower">';
            content += '<div class="py-3 text-uppercase">';
            content += '<a class="list-name" href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
        })
        $("#list .text-center").html(content);
    }

    renderRepresentedContent();
    renderWorksContent();
    renderListContent();

})