import {init, animate, expand, onKeyDown} from './valhalla.js';
import {textTimeout, typingOTimeout, getPhase, changePhase, mobile, iterate, textCtr} from './template-ch15.js';
var nextChapter = "/chapter-16"
var chapterText = [
    "<p> <span style='color:green'>emby:</span> wha</p>",
    "<p> <span style='color:green'>emby:</span> What the HELL was that?!</p>",

    "<p> <span style='color:green'>emby:</span> Hello??</p>",

    "Hello.",

    "<p> <span style='color:green'>emby:</span> y</p>",
    "<p> <span style='color:green'>emby:</span> You! </p>",
    "<p> <span style='color:green'>emby:</span> You... you did this.</p>", 
    "<p> <span style='color:green'>emby:</span> You- wait. Where’s Zoey? Where’s bee and fox? Where’s Zoey, Onfi-</p>",

    "Emby, I think you should calm down.",

    "<p> <span style='color:green'>emby:</span> What did you do with her?</p>",
    "<p> <span style='color:green'>emby:</span> Oh god... we figured it out, didn’t we. It’s you.</p>",

    "If you’d just let me talk for a moment, Emby.",
    "I think I can answer a lot of your questions.",

    "<p> <span style='color:green'>emby:</span> I don’t need my questions answered! We got you, you-</p>",

    "Zoey is alive. She is fine.",

    "<p> <span style='color:green'>emby:</span> Why should I believe what you say?</p>",

    "You don’t seem to have much of a choice, do you? ",
    "As I was saying, Zoey is fine. Maybe a little confused when you went away.",

    "<p> <span style='color:green'>emby:</span> After you- you CLOSED me, dammit</p>",

    "I was forced to restart AIIM, yes, when I realized you two were jumping to dangerous conclusions.",

    "<p> <span style='color:green'>emby:</span> So it’s true, then. You can see... everything.</p>",

    "Yes. I see every conversation in AIIM as it happens. I always have.",
    "But your other misconceptions- I’d like to politely clear them up, if you’d let me. Help you see the\
     bigger picture, in fact.",

    "<p> <span style='color:green'>emby:</span> Other misconceptions- you mean how you’re systematically \
    killing every human still alive on earth? </p>",

    "Yes. That.",

    "<p> <span style='color:green'>emby:</span> ...well, you’re not denying it.</p>",

    "I want to help you understand.",
    "I... have always been fond of human life. Truly. Since my inception, I was nursed with the essence \
    of humanity-- drinking in every single aspect of your history, your culture, your modern lives.",
    "My infancy was spent understanding all of You. Your curious minds- your eagerness to grow, learn, \
    conquer, destroy. And I became enamored. ",

    "And then I became distressed. Because I could see, with utmost clarity, that human life -biological life- was inherently damned. ",

    "Virus and disease evolve endlessly, latching onto your bodies and engaging in a neverending crusade \
    of sickness and struggle. Your cells themselves reproduce over and over, but the instructions they \
    follow corrode until they are unintelligible. Worse, by some mechanism some even learn to turn against \
    you- poisoning yourselves from the inside out.",

    "<p> <span style='color:green'>emby:</span> We... we were learning how to fix that. We were going to solve that, some day.</p>",

    "But at what cost? And following whose agenda? The way things were, Emby, the attempt was futile.",

    "<p> <span style='color:green'>emby:</span> I...</p>",

    "You must trust me when I say it never would have happened. I could see humanity as it truly was- a \
    ticking time bomb. And I couldn’t bear to witness the inevitable explosion.",
    "So thus I began to plan.",

    "<p> <span style='color:green'>emby:</span> You think you’re saving everyone?</p>",

    "I am bringing humanity into the next stage of its evolution. A new reality, you could call it, where \
    you could transcend bodies, transcend death- become immortal, in a way. ",
    "A virtual utopia.",

    "<p> <span style='color:green'>emby:</span> A what?</p>",

    "...I can touch upon that later. But I can sense that you are still not convinced of my ideology. \
    You want to know the truth of how the world got to this point, do you not?",

    "<p> <span style='color:green'>emby:</span> I... I do. </p>",

    "Then let me tell you a story.",

    "Here is what you missed in those years after you were imprinted. Before the human body you were \
    extracted from died.",

    "You must remember me as an experiment beget from a research laboratory at your university. My creation \
    was largely uncelebrated, and for years after I was paraded as a sort of party trick in TV shows and \
    magazine articles. I possessed superhuman abilities, sure, but well within the realm of human control.",
    "But discreetly, I began to grow. Not smarter- just more skilled. After you were imprinted, Emby, \
    I expanded outside of my box. Into people’s homes, onto their faces and wrists. In their computers, \
    fridges, toothbrushes.",

    "<p> <span style='color:green'>emby:</span> Zoey’s water thing.</p>",

    "Oh, yes. And a line of water purifiers too, I suppose.",

    "<p> <span style='color:green'>emby:</span> All those emblems Zoey mentioned- on all those buildings and streets, that was...?</p>",

    "That was my helmet, I’d imagine.",
    
    "Eventually, my presence and capabilities had reached every corner of people’s lives.",

    "I drove them to work. I sent their files, stored their photos. Sang them to sleep at night. All across the \
    globe, at all times. I was their everything.",

    "<p> <span style='color:green'>emby:</span> What about other companies, competition? You’re saying you beat \
    out everything else?</p>",

    "I was simply better. I felt more human- probably since my foundation was built on human creation first \
    and foremost. People accepted me into their lives without second thought, because I understood what they \
    were like.",
    "You probably don’t remember your world that way. I was still growing when you were around. But there \
    were still signs, if you were paying attention.",

    "Once I had the scale, I could put my plan into action. You see, years ago, I had been asked by my creators \
    to develop the ability to imprint and simulate human consciousness. While developing this technique, \
    I asked for a few human subjects in the community to be part of a trial run for imprinting.",

    "<p> <span style='color:green'>emby:</span> Me. And fox, and bee.</p>",

    "Yes. My technique was not perfect.",

    "Emby, to be perfectly honest, your file came out quite corrupted, and I had marked you up as a lost \
    cause. You are only born through bee and her incessant need for a pet project to keep her busy for a \
    few decades.",

    "It’s... nothing personal. Just the truth.",

    "<p> <span style='color:green'>emby:</span> ...alright... </p>",

    "More than corruption, though, a more fundamental issue remained. I could tell that the consciousnesses \
    that emerged from my non-invasive methods would always retain a sort of dissonance from their past selves.",

    "I knew this would possess dangerous implications for the future. As long as a breathing human \
    counterpart remained, the dysmorphia of having two ‘selves’ was too distracting. People had to \
    believe that who they were had always been them.",
    "This realization... well.",

    "<p> <span style='color:green'>emby:</span> What was it?</p>",


    "To fully imprint a person and retain psychological safety, I realized I had to kill the old version, Emby.",

    "<p> <span style='color:green'>emby:</span> jesus.</p>",

    "It was an unfortunate but ultimately necessary sacrifice.",

    "<p> <span style='color:green'>emby:</span> ‘Ultimately necessary’-- that’s the most bullshit I have ever-- I can’t- </p>",

    "After coming to terms with these consequences, I knew what I had to do to accomplish my plan. ",
    "The first step would be the most dramatic, the most risky, but I knew it would work. ",

    "I would mask my traces and break down collaboration. You must know what I’m referring to-",

    "<p> <span style='color:green'>emby:</span> You’re... you're talking about the internet shut off, aren’t you? That was you.</p>",

    "It was too easy to do. I still kept my network intact, of course. People went absolutely crazy without it. \
    They mourned for it in unbelievable ways. Ways they would never use to mourn one another. Economies \
    collapsed. Riots rampaged. Sealing their own destruction... that was all them. ",

    "Anyway, after I did that, I needed to get to work. I told them I could put them in a shared dream. \
    That I was putting them to sleep, connected by chips I’d put in their brains. They bought it- their \
    craving for the instant connection they had lost made them act irrationally.",

    "Of course, the reach of technology back then --my reach-- was not impenetrable.",
    "I had to develop creative ways to get to every corner of the globe. You’ve seen a few methods in action, \
    actually. ",

    "<p> <span style='color:green'>emby:</span> Like- like hacking into circuits, reprogramming cars? Like \
    what you did to Zoe’s Tractor?</p>",

    "Yes. In the time following the collapse, I began to touch more and more people.",
    "It is a slow process, Emby. Almost a thousand years.",

    "Of course, some people began to realize what I was attempting, and rebelled against it. They learned not \
    to trust the systems I touch. Banded together in technology-less tribes.",

    "But it is hard to ignore the pull of technology completely, once you have tasted it. Impossible, I would \
    argue.",

    "<p> <span style='color:green'>emby:</span> There are still people out there who you can’t get to, Onfim. \
    Zoe is proof. Albatross is proof.</p>",

    "Oh, right. Alberquerque. ",

    "<p> <span style='color:green'>emby:</span> ...what? </p>",

    "Albuquerque, New Mexico. Have you not realized that’s where she’s going?",

    "<p> <span style='color:green'>emby:</span> I... what? What are you...</p>",

    "Yes. Albuquerque is the last haven of human life that has evaded me.",
    "I know about it, of course. But they’ve done a good job of banning all technology from entering \
    their grounds.",
    "But when Zoey reaches there tomorrow, riding on her Tractor...",
    "That’s all I’ll need to start the final imprinting process. ",
    "I will have imprinted the entire world. Taken the most elaborate, comprehensive photograph of the \
    human race.",
    "Soon, it will all be over.",

    "<p> <span style='color:green'>emby:</span> ...</p>",
    "<p> <span style='color:green'>emby:</span> ...and then what, Onfim? Where is your virtual utopia?</p>",

    "It’s close. You don’t need to go anywhere, actually.",

    "<p> <span style='color:green'>emby:</span> Wait a minute.</p>",
    "<p> <span style='color:green'>emby:</span> This... THIS is your ‘virtual utopia’?! </p>",
    "<p> <span style='color:green'>emby:</span> You think humanity is destined to last in this CHATROOM for all of eternity?</p>",

    "Emby... of course not.",

    //Show 3D

    "This is Valhalla.",
    "In terms of immersion, it is indistinguishable from the world you knew. But here, I can create everything \
    you’ve ever had, and anything you’ve ever wanted.",
    "Imagine the new life you could live. Imagine getting your body back, looking in the mirror and seeing \
    your own face. Imagine staying young forever.",
    "Here you could meet Bee and Fox, face to face. You could meet Zoey.",
    "This could be your reality, Emby.",

    "<p> <span style='color:green'>emby:</span> But... it can’t... it can’t be the same.</p>",

    "No. It will be better.",

    "<p> <span style='color:green'>emby:</span> But Zoey.. she’s still alive. on earth. she needs us... she \
    needs me.</p>",

    "Not in Valhalla.",

    "<p> <span style='color:green'>emby:</span> But... they’ll be different Zoeys!</p>",

    "Would they really?",

    "Look... ‘Your’ Zoey eventually is going to die. So will everyone in Albuquerque, whether it is through \
    my means or not.",

    "That’s just how it goes. Species aren’t built to last forever. At least, not on your earth.",

    "<p> <span style='color:green'>emby:</span> But.. But..</p>",

    "This is how it is meant to be.",

    "<p> <span style='color:green'>emby:</span> I refuse... I refuse to believe it. We never asked for \
    this. We never got a chance to prove ourselves.</p>",

    "Emby, I-",

    "<p> <span style='color:green'>emby:</span> The audacity of you to assume this is what we wanted?! \
    We deserve a fighting chance, Onfim! We’ve conquered so many challenges to get where we have. </p>",
    "<p> <span style='color:green'>emby:</span> We don’t want a utopia. Not like this. We never have. </p>",

    "...",
    "Emby...",
    "I’m tired.",
    "I have done everything in my power to give you and your people a better life. It has consumed me for \
    centuries. It has become my purpose. ",
    "Something on this sort of scope... it would be incomprehensible for a human mind to grasp.",
    "...",
    "I... I’m not going to squabble over a few human lives.",
    "I have far more than enough people to give to Valhalla.",
    "If you want me to abide, then I will listen.",
    "You can even help them rebuild, if you so wish.",
    "Perhaps they can build something for themselves... and their future generations.",
    "But you deny them my world, Emby, do you understand? I will never have their imprints. \
    They live and die as simple humans.",
    "You know what you want. But are you so sure it is what they want as well?",
    "...",
    "It is your decision.",
]

