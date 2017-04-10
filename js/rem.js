function calSize () {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth;

	document.documentElement.style.fontSize = clientWidth/7.5 + 'px';
}

calSize();


window.addEventListener('resize',calSize);