'use strict';

let randomNumber = Math.ceil( Math.random() * 100);
let startTime = performance.now();
let userNumber = +prompt('Я загадал число от 1 до 100./nУгадай что это за число:');

while (userNumber !==0 && userNumber !== randomNumber) {
    if (isNaN(userNumber)) {
        userNumber = +prompt('Я загадал число от 1 до 100.\nВы ввели число, попробуйте снова:');
    }
    else if (userNumber < randomNumber) {
        userNumber = +prompt('Моё число больше ' + userNumber + '.\nПопробуйте снова');
    }
    else if (userNumber < randomNumber) {
        userNumber = +prompt('Моё число меньше ' + userNumber + '.\nПопробуйте снова');

        
    }
}

let exitMessage = 'Жалко что вы сдаётесь.\Правильный ответ был' +randomNumber +'\n(Обновите страницу для новой игры)';
if (userNumber ===0) alert(exitMessage);

let endTime = performance.now();
let resulTime = ((endTime - startTime) / 1000).toFixed(2);

let winMessage = 'Вы угадали правильное загаданое мною число' + randomNumber + '\nНа отгадывание у тебя ушло' + resulTime +' c';
alert(winMessage);
