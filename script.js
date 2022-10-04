"use strict"
/*
console.log('Я учу JS');
let ghay = 25;
//ВЫВОД в командную строку "я уч
ghay = ghay + 50;
console.log(ghay);


let five = 1;
while (five < 6) {
    console.log(five);
    five++;
};

let ficus = 1;
do {
    console.log(ficus);
    ++ficus;
    if (ficus == 50) {
        console.log(`Фикус достиг ${ficus}см`)
        break
    };
} while (true);

let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
}

firstOne: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) break firstOne;
    }
}
let fiveTwo = 1;
for (; fiveTwo < 6; fiveTwo++) {
    console.log(fiveTwo);
}


function showBlock(Block) {
    if (Block) {
        console.log('Такой блок существует!')
    } else {
        console.log('Такого блока нет')
    }
}

let block;

function cheakBlock(blockId) {
    block = document.querySelector("." + blockId);
    console.log(block);
    showBlock(block);
}
let bodytop = "bodytop";
cheakBlock(bodytop);
*/
/*
let number3;
function cheakNumber(number1, number2) {
number3 = number1 ** number2;
console.log(`${number1} в степени ${number2} ровно ${number3} `)

}
cheakNumber(2, 10)


function calcNumber(num1) {
num1++
while (true) {
    if (num1 % 2 == 0) {
        console.log(`Число ${num1} четное! Прибавляем 10`)
        num1 += 10;
    } else {
        console.log(`Число ${num1} НЕ четное! Вычитаем 5`)
        num1 -= 5;
    }
    if (num1 > 100) {
        console.log(`Ваше число в итоге равно: ${num1}`)
        break
    }
}
}
calcNumber(2)


function calcSumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        console.log(`Сейчас ваше число равно: ${numOne}`);
        return numOne * calcSumm(numOne, numTwo - 1);
    }
} 

console.log(calcSumm(2, 3));
*/


/*------------------------------------Объекты-----------------------------------
let userInfo = {
    name: 'Вася',
    age: 30,
}

Object.assign(userInfo, { name: 'Лена' });

console.log(userInfo.name);

userInfo.name = 'Лена';

console.log(userInfo.name);

delete userInfo.name;

if ('name' in userInfo) {
    console.log(`Ключ name существует!`)
} else {
    console.log(`Ключ "name" НЕсуществует!`)
}

let fuck = Symbol('love')
let userPack = {
    [fuck]: "Некое значение"
}
console.log(userPack[fuck]);

function makeUserInfo(nameU, ageU, positionU, handsomeU) {
    return {
        name: nameU,
        age: ageU,
        position: positionU,
        handsome: handsomeU,
    };
};

let user = makeUserInfo("Albina", 18, "замужем", "У меня красивые глаза");

console.log(`Её зовут ${user.name}, ей ${user.age} лет и она ${user.position} и оценивает свою красоту так: ${user.handsome}`);
*/
/*------------------------------------Числа-----------------------------------
console.log(Math.max(10, 58, 39, -150, 0));

let gath = 58.858;

console.log(gath.toFixed(0));
gath = +gath;

console.log(Math.floor(gath))

let valur = "135.58px"
console.log(parseFloat(valur))


let vhgf = 58 + 'vlad';
if (isNaN(vhgf)) {
    console.log(`Результат выражения NaN`)
}
*/
/*------------------------------------Строки-----------------------------------

function calcSumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        console.log(`Сейчас ваше число равно: ${numOne}`);
        return numOne + calcSumm(numOne, numTwo - 1);
    }
}
console.log(calcSumm(20, 3));
function ga(pop) {
    if (pop === 2) {
        console.log("hello")
    }
}
ga(2)

let gfe = {
    gfa: 565,
}

if (gfe.gfa === 5615) {
    console.log("ПИЗДАТо");
} else {
    console.log("Хуево");
}
let jsd = 5;

if (jsd > 50) {
    console.log("1");
} else if (`${jsd} > 1`) {
    console.log("2");
} else {
    console.log("3");
}

let messageEnd = (5 > 1) ? "df" : "dfd";
console.log(messageEnd);

let huck = 5;

function showHuck(gal) {
    for (; huck < 64; --huck) {
        if (huck == 2) break
    }
    console.log(huck);
    while (huck < 63) {
        huck = huck * 2;
    }
    console.log(huck);

    let sok;
    sok = huck + gal;
    console.log(`Хак = ${huck} а gal = ${gal} их сумма = ${sok}`);
}
showHuck(2)

huck = 5;

firstFor: for (; huck < 64; --huck) {
    if (huck > 1) {
        LastFor: for (; huck < 64; huck++)
            if (huck == 10) {
                console.log(huck);
                console.log("End");
                break firstFor;
            }
    }
}

let hfe = "leks";

let UserInfo = {
    age: 18,
    name: "Vlad",
    "likes vlad": true,
    [hfe + " likes"]: true,
}
UserInfo.jak = 50;

delete UserInfo.age;

UserInfo.name = "Albina";

console.log(UserInfo);

console.log(UserInfo["likes vlad"]);

function kpdw(name, age) {
    return {
        name,
        age,
    }

}
let userd = kpdw("blad", 20)

console.log(userd);

let jah = UserInfo;
console.log(jah);
jah["likes vlad"] = 456;
console.log(UserInfo);

let tdf = Object.assign({}, UserInfo)
console.log(tdf);
Object.assign(UserInfo, { dick: 30, city: 'KR' })
console.log(UserInfo);

if (UserInfo.dick) {
    console.log("DICK");
}

let VladInfo = {
    name: "Vlad",
    age: "17",
    address: {
        city: "Krivaynka",
        street: "bolshay ",
        house: 101,
    }
}
console.log(VladInfo?.address?.street);


let hour = 13;
let degree;
if ((hour < 7)) {
    degree = hour * 30;
    console.log(`Градусная мера ровна ${degree}`);
} else if (6 < hour < 13) {
    degree = (180 - ((hour - 6) * 30));
    console.log(`Градусная мера ровна ${degree}`);
} else if (12 < hour < 19) {
    hour = hour - 12;
    degree = hour * 30;
    console.log(`Градусная мера ровна ${degree}`);
} else if (18 < hour < 25) {
    hour = hour - 12;
    degree = (180 - ((hour - 6) * 30));
    console.log(`Градусная мера ровна ${degree}`);
} else {
    console.log(`Вы ввели число, которого нет на часах!`);
}


let obekt = {
    name: "vlad",
    adress: {
        city: "kr",
    },
}

let key = "name";

console.log(obekt[key]);

let hug = Object.assign({}, obekt);

console.log(hug);
console.log(obekt?.adress?.city);

let masv = [8, 15, 30, 1, 3, 50,];
console.log(masv.sort((a, b) => a - b));

let users = ["Ваня", "Иштван",];
users.push('Оля');
console.log(users);
users.splice(1, 1, "Петя");
console.log(users);
let removed = users.splice(0, 1);
console.log(removed);
console.log(users);
users.unshift("Маша", "Паша");
console.log(users);

let stroka = 'Ваня,Иштван,Оля'
stroka = stroka.split(",");
console.log(stroka);
*/
/* let myVideo = document.querySelector('.play_button-1');
document.querySelector('.play_button-1').addEventListener('click', function () {
    document.querySelector('.video-1').play();
});
function makeUserInf(name, age) {
    return {
        name: name,
        age: age,
    };
}
let gfa = makeUserInf("Влад", 18)
console.log(gfa);

let userInfo = {
    name: "vlad",
    age: 18,
    address: {
        city: 'Krivyanskaya'
    },
}
console.log(userInfo);
let user = Object.assign({}, userInfo)
Object.assign(user, { ha: 18, });
console.log(user);
if (user.ha) {
    console.log(user.ha);
}
console.log(userInfo?.address?.city);

let kaa = 0
let faa = [12, 15, 18, 56216, 465, 257, 85, 54, 125];
faa.forEach((item, index, array) => {
    if (item < 100) {
        console.log(item);
        kaa = kaa + 1
    }
});
console.log(`В массиве faa ${kaa} элементов меньше 100`);

let masv = [8, 15, 30, 1, 3, 50,];

console.log(masv.sort((a, b) => a - b));

let li = document.querySelectorAll('.item');
console.log(li); */

