$(document).on('click','.search', function(){
    $('.search-bar').addClass("search-bar-active");
});

$(document).on('click','.search-cancel', function(){
    $('.search-bar').removeClass("search-bar-active");
});

// Slider
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});
/*Feature Slider */
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });