confettiTrigger = setTimeout(portfolio1, 20000)


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
}