bigBorderStart = setTimeout(borderEntrance2, 2000)
confettiLater = setInterval(confettiFlourish, 99999)
borderLater = setInterval(borderFlourish, 88888)

$('.border').css({ "background-image": "url(assets/fullSpriteSheet.png)" })
$('.border').css({ "background-position" : "-821px 0px" })

function borderEntrance2() {
	$('.border').css({ "background-position" : "-821px 0px" })
	setTimeout(borderEntrance3, 1000)
}

function borderEntrance3() {
	$('.border').css({ "background-position" : "-1632px -2px" })
	setTimeout(borderEntrance4, 1000)
}

function borderEntrance4() {
	$('.border').css({ "background-position" : "0px -615px" })
	setTimeout(borderEntrance5, 1000)
}

function borderEntrance5() {
	$('.border').css({ "background-position" : "0px 0px" })
	setTimeout(spriteBegin, 1000)
}

function spriteBegin() {
	$('.sprite').css({ "background-image": "url(assets/fullSpriteSheet.png)"})
	$('.sprite').css({ "background-position" : "0px -1230px" })
	$('.sprite').css({ "left" : "30px" })
	$('.sprite').css({ "top" : "168px" })
	setTimeout(sprite2, 1000)
}

function sprite2() {
	$('.sprite').css({ "background-position" : "-210px -1230px" })
	$('.sprite').css({ "left" : "60px" })
	setTimeout(sprite3, 1000)
}

function sprite3() {
	$('.sprite').css({ "background-position" : "-420px -1230px" })
	$('.sprite').css({ "left" : "90px" })
	setTimeout(sprite4, 1000)
}

