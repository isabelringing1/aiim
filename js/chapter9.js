var nextChapter = "/chapter-10.html";

var chapterText = [
    "<p> <span style='color:red'>AIIM has successfully connected to this device.</span>",
    "<p> <span style='color:#F1D35A'>bee:</span> huh. that actually didn’t take too long.</p>",

    /*fox, onfim, emby active appear*/

    "<p> <span style='color:#F1D35A'>bee:</span> oh good, u guys all made it too</p>",

    "<p> <span style='color:green'>emby:</span> Yep!</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Any sign of life?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> right about to check.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> *ahem.* </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> hi! anybody here?</p>",

    /*pause*/

    "<p> <span style='color:red'>eg3820:</span> why... why is my diary suddenly speaking to me?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> oh, we’re not a- </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> we’re responding to the help message you sent out! </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Morse code. That’s cool. Very old school.</p>",

    "<p> <span style='color:red'>eg3820:</span> Oh! Um, thanks. I always thought it was a useless skill, but... my dad said it would come in handy one day. Guess it did.</p>", 
    "<p> <span style='color:red'>eg3820:</span> Y’all must be in the local area, right? The message couldn’t have traveled far. </p>",
    "<p> <span style='color:red'>eg3820:</span> You have no idea how good it is to hear from other people, seriously.</p>",

    "<p> <span style='color:green'>emby:</span> Um. Well, about that...</p>",

    "<p> <span style='color:red'>eg3820:</span> Oh, right, sorry! Where are my manners? I don’t meet other people, um, ever, actually. </p>",
    "<p> <span style='color:red'>eg3820:</span> My name is Zoey, and, uh... wow, I’ve actually never had to introduce myself before. </p>",

    "<p> <span style='color:green'>emby:</span> It’s nice to meet you, Zoey! You’re doing great, don’t worry.</p>",
    "<p> <span style='color:green'>emby:</span> I’m emby. The others are fox, bee, and Onfim, though he’s not much of a talker.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> nice to meetcha. let’s change your name...</p>",

    "<p> --NICKNAME SET FOR eg3820: Zoey--</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Zoey, who else is with you? Your dad?</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, no, he died a few months ago, back in New Orleans.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Oh. I’m so sorry.</p>",

    "<p> <span style='color:red'>Zoey:</span> It’s alright. But yea, I’m alone here.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You’re in Houston, correct? There’s... no one else in the entire city?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, I haven’t seen anybody. It’s kind of a bummer.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I... see.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> And you said you came from New Orleans? Was there anyone there? </p>",

    "<p> <span style='color:red'>Zoey:</span> New Orleans was empty too.</p>",
    "<p> <span style='color:red'>Zoey:</span> That’s why I left; I’m looking for people.</p>",
    "<p> <span style='color:red'>Zoey:</span> Which is why it’s such a relief to actually talk to breathing humans!</p>",

    "<p> <span style='color:green'>emby:</span> We should really clear this up before it gets bad</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I agree. Zoey, you should know that we actually aren’t, um, human. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> we’re actually four artificial intelligence entities living in a computer.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> three of us are human imprints from a thousand years ago.</p>",

    "<p> <span style='color:red'>Zoey:</span> Y’all are... computers?</p>",

    "<p> <span style='color:green'>emby:</span> Um, kind of but not really!</p>",
    "<p> <span style='color:green'>emby:</span> I guess technically, yea, right now we’re all living it up in a computer...</p>",

    "<p> <span style='color:red'>Zoey:</span> ...</p>",

    "<p> <span style='color:green'>emby:</span> ...but we’d still like to help! </p>",
    "<p> <span style='color:green'>emby:</span> Unfortunately, due to our... state of existence, we can't really help with providing things like food and water.</p>",
    "<p> <span style='color:green'>emby:</span> But we have access to a lot of information, and we'll try to guide you to anything you need. And help you look for other people! </p>",
    "<p> <span style='color:green'>emby:</span> Because that’s actually what we’re looking for too.</p>",

    "<p> <span style='color:red'>Zoey:</span> I... I don’t know...</p>",
    "<p> <span style='color:red'>Zoey:</span> I’m not really supposed to...</p>",
    "<p> <span style='color:red'>Zoey:</span> ...</p>",

    "<p> <span style='color:green'>emby:</span>  ?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Zoey, we understand that we’re probably a little unsettling and definitely not what you expected. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> But until you do meet actual people, we’re the best shot you have to survive. </p>",

    "<p> <span style='color:red'>Zoey:</span> ...Yea. Y’all have a point.</p>",
    "<p> <span style='color:red'>Zoey:</span> I’m desperate. I can’t deny that. </p>",
    "<p> <span style='color:red'>Zoey:</span> So... what the hell.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> yes, that’s the spirit!!</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> okay, assess the situation for us. what’s top priority for you right now?</p>",

    "<p> <span style='color:red'>Zoey:</span> The biggest thing is my vehicle. I call it the Tractor- I’ve been using it to travel from New Orleans, but it suddenly broke down a few days ago and stranded me here. </p>",
    "<p> <span style='color:red'>Zoey:</span> I don’t know exactly what’s wrong with it- the Solar plate, maybe? </p>",
    "<p> <span style='color:red'>Zoey:</span> All my other problems basically cascade from that. Haven’t eaten anything in a while- the shore is too far to go on foot, and that’s where I would fish and purify water. </p>",
    "<p> <span style='color:red'>Zoey:</span> I’m not having a lot of luck foraging things around here. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Hm, okay. How well do you know the surrounding area? Do you have any sort of map with you?</p>",

    "<p> <span style='color:red'>Zoey:</span> Nope. I’ve been using an old GPS device to get around, but ever since I left Louisiana it’s been going berserk. No idea why.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s not completely useless. I actually sent out the message in morse code through this thing. It’s how I’m talking to y’all right now.</p>",
    "<p> <span style='color:red'>Zoey:</span> But yea... I don’t know a lot about my surroundings. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Well, here's what I can try...</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> We have access to some old maps I can send you. They won’t be the most accurate, but current satellite images are way too spotty to be dependable.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> If basic infrastructure is intact, I think you’ll be able to follow old roads fine.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> So here goes...</p>",

    "<img id='map1' src='assets/Map1.png' style='width:60%'>",
    /*map1*/

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Do you see where I marked your location with an X?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, I see it. </p>",
    "<p> <span style='color:red'>Zoey:</span> This... this is what Houston looks like? If you were a bird?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> omg birds are still a thing?</p>",

    "<p> <span style='color:red'>Zoey:</span> Um, kind of. I mostly know about them from a book we had in New Orleans.</p>",

    "<p> <span style='color:green'>emby:</span> Yo, BOOKS are still a thing?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Hey, you two, focus. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> It looks like there’s a river not too far below you that flows from the ocean. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> how do we know it hasn’t dried up yet?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Hm. Well, we can’t know for sure, but the last satellite image taken of this area was a few years ago, and it still seemed to be flowing.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I think it’s our safest bet, and it’s only around a 20 minute walk for you, Zoey.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I’ll update the map with the fastest route.</p>",

    "<img id='map2' src='assets/Map2.png' style='width:60%'>",
    /*map2*/

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You said you could purify water, right?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, that’s not a problem.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> ...if you don’t mind me asking, how?</p>",

    "<p> <span style='color:red'>Zoey:</span> It’s this bottle I brought from home! There’s a purple light on the lid that flashes when I close it, and all the gross stuff gets filtered to a compartment on the bottom.</p>",
    "<p> <span style='color:red'>Zoey:</span> It’s super durable, and really cute too. There’s a picture of a rabbit on the front. Cheers me up sometimes. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Very neat. Well, water should be set. And you said you can fish?</p>",

    "<p> <span style='color:red'>Zoey:</span> Um, yea. I can try fishing there, I guess. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Sounds good. Now, that’s as far as I can take you for the moment. Don’t really have a clue about the solar plate thing.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I’m not really the engineering one in this group...</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> hey i was premed, i know jack squat about electronics</p>",

    "<p> <span style='color:green'>emby:</span> Uhh I nearly failed out of college physics </p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> I can take a look at it. </p>",
    "<p> <span style='color:#9900cc'>Onfim:</span> Would you be able to wire a connection between the Tractor and this machine, Zoey? I can probe the system and perhaps create a fix from the inside. May take a little time, though. </p>",

    "<p> <span style='color:green'>emby:</span> Wait, you can do that? Spread yourself to other machines?</p>",
    "<p> <span style='color:green'>emby:</span> That... that seems impossible. How?</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> Something I developed for myself in the years that we’ve been isolated, emby. Didn’t truly think it would be useful, but it looks like it’s coming in handy now. </p>",

    "<p> <span style='color:red'>Zoey:</span> Um, yea, sure, I can try.</p>",
    "<p> <span style='color:red'>Zoey:</span> Okay, well, I guess I can just plug one into another and see what happens...</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> That should be enough for me. </p>",

    "<p> <span style='color:red'>Zoey:</span> Um... okay, done.</p>",

    "<p> <span style='color:green'>emby:</span> Onfim, you can’t really get into the Tractor with such an arbitrary connection, can you?</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> Well, I’m in.</p>",

    "<p> <span style='color:green'>emby:</span> Oh.</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> This may take a few minutes, so don’t wait on me, everybody.</p>",

    "<p> <span> --Onfim has left the chat.-- </span> </p>",

    "<p> <span style='color:green'>emby:</span> That’s crazy how he can do that.</p>",
    "<p> <span style='color:green'>emby:</span> Anyway, Zoey, this might be a good time for you to head over to the river. </p>",

    "<p> <span style='color:red'>Zoey:</span> I... alright. </p>",
    "<p> <span style='color:red'>Zoey:</span> I... suppose I can’t take y’all with me, can I? Since Onfim’s working?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yea, it might be better to leave us here for now. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You can do this, though! Study the map well- you’re just heading down a major road, that’s it.</p>",

    "<p> <span style='color:red'>Zoey:</span> ...yes. Okay. I can do this.</p>",
    "<p> <span style='color:red'>Zoey:</span> Um, thank you so much! I’ll see y’all later.</p>",

    "<p> <span> --Zoey has left the chat.-- </span> </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> alright, well, all we can really do is hang around now</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> and hope our spunky little heroine isn’t eaten by a crocodile in the meantime</p>",

    "<p> <span style='color:green'>emby:</span> There’s so much I want to ask her about the world... so many things I want updates on.</p>",
    "<p> <span style='color:green'>emby:</span> What do our cities look like now? How has nature taken over the spaces we once occupied? Would a twinkie still be edible?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Remember, Emby, she may not be able to answer a lot of those questions to the degree you’d expect. Her world is very different than the one we remember.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Personally, I can’t believe she’s all alone... </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> I mean, imagine growing up with only one person in your entire world. Now that her only family is gone, I can only imagine how lonely she is.</p>",

    "<p> <span style='color:green'>emby:</span> Maybe she’s used to it. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> & maybe it’s maybelline</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> look, we’re overlooking the most important thing: we don’t have to speculate anymore.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> we have someone to answer these questions in the first place- zoey. she is real and breathing and alive.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> humans are still here, despite our worst fears. that’s real hope.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Oh, for sure. This is... more than amazing. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> All of these questions we’ve killed ourselves over these past thousand years...</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> What the world has become, what human life is like now, what has persisted and what has been lost- we don’t have to wonder about it anymore.</p>",

    "<p> <span style='color:green'>emby:</span> We can ask her ourselves.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> hell yea we can.</p>",
];

