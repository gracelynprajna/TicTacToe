const tiles = document.querySelectorAll(".tile");

const playerx = "X";

const playero = "O";

let turn = playerx;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");

const gameOverArea = document.getElementById("game-over-area");

const gameOverText = document.getElementById("game-over-text");

const playAgain = document.getElementById("play-again");

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function tileClick(event){
    if(gameOverArea.classList.contains("visible")){
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != ""){
        return;
    }
    if (turn === playerx){
        tile.innerText = playerx;
        boardState[tileNumber - 1] = playerx;
        turn = playero;
    }
    else{
        tile.innerText = playero;
        boardState[tileNumber - 1] = playero;
        turn = playerx;
    }
}
