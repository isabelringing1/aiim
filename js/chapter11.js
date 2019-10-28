var nextChapter = "/chapter-12"

const NUM_ARROWS = 7
const ARROW_POS = 0
const ARROW_SPEED = 600

var globalCtr = 0
var forwardTimeout
var progressed1 = false
var progressed2 = false

var chapterText = [
    "<p> <span style='color:red'>Zoey:</span> Good morning!!</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Good morning to you too! How’d you sleep?</p>",

    "<p> <span style='color:red'>Zoey:</span> Pretty well, thanks! How about y’all?</p>",
    "<p> <span style='color:red'>Zoey:</span> ...wait. Do y’all... sleep?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> lol not rly</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> just quiet down for a bit i guess</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> be with our thoughts in silence</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh. Huh.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> anyways don’t think about it!</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> you should eat something before we head out, z</p>",

    "<p> <span style='color:red'>Zoey:</span> Already done! Heated some leftover bass on the coals earlier this morning.</p>",
    "<p> <span style='color:red'>Zoey:</span> I’m good to go!</p>",
    "<p> <span style='color:red'>Zoey:</span> ...assuming everything else is still good as well.</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> The Tractor is at full charge. Ready to roll, one might say.</p>",

    "<p> <span style='color:red'>Zoey:</span> Amazing.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> As for your route, well, you know what road to take, right?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yup, straight west on the 10. </p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Good. Hopefully we won’t have to worry that much about you getting lost. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Last night, I planned out the best places to stop given how far the Tractor can feasibly take you in a day. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Take a look at this, Zoey.</p>",

    "<img id='map3' src='assets/Map3.png' style='width:60%'>",
    /*Map3*/

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Here’s our route for the day.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> You sound like you know how to use a map, but we'll stick with you. Just let us know if you run into any trouble. </p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> According to my calculations, we can get to San Antonio in about seven hours, taking us into mid afternoon.</p>",
    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Find a safe place to stay while there’s still sunlight and restock on food and water if you can. Let us know when you’re settled.</p>", 

    "<p> <span style='color:red'>Zoey:</span> Got it.</p>",
    "<p> <span style='color:red'>Zoey:</span> Alright, here goes nothing, I guess.</p>",

    "> \n",
    
    "<p> <span style='color:red'>Zoey:</span> Okay, I made it! </p>",
    "<p> <span style='color:red'>Zoey:</span> I have to say, the Tractor runs SO much better now.</p>",
    "<p> <span style='color:red'>Zoey:</span> It feels brand new- thanks so much again, Onfim.</p>",

    "<p> <span style='color:#9900cc'>Onfim:</span> My pleasure.</p>",

    "<p> <span style='color:green'>emby:</span> You’re feeling okay about everything? No issues came up?</p>",

    "<p> <span style='color:red'>Zoey:</span> It went smoothly, really!</p>",
    "<p> <span style='color:red'>Zoey:</span> Just the fact that I’m moving again- that makes me really happy.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> yayy that’s good to hear</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> so, how’s san antonio?</p>",

    "<p> <span style='color:red'>Zoey:</span> Well, um. Empty. Big barren buildings everywhere. </p>",
    "<p> <span style='color:red'>Zoey:</span> But I’m used to that.</p>",
    "<p> <span style='color:red'>Zoey:</span> I... have a decent amount of time to kill before sundown. Not entirely sure what I’m going to do now.</p>",
    "<p> <span style='color:red'>Zoey:</span> ...bee, didn’t you say your aunt lived in San Antonio?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> well</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> yea, claire’s aunt- di-di.</p>",

    "<p> <span style='color:red'>Zoey:</span> Would... you like me to visit her house?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> oh. um..</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i mean, don’t feel obligated to at all.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> it’s probably in shambles anyway</p>",

    "<p> <span style='color:red'>Zoey:</span> No, really, I’d be happy to visit. </p>",
    "<p> <span style='color:red'>Zoey:</span> I want to learn as much as I can about the world from Before. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> i... i mean. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> you don’t think it would be a little weird?</p>",

    "<p> <span style='color:green'>emby:</span> It definitely could be weird.</p>",
    "<p> <span style='color:green'>emby:</span> But if I were you, bee, I would go.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> really?</p>",

    "<p> <span style='color:green'>emby:</span> When will you have another chance to revisit a place you loved through the eyes of a real person?</p>",
    "<p> <span style='color:green'>emby:</span> I would never forgive myself if I gave that up.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> i....</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> okay, whatever. sure.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> the address is 150 summergrass way. think you’re actually pretty close, zoey.</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, am I? Great!</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yup, looks like it’s only a 10 minute drive away. Here, I’ll mark out a path on the map.</p>",

    "> \n",

    "<p> <span style='color:red'>Zoey:</span> Okay, I... think I’m here, y’all.</p>",
    "<p> <span style='color:red'>Zoey:</span> The grass is all dead, and the trees in the yard looks pretty beat up, but...</p>",
    "<p> <span style='color:red'>Zoey:</span> The house isn’t in bad shape. Compared to most of the houses around here, anyway. </p>",
    "<p> <span style='color:red'>Zoey:</span> Wow, and there’s these pretty glass rocks in the sidewalk! They’re right in front of the driveway. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> omg... i remember that.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> when the sidewalk was redone my little cousin and i pushed those rocks in the wet cement and watched them sink down.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> oh god, this is so surreal... </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> okay, sorry. i’m keeping it together.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...the key is under the doormat, Zoey.</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Well, do you really think after centuries it would have stayed exactly-</p>",

    "<p> <span style='color:red'>Zoey:</span> Found it!</p>",
    "<p> <span style='color:red'>Zoey:</span> Okay, entering now.</p>",
    "<p> <span style='color:red'>Zoey:</span> Wow. It’s really dusty in here... </p>",
    "<p> <span style='color:red'>Zoey:</span> The house feels like it’s glowing, from the sunset and the dust.</p>",
    "<p> <span style='color:red'>Zoey:</span> There’s still so much...stuff here. The brown-ish sofa- it must have been green, once?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> blue, actually.</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, well. It’s still there, real crusty but in one piece. </p>",
    "<p> <span style='color:red'>Zoey:</span> There’s a huge vanity mirror in here too. It's also very dusty.</p>",
    "<p> <span style='color:red'>Zoey:</span> A kitchen table, wooden chairs... windows are broken, but other than that, everything’s pretty intact, just a little stale.</p>",
    "<p> <span style='color:red'>Zoey:</span> It feels... cozy, bee. Lived in, even after all these years.</p>",

    "<p> <span style='color:green'>emby:</span> ...bee, you there?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> yea. i am.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> it... blows me away that you’re actually there.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> family vacations to di-di’s house were some of my best childhood memories.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span>...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i haven’t thought about this place for a long time. actively tried not to.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> but something about you being here... it makes me want to remember my time here. scared that i'm going to forget.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i... i don’t know what else to say. how else to describe what i’m feeling. </p>",

    "<p> <span style='color:red'>Zoey:</span> Don’t feel pressured to. I can talk about more stuff I’m seeing, if you want.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> yes, do that. please.</p>",

    "<p> <span style='color:red'>Zoey:</span> Okay... there’s this big box thing here... a fridge, right? On it there's lots of crumbly yellow pieces of paper and these black heavy things.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> Can you read what they say?</p>",

    "<p> <span style='color:red'>Zoey:</span> No, it’s too faded, sorry.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> No problem... what else?</p>",

    "<p> <span style='color:red'>Zoey:</span> This... must be a piano. The top seems rotten and has caved in, and pressing the keys don’t really do anything. </p>",
    "<p> <span style='color:red'>Zoey:</span> But I’ve never seen a piano before. It’s... beautiful. I wish I could play it. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> lol</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i took lessons for eight years. i remember being forced to practice on that piano for hours and hours.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> wish i had the attitude you did!</p>",

    "<p> <span style='color:red'>Zoey:</span> Ha, well, I guess if I were in your shoes I’d also feel a little sick of it.</p>",
    "<p> <span style='color:red'>Zoey:</span> Huh, next to the piano, there’s this big shelf. And there’s a bunch of... picture frames?</p>",
    "<p> <span style='color:red'>Zoey:</span> If I wipe them down, the photos inside are actually in pretty good shape.</p>",
    "<p> <span style='color:red'>Zoey:</span> Here’s one with a little boy playing in the sand. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> oh, that must be arthur!</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> my little cousin. </p>",

    "<p> <span style='color:red'>Zoey:</span> He looks so cute. Really mischievous too.</p>",
    "<p> <span style='color:red'>Zoey:</span> Here’s another one... Arthur again? older, with a dog.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> Lychee! omg that was di-di’s adorable golden doodle</p>",

    "<p> <span style='color:red'>Zoey:</span> Ooh, here’s another one!</p>",
    "<p> <span style='color:red'>Zoey:</span> This one has the same boy in it, but now he looks a lot older. </p>",
    "<p> <span style='color:red'>Zoey:</span> He’s next to a girl in a hat. There’s some writing at the bottom...</p>",
    "<p> <span style='color:red'>Zoey:</span> ‘Claire Tran, Class of 2032’.</p>",
    "<p> <span style='color:red'>Zoey:</span> ...</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> a</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Wait, bee, is that... you?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> um</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i mean</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> idk</p>",

    "<p> <span style='color:red'>Zoey:</span> You look so beautiful in this picture. Really determined and strong and wise.</p>",
    "<p> <span style='color:red'>Zoey:</span> There’s some more words underneath that, handwritten-</p>",
    "<p> <span style='color:red'>Zoey:</span> - ‘Med School Bound!’ </p>",
    "<p> <span style='color:red'>Zoey:</span> You must have been so happy here, bee. </p>",
    "<p> <span style='color:red'>Zoey:</span> ...?</p>",

    "<p> <span style='color:green'>emby:</span> bee?</p>",
    "<p> <span style='color:green'>emby:</span> This... was Claire’s college graduation, wasn’t it?</p>",
    "<p> <span style='color:green'>emby:</span> Meaning this was post-scan.</p>",
    "<p> <span style='color:green'>emby:</span> Meaning you don’t remember this part. </p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, is this-!</p>",
    "<p> <span style='color:red'>Zoey:</span> Oh, gosh, I’m so sorry bee, I didn’t know.</p>",
    "<p> <span style='color:red'>Zoey:</span> I can’t imagine how painful it could be to see this... </p>",
    "<p> <span style='color:red'>Zoey:</span> I... This was a mistake. </p>",
    "<p> <span style='color:red'>Zoey:</span> I shouldn’t have come here in the first place. </p>",

    "<p> <span style='color:#F1D35A'>bee:</span> ...it’s okay, Zoey.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i’m okay.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> y’know, it’s funny, because i thought seeing something like this would be the worst thing in the world.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> bc it means that she did it. she lived after me. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> it’s something i’ve known must have happened, but i try so hard to forget. or else it would be too painful.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> but now, with the evidence right in front of my face, I...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> I don’t know.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> How can I not feel proud? Of Claire? Of myself?</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> I did it. She did it. Does it really matter whether it was me or her?</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> Claire lived and died and had her own life without me. And I can’t change that.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> Wow, look at me, regressing into upper case and punctuation...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> okay i’m done lol</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> but srsly thanks for this, zoey. i needed it more than i realized.</p>",

    "<p> <span style='color:red'>Zoey:</span> I’m glad. I really enjoyed coming here, bee.</p>",

    "<p> <span style='color:green'>emby:</span> Me too. This was... a good trip. </p>",
    "<p> <span style='color:green'>emby:</span> It’s getting late, though, isn’t it?</p>",

    "<p> <span style='color:rgb(51, 167, 245)'>fox:</span> Yea, a little. Sun is beginning to set. You ready to head out, Zoey?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> oh, actually, before we do!</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> zoey, you... you said you wanted to learn more about the world Before, right?</p>",

    "<p> <span style='color:red'>Zoey:</span> I mean, of course.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> just out of curiosity, could you check the cabinets underneath that big shelf?</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> ...do you see two clear tubs with white lids?</p>",

    "<p> <span style='color:red'>Zoey:</span> Yea, I see them!</p>",
    "<p> <span style='color:red'>Zoey:</span> Oof, they’re heavy. I just dragged them out.</p>",
    "<p> <span style='color:red'>Zoey:</span> What’s in these things, bee?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> open and see.</p>",

    "<p> <span style='color:red'>Zoey:</span> Okay, opening one now.</p>",
    "<p> <span style='color:red'>Zoey:</span> ...wow.</p>",
    "<p> <span style='color:red'>Zoey:</span> bee, I...</p>",
    "<p> <span style='color:red'>Zoey:</span> There are so many. And they’re all in amazing condition...</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> oh good. i was hoping because they were sealed and left in the dark, they’d turn out ok.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> arthur and i were avid readers, and di-di was low-key a hoarder...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> so when we both left for college, she put away all of our novels here. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> i guess it all worked out in the end...</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> anyway, they’re all yours, z.</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> some of the best ya lit from a thousand years ago. enjoy.</p>",

    "<p> <span style='color:red'>Zoey:</span> I’m... I’m speechless. This is amazing.</p>",
    "<p> <span style='color:red'>Zoey:</span> Thank you so so much. I don’t think I’ve ever been this excited before.</p>",
    "<p> <span style='color:red'>Zoey:</span> I’ll never forget this place.</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> actually, Zoey, if you’d like..</p>",
    "<p> <span style='color:#F1D35A'>bee:</span> you could stay in the house for the night. </p>",
    "<p> <span style='color:#F1D35A'>bee:</span> its been standing for a millennium. im sure it can hold for one more night.</p>",

    "<p> <span style='color:red'>Zoey:</span> Oh, wow! Are... you sure?</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> it would make me really happy to know someone stayed in this house one last time.</p>",

    "<p> <span style='color:red'>Zoey:</span> Great! Um, thanks so much!</p>",
    "<p> <span style='color:red'>Zoey:</span> Tomorrow I’ll be back hitting the road, but...</p>",
    "<p> <span style='color:red'>Zoey:</span> At least for tonight, I’m gonna get started cracking open these books.</p>",
    "<p> <span style='color:red'>Zoey:</span> So... goodnight, guys!</p>",

    "<p> <span style='color:#F1D35A'>bee:</span> good night, Zoey. happy reading.</p>"
]

