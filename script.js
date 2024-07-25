import { greet } from "./modules/greet.js";
import { celsiusToFahrenheit } from "./celsiusToFahrenheit.js";
import { calculateFallDistance } from "./calculateFallDistance.js";
import { calculateAverage } from "./calculateAverage.js";
import { concatStrings } from "./concatStrings.js";

// Задание №1

let myName = "Алексей";

greet(myName);

// Задание №2

let cel = 15;

console.log(`эквивалент градуса Фаренгейта из ${cel} градусов Цельсия = ${celsiusToFahrenheit(cel)}`);

// Задание №3

let sec = 15;

console.log(`Пройденное расстояние падения объекта за ${sec} сек. = ${calculateFallDistance(sec)}`);

// Задание №4

calculateAverage(1, 2, 7);

// Задание №5

console.log(concatStrings("Один", "Два"));