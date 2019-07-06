var SELECTOR_SCREEN_ELEMENT = '.output';
var SELECTOR_SWITCHER_TV = '#switcher-tv';

var isTurnedOn = true;
var timeline;

function buildTimeline() {
    timeline = new TimelineMax({
        paused: true
    });
    console.log("hi" + timeline)
    
    timeline
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
    width: '100vw',
    height: '2px',
    background: '#ffffff',
    ease: Power2.easeOut
    })
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
    width: '0',
    height: '0',
    background: '#ffffff'
    });
}

function toggleSwitcherTV() {
    timeline.restart();
    setTimeout(timeline.reverse, 100)
    /*if (isTurnedOn) {
    timeline.restart();
    }
    
    if (!isTurnedOn) {
    timeline.reverse();
    }
    
    isTurnedOn = !isTurnedOn;*/
}

document.addEventListener('DOMContentLoaded', function() {
    buildTimeline();
    document.getElementById("switcher-tv").addEventListener("click", function() {
        toggleSwitcherTV();
    });
});