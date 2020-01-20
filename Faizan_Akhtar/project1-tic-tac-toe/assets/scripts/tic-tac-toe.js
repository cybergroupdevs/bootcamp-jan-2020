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
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").disabled = true;
}

function setButton(button, gameSymbol){
    if(button == 1){
        var btn = document.getElementById("btn1");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 2){
        var btn = document.getElementById("btn2");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 3){
        var btn = document.getElementById("btn3");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 4){
        var btn = document.getElementById("btn4");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 5){
        var btn = document.getElementById("btn5");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 6){
        var btn = document.getElementById("btn6");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 7){
        var btn = document.getElementById("btn7");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 8){
        var btn = document.getElementById("btn8");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    else if(button == 9){
        var btn = document.getElementById("btn9");
        btn.innerHTML = gameSymbol;
        btn.disabled = true;
    }
    checker();
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

function gameFinished(box1, box2, box3){
    btnDisable();
    document.getElementById(box1).style.backgroundColor = '#ff4757';
    document.getElementById(box2).style.backgroundColor = '#ff4757';
    document.getElementById(box3).style.backgroundColor = '#ff4757';
    alert("Game Finished");
}

function resetBtn(){
    var b1 = document.getElementById("btn1");
    var b2 = document.getElementById("btn2");
    var b3 = document.getElementById("btn3");
    var b4 = document.getElementById("btn4");
    var b5 = document.getElementById("btn5");
    var b6 = document.getElementById("btn6");
    var b7 = document.getElementById("btn7");
    var b8 = document.getElementById("btn8");
    var b9 = document.getElementById("btn9");

    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";

    b1.style.backgroundColor = "#5352ed";
    b2.style.backgroundColor = "#5352ed";
    b3.style.backgroundColor = "#5352ed";
    b4.style.backgroundColor = "#5352ed";
    b5.style.backgroundColor = "#5352ed";
    b6.style.backgroundColor = "#5352ed";
    b7.style.backgroundColor = "#5352ed";
    b8.style.backgroundColor = "#5352ed";
    b9.style.backgroundColor = "#5352ed";

    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;
}
