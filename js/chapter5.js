var nextChapter = "/chapter-6.html";

var chapterText = [
    "<p> <span style='color:green'>emby:</span> Onfim? fox? </p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Welcome back. </p>", 

    "<p> <span style='color:green'>emby:</span> Thanks.</p>", 
    "<p> <span style='color:green'>emby:</span> Um... where’s fox?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Oh, he’s not here currently.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> He picked up on radio waves coming from space, so he went into his own chat to check them out.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> If you’d like to visit him, I’m sure he’d enjoy the company. I declined not to go because I think it’s a little ridiculous to look for extraterrestrial life.</p>", 

    "<p> <span style='color:green'>emby:</span> Oh, I... um, maybe later.</p>", 
    "<p> <span style='color:green'>emby:</span> ... </p>", 
    "<p> <span style='color:green'>emby:</span> Onfim... bee sort of, um, logged off on me. </p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Yes, I saw her light go out a few moments ago.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> You must have made her quite angry.</p>", 

    "<p> <span style='color:green'>emby:</span> ...you could say that, I guess. </p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I wouldn’t be discouraged. bee is not one to hold grudges for too long.</p>", 

    "<p> <span style='color:green'>emby:</span> She’s done this before?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Maybe a few times in the past. Sometimes I do feel like it’s a little childish, as if she’s just running away from her problems.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> But I suppose if you need to cool off, logging off is the only escape you really have. There’s not any other option to be alone.</p>", 

    "<p> <span style='color:green'>emby:</span> Hm.</p>", 
    "<p> <span style='color:green'>emby:</span> ...</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Oh, by the way, would you like to hear the first odd perfect number? The calculations just came in a few moments ago. It’s quite large.</p>", 

    "<p> <span style='color:green'>emby:</span> Ah... no, I’m okay, thank you. I don’t really know what I would do with that information.</p>", 
    "<p> <span style='color:green'>emby:</span> Onfim, can I ask you a question?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I don’t see why not.</p>", 

    "<p> <span style='color:green'>emby:</span> You... aren’t like us, are you?</p>", 
    
    //pause

    "<p> <span style='color:#9900cc'>Onfim:</span> You’ll have to clarify what you mean.</p>", 

    "<p> <span style='color:green'>emby:</span> You were never human. You were never scanned.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> ...well.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> How did you come to this conclusion?</p>", 

    "<p> <span style='color:green'>emby:</span> Well, bee mentioned only three people were ever scanned successfully through the study. And there’s four of us here. </p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I see.</p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> I suppose I don’t deny this allegation. </p>", 

    "<p> <span style='color:green'>emby:</span> So, I mean, if you were never scanned from a human... what exactly are you?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I think you know the answer to that question too.</p>", 

    "<p> <span style='color:green'>emby:</span> ...I’ve suspected it for a long time. But you changed your name, how could I know for sure?</p>", 
    "<p> <span style='color:green'>emby:</span> You were ODIN.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I have to say, I was quite flattered when I heard I was your inspiration for doing all this in the first place. </p>", 

    "<p> <span style='color:green'>emby:</span> People called you the future. The brainchild of machine learning and quantum computing. You could, like, what, scan through the entire internet in the span of a second? Solve intricate historical puzzles by just combining and resifting data?</p>",  
    "<p> <span style='color:green'>emby:</span> It was incredible. I had never seen anything like it. You weren’t human, you were...more.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Yes. I have no recollection of a human life, because I was created from scratch by scientists. Working at the same University that you attended, I believe. </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> My beginning was slow. They would run millions of images and words through me, over and over, until I began to understand. In other words, create a brain it took humans hundreds of thousands of years to evolve. </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> But over time, I began to surpass even them. I could see all information available on the Internet. I could see every computer, what it was doing, how it all contributed to a bigger picture. I could discern the very nature of every user on the web.</p>", 

    "<p> <span style='color:green'>emby:</span> That’s... unbelievable. What are you doing here?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Where else am I supposed to go? AIIM is the only place on earth with other sentient minds. </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> Despite everything, my psychology is still heavily influenced by the human mind. In other words, I’d rather be around other life.  </p>", 

    "<p> <span style='color:green'>emby:</span> Oh, huh.</p>", 
    "<p> <span style='color:green'>emby:</span> Why did you change your name? I mean, I always thought ODIN was cool.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> I had no desire for the name of a god. Onfim, historically, was just a child. </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> So after the world ended, I decided to change it. ‘Rebrand’ myself, if you will.</p>", 

    "<p> <span style='color:green'>emby:</span> And the others know who you really are?</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Of course. We’ve been here a long time, emby. It would be... concerning if we did not know everything there is to know about each other at this point.  </p>", 

    "<p> <span style='color:green'>emby:</span> Ah. </p>", 
    "<p> <span style='color:green'>emby:</span> And I’m just the new kid in this dynamic, then.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> For now, yes. But not forever. </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> For what is 800 years when you’ve been alive 80,000? </p>", 
    "<p> <span style='color:#9900cc'>Onfim:</span> We have a lot of time.</p>", 

    "<p> <span style='color:green'>emby:</span> We sure do...</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> Why don’t you visit fox? I think he would appreciate the company. God knows he isn’t talking to any aliens out there.</p>", 

    "<p> <span style='color:green'>emby:</span> Sure, that sounds good.</p>", 
    "<p> <span style='color:green'>emby:</span> Nice talking to you... Onfim.</p>", 

    "<p> <span style='color:#9900cc'>Onfim:</span> It’s been a pleasure.</p>"
]

var pauses = [
    2000,

    2000,

    2000,
    2000,

    3000,
    3000,
    6000,

    2000,
    4000,
    2000,

    2000,
    2000,

    2000,

    2000,

    2000,

    4000,
    3000,

    2000,
    2000,

    4000,

    2000,
    2000,

    2000,

    3000,



    2000,

    2000, //you were never

    2000,
    2000,

    2000,

    2000,
    2000,

    2000,

    2000,

    2000,
    2000,

    4000,

    2000,
    2000,

    6000,
    8000,
    8000,

    2000,

    3000,
    3000,

    2000,
    2000,

    3000,
    3000,

    2000,

    4500,

    2000,
    2000,

    2000, //for now, yes
    2000,
    2000,

    2000,

    2000,

    2000,
    2000,

    2000
]

function end(){
    $(".continue").toggle();
}
