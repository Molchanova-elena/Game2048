"use strict";

const divGrid= document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
    const divCell = document.createElement('div');
    divCell.className = 'cell';
    divGrid.append(divCell);

}