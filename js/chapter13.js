var nextChapter = "/chapter-14"

var chapterText = [
    "<p> <span style='color:red'>Zoey:</span> Hey y’all, just arrived in El Paso.</p>",

    "<p> <span style='color:green'>emby:</span> How’s everything going?</p>",

    "<p> <span style='color:red'>Zoey:</span> Good. Stocking up on water in Sonora was a good move. </p>",
    "<p> <span style='color:red'>Zoey:</span> I... I also had a realization on the way here.</p>",

    "<p> <span style='color:green'>emby:</span> About the world’s downfall? The truth about humanity disappearing en masse?</p>",

    "<p> <span style='color:red'>Zoey:</span> No, um.. not about any of that.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s about the... chant.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> what chant</p>",

    "<p> <span style='color:red'>Zoey:</span> You know. The one that went ‘ten, twenty, five’. </p>",
    "<p> <span style='color:red'>Zoey:</span> The path to Albatross.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Oh, yes. You got somewhere with that?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, actually. Um, I could be wrong about this, but... I’m pretty sure I know what the last two parts are talking about.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> ?</p>",

    "<p> <span style='color:red'>Zoey:</span> Okay, so as I was entering the city, I kept seeing signs for the same thing. And after seeing like the hundreth one, it finally hit me.</p>",
    "<p> <span style='color:red'>Zoey:</span> I think the ‘twenty’ and ‘five’ signify roads, but... just one road. Road twenty-five. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Interstate 25? Let me see...</p>",

    //map 5
    "<img id='map5' src='assets/Map5.png' style='width:60%'>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Looks like that takes you north, up through New Mexico.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> And yes, you’ll be able to get on it within another hour on the ten.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You sure you want to commit to this, Zoey?</p>",

    "<p> <span style='color:red'>Zoey:</span> ...It’s funny. Just a few days before, I don't think I could have made this decision. I would have been paralyzed by uncertainty. </p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t know what happened, but somehow that feeling is gone now. I... feel good about this. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Then we’ll follow your lead. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I’ve set your map to follow this course of action. Good luck.</p>",

    "<p> <span style='color:red'>Zoey:</span> Great.</p>",
    "<p> <span style='color:red'>Zoey:</span> I’m just glad I figured out a direction to go in. Now I can rest for the night at least.</p>",
    "<p> <span style='color:red'>Zoey:</span> Anyway, what’s the topic for tonight, y’all?</p>",

    "<p> <span style='color:green'>emby:</span> Oh!</p>",
    "<p> <span style='color:green'>emby:</span> Actually, Zoey, I thought it could be fun if you could tell us about some of the stories that you know. From you dad, or your books.</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, um, yea, sure!</p>",
    "<p> <span style='color:red'>Zoey:</span> Hmm... well, there was always one story from my dad that I liked. He heard it as a kid around his commune’s campfire, I think.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s...I guess it’s a legend about stars, and,,, aliens?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> wait legit</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> fox, did you hear tha-</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Shh, bee. Let her talk.</p>",

    "<p> <span style='color:red'>Zoey:</span> Alright, so, I guess this is supposed to explain why we have stars.</p>",
    "<p> <span style='color:red'>Zoey:</span> According to this legend, there are many many sets of eyes on earth. On us.</p>",
    "<p> <span style='color:red'>Zoey:</span> They belong to beings across the universe- watching us, trying to talk to us, wanting to guide us.</p>",
    "<p> <span style='color:red'>Zoey:</span> But- the way we are now, we can’t understand their language, their messages. We just don’t have the technology yet.</p>",
    "<p> <span style='color:red'>Zoey:</span> Thankfully, the aliens are patient, on a scale we can’t even imagine. So each star in the sky is an eye- a pinprick of light. And so they wait, peering at us from across the universe, watching, waiting for us to grow up.</p>",
    "<p> <span style='color:red'>Zoey:</span> Because once we do, we’ll be able to talk to them, befriend them, reach them.</p>",
    "<p> <span style='color:red'>Zoey:</span> So yea. That’s why we have stars.</p>",

    "<p> <span style='color:green'>emby:</span> Wow. That’s beautiful. And beautifully stated.</p>",

    "<p> <span style='color:red'>Zoey:</span> I’m guessing it’s not... scientifically accurate, is it?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> omg no but who cares</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> this is sick</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i prefer alien peepholes over the real thing</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> (which are flaming balls of fire, btw. billions of suns.)</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, neat!</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... I love this, Zoey.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You don’t even know how much I adore this.</p>",

    "<p> <span style='color:red'>Zoey:</span> Even though it’s wrong?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Sure. It really encapsulates why I think humanity loves aliens. Why I love aliens. Why my wife loved them.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> To me, believing in aliens means believing that our lives mean something. That humanity means something.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I mean, existence can get kind of futile, can’t it? We toil at our crops, our desk jobs, our studies, managing to sustain ourselves- but for what? What will our kind really accomplish in the time we have?</p>",

    "<p> <span style='color:red'>Zoey:</span> Man, tell me about it. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> But! If we believe that there’s someone, anyone, watching us out there- maybe even cheering us on- it means that our work and pain and love matters to something bigger than ourselves. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I mean- god, I miss my wife. I miss the old life I had. I mourn for all the children I’ll never have.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> But damn, if we can ultimately mean something bigger in the grand scheme of things? Then maybe it gives our sacrifices meaning. Maybe it’s all worth it.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> huh. hey fox?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yea?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> i think i get it now. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i want aliens to be real too.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...that means a lot, bee.</p>",

    "<p> <span style='color:red'>Zoey:</span> Also- I don’t know how much this helps, but-</p>",
    "<p> <span style='color:red'>Zoey:</span> You’d make a really great dad, fox. Truly. Your kid would come out so curious and passionate and incredible.</p>",

    "<p> <span style='color:green'>emby:</span> Oh, seconded, for sure. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...thanks guys. Really. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> emby, you must know what time it is now.</p>",

    "<p> <span style='color:green'>emby:</span> ...it’s my turn, isn’t it.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> yup</p>",

    "<p> <span style='color:red'>Zoey:</span> Yep!</p>",

    "<p> <span style='color:green'>emby:</span> my turn to encapsulate the meaning of my life into a few sentences?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yep.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> u betcha</p>",

    "<p> <span style='color:green'>emby:</span> Hoo boy ok</p>",
    "<p> <span style='color:green'>emby:</span> Um, well, to preface this, I just gained consciousness a little before we found you, Zoey.</p>",
    "<p> <span style='color:green'>emby:</span> So I haven’t really figured my whole thing out yet. My, um, existence, and how I feel about it.</p>",
    "<p> <span style='color:green'>emby:</span> But I’ve been thinking about a lot in these past few days, so maybe I’ll just voice my thoughts out loud. </p>",
    "<p> <span style='color:green'>emby:</span> My life was, honestly, a little boring.</p>",
    "<p> <span style='color:green'>emby:</span> I was a business student in New York City, chasing after a degree just because I felt like I was supposed to. I had no idea what I really wanted to do with my life.</p>",
    "<p> <span style='color:green'>emby:</span> I realize now I was grounded in so many material things I thought would matter in the long run. </p>",
    "<p> <span style='color:green'>emby:</span> I thought my degree would fulfil some purpose, make me more complete somehow. </p>",
    "<p> <span style='color:green'>emby:</span> But now I know that I’ll never get it. </p>",
    "<p> <span style='color:green'>emby:</span> And that realization... it doesn’t make me feel anything.</p>",
    "<p> <span style='color:green'>emby:</span> ...I pushed a lot of friends and family away to get work done. But if there’s anything I’ve learned over the past few days, it’s that it's the connections we make that sustain our lives. </p>",
    "<p> <span style='color:green'>emby:</span> They’re what we carry with us, and remember in the end. </p>",
    "<p> <span style='color:green'>emby:</span> So, yea. Those are my thoughts. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> well stated sir</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> way to round us out strong</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yes. I think it really encapsulates your journey since you joined us well. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We’re proud of you. Even if you’re still figuring stuff out. So are we.</p>",

    "<p> <span style='color:green'>emby:</span> Thanks. And now that we have a purpose, a goal... I feel reengergized, I guess. Determined. </p>",

    "<p> <span style='color:red'>Zoey:</span> Man, y'all have done so much already. I just want to return the favor. </p>",
    "<p> <span style='color:red'>Zoey:</span> Like chasing down loose ends. Describing the world as it is now. Getting closure.</p>",
    "<p> <span style='color:red'>Zoey:</span> Just tell me what to do, y’all.</p>",

    "<p> <span style='color:green'>emby:</span> Thanks Zoey. It’s been a great time exploring with you.</p>",
    "<p> <span style='color:green'>emby:</span> But we’re focused on you first. Always. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You’re our only hope, obi-won.</p>",

    "<p> <span style='color:red'>Zoey:</span> huh?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> what kind of reaction did you expect with that reference, fox</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Hey, you got it!</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> Those movies were ANCIENT. Even in our time.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> What, are we starting this up again? The franchise is timeless. What are you gonna do, log off for eleven months again, huh?</p>",

    "<p> <span style='color:green'>emby:</span> ..okay okay. </p>",
    "<p> <span style='color:green'>emby:</span> Maybe we should call it a night now.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> ...yea u right</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> zoey, you don’t want to get into this beef, believe me.</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, I’m not gonna touch this.</p>",
    "<p> <span style='color:red'>Zoey:</span> Y'all should get some rest too. Remember all the eyes on us? We can't let them down.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We certainly can't. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...goodnight, Z. Safe travels tomorrow. </p>"
]

