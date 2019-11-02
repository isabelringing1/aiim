var nextChapter = "/chapter-13"

var chapterText = [
"<p> <span style='color:red'>Zoey:</span> Hey. Um, guys. </p>",

"<p> <span style='color:green'>emby:</span> Hi Zoey! How was your day? </p>",

"<p> <span style='color:red'>Zoey:</span> It was good, thanks! Can’t complain. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> According to the map, you’re at your target for today.</p>",

//map 4 
"<img id='map4' src='assets/Map4.png' style='width:60%'>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...actually, now that I look at it more, you’re a little past it. Everything okay? Why’d you overshoot? </p>",

"<p> <span style='color:red'>Zoey:</span> Yea. Um, about that. </p>",
"<p> <span style='color:red'>Zoey:</span> I did arrive in Sonora safely.  </p>",
"<p> <span style='color:red'>Zoey:</span> But it was light outside and then, um, I guess I got distracted. There were signs in the road directing me to some place that wasn’t too far from here. </p>", 
"<p> <span style='color:red'>Zoey:</span> They called it a... ‘tourist attraction’. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> oh boy </p>",

"<p> <span style='color:red'>Zoey:</span> So I kind of drove the Tractor there on an impulse, and.. I’m here! </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Where is... where is here, Zoey? </p>",

"<p> <span style='color:red'>Zoey:</span> Well, I think the official name for this is... a cavern? </p>",

"<p> <span style='color:green'>emby:</span> A... cavern?! </p>",

"<p> <span style='color:#F1D35A'>bee:</span> fox.. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I...I’m looking... </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> you have to be talking about the Caverns of Sonora, right? </p>",

"<p> <span style='color:red'>Zoey:</span> Yea, that sounds right!</p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... wow. Wow. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Okay, here’s a picture from the archived internet for the uninitiated. Which I think might be all of us. </p>",

//caverns of sonora img
"<img id='caverns' src='assets/Sonora.jpg' style='width:60%'>",

"<p> <span style='color:#F1D35A'>bee:</span> omg z you’re THERE?? </p>",

"<p> <span style='color:red'>Zoey:</span> That’s what it looks like, yea! But darker. I only have the light from this device with me. </p>",

"<p> <span style='color:green'>emby:</span> Zoey... why? </p>",

"<p> <span style='color:red'>Zoey:</span> I just... wanted to explore. </p>",
"<p> <span style='color:red'>Zoey:</span> I feel like I’ve never been anywhere before. </p>",
"<p> <span style='color:red'>Zoey:</span> I grew up looking at all those pictures in my books and wondering if I could ever see something like that in person.</p>",
"<p> <span style='color:red'>Zoey:</span> And now, I’m finally here... and, well... </p>",
"<p> <span style='color:red'>Zoey:</span> It’s so pretty, y’all. Nothing like I’ve ever seen before.  </p>",
"<p> <span style='color:red'>Zoey:</span> And! There’s a ton of water here, actually. It doesn’t taste bad and my purifier was running low anyways. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> A-alright. Are you sure the cave is a safe place to be for the night? </p>",

"<p> <span style='color:red'>Zoey:</span> I feel like it’s the same deal as bee's aunt's house. It’s been standing for so long, it’ll hold up for one more night. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That’s a fair point, I suppose. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> As long as you feel comfortable there. </p>",

"<p> <span style='color:red'>Zoey:</span> Very.  </p>",
"<p> <span style='color:red'>Zoey:</span> Hey, by the way, do you guys know anything about a rabbit? </p>",

"<p> <span style='color:green'>emby:</span> What... do you mean? </p>",

"<p> <span style='color:red'>Zoey:</span> I... I keep seeing images of rabbits in the past few days. </p>",
"<p> <span style='color:red'>Zoey:</span> Today along the roadside especially. Like, on street signs and stuff. In buildings, sometimes.  </p>",

"<p> <span style='color:green'>emby:</span> Oh. Hm. </p>",
"<p> <span style='color:green'>emby:</span> That’s... odd. I don’t really remember many rabbit symbols when I lived on earth.  </p>",

"<p> <span style='color:#F1D35A'>bee:</span> yea, me neither. weird. </p>",

"<p> <span style='color:red'>Zoey:</span> It’s okay! I was, uh, just wondering. </p>",
"<p> <span style='color:red'>Zoey:</span> There’s plenty of other stuff to talk about, anyways.  </p>",
"<p> <span style='color:red'>Zoey:</span> ...fox, you haven’t really told me about your life yet.  </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Ha.  </p>",

"<p> <span style='color:#F1D35A'>bee:</span> yea fox!! it’s ur turn!! </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Okay, well, fair enough. </p>", 
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Well. At the risk of sounding cheesy... </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I mean, my life was good. I lived in a world full of comforts and convenience. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I loved my wife. I had a good job. I was driven in my work. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I was happy, I think. Content is maybe a better word.  </p>",

"<p> <span style='color:red'>Zoey:</span> There’s nothing you regret? Nothing that eats away at you? </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...well, I... </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I wish I could have gotten the chance to be a dad. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> wait, you do? </p>",
"<p> <span style='color:#F1D35A'>bee:</span> you never mentioned that... ever. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> It’s not something I obsess over, by any means. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... I never felt like I could complain. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Right? Because here we are- still alive, in some way- while everyone else in our world is dead. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We’re the lucky ones. There are so many people who deserved more than me, and got less. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Who am I to ask for anything?</p>",

"<p> <span style='color:#F1D35A'>bee:</span> you have a right to have wants, fox.  </p>",
"<p> <span style='color:#F1D35A'>bee:</span> and you shouldn’t feel bad about wanting kids.  </p>",
"<p> <span style='color:#F1D35A'>bee:</span> ... who says we’re lucky to be alive here, anyways? who says this isn’t a curse? </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... I suppose.  </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> This is getting dark rather fast, so. I’ll end my spiel right here, Zoey. </p>",

"<p> <span style='color:red'>Zoey:</span> Thank you for telling me, fox. </p>",
"<p> <span style='color:red'>Zoey:</span> I... I feel like I owe y’all the truth about something. </p>",

"<p> <span style='color:green'>emby:</span> The... truth? </p>",
 
"<p> <span style='color:red'>Zoey:</span> Yea. I’ve kept y'all in the dark unfairly, especially since you've been so great to me. </p>",
"<p> <span style='color:red'>Zoey:</span> Seriously. Angels on earth. Or in the sky, or... wherever y’all are.  </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We’re so happy that you think that, Zoey. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> But- I mean- you made promises to your father. We don’t want you to break them for us.</p>",

"<p> <span style='color:red'>Zoey:</span> I don’t either. But more than that I... </p>",
"<p> <span style='color:red'>Zoey:</span> ...I’m so tired of not knowing anything. </p>",
"<p> <span style='color:red'>Zoey:</span> I want to understand. And for y’all to understand as well. </p>",
"<p> <span style='color:red'>Zoey:</span> And if this will help, then I'm for it. So...here goes. </p>",

"<p> <span style='color:red'>Zoey:</span> Growing up, my dad had a lot of weird rules he’d drill into me. </p>",
"<p> <span style='color:red'>Zoey:</span> And the biggest rule of all was: Don’t talk to computers.  </p>",

"<p> <span style='color:#F1D35A'>bee:</span> ...huh? </p>",

"<p> <span style='color:red'>Zoey:</span> He thought they were dangerous. That they would... suck your soul out. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> he sounds like my grandma, jesus </p>",

"<p> <span style='color:green'>emby:</span> But... why did he think that, Zoey? </p>",

"<p> <span style='color:red'>Zoey:</span> He would never give me a straight answer. ‘That’s how the world is’.</p>",
"<p> <span style='color:red'>Zoey:</span> Truthfully, I don’t think he understood why either. Maybe he was taught it as a kid too. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That’s so bizarre, and... counterintuitive. </p>",

"<p> <span style='color:red'>Zoey:</span> Well, anyway. That’s why I guess I was a little uneasy around y’all at first. </p>",
"<p> <span style='color:red'>Zoey:</span> When you said you were ‘artificially intelligent’- living in a computer! I kind of freaked. </p>",
"<p> <span style='color:red'>Zoey:</span> But after talking to y’all these last few days... </p>",
"<p> <span style='color:red'>Zoey:</span> I’ve seen your past lives, and your desires, and your honesty. </p>",
"<p> <span style='color:red'>Zoey:</span> Maybe y'all aren’t the same people you were when you had bodies and stuff. </p>",
"<p> <span style='color:red'>Zoey:</span> But.. y’all aren’t the computers I was told to be scared of.  </p>",

"<p> <span style='color:green'>emby:</span> Wait, so... do you know why people disappeared, then? </p>",

"<p> <span style='color:red'>Zoey:</span> Not exactly. I was just taught- it had something to do with computers, I guess. </p>",
"<p> <span style='color:red'>Zoey:</span> As you can probably tell by now, I know nothing about almost everything. </p>",
"<p> <span style='color:red'>Zoey:</span> But I hope I was able to give y’all a little more clarity. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> thanks for telling us, z. </p>",
"<p> <span style='color:#F1D35A'>bee:</span> tbh it may have given us less clarity, but... it means a lot to all of us that you did that.</p>", 
"<p> <span style='color:#F1D35A'>bee:</span> i’m... i’m really happy you trust us. </p>",

"<p> <span style='color:red'>Zoey:</span> Of course, with my life. Literally. </p>",
"<p> <span style='color:red'>Zoey:</span> Anyway, that’s all I have for tonight. I... I’m gonna go explore a little bit more, if that’s okay. </p>",

"<p> <span style='color:green'>emby:</span> Yea go have fun!! </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> BUt be safe!! </p>",

"<p> <span style='color:red'>Zoey:</span> I will, I will. See y’all in the morning! </p>",

"<p> <span style='color:#F1D35A'>bee:</span> see ya, zoey. </p>",

//zoey logs off
"<p> <span> --Zoey has left the chat.-- </span> </p>",

"<p> <span style='color:#F1D35A'>bee:</span> hey, gang? </p>",

"<p> <span style='color:green'>emby:</span> Hm? What, did Zoey log back on? </p>",

"<p> <span style='color:#F1D35A'>bee:</span> no she’s still out </p>",
"<p> <span style='color:#F1D35A'>bee:</span> but can we just </p>",
"<p> <span style='color:#F1D35A'>bee:</span> like </p>",
"<p> <span style='color:#F1D35A'>bee:</span> regroup here for a second </p>",

"<p> <span style='color:green'>emby:</span> Oh. Sure. About...? </p>",

"<p> <span style='color:#F1D35A'>bee:</span> literally all of this </p>",
"<p> <span style='color:#F1D35A'>bee:</span> like </p>",
"<p> <span style='color:#F1D35A'>bee:</span> it’s a lot </p>",
"<p> <span style='color:#F1D35A'>bee:</span> i think we need, just, like a quick review sesh of all the craziness that’s going on </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I think that would be helpful as well. </p>",

"<p> <span style='color:green'>emby:</span> K, bee, floor’s all yours </p>",

"<p> <span style='color:#F1D35A'>bee:</span> OKAY Y’ALL </p>",
"<p> <span style='color:#F1D35A'>bee:</span> (huh. guess zoey’s rubbing off on me lol) </p>",
"<p> <span style='color:#F1D35A'>bee:</span> so this is what i feel like is the BIG MYSTERY </p>",
"<p> <span style='color:#F1D35A'>bee:</span> ‘What’s happening to humanity?’ </p>",
"<p> <span style='color:#F1D35A'>bee:</span> now this is a very large question that begs a lot of smaller questions, such as: </p>",
"<p> 1. why are people disappearing?  </p>",
"<p> 2. why are people afraid of computers?  </p>",
"<p> 3. is zoey the last human on earth? or will we find more people? </p>",
"<p> 4. and related: what is albatross? is it real or myth? </p>",
"<p> 5. not to mention, what even caused the end of the world in the first place? bc we still don’t know that dammit </p>",
"<p> 6. rabbits?? what’s up w that?? </p>",
"<p> <span style='color:#F1D35A'>bee:</span> ...okay, that’s all i have. </p>",
"<p> <span style='color:#F1D35A'>bee:</span> (feel free to add more if i missed any) </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> That seems pretty comprehensive to me. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> And I don’t know how to start answering any of them. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> i just can’t... i can’t figure out how everything fits together. </p>",

"<p> <span style='color:green'>emby:</span> I can’t either. </p>",
"<p> <span style='color:green'>emby:</span> But I feel like... Zoey is the key to all of this. </p>",
"<p> <span style='color:green'>emby:</span> She’s the only one with feet to move and eyes to see. </p>",
"<p> <span style='color:green'>emby:</span> All we can do right now is support her on this journey. </p>",
"<p> <span style='color:green'>emby:</span> And hope that some answers will show themselves in due time.  </p>",

"<p> <span style='color:#F1D35A'>bee:</span> hm </p>",
"<p> <span style='color:#F1D35A'>bee:</span> yea. i can’t deny that traveling with her has already been... super meaningful.</p>",
"<p> <span style='color:#F1D35A'>bee:</span> but, like, my angsty shit is over with, now i want to figure out the rest of the world, y’know? </p>",

"<p> <span style='color:green'>emby:</span> I think we all feel the same way. </p>",

"<p> <span style='color:#F1D35A'>bee:</span> ...alright. let’s break for the night, y’all. </p>",

"<p> <span style='color:#9900cc'>Onfim:</span>  Oh, before we do- I have some news. </p>",
"<p> <span style='color:#9900cc'>Onfim:</span>  Traveling with everyone has been quite interesting, but I’ll be taking a small break from actively participating in the chat. </p>",
"<p> <span style='color:#9900cc'>Onfim:</span>  I have some investments that are taking shape that I need to be fully present for.</p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Oh, okay... see you, Onfim.</p>",

"<p> <span style='color:#9900cc'>Onfim:</span>  Goodbye, for now.</p>",

//pause
"<p> <span> --Onfim has left the chat.-- </span> </p>",

"<p> <span style='color:green'>emby:</span> What did that even mean?</p>",

"<p> <span style='color:#F1D35A'>bee:</span> lol don’t look at me</p>",
"<p> <span style='color:#F1D35A'>bee:</span> onfim has always done what he pleases</p>",
"<p> <span style='color:#F1D35A'>bee:</span> emby, you’re still doing okay out there?</p>",
"<p> <span style='color:#F1D35A'>bee:</span> we haven’t forgotten you’re the new kid, even tho there’s an even newer kid now</p>",

"<p> <span style='color:green'>emby:</span> Oh-- I'm okay! Thanks for asking.</p>",
"<p> <span style='color:green'>emby:</span> Following Zoey around has been more than great, really. </p>",
"<p> <span style='color:green'>emby:</span> I think we have a shot at solving this. You know, everything. </p>",

"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Wouldn't that be something. </p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...</p>",
"<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Well. We won't get answers just sitting around like this. I'll talk to you guys in the morning.</p>",

"<p> <span style='color:green'>emby:</span> Good night, guys. See you soon. </p>",
"<p> <span style='color:#F1D35A'>bee:</span> gn, crew</p>",
]

