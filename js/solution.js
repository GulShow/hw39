'use strict';
// const container = document.querySelector('.container');
// const number = 100;
// let count = 1;
// const createTable = () => {
//     for (let i = 0; i < number; i++) {
//         const table = document.createElement('div');
//         table.classList.add('block');
//         table.innerText = count;
//         count += 1;
//         container.append(table)
//     }
//     return container
// }
//
// document.body.append(createTable())

(function createTable() {
    let count = 1
    const table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        const trs = document.createElement('tr')
        for (let j = 0; j < 10 ; j++) {
            const tds = document.createElement('td')
            tds.append(`${count}`)
            count++
            trs.append(tds)
        }
        table.append(trs)
    }
    document.body.append(table)
})()





