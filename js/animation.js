$('.border').css({ "background-image": "url(assets/fullSpriteSheet.png)" })
$('.border').css({ "background-position" : "0px 0px" })
confettiLater = setInterval(confettiFlourish, 99999)
borderLater = setInterval(borderFlourish, 88888)
replayButton = setTimeout(replayButtonDeploy, 30000)
bigBorderStart = setTimeout(borderEntrance, 2000) //blank border

function replayButtonDeploy() {
	$('.button').toggle(true)
}

function borderEntrance() {
	$('.border').css({ "background-position" : "-821px 0px" }) //peeking head
	setTimeout(borderEntrance2, 1000)
}

function borderEntrance2() {
	$('.border').css({ "background-position" : "0px 0px" }) //back to blank
	setTimeout(borderEntrance3, 1000)
}

function borderEntrance3() {
	$('.border').css({ "background-position" : "-1632px -2px" }) //just the foot
	setTimeout(borderEntrance4, 200)
}

function borderEntrance4() {
	$('.border').css({ "background-position" : "0px -615px" }) //half the body
	setTimeout(borderEntrance5, 200)
}

function borderEntrance5() {
	$('.border').css({ "background-position" : "0px 0px" }) //border back to blank
	$('.sprite').css({ "background-image": "url(assets/fullSpriteSheet.png)"}) //bring in sprite
	$('.sprite').css({ "background-position" : "-38px -1230px" }) //right foot forward
	$('.sprite').css({ "left" : "30px" })
	$('.sprite').css({ "top" : "150px" })
	$('.sprite').css({ "width" : "170px" })
	setTimeout(sprite2, 200)
}

function sprite2() {
	$('.sprite').css({ "background-position" : "-238px -1230px" }) //right leg bent
	$('.sprite').css({ "left" : "35px" })
	setTimeout(sprite3, 200)
}

function sprite3() {
	$('.sprite').css({ "background-position" : "-438px -1230px" }) //coming to close right
	$('.sprite').css({ "left" : "45px" })
	setTimeout(sprite3I, 200)
}

function sprite3I() {
	$('.sprite').css({ "background-position" : "-618px -1615px" }) //left leg coming up
	$('.sprite').css({ "left" : "55px" })
	$('.sprite').css({ "width" : "180px" })
	setTimeout(sprite3II, 200)
}

function sprite3II() {
	$('.sprite').css({ "background-position" : "-30px -1615px" }) //left foot forward
	$('.sprite').css({ "left" : "65px" })
	$('.sprite').css({ "width" : "180px" })
	setTimeout(sprite3III, 200)
}

function sprite3III() {
	$('.sprite').css({ "background-position" : "-230px -1615px" }) //left leg bent
	$('.sprite').css({ "left" : "75px" })
	setTimeout(sprite3IV, 200)
}

function sprite3IV() {
	$('.sprite').css({ "background-position" : "-438px -1615px" }) //coming to close left
	$('.sprite').css({ "left" : "85px" })
	$('.sprite').css({ "width" : "170px" })
	setTimeout(sprite3V, 200)
}

function sprite3V() {
	$('.sprite').css({ "background-position" : "-618px -1230px" }) //right leg coming up
	$('.sprite').css({ "left" : "95px" })
	$('.sprite').css({ "width" : "180px" })
	setTimeout(sprite3VI, 200)
}

function sprite3VI() {
	$('.sprite').css({ "background-position" : "-24px -1230px" }) //right foot forward
	$('.sprite').css({ "left" : "105px" })
	$('.sprite').css({ "width" : "180px" })
	setTimeout(sprite3VII, 200)
}

function sprite3VII() {
	$('.sprite').css({ "background-position" : "-238px -1230px" }) //right leg bent
	$('.sprite').css({ "left" : "115px" })
	setTimeout(sprite3VIII, 200)
}

function sprite3VIII() {
	$('.sprite').css({ "background-position" : "-438px -1230px" }) //coming to close right
	$('.sprite').css({ "left" : "125px" })
	setTimeout(sprite4, 200)
}

