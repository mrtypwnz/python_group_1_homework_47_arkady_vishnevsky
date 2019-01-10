let timescore = document.getElementsByTagName('div')[0];
setInterval(function() {
	let newElement = document.createElement('div');
	newElement.classList.add('element');
	let newElementText = document.createTextNode(parseInt(Math.random()*10));
	timescore.appendChild(newElement); newElement.appendChild(newElementText);
},5000);