const  consoleLog = document.querySelector('#consoleLog');
const  alertId = document.querySelector('#alert');
const  promptId = document.querySelector('#prompt');

consoleLog.addEventListener('click',
    (event) => {
        alert('Метод для вывода сообщений в web-консоль');
    })

alertId.addEventListener('click',
    (event) => {
        alert('Метод для вывода в модальное окно и кнопкой OK');
    })

promptId.addEventListener('click',
    (event) => {
        alert('Метод отображения модального окна с текстом, полем для ввода текста и кнопками OK/Отмена.');
    })