function sprite4() {
	$('.sprite').css({ "background-position" : "-770px -1230px" })
	$('.sprite').css({ "left" : "150px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "160px" })
	setTimeout(sprite5, 1000)
}

function sprite5() {
	$('.sprite').css({ "background-position" : "-2005px -610px" })
	$('.sprite').css({ "left" : "125px" })
	$('.sprite').css({ "top" : "190px" })
	setTimeout(sprite6, 1000)
}

function sprite6() {
	$('.sprite').css({ "background-position" : "-1300px -610px" })
	$('.sprite').css({ "left" : "150px" })
	setTimeout(sprite7, 1000)
}

function sprite7() {
	$('.sprite').css({ "background-position" : "-1490px -610px" })
	$('.sprite').css({ "left" : "180px" })
	$('.sprite').css({ "width" : "130px" })
	setTimeout(sprite8, 1000)
}

function sprite8() {
	$('.sprite').css({ "background-position" : "-1610px -610px" })
	setTimeout(sprite9, 1000)
}

function sprite9() {
	$('.sprite').css({ "background-position" : "-1725px -610px" })
	setTimeout(sprite10, 1000)
}

function sprite10() {
	$('.sprite').css({ "background-position" : "-1610px -610px" })
	setTimeout(sprite11, 1000)
}

function sprite11() {
	$('.sprite').css({ "background-position" : "-1725px -610px" })
	setTimeout(sprite12, 1000)
}

function sprite11() {
	$('.sprite').css({ "background-position" : "-1840px -610px" })
	$('.sprite').css({ "width" : "150px" })
	setTimeout(title, 1000)
}

function title() {
	$('.titleBox').css({ "background-image": "url(assets/fullSpriteSheet.png)" })
	$('.titleBox').css({ "background-position" : "-1832px -1311px" })
	setTimeout(title1, 1000)
}

function title1() {
	$('.titleBox').css({ "background-position" : "-1832px -1408px" })
	setTimeout(title2, 1000)
}

function title2() {
	$('.titleBox').css({ "background-position" : "-1832px -1506px" })
	setTimeout(title3, 1000)
}

function title3() {
	$('.titleBox').css({ "background-position" : "-1832px -1604px" })
	setTimeout(title4, 1000)
}

function title4() {
	$('.titleBox').css({ "background-position" : "-1832px -1700px" })
	setTimeout(title5, 1000)
}

function title5() {
	$('.titleBox').css({ "background-position" : "-1832px -1800px" })
	setTimeout(spriteAgain, 1000)
}

function spriteAgain() {
	$('.sprite').css({ "background-position" : "-1725px -610px" })
	$('.sprite').css({ "left" : "180px" })
	$('.sprite').css({ "top" : "190px" })
	$('.sprite').css({ "height" : "375px" })
	$('.sprite').css({ "width" : "130px" })
	setTimeout(sprite12, 1000)
}

function sprite12() {
	$('.sprite').css({ "background-position" : "-1610px -610px" })
	setTimeout(sprite13, 1000)
}

function sprite13() {
	$('.sprite').css({ "background-position" : "-1490px -610px" })
	setTimeout(sprite14, 1000)
}

function sprite14() {
	$('.sprite').css({ "background-position" : "-1300px -610px" })
	$('.sprite').css({ "left" : "150px" })
	$('.sprite').css({ "width" : "160px" })
	setTimeout(sprite15, 1000)
}

function sprite15() {
	$('.sprite').css({ "background-position" : "-2005px -610px" })
	$('.sprite').css({ "left" : "125px" })
	setTimeout(sprite16, 1000)
}

function sprite16() {
	$('.sprite').css({ "background-position" : "-770px -1230px" })
	$('.sprite').css({ "left" : "150px" })
	$('.sprite').css({ "width" : "120px" })
	setTimeout(sprite17, 1000)
}

function sprite17() {
	$('.sprite').css({ "background-position" : "-1195px -1230px" })
	$('.sprite').css({ "left" : "100px" })
	$('.sprite').css({ "width" : "175px" })
	setTimeout(sprite18, 1000)
}

function sprite18() {
	$('.sprite').css({ "background-position" : "-950px -1230px" })
	$('.sprite').css({ "left" : "60px" })
	$('.sprite').css({ "width" : "200px" })
	setTimeout(sprite19, 1000)
}

function sprite19() {
	$('.sprite').css({ "background-position" : "-830px -610px" })
	$('.sprite').css({ "left" : "30px" })
	$('.sprite').css({ "width" : "150px" })
	setTimeout(sprite20, 1000)
}

function sprite20() {
	$('.sprite').css({ "background-position" : "-980px -610px" })
	$('.sprite').css({ "height" : "360px" })
	$('.sprite').css({ "width" : "250px" })
	setTimeout(sprite21, 1000)
}

function sprite21() {
	$('.sprite').css({ "background-position" : "-830px -610px" })
	$('.sprite').css({ "width" : "150px" })
	setTimeout(confettiFall, 1000)
	setTimeout(portfolio1, 1125)
}

function confettiFall() {
	$(".confetti").css( 'background-image', "url(assets/fullSpriteSheet.png)" )
	$(".confetti").css({ "background-position" : "-1093px -1025px" })
	$(".confetti").css({ "top" : "200px" });
	$(".confetti").css({ "height" : "150px" });
	$(".confetti").css({ "left" : "200px" });
	$(".confetti").animate({ top: "590px" } , { queue: false, duration: 6000 } )
	$(".confetti").animate({ height: "0px"}, { queue: false, duration: 6000 } )
}

function portfolio1() {
	$(".github").toggle(true)
	setTimeout(portfolio2, 650)
}

function portfolio2() {
	$(".linkedIn").toggle(true)
	setTimeout(portfolio3, 650)
}

function portfolio3() {
	$(".amazon").toggle(true)
	setTimeout(portfolio4, 650)
}

function portfolio4() {
	$(".game").toggle(true)
	setTimeout(spriteLeave, 1000)
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
	setTimeout(borderExit, 1000)
}

function borderExit() {
	$('.border').css({ "background-position" : "-1px -2070px" })
	setTimeout(borderExit2, 1000)
}

function borderExit2() {
	$('.border').css({ "background-position" : "0px 0px" })
}

function confettiFlourish() {
	var x = [200, 300, 400, 500, 600]
	var rand = x[Math.floor(Math.random() * x.length)]
	$(".confetti").css( 'background-image', "url(assets/fullSpriteSheet.png)" )
	$(".confetti").css({ "background-position" : "-1093px -1025px" })
	$(".confetti").css({ "top" : "200px" });
	$(".confetti").css({ "height" : "150px" });
	$(".confetti").css({ "left" : rand });
	$(".confetti").animate({ top: "590px" } , { queue: false, duration: 6000 } )
	$(".confetti").animate({ height: "0px"}, { queue: false, duration: 6000 } )
}

current = -1;
divChoices = ['.github', ".linkedIn", ".amazon", ".game"]

function borderFlourish() {
	rand = divChoices[Math.floor(Math.random() * divChoices.length)]
	if (rand == '.github') {
		$('.sparkle').css({ top: "200px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == ".linkedIn") {
		$('.sparkle').css({ top: "300px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == ".amazon") {
		$('.sparkle').css({ top: "400px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == ".game") {
		$('.sparkle').css({ top: "500px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	}
}

function shparkles(){
	current = current - 1
	hozpoz = current + "px"
	$('.sparkle').css({ "background-position-x" : hozpoz })
		if (current < -2750) {
			current = -1
		}
    }

function clearSparkles() {
	$('.sparkle').toggle(false);
	clearInterval(sparkletits);
	$(".github").css({ border: "3px dotted #170A1C" })
	$(".amazon").css({ border: "3px dotted #170A1C" })
	$(".game").css({ border: "3px dotted #170A1C" })
	$(".linkedIn").css({ border: "3px dotted #170A1C" })
}


