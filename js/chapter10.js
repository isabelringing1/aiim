var nextChapter = "/chapter-11";

var chapterText = [
    "<p> <span style='color:red'>Zoey:</span> Hi! I’m back!</p>",
    "<p> <span style='color:red'>Zoey:</span> Y’all are still here, right?</p>",
    
    "<p> <span style='color:green'>emby:</span> Yes we’re here! How did everything go?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> It went great. The river was right where you said it would be, fox.</p>",
    "<p> <span style='color:red'>Zoey:</span> There wasn’t too much fish in the river, but I caught a few. Enough to hold me over for the next few days.</p>",
    "<p> <span style='color:red'>Zoey:</span> Plus I restocked on clean water. This was exactly what I needed, truly. Thank y’all again.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> happy to help!!</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We’re glad to hear it. Before you know it, you’ll be on the move again.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Oh, speaking about that! Do you have any updates on the Tractor?</p>",
    
    "<p> <span style='color:#9900cc'>Onfim:</span> Indeed I do. I finished up a few minutes ago and I think you’ll be quite satisfied. </p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> I have to say, you own quite a unique machine. Nothing like I’ve ever seen before- it was built in the last few hundred years, I assume? </p>",
    
    "<p> <span style='color:red'>Zoey:</span> Oh, I’m not really sure when it was built. It was kind of just passed on to me. But thank you.</p>",
    
    "<p> <span style='color:#9900cc'>Onfim:</span> Ah. Well, anyway.</p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> A discussion of the underlying problem first: the solar plate was suffering from a hardware issue, but I redirected the circuit so that it would circumvent the problem location.</p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> Ordinarily, such a modification would worsen the charging capabilities of your vehicle, but the energy conversion method implemented was highly inefficient to begin with.</p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> So, I made a few small tweaks and revamped your vehicle’s efficiency and charging rate.</p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> All in all, your vehicle now only requires a few hours of charging to replenish its battery.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Wow, that’s great! Thank you so much, Onfim. This is life-saving.</p>",
    
    "<p> <span style='color:#9900cc'>Onfim:</span> My pleasure.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> hey zoey, can i ask-</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> all this talk about stocking up on water and fixing the Tractor is great and all, but... </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> where exactly are you going?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Oh! Um... I’m heading westbound.</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> But to any particular place or area? Are you trying to find something?</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I mean, New Orleans to Houston is no small trek.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> It... </p>",
    "<p> <span style='color:red'>Zoey:</span> ... </p>",
    "<p> <span style='color:red'>Zoey:</span> ...Sorry. I should tell y’all. No time to be picky.</p>",
    "<p> <span style='color:red'>Zoey:</span> This... this might take some backstory.</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> By all means.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> So, when I was little, sometimes travelers would stop by and stay a night at our house. This was back in New Orleans.</p>",
    "<p> <span style='color:red'>Zoey:</span> They were all going to the same place- or trying to. </p>",
    "<p> <span style='color:red'>Zoey:</span> It was said to be the last sustainable city. Hundreds, maybe even thousands of people lived there. </p>",
    "<p> <span style='color:red'>Zoey:</span> It wasn’t on any kind of map, and there was no way to contact them- the town had sealed itself off from the world too well. Either that, or it didn’t exist at all.</p>",
    "<p> <span style='color:red'>Zoey:</span> This was a while ago, though. Eventually, people just stopped stopping by, and I stopped hearing about it. I’ve long since forgotten the name of the city. </p>",
    "<p> <span style='color:red'>Zoey:</span> But I think it sounded something like... Albatross. </p>",
    "<p> <span style='color:red'>Zoey:</span> So yea. I’m trying to go to Albatross. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> wow, a thriving commune of humans? that sounds almost too good to be true.</p>", 
    "<p> <span style='color:#F1D35A'>bee:</span> albatross..</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> hmm. i have no idea what that could be. i’ve never heard of such a place.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Oh...</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That doesn’t mean it doesn’t exist!</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We’ll do everything we can to help you find Albatross, Zoey.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> If you have any more clues to where it could be located, though, that would be really helpful.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Well, there are a sort of set of directions, passed down by word of mouth throughout the years. </p>",
    "<p> <span style='color:red'>Zoey:</span> They were pretty cryptic, though. Kind of like a puzzle...</p>",
    "<p> <span style='color:red'>Zoey:</span> ‘ten, twenty, five’. Repeat it enough and it becomes a sort of chant.</p>",
    "<p> <span style='color:red'>Zoey:</span> Anyways, the first part was kind of easy. The big road going out of New Orleans was the 10 road. That’s what people were following. </p>",
    "<p> <span style='color:red'>Zoey:</span> So I’ve been following the 10 road with the Tractor, too. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ohh yea you’re talking about interstate 10</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i kind of know the texas area... claire’s aunt lived in san antonio. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> anyways, yea, that’ll take you westbound.</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We should decide when the best time for you to leave is. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Onfim, the Tractor’s charging, right? When will it be full?</p>",
    
    "<p> <span style='color:#9900cc'>Onfim:</span> By sunset, if my calculations are correct. Which I know they are. </p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Hm. Maybe you shouldn’t leave right away, Zoey.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Since it’s so dark, night travel would get really dangerous. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> If you travel during the day, then you can find a safe place to rest and charge while there's still daylight.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I have no problem with that. </p>",
    "<p> <span style='color:red'>Zoey:</span> It would be good to have a relaxing night where I can just eat and rest and not worry. And answer any questions y’all have as well. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> yea, that would be amazing. take all the time you need.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> although we do have plenty of questions whenever you’re ready.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Well, I can multitask. What’s the first one?</p>",
    
    "<p> <span style='color:green'>emby:</span> Oh, um... oh man, I don’t even know where to begin.</p>",
    "<p> <span style='color:green'>emby:</span> Well, the biggest one is, do you know What Happened? To make everything like this?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> ...</p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t think I can be much help here.</p>",
    "<p> <span style='color:red'>Zoey:</span> I really have no idea. Honestly... I was hoping that y’all could tell me. </p>",
    
    "<p> <span style='color:green'>emby:</span> ...I see.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I’m really sorry.</p>",
    
    "<p> <span style='color:green'>emby:</span> No! Don’t be, seriously! </p>",
    "<p> <span style='color:green'>emby:</span> Why don’t you tell us a little about your life? Growing up in New Orleans?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Yea, sure. </p>",
    "<p> <span style='color:red'>Zoey:</span> So, ah, as far as I know, I was born in New Orleans. Eighteen... mm, maybe nineteen years ago. I can’t remember. </p>",
    "<p> <span style='color:red'>Zoey:</span> And lived there until, well, now.  </p>",
    
    "<p> <span style='color:green'>emby:</span> Were there other people around in your life?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> There were. A long time ago. </p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t remember this time of my life very well, but my mom was there- and maybe a few other adults as well.</p>",
    "<p> <span style='color:red'>Zoey:</span> But, well...</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> they died?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Um. Not exactly. They... ‘went away’, as my dad would put it.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> They... disappeared. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> wait, disappeared? how does that happen??</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I, um, I don’t know. </p>",
    "<p> <span style='color:red'>Zoey:</span> Dad was kind of vague about that part of my life anyway.</p>",
    "<p> <span style='color:red'>Zoey:</span> I loved him, but... he always talked so cryptically. Always like he had to protect me from the world.</p>",
    "<p> <span style='color:red'>Zoey:</span> He... he would tell me about his childhood, though.</p>",
    "<p> <span style='color:red'>Zoey:</span> He lived in a commune. Maybe 50, 60 people lived there.</p>",
    
    "<p> <span style='color:green'>emby:</span> That's really neat. Were there more communes?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Not sure. I don’t think he knew, honestly.</p>",
    "<p> <span style='color:red'>Zoey:</span> Still-- it sounded nice. I wish that was how my childhood was. He had access to so much information.</p>",
    "<p> <span style='color:red'>Zoey:</span> Somehow, the commune had preserved hundreds of books about everything in the world. Things like what animals live at the bottom of the ocean. Things I could only dream about.</p>",
    "<p> <span style='color:red'>Zoey:</span> To know that much... and to forget it all, when your daughter asks you about it years later. I can’t get over it. </p>",
    "<p> <span style='color:red'>Zoey:</span> ...I guess it’s not all lost. When he came to New Orleans, he brought a few books from their collection. </p>",
    "<p> <span style='color:red'>Zoey:</span> I learned about... the life y’all would have lived. About kitchens, and tennis, and the government, that kind of stuff.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s how I learned to read and write. In morse code, too. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> wait, back up. so what happened to the commune? where did everyone go?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I... um.</p>",
    "<p> <span style='color:red'>Zoey:</span> They also went away.</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You mean disappeared?</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That... seems so sinister.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> yea wth</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ppl disappearing in mass numbers doesn’t just... happen. there has to be more to that.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I... I don’t think I should say any more.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> wait what? why</p>",
    
    "<p> <span style='color:red'>Zoey:</span> My dad... made me promise to not speak of certain things before he died. </p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t understand why. I don’t really understand a lot of things my dad did. </p>",
    "<p> <span style='color:red'>Zoey:</span> But... I promised. </p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> zoey we-</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> -we’re gonna leave this for now. So you can ask us some questions.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Right, bee?</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ...right.</p>",
    
    "<p> <span style='color:green'>emby:</span> So, do you have questions for us?</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I... yea, plenty.  </p>",
    "<p> <span style='color:red'>Zoey:</span> I mean, I have to get the obvious out of the way.</p>",
    "<p> <span style='color:red'>Zoey:</span> Life wasn’t always... like this, right? </p>",
    "<p> <span style='color:red'>Zoey:</span> There was a before.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> there was.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> And y'all remember it?</p>",
    
    "<p> <span style='color:green'>emby:</span> For me, it’s really all that I remember. </p>",
    "<p> <span style='color:green'>emby:</span> I- well, the person I was- wasn’t around when it all fell apart.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> I’m a little confused about what y'all are, still. Are you people? Or people’s minds without a body, trapped in a computer?</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> we’re still trying to figure that out too lol</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i guess that’s one way to look at it</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> another way is, we are computers that think like particular humans at a particular point in their lives</p>",
    
    "<p> <span style='color:red'>Zoey:</span> ...particular...humans?</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ...if that’s confusing to you, though, then sure. we’re just people.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> How long has it been? Since y'all... lived?</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> oh. uh,,</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i think about 950 years now.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Wow.</p>",
    "<p> <span style='color:red'>Zoey:</span> Do you miss your past life? </p>",

    "<p> <span style='color:red'>Zoey:</span> ...anybody? </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... well... huh.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That's a big question.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> i can go.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...honestly? yea. i definetly do.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i... think my life was incomplete.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i look back and i realize how much i was always waiting. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> for until i grew up. until i got into med school. until i became a doctor.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> and now i have to face that those dreams aren't ever going to come true.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> yea, i miss my old life. i miss the future i was waiting for, in a way.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...a future that would never come. </p>",
    
    "<p> <span style='color:red'>Zoey:</span> That’s, um... that's so sad, bee.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ikr</p>",
    
    "<p> <span style='color:red'>Zoey:</span> But thank you for telling me. That... means a lot. You’re really brave.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> ...you should get some rest, Z.</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yea, I second that.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> The rest of us can share a little about ourselves another night.</p>",
    
    "<p> <span style='color:red'>Zoey:</span> Sounds good. Looking forward to crashing.</p>",
    "<p> <span style='color:red'>Zoey:</span> We’re going to take off at dawn tomorrow, right?</p>",
    
    "<p> <span style='color:green'>emby:</span> Yes! Onwards to Albatross. </p>",
    "<p> <span style='color:green'>emby:</span> We won’t give up, Zoey!</p>",
    
    "<p> <span style='color:red'>Zoey:</span> And neither will I. </p>",
    "<p> <span style='color:red'>Zoey:</span> Good night, y'all. Thanks for this.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s weird. I’ve never had... friends.</p>",
    
    "<p> <span style='color:#F1D35A'>bee:</span> :)</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> goodnight friend</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> see u in the morning</p>",
    
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> See you in the morning. </p>",
    
    "<p> <span style='color:green'>emby:</span> See you in the morning!</p>"
]

