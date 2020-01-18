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

    document.querySelector('.player-1').classList.add('current-player');

    document.querySelector('.btn--restart').addEventListener('click', init);

    document.addEventListener('click', (e)=>{
        const clickedClass = `${e.toElement.classList[1]}`;
        console.log(clickedClass);

        if(clickedClass && blocks[clickedClass] === 0){
            //Adding event listener to each block
            document.querySelector('.player-1').classList.toggle('current-player');
            document.querySelector('.player-2').classList.toggle('current-player');
           

            document.querySelector(`.${clickedClass}`).textContent = ((turn === false)? player1 : player2);
            blocks[`${clickedClass}`] = ((turn === false)? 1 : -1);
            turn = !turn;
            console.log(clickedClass);

            //Finding the winner
            if(this.findWinner()){
                // this.removeListeners();
                this.printWinner(this.findWinner());
                return;
            }
            //Checking for No Result in case of draw
            checkForNoResult();
        }
    });
})();

checkForNoResult = () => {
    let countZeroes = 0;
    for (const property in blocks) {
        if(blocks[property] === 0){
            countZeroes++;
        }
    }
    if(countZeroes === 0){
        this.printWinner();
    }
}

// removeListeners = () => {
//     for(let row = 0; row < 3; row++){
//         for(let column = 0; column < 3; column++){
//             document.querySelector(`.block-${row}${column}`).removeEventListener('click', ()=>{});
//         }
//     }
// }

findWinner = () => {
    if(turn === false){
        switch(-3){
            case blocks[`block-00`]+blocks[`block-01`]+blocks[`block-02`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 14%; left: 7%; transition: all 2s");
                return 'Player2';
            }
            
            case blocks[`block-10`]+blocks[`block-11`]+blocks[`block-12`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 47%; left: 7%; transition: all 2s");
                return 'Player2';
            }
            
            case blocks[`block-20`]+blocks[`block-21`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 80%; left: 7%; transition: all 2s");
                return 'Player2';
            }
            
            case blocks[`block-00`]+blocks[`block-10`]+blocks[`block-20`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 16%; transition: all 2s");
                return 'Player2';
            }
            
            case blocks[`block-01`]+blocks[`block-11`]+blocks[`block-21`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 49%; transition: all 2s");
                return 'Player2';
            }
            
            case blocks[`block-02`]+blocks[`block-12`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 82%; transition: all 2s");
                return 'Player2';
            }

            // background-color: black;
            // height: 108%;
            // width: 1rem;
            // position: absolute;
            // top: -5%;
            // left: 49%;
            // transition: all 2s;
            // transform: rotate(45deg);
            case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 108%; width: 1rem; position: absolute; top: -5%; left: 49%; transition: all 2s; transform: rotate(-45deg)");
                return 'Player2';
            }
            
            case blocks[`block-02`]+blocks[`block-11`]+blocks[`block-20`]: case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 108%; width: 1rem; position: absolute; top: -5%; left: 49%; transition: all 2s; transform: rotate(45deg)");
                return 'Player2';
            }
            
        }
    }else if(turn === true){
        switch(3){
            case blocks[`block-00`]+blocks[`block-01`]+blocks[`block-02`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 14%; left: 7%; transition: all 2s");
                return 'Player1';
            }
            
            case blocks[`block-10`]+blocks[`block-11`]+blocks[`block-12`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 47%; left: 7%; transition: all 2s");
                return 'Player1';
            }
            
            case blocks[`block-20`]+blocks[`block-21`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 1rem; width: 85%; position: absolute; top: 80%; left: 7%; transition: all 2s");
                return 'Player1';
            }

            case blocks[`block-00`]+blocks[`block-10`]+blocks[`block-20`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 16%; transition: all 2s");
                return 'Player1';
            }
            
            case blocks[`block-01`]+blocks[`block-11`]+blocks[`block-21`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 49%; transition: all 2s");
                return 'Player1';
            }
            
            case blocks[`block-02`]+blocks[`block-12`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 85%; width: 1rem; position: absolute; top: 8%; left: 82%; transition: all 2s");
                return 'Player1';
            }
            
            case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 108%; width: 1rem; position: absolute; top: -5%; left: 49%; transition: all 2s; transform: rotate(-45deg)");
                return 'Player1';
            }
            
            case blocks[`block-02`]+blocks[`block-11`]+blocks[`block-20`]: case blocks[`block-00`]+blocks[`block-11`]+blocks[`block-22`]: {
                document.querySelector('.strike_through').setAttribute(
                    "style", "background-color: black; height: 108%; width: 1rem; position: absolute; top: -5%; left: 49%; transition: all 2s; transform: rotate(45deg)");
                return 'Player1';
            }    
        }
    }
}

printWinner = (winner) => {
    if(!winner){
        document.querySelector('.msg').textContent = `No Result!!! Press Reset to play again...`;   
    }else{
        document.querySelector('.msg').textContent = `${winner} is the winner!!! Press Reset to play again...`;
    }
    
    let allBlocks = document.querySelectorAll('.block');
    
    allBlocks.forEach(function(block) {
        block.style.zIndex = -1;
    });
    // setTimeout(()=>{
    //     document.querySelector('.msg').textContent = ``;
    // }, 3000);
}

function init(){
    turn = false;

    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            document.querySelector(`.block-${row}${column}`).textContent = '';
            blocks[`block-${row}${column}`] = 0;
        }
    }

    let allBlocks = document.querySelectorAll('.block');
    
    allBlocks.forEach(function(block) {
        block.style.zIndex = 0;
    });

    document.querySelector('.msg').textContent = ``;
}