"use strict";

const scoreDisplay = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
const colorCell = [
    '#afa192',
    '#eee4da',
    '#ede0c8',
    '#f2b179',
    '#ffcea4',
    '#e8c064',
    '#ffab6e',
    '#fd9982',
    '#ead79c',
    '#76daff',
    '#beeaa5',
    '#d7d4f0',
];


// функция контроля нажатой клавиши
function clickControl (event) {

    if (event.key === ('ArrowLeft') || event.key === ('ArrowUp') || event.key === ('ArrowRight') || event.key === ('ArrowDown')) {
        console.log('Нажата кнопка ' + event.key);
    };
};

// общая игровая логика
class GameManager {
    constructor(isGameOver, score, board) {
        this.isGameOver = false;
        this.score = 0;
        this.board = null;
    };

    init() {
        this.board = new Board();
        this.board.init();
        document.addEventListener('keyup', clickControl);
    };

    checkGameOver() {
        console.log('checkGameOver');
    };
}

// логика игрового поля
class Board {
    constructor(widthBoard, scuares, wrapper) {
        this.widthBoard = 4;
        this.scuares = [];
        this.wrapper = document.querySelector('.grid');
    };

// содает игровое поле
    init() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const divCell = document.createElement('div');
            divCell.className = 'cell';
            divCell.innerHTML = '';
            this.wrapper.append(divCell);
            this.scuares.push(divCell);
        }
    };

// генерирует новые ячейки
    generateNewCell() {
        console.log('generateNewCell');
    };

// добавляет цвет ячейкам
    addColours() {

    }
}

// параметры ячейки
class Cell {
    constructor(value, dom) {
        this.value = '';
        this.dom = null;
    }

getValue() {
    return this.value;
}

setValue() {
    console.log(setValue);
}

getNewElement() {
    console.log(getNewElement); 
}
}

const startGame = new GameManager();
startGame.init();