var pauses = [
    2000,

    2200,

    2000,
    2000,

    2000,
    2000,
    3000,

    2000,

    1500,
    2500,
    
    3000,
    2000,
    2500,

    3000,

    2000,

    3500,

    2000,

    4000,
    5500,
    2000,

    2000,

    2000,
    6000,
    5000,
    6000,

    2000,
    2000, //alright, here goes nothing

    ((NUM_ARROWS+1) * ARROW_SPEED) + 3000,

    2000,
    2500,
    2500,

    2000,

    2500,

    2000,  
    3000,

    2000,
    2000,

    2500,
    2000,
    4000,
    2500,

    2000,
    2500,

    3000,

    2000,
    2000,
    2000,

    2500,
    4000,

    2000,
    2000,

    2000,
    2000,

    2000, //really?

    2000,
    2000,

    2000,
    2000,
    3000,

    2000,

    2000,

    ((NUM_ARROWS+1) * ARROW_SPEED) + 3000,

    2500,
    3500,
    3500,
    4000,

    2000,
    4000,
    2500,
    2500,
    2500,

    2000,

    2000,
    2000,
    2000,
    3000,
    3500,

    2000,

    3000,
    3500,
    4500,
    4000,

    3000, //...bee, you

    3000,
    3000,
    3000,
    2000,
    3000,
    4500,
    3500,

    3000,

    2300,

    5000,

    2500,

    2500,

    2500,

    4500,
    3500,

    2000,
    4000,
    2500,

    3500,
    3500,
    3000,
    3000,

    2000,
    2000,

    2000,
    3000,

    3000,

    2000,
    3000, //this one has the same
    3000,
    3000,
    2000,

    3000,

    3000,

    3000,
    3000,
    2000,

    4000,
    3000,
    2000,
    3000,
    3000,

    2000,
    2000,
    2000,
    2000,

    1500,
    2000,
    2000,
    2000,
    4000,

    2000,
    2000,
    4500,
    3000,
    4000,
    2000,
    3000,
    2500,
    3500,
    4500,
    5000,
    3500,
    2500,
    2000, //okay im done lol
    3500,

    3000,

    3000,
    3000,

    3500,

    2000,
    4000,

    2000,

    4000,
    3000,

    3000,
    2500,
    2000,

    2000,

    4000,
    2000,
    2000,
    3000,

    4000,
    3000,
    3000,
    2500,
    2000,
    2500,

    2500,
    3000,
    3000,

    2000,
    2000,
    3000, //its been standing

    2000,

    3500,

    2500,
    3000,
    3000,
    2000,

    2000
]

