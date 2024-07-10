"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function math() {
    let firstNumber = 7;
    let secondNumber = 4;
    function Adding(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
    console.log(Adding(firstNumber, secondNumber));
    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
    console.log(subtract(firstNumber, secondNumber));
    function multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    console.log(multiply(firstNumber, secondNumber));
    function Division(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
    console.log(Division(firstNumber, secondNumber));
}
math();
exports.default = math;
// let Adding = firstNumber + secondNumber;
// console.log(Adding)
// let subtract = firstNumber - secondNumber;
// console.log(subtract)
// let multiply = firstNumber * secondNumber;
// console.log(multiply)
// let Division = firstNumber / secondNumber;
// console.log(Division)
