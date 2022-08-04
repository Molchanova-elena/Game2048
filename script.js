"use strict";

const scoreDisplay = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
// const colorCell = [
//     '#afa192',
//     '#eee4da',
//     '#ede0c8',
//     '#f2b179',
//     '#ffcea4',
//     '#e8c064',
//     '#ffab6e',
//     '#fd9982',
//     '#ead79c',
//     '#76daff',
//     '#beeaa5',
//     '#d7d4f0',
// ];


// функция контроля нажатой клавиши
function clickControl (event) {

    if (event.key === ('ArrowLeft') || event.key === ('ArrowUp') || event.key === ('ArrowRight') || event.key === ('ArrowDown')) {
        console.log('Нажата кнопка ' + event.key);
    };
};

// класс общей игровой логики
class GameManager {
    constructor(isGameOver, score, board) {
        this.isGameOver = false; //конец игры
        this.score = 0; //счет
        this.board = null; // доска
    };

    init() {
        this.board = new Board(); // создаем экземпляр класса Board
        this.board.init(); // вызываем метод класса Board, создающий игровое поле
        this.board.generateNewCell(); // заполняем первую ячейку
        document.addEventListener('keyup', clickControl); // подписываемся на клик
    };

    checkGameOver() {
        console.log('checkGameOver');
    };
}

import  Board  from "./board.js";
//import Cell from "./cell.js";

const startGame = new GameManager();
startGame.init();