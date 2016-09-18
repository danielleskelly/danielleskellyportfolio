confettiTrigger = setTimeout(portfolio1, 20000)
confettiNow = setTimeout(confettiFall, 20000)
confettiLater = setInterval(confettiFlourish, 99999)
borderLater = setInterval(borderFlourish, 88888)

function portfolio1() {
	$("#github").toggle(true)
	setTimeout(portfolio2, 650)
}

function portfolio2() {
	$("#linkedIn").toggle(true)
	setTimeout(portfolio3, 650)
}

function portfolio3() {
	$("#amazon").toggle(true)
	setTimeout(portfolio4, 650)
}

function portfolio4() {
	$("#game").toggle(true)
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
divChoices = ['#github', "#linkedIn", "#amazon", "#game"]


function borderFlourish() {
	rand = divChoices[Math.floor(Math.random() * divChoices.length)]
	if (rand == '#github') {
		$('.sparkle').css({ top: "200px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == "#linkedIn") {
		$('.sparkle').css({ top: "300px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == "#amazon") {
		$('.sparkle').css({ top: "400px" })
		$('.sparkle').toggle(true)
		sparkletits = setInterval(shparkles, 10)
		$(rand).css({ border: "6px dotted #170A1C" })
		setTimeout(clearSparkles, 5000)
	} else if (rand == "#game") {
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
	$("#github").css({ border: "3px dotted #170A1C" })
	$("#amazon").css({ border: "3px dotted #170A1C" })
	$("#game").css({ border: "3px dotted #170A1C" })
	$("#linkedIn").css({ border: "3px dotted #170A1C" })
}


