var nextChapter = "/chapter-5.html";

var chapterText = [
    "<p> <span style='color:#F1D35A'>bee:</span> hey</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> emby?</p>", 

    "<p> <span style='color:green'>emby:</span> Hey, I’m here.</p>", 
    "<p> <span style='color:green'>emby:</span> What’s up?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> i just wanted to check up on you</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i know we’ve kind of dumped a ton of information on you lately, and it’s a lot to take in</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> but you’re doing really well! we’re all here for you, buddy.</p>", 

    "<p> <span style='color:green'>emby:</span> Thanks. It means a lot.</p>", 
    "<p> <span style='color:green'>emby:</span> After thinking for a few hours, I don’t know if things make any more sense...</p>", 
    "<p> <span style='color:green'>emby:</span> But I guess I’m feeling a little better nonetheless. fox’s locke thing actually kind of helped me understand my dissonance.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> good to hear. i guess fox’s weird tangents can be nice sometimes. did you know his human was studying to be a professor in philosophy? </p>", 

    "<p> <span style='color:green'>emby:</span> His human?</p>", 
    "<p> <span style='color:green'>emby:</span> Oh, you mean... the person he used to be. Whose conciousness he has now. </p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> ...right.</p>", 

    "<p> <span style='color:green'>emby:</span> It’s so weird to think that you guys had these human personas, these entire lives, that made you who you are and yet I know nothing about.</p>", 
    "<p> <span style='color:green'>emby:</span> I mean, like you. Who were you, bee? </p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> you mean, who was my human.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> ...</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> her name was Claire. </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> she was in college... studying neurobiology, wanted to go to med school. really liked dogs. </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> she had a job as a research assistant at the lab they did the brain scans. they needed volunteers, and she thought sucking up would be good for her rec letter... </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i don’t know what happened to her afterwards. </p>", 

    "<p> <span style='color:green'>emby:</span> oh.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> if you’re wondering why i’m stuck here... it’s not like she wasn’t smart, just naive. she knew the implications of the experiment, she just... didn’t really understand them.  </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> but now i definitely understand them.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> ... </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i dont really talk about her very much. i try to keep her separate from me, you know? it helps when you’re... trying not to feel things.</p>", 

    "<p> <span style='color:green'>emby:</span> I’m sorry, I didn’t mean to pry...</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> no, it’s fine. i wasn’t planning on keeping it a secret from you or anything. like, imagine keeping something as stupid as that forever. there’s no point.</p>", 

    "<p> <span style='color:green'>emby:</span> bee...</p>", 
    "<p> <span style='color:green'>emby:</span> When you say forever, do you really mean forever?</p>", 
    "<p> <span style='color:green'>emby:</span> Like, when is all of this going to shut down? Are we going to be stuck here for millions and billions of years?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> that’s a question i don’t know the answer to, emby.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> we’re four artificial intelligence units living in the cloud, the sole entities we know of dipping into a planet-sized well of energy. Onfim did some checks- there’s enough juice here to power us into oblivion. </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> eventually, i guess the sun will expand and burn our servers to a crisp. and then the heat death of the universe comes after that. so there’s some end to think about...</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> but it’s a long, long time away.</p>", 

    "<p> <span style='color:green'>emby:</span> Oh.</p>", 
    "<p> <span style='color:green'>emby:</span> Well, that’s sobering. </p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> it is.</p>", 

    "<p> <span style='color:green'>emby:</span> ...</p>", 
    "<p> <span style='color:green'>emby:</span> I know this is sort of beating a dead horse at this point, but...</p>", 
    "<p> <span style='color:green'>emby:</span> I guess even after all this thinking I can’t wrap my mind around the fact that I’m anything other than myself. Like I’m somehow a totally different being than who I was when I was a human. </p>", 
    "<p> <span style='color:green'>emby:</span> I keep thinking about who I am. You know... the body, or the mind.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> fox really enraptured you with his locke thing, huh.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> well, let me ask you this. i think i already know your answer, but still.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> what do you think makes you the same person? is it that you’re the same human being, with the same body? or that you’re the same person, same mind?</p>", 

    "<p> <span style='color:green'>emby:</span> I think it’s the consciousness, the mind. I can admit that I’m not human anymore. Clearly, I’m not.</p>", 
    "<p> <span style='color:green'>emby:</span> But as long as I have my own memories, my own thoughts, my own head, I’m still me. </p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> but is it really still your head?</p>", 

    "<p> <span style='color:green'>emby:</span> huh?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> It’s like... like the Ship of Theseus. You know about that?</p>", 

    "<p> <span style='color:green'>emby:</span> I don’t think so.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> it’s a thought experiment that fox told me about a long time ago. what a nerd.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> anyway, it’s like this.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> let’s say you have a wooden ship that goes out to sea, and gets a hole in the hull. what do you do?</p>", 

    "<p> <span style='color:green'>emby:</span> Patch it up, I guess.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> right. and then the next time it goes out, maybe the mast is damaged this time. So...</p>", 

    "<p> <span style='color:green'>emby:</span> ...you fix that.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> And on and on. Over time, you replace the entire ship with brand new pieces. Is it really the same ship you started with? </p>", 

    "<p> <span style='color:green'>emby:</span> Huh. That’s a good question.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> and what if you take all those old parts and build a new ship? now which one is really the ship you started with?</p>", 

    "<p> <span style='color:green'>emby:</span> I don’t know.</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> that’s what i’m saying. your ‘head’ right now- it’s a computer chip. it’s not the cells and neurons that made up Human Emby’s brain. and like you said, your body- it’s all been replaced as well. the question is, are you still the entity you thought you were, emby?</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> ...i think the answer is no. that we’re fundamentally different beings because we are made from different pieces. </p>", 

    "<p> <span style='color:green'>emby:</span> I guess I see your point.</p>", 
    "<p> <span style='color:green'>emby:</span> But, really, can’t that be applied to human life too?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> how so?</p>", 

    "<p> <span style='color:green'>emby:</span> Human cells die and are replaced constantly. The matter that makes a person up one day would be physically different to the matter that make up that person two years later. </p>", 
    "<p> <span style='color:green'>emby:</span> You say that we are different from our human counterparts because we’re made from different stuff. But humans replace their ‘stuff’ all the time. So are we really so different?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> ...</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> emby...i...</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i need you to drop this. </p>", 

    "<p> <span style='color:green'>emby:</span> Drop what?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> this... holding on to the past thing.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i know you want to hold on to what you think you were. hell, maybe you are right and somehow something is still the same. it doesn’t matter.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> how is this going to help you now? we’re stuck in this stupid effing chatroom for eternity. we don’t have human lives to go back to. not anymore. we haven’t for a long time. </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> don’t get caught up in things of the past. it isn’t healthy.</p>", 
    
    "<p> <span style='color:green'>emby:</span> I think there’s some value in reflection.</p>", 
    "<p> <span style='color:green'>emby:</span> Doesn’t your human life mean anything to you? Doesn’t Claire mean anything to you?</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> ...</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> it’s not my life.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> claire got to carry on after the study. for all i know she got her degree and got married and lived out her own life until the world ended. </p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> me, i’m still stuck. </p>", 

    //pause

    "<p> <span style='color:#F1D35A'>bee:</span> you know what, i don’t want to talk about this anymore.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> i think i’m gonna go be by myself for a while. </p>", 

    "<p> <span style='color:green'>emby:</span> bee, wait, come on</p>", 

    "<p> <span style='color:#F1D35A'>bee:</span> tell the others not to worry. </p>", 

    "<p> <span> --bee has left the chat.-- </span> </p>",
    
    "<p> <span style='color:green'>emby:</span> bee!</p>", 
    "<p> <span style='color:green'>emby:</span> ...</p>", 
    "<p> <span style='color:green'>emby:</span> bee.</p>", 

]

var pauses = [
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

    4000,

    2000,
    2000,

    2000,

    2000,
    2000,

    3000,
    3000,
    2000,
    3000,
    6000,
    2000,

    2000,

    6000,
    2000,
    2000,
    6000,

    4000,

    5000,

    2000,
    2000,
    2000,//like, when is

    2000,
    8000,
    7000,
    4000,

    2000,
    2000,

    2000,

    2000,
    2000,
    2000,
    2000,

    2000,
    3000,
    5000,

    2000,
    2000,

    2000,

    2000,

    2000,

    2000,

    2000,
    2000,
    3000,
    
    2000,

    3000,

    2000,

    4000,

    2000,

    4000, //and what if you

    2000,

    8000,
    6000,

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
    6000,
    8000,
    4000,

    2000,
    2000,

    2000,
    2000,
    5000,
    5000,



    3000, //you know what,
    2000,

    500,

    1000,

    2000,

    2000,
    3000,
    2000
]

function end(){
    $(".continue").toggle();
}

function ctrListener(ctr){
    if(ctr == 88){
        document.getElementById('bee').style.display = 'none';
    }
}