$(document).ready(function() {
    $('.more-link').click(function() {
        $(this).toggleClass('on');
        $('.filter-wrapper').toggleClass('on');
    });
});