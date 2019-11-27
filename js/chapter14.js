var nextChapter = "/chapters"

var shownRestart = false;

var chapterText = [
    "<p> <span style='color:red'>Zoey:</span> Emby?</p>",

    "<p> <span style='color:green'>emby:</span> Oh! Hi, Zoey!</p>",
    "<p> <span style='color:green'>emby:</span> Where are the others? Is this a... private chat?</p>",

    "<p> <span style='color:red'>Zoey:</span> Um, yea, if I did it right.</p>",

    "<p> <span style='color:green'>emby:</span> Oh, um, alright. Everything okay?</p>",
    "<p> <span style='color:green'>emby:</span> Are you lost?</p>",

    "<p> <span style='color:red'>Zoey:</span> Everything’s fine! I’m right where I should be tonight, actually.</p>",
    "<p> <span style='color:red'>Zoey:</span> Truth or Consequences.</p>",

    "<p> <span style='color:green'>emby:</span> ...huh?</p>",

    "<p> <span style='color:red'>Zoey:</span> That’s the name. Truth or Consequences. </p>",
    "<p> <span style='color:red'>Zoey:</span> Weird thing to call a town, right?</p>",

    "<p> <span style='color:green'>emby:</span> Whew... This name just screams ‘endgame’. </p>",

    "<p> <span style='color:red'>Zoey:</span> What do you mean?</p>",

    "<p> <span style='color:green'>emby:</span> ...nothing. Just an inkling.</p>",
    "<p> <span style='color:green'>emby:</span> Wait, so if you’re there, then why did you message me?</p>",

    "<p> <span style='color:red'>Zoey:</span> I wanted to follow up with something you said, actually.</p>",

    "<p> <span style='color:red'>Zoey:</span> Last night, when you were describing your past, you said the most meaningful part of life was human connection. Or something like that.</p>",

    "<p> <span style='color:green'>emby:</span> Yea, I remember. I believe it.</p>",

    "<p> <span style='color:red'>Zoey:</span> I... </p>",
    "<p> <span style='color:red'>Zoey:</span> If you really think that, then...</p>",
    "<p> <span style='color:red'>Zoey:</span> What kind of life am I living?</p>",

    "<p> <span style='color:green'>emby:</span> What... do you mean?</p>",

    "<p> <span style='color:red'>Zoey:</span> emby, I’ve only known one other person my entire life. </p>",
    "<p> <span style='color:red'>Zoey:</span> And even that relationship was flawed. My dad hid things from me. Never trusted me to be on my own. </p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t think I ever really knew him. Or knew anybody. Not in the way... that you were talking about.</p>",

    "<p> <span style='color:green'>emby:</span> I... I’m sorry. I didn’t mean to evoke this chain of thought.</p>",
    "<p> <span style='color:green'>emby:</span> I was partially talking about the connection that you had with us, but... yea. I guess it’s not the same as a physical human being. </p>",

    "<p> <span style='color:red'>Zoey:</span> No, you shouldn’t apologize. Because I think you’re right about the connection thing. </p>",
    "<p> <span style='color:red'>Zoey:</span> It.. confirmed something I knew I had been missing in my life for a while.</p>",
    "<p> <span style='color:red'>Zoey:</span> emby, I’m... really scared, actually. </p>",

    "<p> <span style='color:green'>emby:</span> About what?</p>",

    "<p> <span style='color:red'>Zoey:</span> About... all of this. I mean, there’s so much that could go wrong.</p>",
    "<p> <span style='color:red'>Zoey:</span> How do I know if Albatross is real? </p>",
    "<p> <span style='color:red'>Zoey:</span> Even if it is, how do I know I made all the right decisions to get there? How do I know if I’m on the right path or hopelessly lost?</p>",
    "<p> <span style='color:red'>Zoey:</span> And-</p>",
    "<p> <span style='color:red'>Zoey:</span> What if it isn’t real?</p>",
    "<p> <span style='color:red'>Zoey:</span> What if I’m really the last human alive?</p>",

    "<p> <span style='color:green'>emby:</span> Whoa.</p>",
    "<p> <span style='color:green'>emby:</span> That’s heavy.</p>",

    "<p> <span style='color:red'>Zoey:</span> But- but it’s definitely possible, you know? More than likely.</p>",

    "<p> <span style='color:green'>emby:</span> Don’t go down that rabbit hole too soon, Zoey.</p>",
    "<p> <span style='color:green'>emby:</span> We don’t know anything yet. You said that yourself. There’s still so much hope- you can’t give up yet.</p>",

    "<p> <span style='color:red'>Zoey:</span> I... yea. You’re right, I suppose.</p>",
    "<p> <span style='color:red'>Zoey:</span> ...wait. Did you just say something about rabbits?</p>",

    "<p> <span style='color:green'>emby:</span> Oh- down the rabbit hole?</p>",
    "<p> <span style='color:green'>emby:</span> It’s just a saying. It means don’t lose yourself in a complex and confusing situation.</p>",

    "<p> <span style='color:red'>Zoey:</span> ...oh. </p>",
    "<p> <span style='color:red'>Zoey:</span> UGHHH. On top of all this existential crap, these stupid rabbits are making me so anxious.</p>",
    "<p> <span style='color:red'>Zoey:</span> I see them EVERYWHERE, emby. I get such a bad feeling about them. It’s driving me crazy.</p>",

    "<p> <span style='color:green'>emby:</span> A... ‘bad feeling’? </p>",
    "<p> <span style='color:green'>emby:</span> ...when you say ‘everywhere’, Zoey- where is ‘everywhere’?</p>",

    "<p> <span style='color:red'>Zoey:</span> Well, it’s always a little worn down, but it's imprinted on street signs, on buildings, other things like that. It’s on my water purifier too. </p>",
    "<p> <span style='color:red'>Zoey:</span> It just struck me as kind of odd, how it’s on all of these things.</p>",

    "<p> <span style='color:green'>emby:</span> It’s a... rabbit head? Um, does it have- it’s not wearing any, uh,</p>",

    "<p> <span style='color:red'>Zoey:</span> I mean I guess it only sort of looks like a rabbit head. It’s more like... three oval things, two are long and off to the side, like ears. </p>",
    "<p> <span style='color:red'>Zoey:</span> ...In all honesty I have no idea what this thing is. I thought you would know.</p>",

    "<p> <span style='color:green'>emby:</span> I’m sorry, I... I really don’t. </p>",

    "<p> <span style='color:red'>Zoey:</span> Y’know, if the emblem is not super worn down, the ears get all squiggly. Kind of like... wings. I don’t know if that helps. </p>",

    "<p> <span style='color:green'>emby:</span> Wings?</p>",
    "<p> <span style='color:green'>emby:</span> ...</p>",
    "<p> <span style='color:green'>emby:</span> Wait.</p>",
    "<p> <span style='color:green'>emby:</span> ...Zoey, does the name ODIN mean anything to you?</p>",

    "<p> <span style='color:red'>Zoey:</span> No, sorry. Why?</p>",

    "<p> <span style='color:green'>emby:</span> ...wait, one sec.</p>",
    "<p> <span style='color:green'>emby:</span> What about this symbol? Does this look familiar?</p>",
    
    "<img id='odin' src='assets/ODIN.png' style='width:60%'>",

    "<p> <span style='color:red'>Zoey:</span> ...oh!</p>",
    "<p> <span style='color:red'>Zoey:</span> That’s- that’s it!</p>",
    "<p> <span style='color:red'>Zoey:</span> That’s what’s everywhere. But usually it’s so worn away, there’s never this much detail.</p>",
    "<p> <span style='color:red'>Zoey:</span> ...what is it?</p>",

    "<p> <span style='color:green'>emby:</span> ...It’s the logo for a very famous computer in my time. ODIN.</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, but... what is it?</p>",

    "<p> <span style='color:green'>emby:</span> Oh. It’s a winged helmet.</p>",
    "<p> <span style='color:green'>emby:</span> Wait, you said this symbol was EVERYWHERE?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, you don’t remember it being like that?</p>",

    "<p> <span style='color:green'>emby:</span> No. Nothing like that.</p>",

    "<p> <span style='color:red'>Zoey:</span> Well, what did this computer do?</p>",

    "<p> <span style='color:green'>emby:</span> ODIN was known for being, uh, really smart, I guess. </p>",
    "<p> <span style='color:green'>emby:</span> It seemed to know everything. Anticipated your thoughts, could see right through you.</p>",
    "<p> <span style='color:green'>emby:</span> ...</p>",
    "<p> <span style='color:green'>emby:</span> Zoey... I want to ask you a question again.</p>",
    "<p> <span style='color:green'>emby:</span> Do you know why you couldn’t be around computers? Why your dad had that rule?</p>",

    "<p> <span style='color:red'>Zoey:</span> I swear, I don’t know why.</p>",
    "<p> <span style='color:red'>Zoey:</span> This doesn’t make any sense, either.</p>",
    "<p> <span style='color:red'>Zoey:</span> Why was I told to stay away from a computer when this... icon for a computer is literally everywhere? Why wasn’t it in your memory? </p>",

    "<p> <span style='color:green'>emby:</span> I was wondering the same thing.</p>",
    "<p> <span style='color:green'>emby:</span> Something must have happened. In the time after I left- something changed.</p>",
    "<p> <span style='color:green'>emby:</span> I can’t believe... I don’t want to believe...</p>",
    "<p> <span style='color:green'>emby:</span> No. I can’t let my feelings get in the way, not now. </p>",
    "<p> <span style='color:green'>emby:</span> Zoey... Where are you right now exactly?</p>",

    "<p> <span style='color:red'>Zoey:</span> Um. I’m in this cave area, I guess? I parked the tractor outside, just sitting by the fire.</p>",
    "<p> <span style='color:red'>Zoey:</span> Why?</p>",

    "<p> <span style='color:green'>emby:</span> No reason... just- stay where you are, okay? Don’t go out exploring or investigating.</p>",

    "<p> <span style='color:red'>Zoey:</span> Why? Now you’re scaring me...</p>",

    "<p> <span style='color:green'>emby:</span> There’s- there’s no reason to be scared, at least not yet. I’m just- I’m just thinking, and...</p>",
    "<p> <span style='color:green'>emby:</span> I... I have a bad feeling about this, all of it.</p>",
    "<p> <span style='color:green'>emby:</span> I can’t explain all of it just yet. But I have this thought...</p>",
    "<p> <span style='color:green'>emby:</span> There’s something very powerful in our midst. And I don’t think it has the best intentions, for any of us. </p>",

    "<p> <span style='color:red'>Zoey:</span> Emby, are you okay?</p>",

    "<p> <span style='color:green'>emby:</span> I... I need to go talk to the others. </p>",
    "<p> <span style='color:green'>emby:</span> I think I know what happened.</p>",

    "<p> <span style='color:red'>Zoey:</span> Wait, for real?</p>",

    "<p> <span style='color:green'>emby:</span> Yes. Why people disappeared, then and now.</p>",

    "<p> <span style='color:red'>Zoey:</span> Well, then what is it?!</p>",

    "<p> <span style='color:green'>emby:</span> Zoey, you have to promise me-</p>",

    "<p> <span style='color:red'>Zoey:</span> ȩ̴͑m̷͓͊ḅ̷́y̷͓͆-̵͙̒</p>",

    "<p> <span style='color:green'>emby:</span> Zoey! What’s happening?</p>",

    "<p> <span style='color:red'>Zoey:</span> I̷̛̞-̴̨̋ ̸͙̕I̸̦͝'̵̪̽m̸̧̎ ̷̻̋ń̴͖ó̷̲t̴̬̚ ̴̬̒ṣ̸̒û̶̼r̶͉̈́e̵̪͆.̸̯̈́ ̵̙̆Y̵̨̅o̴̻͊u̵͝ͅr̴̖̎ ̵͍̒t̷͇͆e̸̦̎x̴̯̆ẗ̶̥ ̴̻͑i̷̻̓s̵͓̈ ̷̫̋ȃ̵̗l̷̼̾l̶̋͜ ̵͓̚w̵̩̓e̸̗͛i̴͖̐ŗ̷́d̷̢͑-̶̱͘</p>",

    "<p> <span style='color:green'>emby:</span> Zoey!</p>",

    "<p> <span style='color:red'>Zoey:</span> h̵̨͍̲̜̱͚̲͙̞͈̭͈͍̳̼͚̰͕̙̰̮͓̮̄̒͋͑̅̿͗͑̽̊͌̋͑̀͜e̸̙̘̗̹͔̱̭̩̰͖̣̥̼̻̼̜̐̄̉͜͠ͅ</p>"
]

