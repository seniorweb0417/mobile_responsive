$(document).ready(function() {
    $('.more-link').click(function() {
        $(this).toggleClass('on');
        $('.filter-wrapper').toggleClass('on');
    });

    if ($('#price-slider').length) {
        $('#price-slider').slider({
            orientation: "horizontal",
            range: "min",
            min: 10,
            max: 1000,
            value: 100,
            slide: refreshSwatch,
            change: refreshSwatch
        });
    }

    if ($('#filter-price-slider').length) {
        $('#filter-price-slider').slider({
            orientation: "horizontal",
            range: true,
            min: 10,
            max: 1000,
            values: [100, 500],
        });
    }

    $('.dropdown .dropdown-menu').on('click', function (e) {
        e.stopPropagation();
        // $(this).parent().toggleClass('open');
    });

    $('#map-view').change(function() {
        if ($(this).is(':checked')) {
            $('.property-list').removeClass('hide');
            $('.thumbnail-list').addClass('hide');
        } else {
            $('.property-list').removeClass('hide');
            $('.list-with-map').addClass('hide');
        }
    });

    if ($('.property-list .panel-left').length) {
        $('.property-list .panel-left').mCustomScrollbar();
    }

    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }
});

function refreshSwatch() {
    var slider_value = $('#price-slider').slider('value');
    $("#slider-price").html(slider_value);
}

function showSignupModal() {
    $('#signup-modal').modal();
}

function showFilterModal() {
    $('#filter-modal').modal();
}

function showImageModal() {
    $('#image-modal').modal();
}