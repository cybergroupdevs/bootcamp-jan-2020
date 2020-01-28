var gameSymbol = "X";

function clicker(button){
    if(gameSymbol == "X"){
        gameSymbol = "O";
        setButton(button, gameSymbol);
    }
    else if(gameSymbol == "O"){
        gameSymbol = "X";
        setButton(button, gameSymbol);
    }
}
function btnDisable(){
    for(var i=1; i<=9; i++){
        document.getElementById("btn"+i).disabled = true;
    }
}
function setButton(button, gameSymbol){
    var btn = document.getElementById("btn"+button);
    btn.innerHTML = gameSymbol;
    btn.disabled = true;
    checker();
}
function gameFinished(box1, box2, box3){
    btnDisable();
    document.getElementById(box1).style.backgroundColor = '#ff4757';
    document.getElementById(box2).style.backgroundColor = '#ff4757';
    document.getElementById(box3).style.backgroundColor = '#ff4757';
}
function checker(){
    var b1 = document.getElementById("btn1").innerHTML;
    var b2 = document.getElementById("btn2").innerHTML;
    var b3 = document.getElementById("btn3").innerHTML;
    var b4 = document.getElementById("btn4").innerHTML;
    var b5 = document.getElementById("btn5").innerHTML;
    var b6 = document.getElementById("btn6").innerHTML;
    var b7 = document.getElementById("btn7").innerHTML;
    var b8 = document.getElementById("btn8").innerHTML;
    var b9 = document.getElementById("btn9").innerHTML;
    

    if(((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))){
        gameFinished("btn1", "btn2", "btn3");
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        gameFinished("btn1", "btn4", "btn7");
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5 == b9))){
        gameFinished("btn1", "btn5", "btn9");
    }
    else if(((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        gameFinished("btn2", "btn5", "btn8");
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b6) && (b6 == b9))){
        gameFinished("btn3", "btn6", "btn9");
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b5) && (b5 == b7))){
        gameFinished("btn3", "btn5", "btn7");
    }
    else if(((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        gameFinished("btn4", "btn5", "btn6");
    }
    else if(((b7=="X") || (b7=="O")) && ((b7 == b8) && (b8 == b9))){
        gameFinished("btn7", "btn8", "btn9");
    }
}
function resetBtn(){
    for(var i=1; i<=9; i++){
            var resetButton = document.getElementById("btn"+i);
            resetButton.innerHTML = "";
            resetButton.style.backgroundColor = "#5352ed";
            resetButton.disabled = false;
    }
}