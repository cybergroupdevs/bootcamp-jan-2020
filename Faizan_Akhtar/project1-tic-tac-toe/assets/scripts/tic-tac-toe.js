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