/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------NEW-----------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
let admin;
let nameTwo;
nameTwo = "Jhon";
admin = nameTwo;
/* let result = prompt("Ввидите ваше имя!", '');
alert(`${result} ПИДОР!!! АХАХХАХАХАХХА`); */
/* let page = document.getElementById('wrapper');
let login;
let login2 = "Админ";
let pass;
let pass2 = "Я главный";
login = prompt('Ввидите логин', '');
if (login == null) {
    alert('В доступе отказано')
} else if (login != login2) {
    alert('В доступе отказано')
} else if (login == login2) {
    pass = prompt('Ввидите пароль', '')
    if (pass == null) {
        alert('В доступе отказано')
    } else if (pass != pass2) {
        alert('В доступе отказано')
    } else if (pass == pass2) {
        alert('Здравсвуйте')
        page.classList.remove('none');
    }
}
 */
/* for (let i = 1; i <= 10; i++) {
    if ((i % 2) != 0) continue;
    console.log(i);
}
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
} */
/* let num;
do {
    num = +prompt("Ввидите число больше 100", 0);
} while ((num < 100) & num) */
/* let num = 110; */
/* for (let n = 2; n < num; n++) {
    for (let j = 0; j < num; j++) {
        if (((n % n) == 0) & ((n % j) != 0)) {
            console.log(n);
        }
    }
} */
/* one: for (let n = 2; n < num; n++) {
    for (let j = 2; j < n; j++) {
        if (((n % j) == 0)) {
            continue one;
        }
    }
    console.log(n);
} */

/* let internet = prompt('Ввидите ваш браузер', '');
if (internet = "Edge") {
    alert("You've got the Edge!");
} else if (internet == "Chrome" || internet == 'Safari' || internet == 'Opera' || internet == 'Firefox') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
} */
/* let number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
} */


/* function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
checkAge(19) */

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
};

function min(a, b) {
    return (a > b) ? b : a;
};

let numX = +prompt('Ввидите первое число', '');
let numN = +prompt('Ввидите второе число', '');
alert(pow(numX, numN));

function pow(x, n) {
    if ((x > 0) && (n > 0)) {
        return x ** n;
    } else {
        alert('sosi')
    }
};