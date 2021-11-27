var textForm = document.querySelector('#duplicateField');
var textInput = document.querySelector('#input');
var clickButton = document.querySelector('#button');

textInput.addEventListener('keyup', (e) => {
	textForm.textContent = textInput.value;
});

clickButton.addEventListener('click', (e) => {
	e.preventDefault();
	const consoleText = textInput.value;
	textForm.textContent = '';
	textInput.value = '';
	console.log(consoleText);
});

