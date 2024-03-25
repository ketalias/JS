/*1. Дано масив, який містить оцінки студента з К предметів. Знайти середній бал студента і
з’ясувати до якої категорії він відноситься (відмінник (всі оцінки відмінно), двійочник (має хоча
би одну двійку), хорошист (оцінки добре і відмінно), трійочник (є хоча би одна трійка)).*/

function findAverageGrade(grades) {
    let sum1 = 0;
    for (let i = 0; i < grades.length; i++) {
        sum1 += grades[i];
    }
    return sum1 / grades.length;
}

function findStudentCategory(grades) {
    let hasExcellent = true;
    let hasGood = false;
    let hasNormal = false;
    let hasFail = false;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] == 2) {
            hasFail = true;
        } else if (grades[i] == 3) {
            hasNormal = true;
        } else if (grades[i] >= 4) {
            hasGood = true;
        } else {
            hasExcellent = false;
        }
    }

    if (hasExcellent) {
        return "відмінник";
    } else if (hasFail) {
        return "двійочник";
    } else if (hasNormal && hasGood) {
        return "хорошист";
    } else {
        return "трійочник";
    }
}

let studentGrades = [2, 4, 3, 5, 5, 4, 2]; // Приклад оцінок студента
let averageGrade = findAverageGrade(studentGrades);
let category = findStudentCategory(studentGrades);

alert("Середній бал студента: " + averageGrade);
alert("Категорія студента: " + category);

/*
2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
• номери днів, протягом яких кількість відвідувачів була меншою за 20;
• номери днів, коли кількість відвідувачів була мінімальною;
• номери днів, коли кількість відвідувачів була максимальною;
• загальну кількість клієнтів у робочі дні;
• кількість клієнтів днів на вихідних.*/

let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let visitors = [10, 11, 34, 23, 12, 100, 32, 5];
let dayLowVis = '';


for (let i = 0; i < visitors.length; i++){
    if (visitors[i] < 20){
        dayLowVis += daysOfWeek[i] + ', ';
    }
}
alert(`Дні в які було менше 20 відвідувачів - ${dayLowVis}`)


let minVisitors = Math.min(...visitors);
let minDay = daysOfWeek[visitors.indexOf(minVisitors)]
alert(`Найменша кількість відвідувачів була в - ${minDay}`);

let maxVisitors = Math.max(...visitors);
let maxDay = daysOfWeek[visitors.indexOf(maxVisitors)]
alert(`Найменша кількість відвідувачів була в - ${maxDay}`);

let sum2 = 0;
for (let i = 0; i<5; i++){
    sum2 += visitors[i];
}
alert(`В загальному за всі робочі дні - ${sum2}`)

let sum3 = 0;
for (let i = 5; i< 7; i++){
    sum3 += visitors[i];
}
alert(`В загальному за всі вихідні дні - ${sum3}`)

/*3. Дано масив імен студентів,. З’ясувати скільки разів зустрічається вказане користувачем ім’я,
наприклад «Юрій».*/

let names = ['Андрій', 'Вася','Богдан', 'Юрій','Юрій', 'Юрій','Ганна', 'Юрій', 'Юрій','Дмитро'];
let sum4 = 0;
names.forEach(element => {
    if (element == 'Юрій'){
        sum4+=1;
    }
});
alert(`В масиві імʼя "Юрій" зустрічається ${sum4} раз`);

/*4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи
заповнюються випадковим чином значеннями від -500 до 500). Користувач вибирає номер
елементу, поки не відмовиться від подальшої гри, або не вибере всі елементи. Після кожного
ходу показувати сумарний виграш. Кожен елемент можна вибирати тільки 1 раз.*/


let sum = 0;
let ticket;
let tickets = parseInt(prompt("Скільки білетів купуєте "));
let ticketsList = [];

for (let i = 0; i < tickets; i++) {
    ticket = Math.round(Math.random() * (1000 - 1) - 500);
    ticketsList.push(ticket);
}

let iPlay = confirm("Давайте білет");

while (iPlay) {
    let guess = parseInt(prompt("Виберіть білет "));
    
    if (guess >= 1 && guess <= tickets) {
        
        if (ticketsList[guess - 1] !== undefined) {
            
            sum += ticketsList[guess - 1];
            alert(`Ваш виграш = ${ticketsList[guess - 1]} гривень\n Баланс = ${sum}`);
            ticketsList[guess - 1] = undefined;

            if (ticketsList.every(element => element === undefined)) {
                alert(`Ви вже вибрали всі білети. \n Баланс = ${sum}`);
                iPlay = false;
            }

            else { iPlay = confirm("Давайте ще раз виберемо білет "); }
        }

        else {
            alert(`Ви вже обрали білет під номером ${guess}`);
        }
    }

    else {
        alert(`Такого білета у вас нема`);
    }

}
