var options = "X";

function highLight(cell1, cell2, cell3, symbol){
    btnDisable();
    document.getElementById(cell1).style.backgroundColor = 'red';
    document.getElementById(cell2).style.backgroundColor = 'red';
    document.getElementById(cell3).style.backgroundColor = 'red';
}

//Resets every button's text and color
function reset(){
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");
    var b6 = document.getElementById("b6");
    var b7 = document.getElementById("b7");
    var b8 = document.getElementById("b8");
    var b9 = document.getElementById("b9");

    b1.innerHTML = "#";
    b2.innerHTML = "#";
    b3.innerHTML = "#";
    b4.innerHTML = "#";
    b5.innerHTML = "#";
    b6.innerHTML = "#";
    b7.innerHTML = "#";
    b8.innerHTML = "#";
    b9.innerHTML = "#";

    b1.style.backgroundColor = "#99780b";
    b2.style.backgroundColor = "#99780b";
    b3.style.backgroundColor = "#99780b";
    b4.style.backgroundColor = "#99780b";
    b5.style.backgroundColor = "#99780b";
    b6.style.backgroundColor = "#99780b";
    b7.style.backgroundColor = "#99780b";
    b8.style.backgroundColor = "#99780b";
    b9.style.backgroundColor = "#99780b";

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

//Checks for any WINNING pattern, and will call a method for highlighting those button's color
function checker(){
    var b1 = document.getElementById("b1").innerHTML;
    var b2 = document.getElementById("b2").innerHTML;
    var b3 = document.getElementById("b3").innerHTML;
    var b4 = document.getElementById("b4").innerHTML;
    var b5 = document.getElementById("b5").innerHTML;
    var b6 = document.getElementById("b6").innerHTML;
    var b7 = document.getElementById("b7").innerHTML;
    var b8 = document.getElementById("b8").innerHTML;
    var b9 = document.getElementById("b9").innerHTML;
    

    if(((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))){
        highLight("b1", "b2", "b3", b1);
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        highLight("b1", "b4", "b7", b1);
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5 == b9))){
        highLight("b1", "b5", "b9", b1);
    }
    else if(((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        highLight("b2", "b5", "b8", b2);
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b6) && (b6 == b9))){
        highLight("b3", "b6", "b9", b3);
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b5) && (b5 == b7))){
        highLight("b3", "b5", "b7", b3);
    }
    else if(((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        highLight("b4", "b5", "b6", b4);
    }
    else if(((b7=="X") || (b7=="O")) && ((b7 == b8) && (b8 == b9))){
        highLight("b7", "b8", "b9", b7);
    }
}


//Disables the buttons, and paints the button's ORANGE, which are in WINNING pattern.
//It takes buttons id's as the three arguments and symbol=X or O as another argument, but the symbol īs currently not in use.

//The button pressed will be disabled and symbol 'X' or 'O' will appear on it
function setButton(button, options){
    if(button == 1){
        var btn = document.getElementById("b1");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 2){
        var btn = document.getElementById("b2");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 3){
        var btn = document.getElementById("b3");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 4){
        var btn = document.getElementById("b4");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 5){
        var btn = document.getElementById("b5");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 6){
        var btn = document.getElementById("b6");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 7){
        var btn = document.getElementById("b7");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 8){
        var btn = document.getElementById("b8");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    else if(button == 9){
        var btn = document.getElementById("b9");
        btn.innerHTML = options;
        btn.disabled = true;
    }
    //Checks if a WINNING pattern is made
    checker();
}

//Checks which symbol is next going to appear, like if last symbol was X, then O will be printed next 
function clicker(button){
    if(options == "X"){
        options = "O";
        setButton(button, options);
    }
    else if(options == "O"){
        options = "X";
        setButton(button, options);
    }
}

function btnDisable(){
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}