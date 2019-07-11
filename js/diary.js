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
});

function getNextEntry(){
    document.getElementById('diary').innerHTML = entryArray[entry];
    document.getElementById('diary-container').scrollTop = 0;
    if (entry < 5){
        entry++;
        if (entry != 5){
            document.getElementById('diary').innerHTML += nextEntry;
            document.getElementById('next').addEventListener("click", function() {
                getNextEntry();
            })
        };
    };
}

var entryArray =[

"<h1>Day 1</h1>\
<p>Today I arrived in Houston. There’s barely any juice left in the Tractor. It’s taken a full three nights to get here, but I’m just\
 glad it actually exists. I wasn’t so sure when I started this journey.</p>\
<p>The city is empty, but I guess I should have expected that. Still, I kept scanning the roads and buildings for any sign of life- \
footprints, smoke from a campfire, even another tractor- but nothing. Nothing but barren skyscrapers and crumbling roads. Just like \
how it was in New Orleans.</p>\
<p>I set up camp in what I think used to be a hospital, with rusty bed frames in every room and long, dirty hallways. It’s hard to \
imagine that this was once a place of healing, and of pain. People’s lives began and ended here.</p>\
<p>Anyway, the Tractor has been acting up a lot lately and making strange sounds. I think I might let it charge up all day tomorrow \
and rest up here. Look for more people, maybe. Fish on the coast.</p>\
<p>Not entirely sure why I decided to keep a diary now, half a week into the trip. But this GPS has become useless- it started \
glitching up as soon as I left Louisiana. The ‘notes’ function is the only thing that still works.</p>\
<p>Alright. I need to start a fire for the night and finish up the last of my food. I’ll sign off for now.</p>\
<p>Z</p>",

"<h1>Day 2</h1>\
Not such a good morning. I tried to start up the Tractor after I woke up, but it kept making those Very Bad gurgling sounds. I’m a \
little worried, to be honest. Without the Tractor, I’m totally stranded- too far from home, way too far from where I need to be. If \
it exists at all.</p>\
<p>In times like these, when my stomach starts hurting and my breath feels stuck in my chest, I close my eyes and ask a question \
I’ve asked myself a lot over the past six months: What would Dad do? The Tractor was his before mine, after all, what took him from \
the north to our home in New Orleans all those years ago. </p>\
<p>On my twelfth birthday, he taught me how to drive it, and pointed out all the important parts: the solar panel is what gathers \
energy from the sun, the engine is what turns that energy into motion, and the motors are what turn the wheels that move us forward. </p>\
<p>I’m trying to rack my brain, though: did he say anything else? About what to do when you hear loud gurgling noises, or when it \
stops charging? That moment was so far away, probably six years now. Whenever I try to pin the memory down, it slips away like a \
cold fish. </p>\
<p>I wish he were here. I wish he could tell me what to do.</p>\
<p>At the same time, though, something in me wishes I never had anyone to rely on in the first place. How can you miss something \
you never knew? Because now all I can think of is sitting in the Tractor with him, with the sun setting behind the trees and me\
 giggling and his big hands holding my small hands holding the steering wheel- and now my stomach hurts so much I can’t stand it. </p>\
<p>We all have to grow up some time, Zoey. And dwelling on this sort of stuff certainly isn’t going to help. </p>\
<p>I’m going to let the Tractor be for the day, again, and go out and explore the city a little more. Hopefully it’ll start charging \
and everything will be magically fixed by tomorrow morning. If not... well, I’m not going to think about that.</p>\
<p>Z</p>",

"<h1>Day 3</h1>\
<p>Last night was weird. I was wandering around the city, looking for something, anything. But it was just empty structures and \
lifeless streets. All bathed in the same sickly purple light too, just like how it was in New Orleans. Overall, pretty depressing.</p>\
<p>It’s hard to imagine how a world so vast could ever be so full. I can’t begin to comprehend how rich life would have been, but \
also how big. How small you would feel. </p>\
<p>Eventually I somehow found myself in this really strange place. It was some sort of huge building, but not the tall blocky ones\
 you see in other parts of Houston. It didn’t look like any kind of house or shelter I’ve seen before, either. It was... round, and\
  long, I guess? There were no other buildings around it- just flat gray ground.</p>\
<p>So I went in, because what else was I going to do? And I walked into what seemed like a grassy field, surrounded by an endless \
ascension of stairs. It felt like I was in the middle of everything. And it was so quiet.</p>\
<p>Dad would have probably known where I was. But I had no clue. If I had to guess, I think it was probably an old ceremonial gathering\
 place. There are so many questions I know I’ll never get the answer to: what would these people come here to watch? What holy or\
  miraculous events transpired here, that I could not even begin to imagine?</p>\
<p>I don’t want to give the impression I’m bitter. I’ve never missed life in the Before- like I said, how can you miss something\
 you never knew? But something in me still aches. I don’t know how to explain it. </p>\
<p>Anyways. The ceiling to this place had caved in long ago, and I lay down on the prickly earth and looked up. The sky was so clear\
 and dark. I could see the stars from the broken ceiling; it looked as if hands had torn a hole in the sky. It was nice to be like \
 that, as if time wasn’t passing. I was alone, but for the first time in forever, I didn’t dread the loneliness. I imagined that I was\
  detangling myself from my body, from Zoey, and melding into the night sky. </p>\
<p>I fell asleep there, I guess, and when I woke up all I felt was cold and scratchy and tired. And now I’m walking back to camp, \
pouring my soul into this crusty old machine and not really knowing how to end, or where I was going in the first place. I don’t \
even want to think about the Tractor. It can wait one more day.</p>\
<p>Being stranded here sucks, but leaving your own head for at least a few hours made it a little bit more bearable. </p>\
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
<p>New day, new plan. It’s a long shot, but hey, if I'm really the last human on earth, I can’t go out without a fight. I owe it to...\
someone, y’know, to keep fighting.</p>\
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
<p id='next'>NEXT ></p>"
]

var nextEntry = "<p id='next'>NEXT ENTRY</p>";