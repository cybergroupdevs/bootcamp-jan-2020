var options = "X";
//background color will change once any perfect combination occurs
function highLight(cell1, cell2, cell3){
    btnDisable();
    document.getElementById(cell1).style.backgroundColor = 'red';
    document.getElementById(cell2).style.backgroundColor = 'red';
    document.getElementById(cell3).style.backgroundColor = 'red';
}

//game will start from starting with a new different background color
function reset(){
    for(let i=1;i<=9;i++)
    {
         var b = document.getElementById("b"+i);
         b.innerHTML = "#";
         b.style.backgroundColor = "#99780b";
         b.disabled=false;
    }
}
   


//Winning combination
function checker(){
    //storing values in variables
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
        highLight("b1", "b2", "b3");
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        highLight("b1", "b4", "b7");
    }
    else if(((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5 == b9))){
        highLight("b1", "b5", "b9");
    }
    else if(((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        highLight("b2", "b5", "b8");
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b6) && (b6 == b9))){
        highLight("b3", "b6", "b9");
    }
    else if(((b3=="X") || (b3=="O")) && ((b3 == b5) && (b5 == b7))){
        highLight("b3", "b5", "b7");
    }
    else if(((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        highLight("b4", "b5", "b6");
    }
    else if(((b7=="X") || (b7=="O")) && ((b7 == b8) && (b8 == b9))){
        highLight("b7", "b8", "b9");
    }
}


//Disables the buttons, and paints the button's ORANGE, which are in WINNING pattern.
//It takes buttons id's as the three arguments and symbol=X or O as another argument, but the symbol īs currently not in use.

//The button pressed will be disabled and symbol 'X' or 'O' will appear on it
function setButton(button, options){
    
    for(let i=1; i<=9; i++){
        if(button === i){
            var btn = document.getElementById("b"+i);
            btn.innerHTML = options;
            btn.disabled = true;
        }
    }
    checker();
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