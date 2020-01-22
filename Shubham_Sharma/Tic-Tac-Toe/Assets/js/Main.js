var options = "X";

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var btns = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

//Resets every button's text and color
function reset(){
    for(let i=0; i<9; i++){
        btns[i].innerHTML = "";
        btns[i].style.backgroundColor = "#a52a2a"
        btns[i].disabled = false;
    }
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
    
    (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) ? highLight("b1", "b2", "b3")
    : (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))) ? highLight("b1", "b4", "b7")
    : (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5 == b9))) ? highLight("b1", "b5", "b9")
    : (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))) ? highLight("b2", "b5", "b8")
    : (((b3=="X") || (b3=="O")) && ((b3 == b6) && (b6 == b9))) ? highLight("b3", "b6", "b9")
    : (((b3=="X") || (b3=="O")) && ((b3 == b5) && (b5 == b7))) ? highLight("b3", "b5", "b7")
    : (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))) ? highLight("b4", "b5", "b6")
    : (((b7=="X") || (b7=="O")) && ((b7 == b8) && (b8 == b9))) ? highLight("b7", "b8", "b9")
    : "Hy";
}

function btnDisable(){
    for(let i=0; i<9; i++){
        btns[i].disabled = true;
    }
}

//Disables the buttons, and paints the button's ORANGE, which are in WINNING pattern.
//It takes buttons id's as the three arguments and symbol=X or O as another argument, but the symbol īs currently not in use.
function highLight(cell1, cell2, cell3){
    btnDisable();
    document.getElementById(cell1).style.backgroundColor = '#FFA500';
    document.getElementById(cell2).style.backgroundColor = '#FFA500';
    document.getElementById(cell3).style.backgroundColor = '#FFA500';
}

//The button pressed will be disabled and symbol 'X' or 'O' will appear on it
function setButton(button, options){
    var btnId = "b" + button;
    var btn = document.getElementById(btnId);
    btn.innerHTML = options;
    btn.disabled = true;
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