var pauses = [
    2000,

    2000,

    2000,

    2000,


    2000,

    4000,

    2000,
    2000,
    5000,
    1500,

    2000,

    3000,

    2000,

    2000,

    2000,

    2000,

    2000,
    2500,

    2000,

    2000,
    3000, //okay, here's a pic


    2000,

    2000,

    4000,

    2000,

    2000,
    2500,
    4000,
    2000,
    2000,
    4000,

    3500,

    4000,

    2000,
    2000,

    2000,
    3000,

    2000,

    3000,
    3500,

    2000,
    4000, //that's... odd

    2000,

    2000,
    3000,
    2500,

    2000,

    2000,

    2000,
    3000,
    4000,
    3500,
    3000,

    3500,

    2000,
    3500,

    2000,
    2000,
    
    3000,
    3000,
    5000,
    4500,
    3500,

    2000,
    2500,
    3500,

    2000, //i... i suppose
    4000,

    4000,
    3000,

    2000,

    3500,
    3000,

    2000,
    3500,

    2500,
    2500,
    3000,
    4000,

    3000,
    4000,

    2000,

    3500,

    2000,

    2000,

    3000,
    3500,

    3000,

    4000, //well, anyway
    4000,
    3000,
    3000,
    3500,
    3000,

    3000,

    3500,
    3500,
    3000,

    2000,
    4000,
    2000,

    3000,
    4000,

    2000,

    2000,

    2500,

    2000,

    3000,

    2000,

    2000,

    1500,
    1000,
    1000,
    2000, //regroup here

    2000,

    1500,
    1000,
    1500,
    4000,

    3000,
    
    1500,
    
    2000,
    2000,
    2500,
    2000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    2000,
    3000,

    2000,
    2500,

    3000,

    2000,
    2000,
    2000,
    2000,
    2000, //and hope

    2000,
    4000,
    4000,

    2000,

    2500,

    2500,
    4000,
    3000,

    2000,

    2000,


    2000,

    2000,

    2000,
    2500,
    2500,
    3500,

    2000,
    2500,
    2500,

    2000,
    2000,
    3000,

    2000,
    2000
]

function ctrListener(ctr){
    if (ctr == 4){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("map4").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("map4").height;
        }, 2200);
    }
    else if (ctr == 21){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("caverns").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("caverns").height;
        }, 3200);
    }
    else if (ctr == 108){
        document.getElementById('zoey').style.display = 'none';
    }
    else if (ctr == 153){
        document.getElementById('onfim').style.display = 'none';
    }
}

function end(){
    $(".continue").toggle();
}