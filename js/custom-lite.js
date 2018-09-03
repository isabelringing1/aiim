document.addEventListener('DOMContentLoaded', function() {
    //if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) configMobile();
    if($(window).width() < 1200) configMobile();
    $('.menu').draggable({
        stack: ".active"},  {
        stack: ".type-wrap"}, 
        {
        containment: "window",
        handle: ".header-bar"
    });

    $('.type-wrap').draggable({
        stack: ".menu"},  {
        stack: ".active"}, 
        {
        containment: "window",
        handle: ".header-bar"
    });
});

function configMobile(){
    mobile = true;
    var pos = ($(window).width()-306)/2;
    pos += "px";

    $(".menu")[0].style.left = pos;
    $(".menu")[0].style.top = '20px';

    $(".type-wrap")[0].style.top = '400px';
    $(".type-wrap")[0].style.width = '300px';
    $(".type-wrap")[0].style.height = '640px';
    $(".type-wrap")[0].style.left = pos;

    $(".text-box")[0].style.width = '230px';
    $(".user-input")[0].style.width = '230px';
}