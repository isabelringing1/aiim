src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

var chapter1 = [
    "<p> <span style='color:#F1D35A'>bee:</span> ..ahem. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> hi.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> is anyone, um, there?</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> if you are, can you give me some sort of sign please?</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> anything at all. that would be great.</p>",
    "<p> <span style='color:green'>emby:</span> hello?</p>"
];

var pauses = [
    2000,
    2000,
    1000,
    2000,
    3000
]

var ctr = 0;
var started = false;
var mute = false;
var pause = false;
var plaintext = false;
var x = 0;
var speed = 50;
var txt;

var rcv = document.createElement('audio');
rcv.setAttribute('src', 'assets/imrcv.wav');
var send = document.createElement('audio');
send.setAttribute('src', 'assets/imsend.wav');

document.addEventListener('DOMContentLoaded', function() {


    document.querySelector('.pause').addEventListener('click', function() {
        pause = !pause;
        pause? $(".pause").text("Unpause") : $(".pause").text("Pause");
    });


    document.querySelector('.progress').addEventListener('click', function() {
        texttime(0);
    });

    document.querySelector('.plaintext').addEventListener('click', function() {
        if (started){
            plaintext = !plaintext;
            plaintext? $(".plaintext").text("Chat Mode") : $(".plaintext").text("Read as Plaintext");
        }
        
    });

    document.querySelector('.mute').addEventListener('click', function() {
        mute = !mute;
        if (mute)
            $(".mute").text("Unmute");
        else   
            $(".mute").text("Mute");
    });
    
      /*window.setInterval(function() {
        if (typed.reorient != false){
            var elem = document.getElementById('text-box');
            elem.scrollTop = elem.scrollHeight;
        }
      }, 5);*/
});

function start(){
    started = true;
    var newctr = chapter1.length;
    $(".text-box").empty();

    setInterval(function() {

        if (plaintext){
            loadPlaintext(ctr);
            newctr = ctr;
            ctr = chapter1.length;
        }
        else if (!plaintext && newctr != chapter1.length){
            ctr = newctr;
            var i = 0;
            $(".text-box").empty();
            while (i < ctr){
                $(".text-box").append(chapter1[i]);
                i++;
            }
            newctr = chapter1.length;
        }
        else if (pause){
            stall()
        }

        prettyLog("big funciton ctr is " + ctr);
        if (ctr < chapter1.length){
            addtext(ctr);
            movedown();
            ctr++;
        }
      }, pauses[ctr]);
}

function stall(){
    while (pause)
        setTimeout(stall, speed);
        if (!pause)
            break;
}

function addtext(ctr){
    if(chapter1[ctr].substring(17, 28) == "color:green"){
        x = 0;
        txt = chapter1[ctr].substring(43, chapter1[ctr].length-4);
        type();
        setTimeout(function(){
            $(".user-input").empty();
            $(".text-box").append(chapter1[ctr]);
            if (!mute){
                send.play();
            }
        }, (txt.length+6)*50);
       
    }
    else{
        $(".text-box").append(chapter1[ctr]);
        if (!mute){
            rcv.play();
        }
    }

}

function type() {
    if (x < txt.length) {
        prettyLog(txt.charAt(x));
        document.getElementById("user-input").innerHTML += txt.charAt(x);
        //$(".user-input").append(txt.charAt(x));
        x++;
        setTimeout(type, speed);
    }
  }

function loadPlaintext(ctr){
    $(".user-input").empty();
    while (ctr < chapter1.length){
        $(".text-box").append(chapter1[ctr]);
        ctr++;
    }
}

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function movedown(){
    var elem = document.getElementById('text-box');
    elem.scrollTop = elem.scrollHeight;
}

function texttime(pause){
    setTimeout(() => {
        $(".text-box").append(chapter1[ctr]);
        movedown();
        ctr++;
    }, pause);
}
