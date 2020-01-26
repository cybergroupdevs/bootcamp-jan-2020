var options = "X"; //global declaration
//for alternate inputs
function clicker(button) {
  if (options == "X") {
    options = "O";
    setButton(button, options);
  } else {
    options = "X";
    setButton(button, options);
  }
}
//function for setting correct input to a button
function setButton(button, options) {
  var btn = document.getElementById("b" + button);
  btn.innerHTML = options;
  btn.disabled = true;
  //function call for checking combinations
  checker();
}
//function for checking any perfect combinations
function checker() {
  var b1 = document.getElementById("b1").innerHTML;
  var b2 = document.getElementById("b2").innerHTML;
  var b3 = document.getElementById("b3").innerHTML;
  var b4 = document.getElementById("b4").innerHTML;
  var b5 = document.getElementById("b5").innerHTML;
  var b6 = document.getElementById("b6").innerHTML;
  var b7 = document.getElementById("b7").innerHTML;
  var b8 = document.getElementById("b8").innerHTML;
  var b9 = document.getElementById("b9").innerHTML;
  //conditions required for winning
  if ((b1 == "X" || b1 == "O") && b1 == b2 && b2 == b3) {
    highLight("b1", "b2", "b3");
  } else if ((b1 == "X" || b1 == "O") && b1 == b4 && b4 == b7) {
    highLight("b1", "b4", "b7");
  } else if ((b1 == "X" || b1 == "O") && b1 == b5 && b5 == b9) {
    highLight("b1", "b5", "b9");
  } else if ((b2 == "X" || b2 == "O") && b2 == b5 && b5 == b8) {
    highLight("b2", "b5", "b8");
  } else if ((b3 == "X" || b3 == "O") && b3 == b6 && b6 == b9) {
    highLight("b3", "b6", "b9");
  } else if ((b3 == "X" || b3 == "O") && b3 == b5 && b5 == b7) {
    highLight("b3", "b5", "b7");
  } else if ((b4 == "X" || b4 == "O") && b4 == b5 && b5 == b6) {
    highLight("b4", "b5", "b6");
  } else if ((b7 == "X" || b7 == "O") && b7 == b8 && b8 == b9) {
    highLight("b7", "b8", "b9");
  }
}
//background color will change once any perfect combination occurs
function highLight(cell1, cell2, cell3) {
  btnDisable(); //after winning all the buttons will get disabled
  document.getElementById(cell1).style.backgroundColor = "red";
  document.getElementById(cell2).style.backgroundColor = "red";
  document.getElementById(cell3).style.backgroundColor = "red";
  //function to show the congratulations message
  setTimeout(function() {
    //using timeout function to hold the execution of alert
    alert("Congratulations!!You won!");
  }, 100);
}
//once a player wins all buttons will be disabled until he resets
function btnDisable() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).disabled = true;
  }
}
//game will start from starting with a new different background color
function reset() {
  for (let i = 1; i <= 9; i++) {
    var b = document.getElementById("b" + i);
    b.innerHTML = "#";
    b.style.backgroundColor = "#99780b";
    b.disabled = false;
  }
}