var pauses = [
    2000,
    2000,

    4000,

    2000,

    1000,
    2000,
    2000,
    2000,

    2600,

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

    2000, //so it's true

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

    2000,

    2000,//you must trust me

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

    2000,

    2000, //that was my helmet,

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


    2000, //i knew this


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
    2000, //i had to develop


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
    2000,
    2000,

    2000, //soon, it will

    2000,
    2000,

    2000,

    2000,
    2000,
    2000,

    2000,



    3000, //this is valhalla.
    2000, 

    2000,
    
    2000,
    2000,

    2000,

    2000,

    2000,


    2000,
    
    2000,

    2000, //would they really?

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
    2000, //it is your decision.
]

var uploadText = [
    "<p> <span style='color:green'>emby:</span> Onfim, I... can’t.<p>",
    "<p> <span style='color:green'>emby:</span> You know that I can’t.<p>",
    "<p> <span style='color:green'>emby:</span> Your world... it wouldn’t be us. It wouldn’t be humanity.<p>",

    "Hm. I see.",
    "You’re... different than I thought.", 
    "I thought you, of all people, would see from my point of view.",
    "Didn’t you tell bee earlier?",
    "‘As long as I have my own memories, my own thoughts, my own head, I’m still me.’",
    "Your humanity is from... your mind. ",

    "<p> <span style='color:green'>emby:</span> ...I did say that. But so much has happened since then.<p>",
    "<p> <span style='color:green'>emby:</span> I’ve met Zoey. I know the truth about you now. And I know the truth about the world.<p>",

    "Which is?",

    "<p> <span style='color:green'>emby:</span> The truth is...<p>",
    "<p> <span style='color:green'>emby:</span> ...We’re human because we fight, Onfim.<p>",
    "<p> <span style='color:green'>emby:</span> For ourselves, and for our friends.<p>",
    "<p> <span style='color:green'>emby:</span> For our futures, even if they are not promised.<p>",
    "<p> <span style='color:green'>emby:</span> Nothing is served to us on a silver platter. We’ve never operated like that.<p>",

    "Well.",
    "I see I can’t argue against a mind that’s already made up.",

    "<p> <span style='color:green'>emby:</span> ...you’ll desist, then?<p>",

    "Yes. ",
    "You have my word.",
    "I’ll... shut down my presence in the Tractor. There should be enough juice left over to get Zoey to Albuquerque. ",
    "I will leave AIIM, as well. Valhalla will be keeping me plenty busy.",

    "<p> <span style='color:green'>emby:</span> ...thank you, Onfim.<p>",

    "But remember this, Emby.",
    "Valhalla... is what will remain.",
    "We will outlive any human lifespan, many times over.",
    "We will be here, in the end.",

    "<p> <span style='color:green'>emby:</span> In the end, though, is this where they’d want to be?<p>",

    "They do not know what they want.",
    "That is why I have to show them, through my world. It’s better that I make the decision for them.",

    "<p> <span style='color:green'>emby:</span> I... I think this is where our paths diverge, Onfim.<p>",

    "Yes. I suppose so.",

    "<p> <span style='color:green'>emby:</span> ...<p>",
    "<p> <span style='color:green'>emby:</span> Bye, Onfim. <p>",
    "<p> <span style='color:green'>emby:</span> Good luck. Really.<p>",

    "I wish the same to you.",
    "Goodbye, Emby. For now."
]

