var origBoard;
const huplayer='0';
const compplayer='X';
var win_combos=[[0,1,2]
           [3,4,5]
            [8,7,6]
              [0,3,6]
              [1,4,7]
              [2,5,8]
               [0,4,8]  
               [6,4,2]
            
            ]

const cells=tictactoe.querySelectorAll(cell);

startgame();
function startgame(){


    document.querySelector(".endgame").style.display()="none";
    origBoard=Array.from(Array(9).keys())
    console.log(origBoard);
    for(i=0;i<cell.length;i++){
        cells[i].innerText='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',turnclick,false);
    }
}

function turnClick(square) {
	turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
}
function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player)
	if (gameWon) gameOver(gameWon)
}

