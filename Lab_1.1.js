/*10. Написати програму, яка відображає таблицю множення на k (k вводиться з клавіатури).*/

let k = parseInt(prompt("Введіть число для табоиці множення: "));
let table = '';

for(let i=1; i<10; i++){
    table+=(`${k}*${i} = ${k*i} \n`)
}
alert(table)

/*17. Ввести з клавіатури 10 пар чисел. 
Порівняти числа у кожній парі та надрукувати більші з них.*/

tableNums = '';
for(let i=1; i<=10; i++){
    a = parseFloat(prompt("Введіть число 1 "));
    b = parseFloat(prompt("Введіть число 2 "));
    if(a>b){tableNums+=`${a} чи ${b} - більше ${a}\n`}
    else if(b>a){tableNums+=`${a} чи ${b} - більше ${b}\n`}
    else{tableNums+=`${a} чи ${b} - рівні\n`}
}
var a;
var b;

alert(tableNums);

/*7. До спортзалу щодня приходить якась кількість відвідувачів. Необхідно
запропонувати користувачеві ввести такі дані: скільки людей відвідало
спортзал за день, ввести вік кожного відвідувача і в результаті показати вік
найстаршого та наймолодшого з них, а також порахувати середній вік
відвідувачів.*/

let guestsNum = parseInt(prompt("Введіть кількість користувачів"));
let arrayGuest = [];
let guest;


var sum = 0;

for(let i = 0; i<guestsNum; i++){
    guest = parseInt(prompt('Введіть вік користувача '));
    arrayGuest.push(guest);
}
var maxAge = arrayGuest[0];
var minAge = arrayGuest[0];

for(let i = 0; i<arrayGuest.length; i++){
    if(arrayGuest[i]>maxAge){maxAge = arrayGuest[i]}
    if(arrayGuest[i]<minAge){minAge = arrayGuest[i]}
    sum += arrayGuest[i]
}


alert(`Найстарший - ${maxAge},\n наймолодший - ${minAge},\n середній вік - ${sum/guestsNum}`);



/*6. Написати програму, яка показуватиме на екран квадрат числа, введеного
користувачем. Користувач повинен сам вирішувати – вийти із програми або
продовжити введення.*/

let request = parseInt(prompt("Введіть число для квадрату"));
let square = confirm(`Результат - ${request*request}, Ще одне число?`);

while(square){
    let request = parseInt(prompt("Введіть число для квадрату"));
    square = confirm(`Результат - ${request*request}, Ще одне число?`);

}

let dobutok = 1;
for(let i=13; i<100; i+=2){
    if(i%13==0){
        dobutok*=i;
    }
}
alert(dobutok);
