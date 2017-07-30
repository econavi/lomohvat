import svg4everybody from 'svg4everybody';
import $ from 'jquery';

window.onload = () => {
	svg4everybody();
};

// Для построения сетки
var node = ['body', 'header', 'section', 'div', 'span', 'p', 'ul', 'li', 'h1', 'h2'];
var color = ['255,165,0', '0,255,0', '255,255,0', '0,255,255', '188,4,249', '205,98,98'];

for(var i = 0; i < node.length; i++) {	
	var elems = document.querySelectorAll(node[i]);
	
	for(var j = 0; j < elems.length; j++) {
		var random = Math.floor( Math.random() * (color.length - 0 + 1) + 0 );

		elems[j].style.outlineColor = 'rgba(' + color[random] + ',1)';
		elems[j].style.outlineWidth = '2px';
		elems[j].style.outlineOffset = '-2px';
		elems[j].style.outlineStyle = 'solid';
		elems[j].style.backgroundColor = 'rgba(' + color[random] + ',0.4)';
	}

}