"use strict";

//  класс параметров ячейки
export default class Cell {
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
