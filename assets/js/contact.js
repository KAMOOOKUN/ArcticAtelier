$(function () {
    var data = [
        { "title": "New York", "desc": "791 Madison Avenue New York,", "desc2": "New York NY 10065", "phone": "T +1 646 707 3299", "email": "nyc@arcticatelier.com" },
        { "title": "Miami", "desc": "151 NE 41St Street suite 131", "desc2": "Miami FL 33137", "phone": "T +1 305 868 3337", "email": "miami@arcticatelier.com" },
        { "title": "Bal Harbour", "desc": "The St. Regis, Bal Harbour Resort, 9703 Collins Avenue, Bal Harbour", "desc2": "Bal Harbour FL 33154", "phone": "T +1 305 861 9022", "email": "balharbour@arcticatelier.com" },
        { "title": "Aspen", "desc": "501 E Dean Street Residences at the Little Nell", "desc2": "Aspen CO 81611", "phone": "T +1 970 710 7289", "email": "aspen@arcticatelier.com" },
        { "title": "London", "desc": "65 - 66 New Bond Street", "desc2": "London W1S 1RW", "phone": "T +44 (0)20 7491 2999", "email": "london@arcticatelier.com" },
        { "title": "Paris", "desc": "62 rue du faubourg Saint-Honoré", "desc2": "Paris 75008", "phone": "T +33 (0)1 42 96 39 00", "email": "paris@arcticatelier.com" },
        { "title": "Monaco", "desc": "1 avenue Henri Dunant Palais de la Scala", "desc2": "Monaco 98000", "phone": "T +377 9797 5424", "email": "monaco@arcticatelier.com" },
        { "title": "Geneva", "desc": "Place de Longemalle 10-12, 1204 Geneva", "desc2": "Geneva", "phone": "T +41 (0)22 318 57 70", "email": "geneve@arcticatelier.com" },

    ];
    var current = 0;

    var size = 12

    var formValid = {
        lastname: false,
        firstname: false,
        email: false,
    };

    var textareaCount = 250;

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            current += size;
            renderContent()
        }
    });

    $(document).on("input", '#lastname', function () {
        var value = $(this).val();
        if (value) {
            $(this).addClass("is-valid");
            formValid.lastname = true;
        } else {
            $(this).removeClass("is-valid");
            formValid.lastname = false;
        }
        formValidate();
    })

    $(document).on("input", '#firstname', function () {
        var value = $(this).val();
        if (value) {
            $(this).addClass("is-valid");
            formValid.firstname = true;
        } else {
            $(this).removeClass("is-valid");
            formValid.firstname = false;
        }
        formValidate();
    })

    $(document).on("input", '#email', function () {

        $(this).removeClass("is-invalid");
        $(".email-input").find(".valid-feedback").hide();

        var value = $(this).val();
        if (!value) {
            return false;
        }
        if (/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)) {
            $(this).addClass("is-valid");
            formValid.email = true;
        } else {
            $(this).removeClass("is-valid");
            formValid.email = false;
        }
        formValidate();
    })

    $(document).on("blur", '#email', function () {
        var value = $(this).val();
        if (!value) {
            return false;
        }
        if (!formValid.email) {
            $(this).addClass("is-invalid");
            $(".email-input").find(".valid-feedback").show();
        }
    })

    $(document).on("input", '#message', function () {
        renderTextareaCount();
    })

    $(document).on("click", 'button', function () {
        $(".send-success").show();
    })

    function formValidate() {
        var flag = true;
        $.each(formValid, function (index, value) {
            if (!value) {
                flag = false;
                return false;
            }
        })
        if (!flag) {
            $("button").addClass("disabled")
            $(".send-success").hide();
        } else {
            $("button").removeClass("disabled")
        }
    }

    function renderContent() {
        var currentData = data.slice(current, current + size);
        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-md-4 col-lg-3 py-3 px-lg-4 ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid gallery_img ls-is-cached lazyloaded" src="./assets/images/middle/' + index % 8 + '.jpg"/>';
            content += '</a>';
            content += '<div class="py-3">';
            content += '<a href="javascript:;">';
            content += '<div class="gallery py-2 title">' + value.title + '</div>';
            content += '<p>' + value.desc + '<br/>' + value.desc2 + '</p>';
            content += '</a>';
            content += '<p>';
            content += '<a href="javascript:;"></a>';
            content += '<a href="javascript:;">' + value.phone + '</a>';
            content += '</p>';
            content += '<p>';
            content += '<a href="javascript:;">' + value.email + '</a>';
            content += '</p>';
            content += '</div>';
            content += '</div>';
            $(".contactContent").append(content);
        })
    }

    renderContent();
})