var pauses = [
    2000,

    2000,
    2000,

    2000,

    2000,
    2000,

    3000,
    2000,

    2000,

    2500,
    2000,

    2000,

    2000,

    2000,
    2000,

    2500,

    5000,

    2000,

    2000,
    3000,
    2000,

    2000, //what...

    3000,
    4000,
    5000,

    2000,
    2500,

    4000,
    4000,
    2500,

    2000,

    3000,
    2500,
    5000,
    1000,
    2000,
    2500,

    2000,
    2000,

    3000,

    2000,
    2500,

    3000,
    2000,

    2000,
    2000, //it's just a saying.

    2000,
    3500,
    3500,

    2000,
    2000,

    6500,
    3000,

    2000,

    5000,
    3000,
    
    2000,

    4000,

    2000,
    2000,
    2000,
    2500,

    2000,

    2000,
    2000,

    2000, //ODIN img

    2000, //...oh!
    2000,
    4000,
    2000,

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

    2500,
    2500,
    4500,

    2000,
    2000,
    2000,
    2000,
    2000,

    4000, //um. i'm in this
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

    2000, //zoey you have to promise me

    2000,

    2000,

    2000,

    2000,
    
    2000
]

function end(){
    if (plaintext && !shownRestart){
        document.getElementById('text-box').onscroll = function(){
            if (document.getElementById("text-box").scrollTop + 370 ==  document.getElementById('text-box').scrollHeight){
                if (!mobile) {
                    shownRestart = true;
                    showRestart1();
                    setTimeout(function(){
                        document.getElementById("text-box").innerHTML = "";
                        document.getElementById('zoey').style.display = 'none';
                    }, 1500);
                }
            }
        };
    }
    $(".continue").toggle();
}

