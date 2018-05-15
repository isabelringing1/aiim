document.addEventListener('DOMContentLoaded', function() {

   var typed =  new Typed('#typed', {
        strings: [
            ".\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n<p>...fox likes to communicate through pictures.^500\n it’s his thing, i guess.</p>^1000\n <p>And her thing is total disregard for the rules of english language.</p>^1000\n<p>shut up.</p>^2000\n <p style='text-align:right'>I'm sorry..</p>^1000<p>Don't be!</p>`"
          ],
          typeSpeed: 0,
          loop: false,
          reorient: !0
    });

    document.querySelector('.toggle').addEventListener('click', function() {
        typed.toggle();
    });


    document.querySelector('.reset').addEventListener('click', function() {
        typed.reset();
    });
    document.querySelector('.destroy').addEventListener('click', function() {
        typed.destroy();
    });
    document.querySelector('.loop').addEventListener('click', function() {
        toggleLoop(typed);
    });

    window.setInterval(function() {
        if (typed.reorient != false){
            var elem = document.getElementById('text-box');
            elem.scrollTop = elem.scrollHeight;
        }
      }, 5);


});

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function slow(typed) {
    if (typed.typeSpeed > -100)
        typed.typeSpeed -= 5;
    console.log(typed.typeSpeed);
}

function pausedplay(typed){
    toggle(typed);
}


