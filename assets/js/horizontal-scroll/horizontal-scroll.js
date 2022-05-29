$(document).ready(function() {
    var parent_width = $('.list-container').width(),
        $item = $('.list'), //Cache your DOM selector
        visible = 200, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = Math.round( ($item.width() - parent_width) / visible + 0.5 );// - 1; //End index
    
    console.log('end index:' + endIndex);

    $('.more-link-right').click(function(){
        // $item.animate({'left':'-=' + visible + 'px'});
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=' + visible + 'px'});
        }
    });
    
    $('.more-link-left').click(function(){
        // $item.animate({'left':'+=' + visible + 'px'});
        if(index > 0){
          index--;            
          $item.animate({'left':'+=' + visible + 'px'});
        }
    });
    
});