var pauses = [
    3000,
    2000,

    2000,

    3000,
    4500,
    4500,

    2000,

    3000,

    3000,

    3500,
    4500,

    4000,

    2000,
    7000,
    7000,
    6000,
    3000,

    2000,

    3000,

    2000,
    3000,
    3000,

    2000,

    3000,
    2500,

    2000,
    2000,
    3000,
    2000, //this... this

    2000,

    4000,
    3000,
    4000,
    6000,
    5000,
    3000,
    3000,

    3000,
    2000,
    3000,

    1500,

    2000,
    2500,
    3000,

    3000,
    3000,
    3000,
    4000,
    2500,

    3000,
    3000,
    3000,

    3000,
    3000,

    2500,

    3000,
    3000,
    6000,//If you travel

    2500,
    5000,

    3000,
    3000,

    2500,

    2000,
    3000,

    2000,
    2000,
    3000,

    2000,

    2000,

    2000,
    2500,

    2000,
    4000,
    2000,

    2500,

    2000,
    4000,
    2000,

    2000,

    3000,

    2000,

    2000,

    2000, //wait, disappeared?

    2000,
    3000,
    4000,
    3500,
    3500,

    2000,

    2500,
    3500,
    7000,
    4000,
    4000,
    4000,
    2500,

    3000,

    2000,
    2000,

    2000,
    2000,

    2000,
    3500,

    2000,

    2000,

    3500,
    3500,
    2000,

    1000,

    2000,
    2000,

    2000, //...right.

    2000,

    2000,
    2500,
    2000,
    3000,

    2000,

    2000,

    2000,
    3000,

    5000,

    2500,
    2500,
    3500,

    2000,

    4000,

    3000,

    2000,
    2000,

    2000,
    5000,

    4000,

    3000,
    3000,

    2500,
    2500,
    3000,
    3000,
    3000,
    3000,
    5000,
    4000, //..a future that

    3000,

    2000,

    3000,

    2000,
    
    2000,
    3000,

    2500,
    2500,

    2000,
    2000,

    2000,
    2000,
    3000,

    2000,
    2000,
    2000,

    2000,

    2000
]

function end(){
    $(".continue").toggle();
}