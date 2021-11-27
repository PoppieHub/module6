let value = document.querySelector('#prompt');

value.addEventListener('click', (e) => {
	e.preventDefault();
	var href = prompt('Введите что-нибудь');
	value.textContent = href;
})