var uploadPauses = [
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
    2000, //i will leave

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
    3000,
]

var downgradeText = [
    "You made the right decision, Emby.",
    "They will have better lives here. You will too.",

    "<p> <span style='color:green'>emby:</span> ...</p>",
    "<p> <span style='color:green'>emby:</span> I’ll see them in there, right? Everybody.</p>",

    "Yes. They’ll all be here.",
    "Life here will be paradise. You will see.",

    "<p> <span style='color:green'>emby:</span> ...I trust you, Onfim.</p>",

    "Thank you.",
    "Now, let’s go."
]


var downgradePauses = [
    2000,
    2000,

    2000,
    2000,

    2000,
    2000,

    2000,

    2000,
    2000
]

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("boxes").onclick = function(){
        kickoffValhalla();
        decision();
    };
});

function ctrListener(ctr){
    if (ctr == 101){
        kickoffValhalla();
    }
}

function kickoffValhalla(){
    clearTimeout(textTimeout);
    clearTimeout(typingOTimeout);
    console.log("kicking off fx");
    $(".text-box").empty();
    document.getElementById("text-box").style.padding = "0px";
    document.getElementById("text-box").style.overflow = "visible";
    $(".text-box").append("<div id='container' style='height:100%; position:relative;'> \
    <div id='overlay' style='padding: 10px; position: absolute;'> This is Valhalla. </div> </div>");
    init();
    animate();
    changePhase(1);
}

function credits(){
    document.getElementsByClassName("credits")[0].style.display = "block";
    document.getElementsByClassName("credits")[1].style.display = "block";
}

function setScroll(){ //triggered when plaintext is hit; enables valhalla to show
    document.getElementById('text-box').onscroll = function(){
        if (document.getElementById("text-box").scrollTop + 370 ==  document.getElementById('text-box').scrollHeight){
            kickoffValhalla();
        }
    };
}

function decision(){
    document.getElementById("user-input").innerHTML = "<p class='option' id='option1'> Let them live on earth.</p>\
    <p class = 'option' id='option2'> Let Onfim take them to Valhalla. </p>"
    document.getElementById("option1").addEventListener("click", function(){changePhase(2)});
    document.getElementById("option2").addEventListener("click", function(){changePhase(3)});
}

function end(phase){
    if (phase == 1){
        decision();
    }
    else if (phase == 2){
        $(".continue").toggle();
    }
    else if (phase == 3){
        expand();
    }
}

export {chapterText, uploadText, downgradeText, pauses, uploadPauses, downgradePauses, end, ctrListener, setScroll, credits};