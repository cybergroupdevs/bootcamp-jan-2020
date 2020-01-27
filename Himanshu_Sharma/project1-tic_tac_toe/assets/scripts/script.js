//This obj stores the state of any block 
var blocks = {};

//A simple boolean to check turn
var turn = false;

(function blocksCreation(){
    const numberOfRows = numberOfColumns = 3;
    const initialValue = 0;
    for(let row = 0; row < numberOfRows; row++){
        for(let column = 0; column < numberOfColumns; column++){
            //Creation of blocks within view
            const block = document.createElement('div');
            block.classList.add('block', `block-${row}${column}`);
            document.querySelector('.blocks_parent').appendChild(block);

            //Initializing state of each block in the global 'blocks' object 
            blocks[`block-${row}${column}`] = initialValue;
        }
    }
})();


(function setUpEventListeners(){
    this.init();

    document.querySelector('.btn--restart').addEventListener('click', init);

    document.addEventListener('click', (e)=>{
        const clickedClass = `${e.toElement.classList[1]}`;

        if(clickedClass && blocks[clickedClass] === 0){
            //Adding event listener to each block
            this.togglePlayer(); 
            this.manageTurnAndBlocksObj(clickedClass);

            //Finding the winner
            if(this.findWinner()){
                this.printWinner(this.findWinner());
                return;
            }
            //Checking for No Result in case of draw
            checkForNoResult();
        }
    });
})();

togglePlayer = () => {
    document.querySelector('.player-1').classList.toggle('current-player');
    document.querySelector('.player-2').classList.toggle('current-player');
}

manageTurnAndBlocksObj = (clickedClass) => {
    var player1 = 'X';
    var player2 = 'O';

    document.querySelector(`.${clickedClass}`).textContent = ((turn === false)? player1 : player2);
    blocks[`${clickedClass}`] = ((turn === false)? 1 : -1);
    turn = !turn;
}

checkForNoResult = () => {
    let countZeroes = 0;
    let valuesOfKeys = Object.values(blocks);
    
    for(let i = 0; i<9; i++){
        if(valuesOfKeys[i] === 0){
            countZeroes++;
        }
    }

    if(countZeroes === 0){
        this.printWinner();
    }
}

helpingForFindWinner = (otherStyles) => {
    var customStyleStringForStrikeThrough = "background-color: black; position: absolute; transition: all .2s";
    let winningPlayer = (turn === false) ? 'Player2' : 'Player1';

    document.querySelector('.strike_through').setAttribute(
    "style", `${customStyleStringForStrikeThrough}; ${otherStyles};`);

    return {
        winningPlayer
    }
}

findWinner = () => {
    switch((turn === false) ? -3 : 3){
        case blocks[`block-00`]+blocks[`block-01`]+blocks[`block-02`]: {
            return this.helpingForFindWinner(
                `top: 14%; left: 7%; height: 1rem; width: 85%; `
            ).winningPlayer;
        }
        
        case blocks[`block-10`]+blocks[`block-11`]+blocks[`block-12`]: {
            return this.helpingForFindWinner(
                `height: 1rem; width: 85%; top: 47%; left: 7%;`
            ).winningPlayer;
        }
        
        case blocks[`block-20`]+blocks[`block-21`]+blocks[`block-22`]: {
            return this.helpingForFindWinner(
                `height: 1rem; width: 85%; top: 80%; left: 7%;`
            ).winningPlayer;
        }
        
        case blocks[`block-00`]+blocks[`block-10`]+blocks[`block-20`]: {
            return this.helpingForFindWinner(
                `height: 85%; width: 1rem; top: 8%; left: 16%;`
            ).winningPlayer;
        }
        
        case blocks[`block-01`]+blocks[`block-11`]+blocks[`block-21`]: {
            return this.helpingForFindWinner(
                `height: 85%; width: 1rem; top: 8%; left: 49%;`
            ).winningPlayer;
        }
        
        case blocks[`block-02`]+blocks[`block-12`]+blocks[`block-22`]: {
            return this.helpingForFindWinner(
                `height: 85%; width: 1rem; top: 8%; left: 82%;`
            ).winningPlayer;
        }
        
        case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
            return this.helpingForFindWinner(
                `height: 108%; width: 1rem; top: -5%; left: 49%; transform: rotate(-45deg)`
            ).winningPlayer;
        }
        
        case blocks[`block-02`]+blocks[`block-11`]+blocks[`block-20`]: case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
            return this.helpingForFindWinner(
                `height: 108%; width: 1rem; top: -5%; left: 49%; transform: rotate(45deg)`
            ).winningPlayer;
        }
    }
}

manageNonClicking = () => {
        let allBlocks = document.querySelectorAll('.block');
        
        allBlocks.forEach(function(block) {
        block.style.zIndex = -1;
    });
}

printWinner = (winner) => {
    if(!winner){
        document.querySelector('.msg').textContent = `No Result!!! Press Reset to play again...`;   
    }else{
        document.querySelector('.msg').textContent = `${winner} is the winner!!! Press Reset to play again...`;
        this.manageNonClicking();
    }
}

function init(){
    turn = false;
    document.querySelector('.player-1').classList.add('current-player');
    document.querySelector('.player-2').classList.remove('current-player');

    //Resetting Value of GlobalBlocksObj
    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            document.querySelector(`.block-${row}${column}`).textContent = '';
            blocks[`block-${row}${column}`] = 0;
        }
    }

    let allBlocks = document.querySelectorAll('.block');
    
    //Manage of the ZIndex of blocks back to normal
    allBlocks.forEach(function(block) {
        block.style.zIndex = 0;
    });

    document.querySelector('.msg').textContent = ``;
}