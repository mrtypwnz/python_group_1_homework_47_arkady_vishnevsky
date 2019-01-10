let example = document.getElementsByTagName('div')[0];
let button = document.getElementById('add-item-btn');
button.onclick = function(){
	example.innerHTML += '<div class="element">Element</div>';
}