import { modal } from "./../modal/modal";

const modalBtns = document.querySelectorAll('.js-modal');
const forms = document.querySelectorAll('.form');

for(var i = 0; i < modalBtns.length; i++) {
	modalBtns[i].onclick = function(e) {
		e.preventDefault();
		modal.open('.form');
	}
}


for(var i = 0; i < forms.length; i++) {

	const form = forms[i];
	const name = forms[i].querySelector('[name=name]');
	const tel = forms[i].querySelector('[name=tel]');
	
	form.onsubmit = function(e) {
	
		if (!name.value || !tel.value) {
			e.preventDefault();
			form.classList.add('form_validation_error');
			setTimeout(function() {
				if (!name.value) {
					name.style.border = '4px solid red'
				} else if (!tel.value && name.value) {
					name.style.border = ''
					tel.style.border = '4px solid red'
				}
				form.classList.remove('form_validation_error');
			}, 300);
			
		
		} else {
			name.style.border = ''
			tel.style.border = ''
			form.reset();
			form.classList.add('form_send-correct');
			setTimeout(function() {
				form.classList.remove('form_send-correct');
			}, 4000);
		}

	}
}


