// Задание №1

let myName = "Алексей";

function greet(name) {
    return console.log(`Приветствую, ${name}`);
}

greet(myName);

// Задание №2

function celsiusToFahrenheit(c) {
    let f = c * 1.8 + 32;
    return f;
}

let cel = 15;

console.log(`эквивалент градуса Фаренгейта из ${cel} градусов Цельсия = ${celsiusToFahrenheit(cel)}`);

// Задание №3

function calculateFallDistance(t) {
    let g = 9.8;
    let d = (1 / 2) * g * Math.pow(t, 2);
    return d;
}

let sec = 15;

console.log(`Пройденное расстояние падения объекта за ${sec} сек. = ${calculateFallDistance(sec)}`);

// Задание №4

function calculateAverage(a, b, c) {
    let result = (a + b + c) / 3;
    return console.log(`Среднее значение чисел ${a}, ${b}, ${c} = ${result}`);
}

calculateAverage(1, 2, 7);

// Задание №5

function concatStrings(str1, str2) {
    let str = `Первое слово - "${str1}", второе слово - "${str2}"`;
    return str;
}

console.log(concatStrings("Один", "Два"));