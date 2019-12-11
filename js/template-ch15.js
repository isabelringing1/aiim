import {chapterText, uploadText, downgradeText, pauses, uploadPauses, downgradePauses, end, ctrListener, setScroll} from "./chapter15.js"
import {init, animate, expand, onKeyDown} from './valhalla.js';

var started = false;
var mute = false;
var pause = false;
var plaintext = false;
var textCtr = 0;
var embyCtr = 0;
var onfimCtr = 0;
var typeText = "default";
var amTyping = false;
var onfimTyping = false;
var dumped = false;
var character;
var text;
var textTimeout;
var typingTimeout;
var typingOTimeout;
var pushTimeout;
var promiseTimeout;
var mobile;
var phase = 0;
var typingText;
var typingPauses;

var rcv = document.createElement('audio');
rcv.setAttribute('src', 'assets/imrcv.wav');
var send = document.createElement('audio');
send.setAttribute('src', 'assets/imsend.wav');

document.addEventListener('keyup', function(){
    if (!started){
        typingText = chapterText;
        typingPauses = pauses;
        start();
    }
});

function start(){
    started = true;
    if (phase == 0) $(".text-box").empty();
    else document.getElementById("overlay").innerHTML = "";
    $(".user-input").empty();
    textTimeout = setTimeout(iterate, typingPauses[textCtr]);
}

function iterate(){ //main loop
    if (textCtr < typingText.length){
        addtext(textCtr).then(() => {
            textTimeout = setTimeout(iterate, typingPauses[textCtr]);
            if (!dumped) textCtr++;
            else dumped = false;
            if (typeof ctrListener != "undefined"){
                ctrListener(textCtr);
            }
        });
    }
    else{
        end(phase);
    }
}

function addtext(textCtr){
    return new Promise (function(resolve){
        character = getCharacter(typingText[textCtr]); //parses for character name
        text = getText(typingText[textCtr]); //parses for actual text
        console.log(character, text, textCtr);
        
        if (character == "emby"){ //emby
            embyCtr = 0;
            typeText = text;
            promiseTimeout = setTimeout(resolve, typeText.length*50);
            type();
        }
        else{ //onfim
            onfimCtr = 0;
            console.log("onfim typing: " + typingText[textCtr]);
            typeText = typingText[textCtr]; //whole shebang
            promiseTimeout = setTimeout(resolve, typeText.length*50);
            if (phase > 0) document.getElementById("overlay").innerHTML = "";
            typeOnfim();
        }
    });
}

function movedown(box){
    box[0].scrollTop = box[0].scrollHeight;
}

function getCharacter(text){
    var startindex = text.indexOf("'>");
    if (startindex != -1){
        return text.substring(startindex+2, text.indexOf("</span>")-1);
    }
    else return 0;
}

function getText(text){
    return text.substring(text.indexOf("</span>") + 8, text.lastIndexOf("<"));
}

function type(){
    if (embyCtr < typeText.length){
        amTyping = true;
        $(".user-input")[0].innerHTML += typeText.charAt(embyCtr);
        embyCtr++;
        typingTimeout = setTimeout(type, 50);
        movedown($(".user-input"));
        $(".user-input")[0].scrollTop = $(".user-input")[0].scrollHeight;
    }
    else{ //end
        amTyping = false;
        var delay = 0;
        if (phase == 0) { $(".user-input").empty()}
        else if (phase > 0) {
            delay = 500; 
            setTimeout(function(){
                $(".user-input").empty();
            }, delay);
        }
        pushTimeout = setTimeout(function (){
            if (phase == 0){
                $(".text-box").append(typingText[textCtr-1]);
                movedown($(".text-box"));
            }
            if (!mute){
                send.play();
            }
        }, delay+100);
    }
}

function typeOnfim(){
    if (phase == 0){
        if (onfimCtr < typeText.length){
            onfimTyping = true;
            $(".text-box")[0].innerHTML += typeText.charAt(onfimCtr);
            onfimCtr++;
            typingOTimeout = setTimeout(typeOnfim, 50);
            movedown($(".text-box"));
            $(".text-box")[0].scrollTop = $(".text-box")[0].scrollHeight;
        }
        else{
            if (getCharacter(typingText[textCtr]) != "emby"){
                $(".text-box").append("<br>");
                console.log("appending br bc next text is " + typingText[textCtr]);
            }
            onfimTyping = false;
            onfimCtr = 0;
        }
    }
    else if (phase > 0){
        if (onfimCtr < typeText.length){
            onfimTyping = true;
            document.getElementById("overlay").innerHTML += typeText.charAt(onfimCtr);
            onfimCtr++;
            typingOTimeout = setTimeout(typeOnfim, 50);
        }
    }
}

function configMobile(){
    mobile = true;
    console.log("configing for mobile")
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

    $(".active")[0].style.left = pos;
    $(".active")[0].style.top = '1000px';

    $(".text-box")[0].innerHTML = '<p>Touch to enter chat.</p> <br> WARNING: this chapter does not work well with mobile yet. Please use the desktop version while this is being fixed.';

    document.addEventListener('touchend', function(){
        if (!started)
            typingText = chapterText;
            typingPauses = pauses;
            start();
    });
}

