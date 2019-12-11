var started = false;
var mute = false;
var pause = false;
var plaintext = false;
var textCtr = 0;
var embyCtr = 0;
var typeText = "default";
var amTyping = false;
var dumped = false;
var character;
var text;
var textTimeout;
var typingTimeout;
var pushTimeout;
var promiseTimeout;
var mobile;

var rcv = document.createElement('audio');
rcv.setAttribute('src', 'assets/imrcv.wav');
var send = document.createElement('audio');
send.setAttribute('src', 'assets/imsend.wav');

document.addEventListener('keyup', function(){
    if (!started){
        start();
    }
});

function start(){
    started = true;
    newctr = chapterText.length;
    $(".text-box").empty();
    $(".user-input").empty();
    textTimeout = setTimeout(iterate, pauses[textCtr]);

}

function iterate(){ //main loop
    if (textCtr < chapterText.length){
        addtext(textCtr).then(() => {
            textTimeout = setTimeout(iterate, pauses[textCtr]);
            if (!dumped) textCtr++;
            else dumped = false;
            if (typeof ctrListener != "undefined"){
                ctrListener(textCtr);
            }
        });
    }
    else{
        end();
    }
}

function addtext(textCtr){
    return new Promise (function(resolve){
        character = getCharacter(chapterText[textCtr]); //parses for character name
        text = getText(chapterText[textCtr]); //parses for actual text
        console.log(character, text, textCtr);
        
        if (character == "emby" || character == "mb739"){
            embyCtr = 0;
            typeText = text;
            promiseTimeout = setTimeout(resolve, typeText.length*50);
            type();
        }
        else{
            $(".text-box").append(chapterText[textCtr]/* + " " + (textCtr+1)*/);
            movedown($(".text-box"));
            if (!mute){
                rcv.play();
            }
            resolve();
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
        $(".user-input").empty();
        pushTimeout = setTimeout(function (){
            $(".text-box").append(chapterText[textCtr-1]);
            movedown($(".text-box"));
            if (!mute){
                send.play();
            }
        }, 100);
    }
}

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

    $(".active")[0].style.left = pos;
    $(".active")[0].style.top = '1000px';

    $(".text-box")[0].innerHTML = '<p>Touch to enter chat.</p>';

    document.addEventListener('touchend', function(){
        if (!started)
            start();
    });
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
        if (started){
            pause = !pause;

            if (pause){
                console.log("pausing, txtctr is ", textCtr);
                clearTimeout(textTimeout);
                clearTimeout(typingTimeout);
                clearTimeout(promiseTimeout);
                if (character == 'emby' || character == 'mb739'){
                    $(".user-input").empty();
                    $(".text-box").append(chapterText[textCtr]);
                    movedown($(".text-box"));
                    if (!mute){
                        send.play();
                    }
                    textCtr++;
                }
            }
            else{ //unpause
                console.log("unpausing, txtctr is ", textCtr);
                textTimeout = setTimeout(iterate, pauses[textCtr]);
            }

            pause? $(".pause").text("Unpause") : $(".pause").text("Pause");
        }
    });

    document.querySelector('.progress').addEventListener('click', function() {
        if (started){
            console.log("appending text ", textCtr);
            if (amTyping){
                $(".user-input").empty();
                clearTimeout(typingTimeout);
                $(".text-box").append(chapterText[textCtr]);
                amTyping = false; dumped = true;
            }
            else{
                $(".text-box").append(chapterText[textCtr]);
            }
            if (typeof ctrListener != "undefined"){
                ctrListener(textCtr);
            }
            textCtr++;
            movedown($(".text-box"));
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
        if (!plaintext){
            plaintext = !plaintext;
            $(".user-input").empty();
            clearTimeout(textTimeout);
            clearTimeout(typingTimeout);
            clearTimeout(promiseTimeout);
            clearTimeout(pushTimeout);
            for (var i = textCtr; i < chapterText.length; i++){
                embyCtr = typeText.length;
                $(".text-box").append(chapterText[i]);
            }
            started = false;
            end();
        }
        
    });

    document.querySelector('.continue').addEventListener('click', function() {
        window.location.href = nextChapter;
    });
});