function checkForwards(ctr){
    if (chapterText[ctr].charAt(ARROW_POS) == '>'){
        console.log("starting checking fwds, time is " + pauses[ctr])
        fwds = 0
        setTimeout(function(){
            forwardTimeout = setInterval(function(){
                if (fwds > NUM_ARROWS) clearInterval(forwardTimeout)
                else if (ctr == 27 && stopFwds) clearInterval(forwardTimeout)
                else if (ctr == 61 && stopFwds) clearInterval(forwardTimeout)
                else $(".text-box").append("> ");
                fwds++
            }, ARROW_SPEED); 
        }, 3000)
        stopFwds = false
    }
}

function ctrListener(ctr){
    globalCtr++
    checkForwards(ctr)
    if (ctr == 20){
        mapTimeout = setTimeout(function (){
            if (mobile) document.getElementById("map3").style.width = "100%";
            document.getElementById("text-box").scrollTop += document.getElementById("map3").height;
        }, 2200);
    }
}
stopFwds = false
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.plaintext').addEventListener('click', function() {
        for(i = 0; i < chapterText.length; i++){
            if (chapterText[i].charAt(ARROW_POS) == '>'){
                chapterText[i] = "> ".repeat(NUM_ARROWS+1)
            }
        }
    });
    document.querySelector('.progress').addEventListener('click', function() {
        if (globalCtr == 28 || globalCtr == 62) stopFwds = true
    });
});

function end(){
    $(".continue").toggle();
}