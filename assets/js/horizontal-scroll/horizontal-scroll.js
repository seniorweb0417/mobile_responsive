var parent_width = $('.list-container').width(),
$item = $('.list'), //Cache your DOM selector
visible = 200, //Set the number of items that will be visible
index = 0, //Starting index
endIndex = Math.round( ($item.width() - parent_width) / visible + 0.5 );// - 1; //End index

var resizeId;

$(document).ready(function() {
    initialHorScroll();

    $(window).on('resize', function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(initialHorScroll, 500);
    });

    // $(window).resize(function() {
    //     initialHorScroll();
    // });

    $('.more-link-right').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=' + visible + 'px'});
        }
    });
    
    $('.more-link-left').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=' + visible + 'px'});
        }
    });

    $('.list-container').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          
            if (direction == 'left') $('.more-link-right').click();
            if (direction == 'right') $('.more-link-left').click();
        
        },
        allowPageScroll:"vertical"
    });

    $('.list').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          
            if (direction == 'left') $('.more-link-right').click();
            if (direction == 'right') $('.more-link-left').click();
        
        },
        allowPageScroll:"vertical",
        excludedElements: ".noSwipe"
    });


    $('.filter-btn').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          
            if (direction == 'left') $('.more-link-right').click();
            if (direction == 'right') $('.more-link-left').click();
        
        },
        allowPageScroll:"vertical",
        excludedElements: ".noSwipe"
    });
});

function initialHorScroll() {
    console.log('initialHorScroll is called');
    
    parent_width = $('.list-container').width(),
    $item = $('.list'), //Cache your DOM selector
    visible = 200, //Set the number of items that will be visible
    index = 0, //Starting index
    endIndex = Math.round( ($item.width() - parent_width) / visible + 0.5 );// - 1; //End index

    $item.animate({'left':'0px'});
}