$(document).ready(function(){
    $(".button-custom").click(function(){
        $(".analysis-form-contant, .close-button").fadeToggle(500);
    });
});



$(".close-button").click(function(){
    $(".analysis-form-contant").fadeToggle();
});

$(".close-button").click(function(){
    $(this).hide();
});