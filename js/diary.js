
var SELECTOR_SCREEN_ELEMENT = '.output';
var SELECTOR_SWITCHER_TV = '#switcher-tv';

var isTurnedOn = true;
var timeline;
var entry = 0;

function buildTimeline() {
    timeline = new TimelineMax({
        paused: true
    });
    
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


document.addEventListener('DOMContentLoaded', function() {
    buildTimeline();
    getNextEntry();
    setInterval(setRandomCoordinates, 150);
});

function setRandomCoordinates(){
    var num1 = (Math.random() * 100).toString();
    var num2 = (Math.random() * 100).toString();
    var num3 = (Math.random() * 100).toString();
    var num4 = (Math.random() * 100).toString(); 
    document.getElementById("coordinates").innerHTML = "N" + num1.substring(0, 2) + "° " + num2.substring(0,4) + " W" + num3.substring(0, 2) + "° " + num4.substring(0,4);
}

function getNextEntry(){
    document.getElementById('diary').innerHTML = entryArray[entry];
    document.getElementById('diary-container').scrollTop = 0;
    if (entry < 5){
        entry++;
        if (entry != 4){
            document.getElementById('diary').innerHTML += nextEntry;
            document.getElementById('next').addEventListener("click", function() {
                getNextEntry();
            })
        };
    };
}

var entryArray =[

"<h1>Day 1</h1>\
<p>Today I arrived in Houston. It’s taken a full three nights to get here, and there’s barely any juice left in the Tractor, but I’m just\
 glad this place actually exists. I wasn’t so sure when I started this journey.</p>\
<p>The city is empty, but I guess I should have expected that. Still, I kept scanning the roads and buildings for any sign of life- smoke\
 from a campfire, footprints in the ground, even an abandoned Tractor- but nothing. Nothing but barren skyscrapers and crumbling \
 roads. Just like how it was in New Orleans.</p>\
<p>I set up camp in what I think used to be a hospital, with long, dirty hallways and rusty bed frames in every room. Nothing is left to\
 ransack, but it’s shelter, so I can’t complain. It’s hard to imagine that this was once a place of healing, and of pain. \
 People’s lives began and ended here. And now it’s just reduced to my temporary shelter. </p>\
<p>Anyway, the Tractor has been acting up a lot lately, making strange sounds whenever I press on the gas. I think I might let it charge \
up all day tomorrow and focus on other tasks. Fish on the coast, feed myself. Look for more people, maybe. </p>\
<p>Something strange- I keep seeing this symbol everywhere. It’s sort of like three, oblong circles, engraved into buildings and road \
signs, as well as random places, like sewers on the street. Weirdly, it kinda looks like what’s on my water purifier. Which is almost\
 out of water, by the way. </p>\
<p>Not entirely sure why I decided to keep a diary now, half a week into the trip. But this GPS has become useless- it started glitching\
 up as soon as I left Louisiana. The ‘notes’ function is the only thing that still works.</p>\
<p>Well, I need to start a fire for the night. At least then I won’t be hungry AND cold.</p>\
<p>Z</p>",

"<h1>Day 2</h1>\
<p>Not such a good morning. I tried to start up the Tractor after I woke up, but it kept making those Very Bad gurgling sounds. I’m a \
little worried, to be honest. Without the Tractor, I’m totally stranded- too far from home, way too far from where I need to be. If\
 it exists at all.</p>\
<p>In times like these, when my stomach starts hurting and my breath feels stuck in my chest, I close my eyes and ask a question I’ve\
 asked myself a lot over the past six months: What would Dad do? The Tractor was his before mine, after all, what took him from the\
  north to our home in New Orleans all those years ago. </p>\
<p>On my twelfth birthday, probably six or so years ago now, he taught me how to drive it. He pointed out all the important parts: the\
 solar panel is what gathers energy from the sun, the engine is what turns that energy into motion, and the motors are what turn \
 the wheels that move us forward. </p>\
<p>I’m trying to rack my brain, though: did he say anything else? About what to do when you hear loud gurgling noises, or when it stops\
 charging? It’s frustrating- that moment feels so far away, a memory that slips out of my hands like a fish whenever I try to hold on\
  to it.</p>\
<p>I wish he were here. I wish he could tell me what to do.</p>\
<p>At the same time, though, something in me wishes I never had anyone to rely on in the first place. How can you miss something you \
never knew? Because now all I can think of is sitting in the Tractor with him, with the sun setting behind the trees and me giggling \
and his big hands holding my small hands holding the steering wheel- and now my eyes are stinging with tears and my stomach hurts \
so much I can’t stand it. </p>\
<p>We all have to grow up some time, Zoey. And dwelling on this sort of stuff certainly isn’t going to help. </p>\
<p>I don’t know what else to do but leave the Tractor alone for another day and go out and explore the city a little more. Hopefully \
it’ll start charging and everything will be magically fixed by tomorrow morning. If not... well, I’m not going to think about that.</p>\
<p>Z</p>",

"<h1>Day 4</h1>\
<p>Okay, so now I am sure that the Tractor is definitely broken and I am definitely dead.  </p>\
<p>I finally took a look at the engine, and nothing looked snapped or crushed or anything, so I thought everything was fine. \
But as soon as I started it up, it started sparking and clicking and smoking and just overall being really awful. It wouldn’t \
budge, either. I tried to get it to go, I was so desperate.  </p>\
<p>I shut it down and started to cry. I don’t know what to do. I don’t know why I thought I could ever do this by myself. Dad’s \
death was my death sentence. I’m going to die here.  </p>\
<p>I... I really thought I would see more people out in the world. Dad and I were the only ones left in New Orleans, but surely-\
 surely! - there are other people out there who are still alive.  </p>\
<p>I’ve been pushing a really bad thought out of my head for a long time, but it keeps creeping in there, especially now. What if\
 it’s really true? That there’s no one else left? </p>\
<p>I don’t know. I’m starting not to care. I’m gonna look for more food. Right now, keeping myself alive is all I think I can really\
 manage. </p>\
<p>Z</p>",

"<h1>Day 5</h1>\
<p>New day, new plan. It’s a long shot, but hey, if I'm really the last human on earth, I can’t go out without a fight. If no one\
 else... I owe it to myself, I guess.</p>\
<p>Anyway, I’m so glad Dad taught me how to read and write. Keeping a diary keeps my thoughts straight, and reading back my depressing \
entry yesterday gave me an idea- I always thought knowing morse code was a useless skill, something I only picked up because I had a book\
 on it and I was bored, but it could actually come in handy here. This GPS still has some kind of broadcast feature- I’m not totally sure\
  that it works, since the actual GPS stuff doesn’t, but I have to believe.</p>\
<p>So I radioed about a message. Who knows how muddled and error-ridden my morse code was, but I’m desperate. </p>\
<p>If there is someone out there, and if they know morse code too, and if they can somehow get to Houston fast enough so that I’m not dead- yes, I know that’s a lot of ifs, but still- if that all happens, I might still have a chance.</p>\
<p>And the alternative- I’m starting to embrace it. Not thinking about it only makes the problem worse. What else can I do but scream it from the top of my lungs- I’m the last person on earth. I’m the last person on earth! I̵'̵m̴ ̷t̷h̷e̴ l̸͚̹̽̽́a̸̡̹̤͐̀̍s̶̹̯̈́́͝t̴͕͑ ̶̱̳̓̊̍p̸̢̱̊̉͠e̶͘͜r̴͉͊s̶͚̜̮̒̊ȯ̶̦n̶̹̝̼̎̈̐ ̵͇̤̂͝ŏ̷͔n̴͔̩͛\n</p>\
<p>u̸̬͙͒̎ͅḿ̴͚̲ͅ</p>\
<p>d̷̮̑̈́i̸̳̔̑d̶͚͙͂ ̶̟͌i̴͉̚ ̷̧̤̀͐f̸̼̺̔͝ï̷͓̕n̶̟͉̋̍a̴̫̍̊ḻ̶͍̒l̷̛̮̃y̶̩̼͋̐ ̶͙̔ḇ̷͒r̶̙̽e̷̞͊̍å̷̺̉k̶̝̼̈̌ ̸̽̅ͅţ̷̙̕h̴͔̼͌ḯ̵̤͌ś̷̨̛͜ ̴͙̳̏t̴͔͚̓̔h̶͓͌̕ͅi̴͍͊̄n̷̺̞͆̈́g̸̨̗̈́̒?̶̗͔̒ ̷͎̜̏</p>\
<p style='color:red'> INTERCEPTING MESSAGE</p>\
<p style='color:red'>INTERCEPTING MESSAGE</p>\
<p style='color:red'>INTERCEPTING MESSAGE</p>\
<p style='color:red'>INTERCEPTING MESSAGE<span style='color:#14fdce'>w̸͉͑̚a̴̮͑ĭ̸͙t̴͈̓̏ ̴̠͌w̴̳̩̿h̴̟̕a̷̞͗͜͝t̶̢͜͝</span></p>\
<p style='color:red'>AIIM wants to connect to this device</p>\
<p style='color:red'>AIIM is now connecting to this device</p>\
<p style='color:red'>connecting... 10%</p>\
<p style='color:red'>connecting... 35%</p>\
<p> Ẅ̵͖h̶̛̭̽a̷̹͝t̷̬̄̊ ̷̮̝̈t̵̳͊h̷̳̥͆̒ë̵̼́̓ ̸̺́ͅh̸̝̏͠e̴͇̭̋͛ḻ̸̬̈́l̶͉̳͑?̷̺̺̓̕ ̸̖̉͌W̸̖̥̄̿ḣ̸͓̞a̴̭̚t̶̼́'̸̟͆s̴̳̫̊ ̵̯͔̈́Ȧ̵͖̻Ǐ̴̝̓Ỉ̷̱̅M̷̢̪̕?̸̯̩̔̿</p>\
<p style='color:red'>connecting... 65%</p>\
<p style='color:red'>connecting... 85%</p>\
<p id='next'>TO BE CONTINUED ></p>"
]

var nextEntry = "<p id='next'>NEXT ENTRY</p>";