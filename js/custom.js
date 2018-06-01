src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

var chapter1 = [
    "<p> <span style='color:#F1D35A'>bee:</span> ..ahem. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> hi.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> is anyone, um, there?</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> if you are, can you give me some sort of sign please?</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> anything at all. that would be great.</p>",
    "<p> <span style='color:green'>mb739:</span></p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> oh my god.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> oh. my. god.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> fox? i did it. i frickin did it.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> fox tell me you just saw that</p>", 
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> They didn’t even say anything, bee. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> ugh okay one sec lemme see if it’ll happen again</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> hello? </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i know you can hear me</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> you have nothing to be afraid of, we’re your friends, i promise</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> can you do something? say something?</p>", 



    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I dunno bee. Just because a program runs doesn’t mean it’s... you know.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> NO NO i swear it works i just</p>", 

    "<p> <span style='color:green'>mb739:</span> Hello?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> ah</p>", 

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ah</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> AHHHHH</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> oh my goooood</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> hi! holy cow are we glad to see you</p>", 

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> How are you feeling?</p>",

    "<p> <span style='color:green'>mb739:</span> Um...</p>", 
    "<p> <span style='color:green'>mb739:</span> A little overwhelmed, I guess.</p>", 
    "<p> <span style='color:green'>mb739:</span> I’m sorry, but...</p>", 
    "<p> <span style='color:green'>mb739:</span> What... is this?</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span>fuuuu i am so not prepared for this</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> um... well the simple answer is, this is AIIM.</p>", 

];

var pauses = [
    2000,
    2000,
    2000,
    3000,
    3000,
    4000,
    2000,
    2000,
    2000,
    2000,
    2500,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    1100,
    1000,
    1000,
    1100,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
]

var ctr = 0;
var started = false;
var mute = false;
var pause = false;
var plaintext = false;
var x = 0;
var speed = 50;
var txt;
var embytext = "";
var newctr = 0;

var rcv = document.createElement('audio');
rcv.setAttribute('src', 'assets/imrcv.wav');
var send = document.createElement('audio');
send.setAttribute('src', 'assets/imsend.wav');


document.addEventListener('DOMContentLoaded', function() {

    $(window).blur(function() {
        pause = true;
    });

    $(window).focus(function() {
        if ($(".pause").text() == "Pause")
            pause = false;
    });
    
    

    document.querySelector('.pause').addEventListener('click', function() {
        pause = !pause;
        pause? $(".pause").text("Unpause") : $(".pause").text("Pause");
    });


    document.querySelector('.progress').addEventListener('click', function() {
        if (started){
            if (embytext == ""){
                $(".text-box").append(chapter1[ctr]);
                ctr++;
            }
            else{
                $(".user-input").empty();
                $(".text-box").append(embytext);
                x = txt.length;
                embytext = "";
            }
            movedown();
        }
    });

    $('.menu').draggable({
        stack: ".active"},  {
        stack: ".type-wrap"}, 
        {
        containment: "window",
        handle: ".header-bar"
    });
    $('.active').draggable({
        stack: ".menu"},  {
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

    document.addEventListener('keyup', function(){
        if (!started)
            start();
    });
});

function start(){
    started = true;
    newctr = chapter1.length;
    $(".text-box").empty();
    setTimeout(pushtext, pauses[ctr]);
}

function pushtext() {
        
    if (plaintext){ //load as one solid block of text
        loadPlaintext(ctr);
        newctr = ctr;
        ctr = chapter1.length;
    }
    else if (!plaintext && newctr != chapter1.length){ //load as regular chat
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
        stall();
    }

    prettyLog("pause just now: " + pauses[ctr] + " ctr is " + ctr);

    if (ctr < chapter1.length){
        addtext(ctr);
        ctr++;
    }
    
    setTimeout(pushtext, pauses[ctr]);
  };

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
        embytext = chapter1[ctr];
        type();
    }
    else{
        $(".text-box").append(chapter1[ctr] + " " + (ctr+1));
        movedown();
        if (!mute){
            rcv.play();
        }
    }
}

function type() { //handles emby's actual typing
    if (pause)
        setTimeout(type, speed); //skips over any tyoing
    else if (x < txt.length) {
        document.getElementById("user-input").innerHTML += txt.charAt(x);
        x++;
        setTimeout(type, speed); //looping function that adds char by char
    }
    else{
        $(".user-input").empty();
        setTimeout(function (){$(".text-box").append(embytext)
        movedown();
        embytext = "";
        if (!mute){
            send.play();
        }
    }, 100);
    
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
