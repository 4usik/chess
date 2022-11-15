'use strict'

function squareBuild() {

    const board = document.querySelector('.board');

    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.append(square);
    }
    
};

function innerTxt(square) {

    const text = "ABCDEFGH";

    square.forEach((item, i) => {
        
        if ((i > 90) && (i < 99)) {
            let j = i%10-1;
            item.innerHTML = `<h2>${text[j]}</h2>`;
        } else if ((i > 0) && (i < 9)) {
            let j = i-1;
            item.innerHTML = `<h2>${text[j]}</h2>`;
            item.querySelector('h2').classList.add('turn');
        } else if ((i%10 === 0) && (i/10 < 9) && (i/10 > 0)) {
            let j = 9-i/10;
            item.innerHTML = `<h2>${j}</h2>`;
        } else if (((i+1)%10 === 0) && ((i+1)/10 < 10) && ((i+1)/10 > 1)) {
            let j = 11-(i+1)/10-1;
            item.innerHTML = `<h2>${j}</h2>`;
            item.querySelector('h2').classList.add('turn');
        }
    });
};

function innerChessmen(square) {

    const chessmenArr = [
        './img/chess-castle',
        './img/chess-knight',
        './img/chess-bishop',
        './img/chess-king',
        './img/chess-queen',
        './img/chess-bishop',
        './img/chess-knight',
        './img/chess-castle',
        './img/chess-piece'
    ];

    square.forEach((item, i) => {
        if ((i%10 !== 0) && ((i+1)%10 !== 0) && (Math.trunc(i/10) === 7)) {
            item.innerHTML = `<img class="chessmen" src='${chessmenArr[chessmenArr.length-1]}-white.png'>`;
        } else if ((i%10 !== 0) && ((i+1)%10 !== 0) && (Math.trunc(i/10) === 2)) {
            item.innerHTML = `<img class="chessmen" src='${chessmenArr[chessmenArr.length-1]}-black.png'>`;
        } else if ((i%10 !== 0) && ((i+1)%10 !== 0) && (Math.trunc(i/10) === 8)) {
            const j = (i-1)%10;
            item.innerHTML = `<img class="chessmen" src='${chessmenArr[j]}-white.png'>`;
        } else if ((i%10 !== 0) && ((i+1)%10 !== 0) && (Math.trunc(i/10) === 1)) {
            const j = (i-1)%10;
            item.innerHTML = `<img class="chessmen" src='${chessmenArr[j]}-black.png'>`;
        }
    });
};

function boardBuild() {
    squareBuild();

    const square = document.querySelectorAll('.square');

    innerTxt(square);
    innerChessmen(square);

    square.forEach((item, i) => {
        if ((i < 10) || (i > 89) || (i % 10 === 0) || ((i+1) % 10 === 0)) {
            item.classList.add('brown');
        } else if ((i > 10) && ((Math.trunc(i/10) % 2 === 0) && (i % 2 === 0))) {
            item.classList.add('white');
        } else if ((i > 10) && ((Math.trunc(i/10) % 2 !== 0) && (i % 2 !== 0))) {
            item.classList.add('white');
        } else {
            item.classList.add('black');
        }
    });
    
};

boardBuild();