function ctrListener(ctr){
    if (ctr == 65){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("odin").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("odin").height;
        }, 2200);
    }
    else if (ctr == 110){
        shownRestart = true;
        setTimeout(showRestart1, 1000);
        setTimeout(function(){
            document.getElementById("text-box").innerHTML = "";
            document.getElementById('zoey').style.display = 'none';
        }, 1500);
    }
}

var wxp1 = document.createElement('audio');
wxp1.setAttribute('src', 'assets/wxp1.wav');
var wxp2 = document.createElement('audio');
wxp2.setAttribute('src', 'assets/wxp2.mp3');
var wxp3 = document.createElement('audio');
wxp3.setAttribute('src', 'assets/wxp3.wav');
var wxp4 = document.createElement('audio');
wxp4.setAttribute('src', 'assets/wxp4.mp3');

function showRestart1(){
    document.getElementById('restart1').style.display = "block";
    wxp1.play();
    setTimeout(function(){ 
        $("#shutdown").fadeIn(1000);
        wxp2.play();
    }, 500);
    setTimeout(showRestart2, 5000);
}
function showRestart2(){
    document.getElementById('restart2').style.display = "block";
    wxp3.play();
    setTimeout(function(){ 
        $("#wxp_scroll").fadeIn(4000);
        $("#ms_logo").fadeIn(4000);
        $("#ms_copyright").fadeIn(4000);
        document.getElementById('wxp_scroll').style.display = "block";
        document.getElementById('ms_logo').style.display = "inline-block";
        document.getElementById('ms_copyright').style.display = "inline-block";
    }, 3000);
    setTimeout(showRestart3, 10000);
}

function showRestart3(){
    document.getElementById('restart3').style.display = "block";
    wxp4.play();
    setTimeout(function(){ 
        document.getElementById('welcome').style.display = "block";
    }, 1550);
    setTimeout(function(){
        document.getElementById('restart3').style.display = "none";
        document.getElementById('restart2').style.display = "none";
        document.getElementById('restart1').style.display = "none";
    }, 6000);
}