function sprite4() {
	$('.sprite').css({ "background-position" : "-770px -1230px" }) //facing "camera"
	$('.sprite').css({ "left" : "150px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "160px" })
	setTimeout(sprite5, 2000)
}

function sprite5() {
	$('.sprite').css({ "background-position" : "-2005px -610px" }) //magic snap
	$('.sprite').css({ "left" : "112px" })
	$('.sprite').css({ "top" : "169px" })
	setTimeout(sprite6, 500)
}

function sprite6() {
	$('.sprite').css({ "background-position" : "-1300px -610px" }) //spray can appears
	$('.sprite').css({ "left" : "127px" })
	$('.sprite').css({ "top" : "164px" })
	setTimeout(sprite7, 500)
}

function sprite7() {
	$('.sprite').css({ "background-position" : "-1490px -610px" }) //spray can over crotch
	$('.sprite').css({ "left" : "173px" })
	$('.sprite').css({ "top" : "164px" })
	$('.sprite').css({ "width" : "130px" })
	setTimeout(sprite8, 200)
}

function sprite8() {
	$('.sprite').css({ "background-position" : "-1610px -610px" }) //spray can over stomach
	$('.sprite').css({ "top" : "166px" })
	$('.sprite').css({ "left" : "173px" })
	setTimeout(sprite9, 100)
}

function sprite9() {
	$('.sprite').css({ "background-position" : "-1725px -610px" }) //spray can over boobs
	$('.sprite').css({ "left" : "170px" })
	$('.sprite').css({ "top" : "167px" })
	setTimeout(sprite9I, 100)
}

function sprite9I() {
	$('.sprite').css({ "background-position" : "-1610px -610px" }) //spray can over stomach
	$('.sprite').css({ "top" : "166px" })
	$('.sprite').css({ "left" : "173px" })
	setTimeout(sprite9II, 100)
}

function sprite9II() {
	$('.sprite').css({ "background-position" : "-1725px -610px" }) //spray can over boobs
	$('.sprite').css({ "left" : "170px" })
	$('.sprite').css({ "top" : "167px" })
	setTimeout(sprite9III, 100)
}

function sprite9III() {
	$('.sprite').css({ "background-position" : "-1610px -610px" }) //spray can over stomach
	$('.sprite').css({ "top" : "166px" })
	$('.sprite').css({ "left" : "173px" })
	setTimeout(sprite9IV, 100)
}

function sprite9IV() {
	$('.sprite').css({ "background-position" : "-1725px -610px" }) //spray can over boobs
	$('.sprite').css({ "left" : "170px" })
	$('.sprite').css({ "top" : "167px" })
	setTimeout(spray, 1500)
}

function spray() {
	$('.sprite').css({ "background-position" : "-1840px -610px" }) //spray can spray
	$('.sprite').css({ "top" : "169px" })
	$('.sprite').css({ "width" : "150px" })
	setTimeout(title, 250)
}

function title() {
	$('.titleBox').css({ "background-image": "url(assets/fullSpriteSheet.png)" })
	$('.titleBox').css({ "background-position" : "-1832px -1311px" })
	setTimeout(title1, 250)
}

function title1() {
	$('.titleBox').css({ "background-position" : "-1832px -1408px" })
	setTimeout(title2, 250)
}

function title2() {
	$('.titleBox').css({ "background-position" : "-1832px -1506px" })
	setTimeout(title3, 250)
}

function title3() {
	$('.titleBox').css({ "background-position" : "-1832px -1604px" })
	setTimeout(title4, 250)
}

function title4() {
	$('.titleBox').css({ "background-position" : "-1832px -1700px" })
	setTimeout(title5, 250)
}

function title5() {
	$('.titleBox').css({ "background-position" : "-1832px -1800px" })
	setTimeout(spriteAgain, 250)
}

function spriteAgain() {
	$('.sprite').css({ "background-position" : "-1725px -610px" }) //spray can over boobs
	$('.sprite').css({ "left" : "170px" })
	$('.sprite').css({ "top" : "167px" })
	$('.sprite').css({ "width" : "130px" })
	setTimeout(sprite12, 500)
}

function sprite12() {
	$('.sprite').css({ "background-position" : "-1610px -610px" }) //spray can over stomach
	$('.sprite').css({ "top" : "166px" })
	$('.sprite').css({ "left" : "173px" })
	setTimeout(sprite13, 500)
}

function sprite13() {
	$('.sprite').css({ "background-position" : "-1490px -610px" }) //spray can over crotch
	$('.sprite').css({ "left" : "173px" })
	$('.sprite').css({ "top" : "164px" })
	setTimeout(sprite14, 500)
}

function sprite14() {
	$('.sprite').css({ "background-position" : "-1300px -610px" }) //spray can (dis)appears
	$('.sprite').css({ "left" : "127px" })
	$('.sprite').css({ "top" : "164px" })
	$('.sprite').css({ "width" : "160px" })
	setTimeout(sprite15, 500)
}

function sprite15() {
	$('.sprite').css({ "background-position" : "-2005px -610px" }) //magic snap
	$('.sprite').css({ "left" : "112px" })
	$('.sprite').css({ "top" : "169px" })
	setTimeout(sprite16, 500)
}

function sprite16() {
	$('.sprite').css({ "background-position" : "-770px -1250px" }) //facing "camera"
	$('.sprite').css({ "left" : "150px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "160px" })
	$('.sprite').css({ "top" : "170px" })
	setTimeout(sprite17, 1000)
}

function sprite17() {
	$('.sprite').css({ "background-position" : "-1195px -1250px" }) //turn left right leg bent
	$('.sprite').css({ "left" : "125px" })
	$('.sprite').css({ "top" : "175px" })
	$('.sprite').css({ "width" : "175px" })
	setTimeout(sprite17I, 200)
}

function sprite17I() {
	$('.sprite').css({ "background-position" : "-1195px -1250px" }) //right leg coming to close
	$('.sprite').css({ "left" : "115px" })
	$('.sprite').css({ "top" : "175px" })
	setTimeout(sprite17II, 200)
}

function sprite17II() {
	$('.sprite').css({ "background-position" : "-1558px -1250px" }) //left leg coming up
	$('.sprite').css({ "left" : "105px" })
	$('.sprite').css({ "height" : "370px" })
	setTimeout(sprite17III, 200)
}

function sprite17III() {
	$('.sprite').css({ "background-position" : "-950px -1620px" }) //left foot back
	$('.sprite').css({ "left" : "90px" })
	$('.sprite').css({ "width" : "180px" })
	setTimeout(sprite17IV, 200)
}

function sprite17IV() {
	$('.sprite').css({ "background-position" : "-1145px -1620px" }) //left leg bent
	$('.sprite').css({ "left" : "80px" })
	setTimeout(sprite17V, 200)
}

function sprite17V() {
	$('.sprite').css({ "background-position" : "-1345px -1620px" }) //left leg coming to close
	$('.sprite').css({ "left" : "70px" })
	setTimeout(sprite18, 200)
}

function sprite18() {
	$('.sprite').css({ "background-position" : "-770px -1230px" }) //facing "camera"
	$('.sprite').css({ "left" : "45px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "160px" })
	setTimeout(sprite19, 2000)
}

function sprite19() {
	$('.sprite').css({ "background-position" : "-830px -610px" }) //hand out of pocket
	$('.sprite').css({ "left" : "60px" })
	$('.sprite').css({ "width" : "150px" })
	$('.sprite').css({ "top" : "188px" })
	setTimeout(sprite20, 200)
}

function sprite20() {
	$('.sprite').css({ "background-position" : "-980px -610px" }) //throw confetti
	$('.sprite').css({ "height" : "360px" })
	$('.sprite').css({ "width" : "250px" })
	$('.sprite').css({ "left" : "68px" })
	setTimeout(sprite21, 200)
}

function sprite21() {
	$('.sprite').css({ "background-position" : "-830px -610px" }) //hand out of pocket
	$('.sprite').css({ "left" : "60px" })
	$('.sprite').css({ "width" : "150px" })
	$('.sprite').css({ "top" : "188px" })
	$(".confetti").css( 'background-image', "url(assets/fullSpriteSheet.png)" )
	$(".confetti").css({ "background-position" : "-1093px -1025px" })
	$(".confetti").css({ "top" : "200px" });
	$(".confetti").css({ "height" : "150px" });
	$(".confetti").css({ "left" : "200px" });
	$(".confetti").animate({ top: "590px" } , { queue: false, duration: 6000 } )
	$(".confetti").animate({ height: "0px"}, { queue: false, duration: 6000 } )
	setTimeout(portfolio1, 125)
}

function portfolio1() {
	$(".github").toggle(true)
	setTimeout(portfolio2, 1000)
}

function portfolio2() {
	$(".linkedIn").toggle(true)
	setTimeout(portfolio3, 1000)
}

function portfolio3() {
	$(".amazon").toggle(true)
	setTimeout(portfolio4, 1000)
}

function portfolio4() {
	$(".game").toggle(true)
	setTimeout(spriteLeave, 2000)
}

function spriteLeave() {
	$('.sprite').css({ "background-position" : "-1195px -1230px" })
	$('.sprite').css({ "left" : "30px" })
	$('.sprite').css({ "top" : "190px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "155px" })
	setTimeout(sprite22, 1000)
}

function sprite22() {
	$('.sprite').css({ "background-image" : "url(assets/transparent.gif)" })
	$('.sprite').css({ "background-position" : "0px 0px" })
	$('.border').css({ "background-position" : "-1px -2070px" })
	setTimeout(borderExit, 1000)
}

function borderExit() {
	$('.border').css({ "background-position" : "0px 0px" })
}


//after effects
function confettiFlourish() {
	var x = [200, 300, 400, 500, 600]
	var rand = x[Math.floor(Math.random() * x.length)]
	$(".confetti").css({ 'background-image': "url(assets/fullSpriteSheet.png)" })
	$(".confetti").css({ "background-position" : "-1093px -1025px" })
	$(".confetti").css({ "top" : "200px" });
	$(".confetti").css({ "height" : "150px" });
	$(".confetti").css({ "left" : rand });
	$(".confetti").animate({ top: "590px" } , { queue: false, duration: 6000 } )
	$(".confetti").animate({ height: "0px"}, { queue: false, duration: 6000 } )
}

currentChoices = [0, -100, -150, -200, -250, -300, -350, -400, -450, -500, -550, -600, -650, -700, -750, -800, -850, -900, -1000, -1100, -1200, -1300, -1400, -1500, -1600, -1700, -1800, -1900, -2000, -2100, -2200, -2300, -2400, -2500, -2600, -2700, -2750]
divChoices = ['.github', '.linkedIn', '.amazon', '.game']

function borderFlourish() {
	rand = divChoices[Math.floor(Math.random() * divChoices.length)]
	if (rand == '.github') {
		$('.sparkle').css({ "top" : "200px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ "border" : "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == '.linkedIn') {
		$('.sparkle').css({ "top ": "300px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ "border" : "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == '.amazon') {
		$('.sparkle').css({ "top" : "400px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ "border" : "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == '.game') {
		$('.sparkle').css({ "top" : "500px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ "border" : "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	}
}

function shparkles(){
	current = currentChoices[Math.floor(Math.random() * currentChoices.length)]
	hozpoz = current + "px -2000px"
	$('.sparkle').css({ "background-position" : hozpoz })
    }

function clearSparkles() {
	$('.sparkle').toggle(false);
	$('.sparkle').css({ "top" : "200px"})
	clearInterval(sparkletits);
	$(".github").css({ border: "3px dotted #170A1C" })
	$(".amazon").css({ border: "3px dotted #170A1C" })
	$(".game").css({ border: "3px dotted #170A1C" })
	$(".linkedIn").css({ border: "3px dotted #170A1C" })
}

function replay() {
	location.reload();
}