var pauses = [
    2000,

    2000,

    2500,
    2500,

    3000,

    2000,
    2000,

    2000,

    2000,
    2000,

    2000,

    4000,

    2000,

    4500,
    3500,

    2000,


    2000,
    2500,
    3500,
    2500,

    4500,
    4000,

    2000, //then we'll follow
    3000,

    2000,
    3500,
    2500,

    2000,
    2000,

    2000,
    4500,
    3000,

    2000,
    1000,

    2000,

    3500,
    3500,
    4000,
    4000,
    7000,
    4000,
    3000,

    3000,

    2500,

    2000,
    2000,
    2000,
    2500, //(which are)

    3000,

    2000,
    2500,

    2000,

    3500,
    3500,
    7000,

    2000,

    7000,
    4000,
    6500,

    2000,
    
    2000,

    2000,
    3000,

    2000,

    2500,
    4000,

    2000,

    2500,
    3000,
    3000, //emby, you must

    2000,

    1000,
    
    1000,

    2000,

    1000,

    1000,

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
    3000,
    
    2000,
    2000,

    3500,
    3000, //we're proud

    3500,
    
    3500,
    3500,
    2000,

    3000,
    2500,

    2000,

    2000,

    3000,

    2000,

    2000,

    4000,

    2000,
    2000,

    2000,
    3500,

    2500,
    3500,

    2000,
    2000
]

function ctrListener(ctr){
    if (ctr == 16){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("map5").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("map5").height;
        }, 2200);
    }
}

function end(){
    $(".continue").toggle();
}
