$(document).ready(function() {
    $('.more-link').click(function() {
        $(this).toggleClass('on');
        $('.filter-wrapper').toggleClass('on');
    });

    $('#price-slider').slider({
        orientation: "horizontal",
        range: "min",
        min: 10,
        max: 1000,
        value: 100,
        slide: refreshSwatch,
        change: refreshSwatch
    });

    $('.dropdown .dropdown-menu').on('click', function (e) {
        e.stopPropagation();
        // $(this).parent().toggleClass('open');
    });
});

function refreshSwatch() {
    var slider_value = $('#price-slider').slider('value');
    $("#slider-price").html(slider_value);
}

function showSignupModal() {
    $('#signup-modal').modal();
}