//This obj stores the state of any block 
var blocks = {};

//A simple boolean to check turn
var turn = false;

(function blocksCreation(){
    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            //Creation of blocks within view
            const block = document.createElement('div');
            block.classList.add('block', `block-${row}${column}`);
            document.querySelector('.blocks_parent').appendChild(block);

            //Initializing state of each block in the global 'blocks' object 
            blocks[`block-${row}${column}`] = 0;
        }
    }
})();


(function setUpEventListeners(){
    var player1 = 'X';
    var player2 = 'O';

    document.querySelector('.btn--restart').addEventListener('click', init);

    document.addEventListener('click', (e)=>{
        const clickedClass = `${e.toElement.classList[1]}`;
        console.log(clickedClass);

        if(clickedClass && blocks[clickedClass] === 0){
            //Adding event listener to each block
            document.querySelector(`.${clickedClass}`).textContent = ((turn === false)? player1 : player2);
            blocks[`${clickedClass}`] = ((turn === false)? 1 : -1);
            turn = !turn;
            console.log(clickedClass);

            //Finding the winner
            if(this.findWinner()){
                this.removeListeners();
                this.printWinner(this.findWinner());
            }
        }
    });
})();

removeListeners = () => {
    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            document.querySelector(`.block-${row}${column}`).removeEventListener('click', ()=>{});
        }
    }
}

findWinner = () => {
    if(turn === false){
        switch(-3){
            case blocks[`block-00`]+blocks[`block-01`]+blocks[`block-02`]: return 'Player2';
            break;
            case blocks[`block-10`]+blocks[`block-11`]+blocks[`block-12`]: return 'Player2';
            break;
            case blocks[`block-20`]+blocks[`block-21`]+blocks[`block-22`]: return 'Player2';
            break;
            case blocks[`block-00`]+blocks[`block-10`]+blocks[`block-20`]: return 'Player2';
            break;
            case blocks[`block-01`]+blocks[`block-11`]+blocks[`block-21`]: return 'Player2';
            break;
            case blocks[`block-02`]+blocks[`block-12`]+blocks[`block-22`]: return 'Player2';
            break;
            case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: return 'Player2';
            break;
            case blocks[`block-02`]+blocks[`block-11`]+blocks[`block-20`]: return 'Player2';
            break;
        }
    }else{
        switch(3){
            case blocks[`block-00`]+blocks[`block-01`]+blocks[`block-02`]: return 'Player1';
            break;
            case blocks[`block-10`]+blocks[`block-11`]+blocks[`block-12`]: return 'Player1';
            break;
            case blocks[`block-20`]+blocks[`block-21`]+blocks[`block-22`]: return 'Player1';
            break;
            case blocks[`block-00`]+blocks[`block-10`]+blocks[`block-20`]: return 'Player1';
            break;
            case blocks[`block-01`]+blocks[`block-11`]+blocks[`block-21`]: return 'Player1';
            break;
            case blocks[`block-02`]+blocks[`block-12`]+blocks[`block-22`]: return 'Player1';
            break;
            case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: return 'Player1';
            break;
            case blocks[`block-02`]+blocks[`block-11`]+blocks[`block-20`]: return 'Player1';
            break;
        }
    }
}

printWinner = (winner) => {
    document.querySelector('.msg').textContent = `${winner} is the winner!!! Press Reset to play again...`;
    setTimeout(()=>{
        document.querySelector('.msg').textContent = ``;
    }, 3000);
}

function init(){
    turn = false;

    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            document.querySelector(`.block-${row}${column}`).textContent = '';
            blocks[`block-${row}${column}`] = 0;
        }
    }
}