var pauses = [
    2000,
    2000,



    2000,

    2000,

    2000,

    2000,
    3000,
    5000,



    2000,

    1000,
    2000,

    2000,

    4000,
    3000,
    3000,

    2000,

    3000,
    3000,

    2000,
    2000,

    2000,

    2000,

    2000,

    3000,

    2000,

    2000,//it's alright.

    2000,

    2000,

    3000,
    2000,

    2000,
    2000,
    2000,

    2000,

    2000,

    2500,
    2500,

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
    3000,

    2000,
    2000,
    2000,

    2000,//yes that's the spriti
    3000,

    6000,
    3500,
    7000,
    4000,

    3000,

    4000,
    4000,
    4000,

    2000,
    5000,
    4000,
    2000,

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

    6000,
    4000,
    2000,

    2000,


    2000, //you said you

    2000,

    2000,

    6000,
    4000,

    2000,

    2000,

    3500,
    2000,

    2000,

    2000,

    2000,
    6000,

    2000,
    2000,

    7000,

    2000,
    3000,

    2000,

    2000,

    3000,

    2000,

    2000,

    2000,

    2000,

    2000,//that's crazy
    3000,

    2000,
    2000,

    2000,
    3000,

    2000,
    2000,

    3500,

    2000,
    3000,

    3000,
    3000,

    6000,
    2000,
    6000,

    2000,

    2000,
    4000,
    4000,
    4000,

    2000,
    4000,
    5000,

    2000,

    2000
];

var mobile = false;
document.addEventListener('DOMContentLoaded', function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) mobile = true;
    document.getElementsByClassName('plaintext')[0].addEventListener('click', function() {
        if (mobile){
            setTimeout(function (){
                document.getElementById("map1").style.width = "100%";
                document.getElementById("map2").style.width = "100%";
            }, 100);
        }
    });
});

function end(){
    $(".continue").toggle();
}

function ctrListener(ctr){
    if (ctr == 1) {
        document.getElementById('bee').style.display = 'inline';
        document.getElementById('fox').style.display = 'inline';
        document.getElementById('onfim').style.display = 'inline';
    }
    else if (ctr == 21){
        setTimeout(function (){
            document.getElementById('zoey-name').innerHTML = "Zoey";
        }, 2000);  
    }
    else if (ctr == 68){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("map1").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("map1").height;
        }, 2200);
    }
    else if (ctr == 81){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("map2").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("map2").height;
        }, 2200);
    }
    else if (ctr == 106){
        setTimeout(function (){
            document.getElementById('onfim').style.display = 'none';
        }, 2000);
    }
    else if (ctr == 115){
        setTimeout(function (){
            document.getElementById('zoey').style.display = 'none';
        }, 2000);
    }
}