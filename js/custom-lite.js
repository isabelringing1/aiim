document.addEventListener('DOMContentLoaded', function() {
    $('.menu').draggable(  {
        stack: ".type-wrap"}, 
        {
        containment: "window"
    });

    $('.type-wrap').draggable({
        stack: ".menu"},  
        {
        containment: "window"
    });
});