function changePhase(p){
    console.log("on to phase " + p);
    phase = p;
    if (phase == 1){
        textTimeout = setTimeout(iterate, typingPauses[textCtr]);
        document.getElementById("plaintext").disabled = true;
    }
    else if (phase == 2){
        if (!mute){
            send.play();
        }
        typingText = uploadText;
        typingPauses = uploadPauses;
        $(".user-input").innerHTML = "";
        textCtr = 0;
        start();
    }
    else if (phase == 3){
        if (!mute){
            send.play();
        }
        typingText = downgradeText;
        typingPauses = downgradePauses;
        $(".user-input").innerHTML = "";
        textCtr = 0;
        start();
    }
}

function getPhase(){
    return p;
}

document.addEventListener('DOMContentLoaded', function() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) configMobile();

    $(".continue").toggle();
    
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

    document.querySelector('.pause').addEventListener('click', function() {
        if (started && phase == 0){
            pause = !pause;

            if (pause){
                console.log("pausing, txtctr is ", textCtr);
                clearTimeout(textTimeout);
                clearTimeout(promiseTimeout);
                document.getElementById("progress").disabled = true;
                if (character == 'emby'){
                    clearTimeout(typingTimeout);
                    $(".user-input").empty();
                    $(".text-box").append(typingText[textCtr]);
                    movedown($(".text-box"));
                    if (!mute){
                        send.play();
                    }
                    textCtr++;
                }
                else{
                    clearTimeout(typingOTimeout);
                    $(".text-box").append(typingText[textCtr].substring(onfimCtr));
                    onfimTyping = false;
                    textCtr++;
                    movedown($(".text-box"));
                }
            }
            else{ //unpause
                document.getElementById("progress").disabled = false;
                console.log("unpausing, txtctr is " + textCtr + " character is " + character);
                if (character != "emby" && getCharacter(chapterText[textCtr]) != "emby"){
                    $(".text-box").append("<br>");
                }
                character = getCharacter(chapterText[textCtr]);
                textTimeout = setTimeout(iterate, typingPauses[textCtr]);
            }

            pause? $(".pause").text("Unpause") : $(".pause").text("Pause");
        }
        else if (started && phase > 0){
            pause = !pause;

            if (pause){
                console.log("pausing, txtctr is ", textCtr);
                clearTimeout(textTimeout);
                clearTimeout(promiseTimeout);
                document.getElementById("progress").disabled = true;
                if (character == 'emby'){
                    clearTimeout(typingTimeout);
                }
                else{
                    clearTimeout(typingOTimeout);
                }
            }
            else{ //unpausing
                document.getElementById("progress").disabled = false;
                if (character == 'emby'){
                    textTimeout = setTimeout(function(){
                        textCtr++;
                        iterate();
                    }, 
                    typingPauses[textCtr] + (typingText[textCtr].substring(embyCtr).length * 50));
                    type();
                }
                else{
                    textTimeout = setTimeout(function(){
                        textCtr++;
                        iterate();
                    },  typingPauses[textCtr] + (typingText[textCtr].substring(onfimCtr).length * 50));
                    typeOnfim();
                }
            }
            pause? $(".pause").text("Unpause") : $(".pause").text("Pause");
        }
    });

    document.querySelector('.progress').addEventListener('click', function() {
        if (started && phase == 0){
            console.log("appending text ", textCtr);
            if (character == "emby"){
                $(".user-input").empty();
                clearTimeout(typingTimeout);
                $(".text-box").append(typingText[textCtr]);
                amTyping = false; dumped = true;
            }
            else{ //onfim
                clearTimeout(typingOTimeout);
                $(".text-box").append(typingText[textCtr].substring(onfimCtr));
                if (getCharacter(typingText[textCtr]) != "emby"){
                    $(".text-box").append("<br>");
                }
                onfimTyping = false; dumped = true;
                onfimCtr = 0;
            }
            if (typeof ctrListener != "undefined"){
                ctrListener(textCtr);
            }
            textCtr++;
            character = getCharacter(typingText[textCtr]);
            movedown($(".text-box"));
        }
        else if (started && phase > 0){
            console.log("completing text ", textCtr);
            if (character == "emby"){
                clearTimeout(typingTimeout);
                document.getElementById("user-input").append(typeText.substring(embyCtr));
                embyCtr = typeText.length;
                type();
            }
            else{
                clearTimeout(typingOTimeout);
                document.getElementById("overlay").append(typeText.substring(onfimCtr));
                onfimCtr = typeText.length;
                typeOnfim();
            }
        }
    });

    document.querySelector('.mute').addEventListener('click', function() {
        mute = !mute;
        if (mute)
            $(".mute").text("Unmute");
        else   
            $(".mute").text("Mute");
    });

    document.querySelector('.plaintext').addEventListener('click', function() {
        if (!plaintext && phase == 0){
            plaintext = !plaintext;
            $(".user-input").empty();
            clearTimeout(textTimeout);
            clearTimeout(typingTimeout);
            clearTimeout(typingOTimeout);
            clearTimeout(promiseTimeout);
            clearTimeout(pushTimeout);
            if (onfimTyping){
                $(".text-box").append(typingText[textCtr].substring(onfimCtr));
                textCtr++;
            }
            for (var i = textCtr; i < 101; i++){
                embyCtr = typeText.length;
                $(".text-box").append(typingText[i]);
                if (getCharacter(typingText[i]) != "emby"){
                    $(".text-box").append("<br>");
                }
            }
            textCtr = 101;
            setScroll();
        }
        
    });

    document.querySelector('.continue').addEventListener('click', function() {
        window.location.href = nextChapter;
    });
});

export {textTimeout, typingOTimeout, getPhase, changePhase, mobile, iterate, textCtr};