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

// класс логики игрового поля
class Board {
    constructor(widthBoard, squares, wrapper) {
        this.widthBoard = 4; // ширина поля
        this.squares = []; // ячейки
        this.wrapper = document.querySelector('.grid'); //ссылка на контейнер
    };

// содает игровое поле
    init() {

        const fragment = document.createDocumentFragment(); // создаем новый пустой фрагмент

        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const cell = new Cell; //создаем новый экземпляр класса Cell
            fragment.appendChild(cell.getNewElement()); // добавляем созданную ячейку 
            this.squares.push(cell.getNewElement()); // добавляем див в массив
        }
        this.wrapper.appendChild(fragment);
    };

// Заполнение пустой ячейки новым значением
    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length); // получаем случайное число от 0-3

        if (this.squares[randomNumber].innerHTML === '') { // если ячейка пустая записываем 2
            this.squares[randomNumber].innerHTML = 2;
            this.addColours(); //добавляем ячейке цвет
            // проверить на GameOver
        } else {
            //generateNewCell(); // если ячека занята снова вызываем метод
        }
    }
    

// Добавление цвета ячейкам с цифрами
    addColours() {
        for (let i = 0; i < this.squares.length; i++) {
            console.log(this.squares[i]);
            this.squares[i].style.backgroundColor = colorCell[Math.trunc(Math.sqrt(this.squares[i].innerHTML))];
        }
    }

}


//  класс параметров ячейки
class Cell {
    constructor(value, dom) {
        this.value = ''; //значение ячейки
        this.dom = null;
    }

getValue() {
    return this.value;
}

setValue() {
    console.log(setValue);
}

// создание новой ячейки
getNewElement() {
    const square = document.createElement('div'); // создаем новый пустой див
    square.innerHTML = ''; // записываем в него пустое значение
    //this.value = ''; // записываем в него пустое значение
    square.className = 'cell'; //присваиваем класс
    this.dom = square; 

    return square; 
}
}

const startGame = new GameManager();
startGame.init();