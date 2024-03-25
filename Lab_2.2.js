//Задача 10. Створити функцію, яка для 4 чисел знаходять середнє арифметичне.

let Num1 = parseFloat(prompt('Введіть число '));
let Num2 = parseFloat(prompt('Введіть число '));
let Num3 = parseFloat(prompt('Введіть число '));
let Num4 = parseFloat(prompt('Введіть число '));

let avarage = (num1, num2, num3, num4) => (num1+num2+num3+num4)/4;
alert(avarage(Num1,Num2,Num3,Num4));

//Задача 9. Створити функцію, яка за назвою дня тижня повертає список пар на цей день.

function getPairsByDay(day) {
    
    let pairs;
    switch (day.toLowerCase()) {
        case 'понеділок':
            pairs = 'Програмування, Матаналіз, Англійська';
            break;
        case 'вівторок':
            pairs = 'Алгебра, Програмування';
            break;
        case 'середа':
            pairs = 'Матаналіз, Дискретна';
            break;
        case 'четвер':
            pairs = 'Програмування, Програмування, ООП';
            break;
        case 'п\'ятниця':
            pairs = 'Дискретна, Управління ІТ, Алгебра';
            break;
        case 'субота':
        case 'неділя':
            pairs = 'вихідний';
            break;
        default:
            pairs = 'Не існує такого дня';
    }
    return pairs;
}

let day = prompt('День: ');
let pari = getPairsByDay(day);
alert(`Розклад на ${day} - ${pari}`);

//Задача 7. Створити функцію, яка переводить сантиметри у дюйми;


let santimiters = parseFloat(prompt("Введіть сантиметри "));

let result =  (function(sant){return sant*0.39})(santimiters)
alert(`В дюймах це ${result}`);

