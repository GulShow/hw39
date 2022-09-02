'use strict';
const container = document.querySelector('.container');
const number = 100;
let count = 1;
const createTable = () => {
    for (let i = 0; i < number; i++) {
        const table = document.createElement('div');
        table.classList.add('block');
        table.innerText = count;
        count += 1;
        container.append(table)
    }
    return container
}

document.body.append(createTable())
