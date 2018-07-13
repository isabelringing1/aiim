src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

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
                $(".text-box").append(chapterText[ctr]);
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

    var trigger = document.getElementsByClassName("mute")[0];
    var go = document.getElementById("go"); //go button
    var popup = document.getElementById('modal1');
    var mask =  document.getElementById('page-mask');
    document.querySelector('.mute').addEventListener('click', function() {
        popup.style.display = "block";
        mask.style.display = "block";
});

});

function start(){
    started = true;
    newctr = chapterText.length;
    $(".text-box").empty();
    setTimeout(pushtext, pauses[ctr]);
}

function pushtext() {
        
    if (plaintext && ctr != chapterText.length){ //load as one solid block of text
        loadPlaintext(ctr);
        newctr = ctr; //newctr will store ctr, ie the progression of the chat up to that point. otherwise itll be the length of chat.
        ctr = chapterText.length;
    }
    else if (!plaintext && newctr != chapterText.length){ //load as regular chat
        ctr = newctr;
        var i = 0;
        $(".text-box").empty();
        while (i < ctr){
            $(".text-box").append(chapterText[i]);
            i++;
        }
        newctr = chapterText.length;
    }
    else if (pause){
        stall();
    }

    prettyLog("pause just now: " + pauses[ctr] + " ctr is " + ctr);

    if (ctr < chapterText.length){
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
    if(chapterText[ctr].substring(17, 28) == "color:green"){
        x = 0;
        txt = chapterText[ctr].substring(43, chapterText[ctr].length-4);
        embytext = chapterText[ctr];
        type();
    }
    else{
        $(".text-box").append(chapterText[ctr]/* + " " + (ctr+1)*/);
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
    while (ctr < chapterText.length){
        $(".text-box").append(chapterText[ctr]);
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

